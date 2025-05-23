// lib/googleSheets.ts

import { google } from 'googleapis';
import { OrdainData, RegionalData, ProvinceData } from '../types/ordain';

/**
 * ฟังก์ชันสำหรับแปลงค่าให้เป็นตัวเลข
 */
export const extractNumber = (value: any): number => {
  try {
    if (value === undefined || value === null) return 0;
    
    // ถ้าเป็นตัวเลขอยู่แล้ว
    if (typeof value === 'number') return value;
    
    // ถ้าเป็น string ให้แปลงเป็นตัวเลข
    const cleanValue = String(value).replace(/,/g, '').trim();
    const parsed = parseFloat(cleanValue);
    return isNaN(parsed) ? 0 : parsed;
  } catch (error) {
    console.error('Error extracting number:', error);
    return 0;
  }
};

/**
 * ฟังก์ชันสำหรับดึงข้อมูลจาก Google Sheets
 */
export async function extractSheetData(): Promise<OrdainData> {
  try {
    console.log("Start extracting sheet data:", new Date().toISOString());

    // ตั้งค่า auth credentials
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;

    console.log("Fetching data from sheet:", spreadsheetId);

    // ดึงข้อมูลจากชีต API Data (เพิ่มขอบเขตเพื่อรองรับข้อมูลจังหวัดเพิ่มเติม)
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "API Data!A1:C150", // ขยายขอบเขตเพื่อรองรับข้อมูลจังหวัดมากขึ้น
      valueRenderOption: "UNFORMATTED_VALUE",
      dateTimeRenderOption: "FORMATTED_STRING",
    });

    const values = response.data.values || [];
    console.log("Fetched data rows:", values.length);

    if (values.length === 0) {
      throw new Error("No data found in API Data sheet");
    }

    // แปลงข้อมูลเป็น key-value object
    const dataMap: Record<string, any> = {};
    const regionalData: RegionalData[] = [];
    const provinceData: ProvinceData[] = [];

    // ตัวแปรสำหรับติดตามส่วนของข้อมูล
    let isRegionSection = false;
    let isProvinceImpSection = false;
    let isProvinceModelSection = false;

    // วนลูปผ่านข้อมูลที่ได้รับ
    for (const row of values) {
      if (!row[0]) continue; // ข้ามแถวที่ไม่มีข้อมูลในคอลัมน์ A

      const key = String(row[0]).trim();

      // ตรวจสอบส่วนของข้อมูล
      if (key === "region") {
        isRegionSection = true;
        isProvinceImpSection = false;
        isProvinceModelSection = false;
        console.log("Entering region section");
        continue;
      } else if (key === "province_imp") {
        isRegionSection = false;
        isProvinceImpSection = true;
        isProvinceModelSection = false;
        console.log("Entering province implementation section");
        continue;
      } else if (key === "province_model") {
        isRegionSection = false;
        isProvinceImpSection = false;
        isProvinceModelSection = true;
        console.log("Entering province model section");
        continue;
      } else if (key === "end_data" || key.includes("end_") || key === "") {
        isRegionSection = false;
        isProvinceImpSection = false;
        isProvinceModelSection = false;
        console.log("Exiting data section");
        continue;
      }

      // ถ้ากำลังอยู่ในส่วนของข้อมูลภูมิภาค
      if (isRegionSection) {
        // เก็บข้อมูลภูมิภาค
        const value = extractNumber(row[1]);
        const percentage = row.length > 2 ? extractNumber(row[2]) : 0;

        regionalData.push({
          name: key,
          value: value,
          percentage: percentage,
        });
      }
      // ถ้ากำลังอยู่ในส่วนของข้อมูลจังหวัดพื้นที่ดำเนินการ
      else if (isProvinceImpSection) {
        // เก็บข้อมูลจังหวัด
        const value = extractNumber(row[1]);
        const percentage = row.length > 2 ? extractNumber(row[2]) : 0;

        provinceData.push({
          name: `province_imp:${key}`, // เพิ่ม prefix เพื่อให้สามารถแยกแยะข้อมูลได้
          value: value,
          percentage: percentage,
        });
      }
      // ถ้ากำลังอยู่ในส่วนของข้อมูลจังหวัดงานบวชสร้างสุขต้นแบบ
      else if (isProvinceModelSection) {
        // เก็บข้อมูลจังหวัด
        const value = extractNumber(row[1]);
        const percentage = row.length > 2 ? extractNumber(row[2]) : 0;

        provinceData.push({
          name: `province_model:${key}`, // เพิ่ม prefix เพื่อให้สามารถแยกแยะข้อมูลได้
          value: value,
          percentage: percentage,
        });
      }
      // ถ้าไม่อยู่ในส่วนของข้อมูลเฉพาะ
      else {
        // เก็บข้อมูลทั่วไป
        dataMap[key] = row[1];
      }
    }

    console.log("Data mapped:", Object.keys(dataMap).length);
    console.log("Regional data:", regionalData.length);
    console.log("Province data:", provinceData.length);

    // แสดงตัวอย่างข้อมูลจังหวัด
    if (provinceData.length > 0) {
      console.log("Sample province data:", provinceData.slice(0, 3));
    }

    // สร้าง OrdainData จาก dataMap
    const data: OrdainData = {
      projectName: String(dataMap["projectName"] || "โครงการบวชสร้างสุข"),
      projectSubtitle: String(
        dataMap["projectSubtitle"] ||
          "พื้นที่ปลอดภัยที่มีการควบคุมการดื่มเครื่องดื่มแอลกอฮอล์ในงานบุญประเพณี"
      ),
      timestamp: new Date().getTime(),
      implementationArea: {
        count: String(dataMap["implementationArea"] || "0"),
        unit: "พื้นที่",
      },
      policyExpansionArea: {
        count: String(dataMap["policyArea"] || "0"),
        unit: "พื้นที่",
      },
      alcoholReduction: {
        total: String(dataMap["alcoholReduction"] || "0"),
        templeEvents: String(dataMap["templeEvents"] || "0"),
        communityEvents: String(dataMap["communityEvents"] || "0"),
      },
      modelMonks: {
        count: String(dataMap["modelMonks"] || "0"),
        unit: "รูป",
      },
      savings: {
        alcoholSavings: String(dataMap["alcoholSavings"] || "0"),
        expensePerMonk: String(dataMap["expensePerMonk"] || "0"),
      },
      policy: {
        count: String(dataMap["policy"] || "0"),
        unit: "พื้นที่",
      },
   implementationProvinceCount: String(dataMap['implementationProvinceCount'] || "0"),
      regionalData: regionalData.length > 0 ? regionalData : undefined,
      provinceData: provinceData.length > 0 ? provinceData : undefined,
      debug: {
        timestamp: new Date().toISOString(),
        rowsProcessed: values.length,
        regionCount: regionalData.length,
        provinceCount: provinceData.length,
      },
    };

    console.log("Data successfully processed");
    return data;
  } catch (error) {
    console.error("Error extracting sheet data:", error);

    // ส่งคืนข้อมูลว่างเปล่าแทนที่จะใช้ข้อมูลตัวอย่าง
    return {
      projectName: "โครงการบวชสร้างสุข",
      projectSubtitle:
        "พื้นที่ปลอดภัยที่มีการควบคุมการดื่มเครื่องดื่มแอลกอฮอล์ในงานบุญประเพณี",
      timestamp: new Date().getTime(),
      implementationArea: {
        count: "0",
        unit: "พื้นที่",
      },
      policyExpansionArea: {
        count: "0",
        unit: "พื้นที่",
      },
      alcoholReduction: {
        total: "0",
        templeEvents: "0",
        communityEvents: "0",
      },
      modelMonks: {
        count: "0",
        unit: "รูป",
      },
      savings: {
        alcoholSavings: "0",
        expensePerMonk: "0",
      },
      policy: {
        count: "0",
        unit: "พื้นที่",
      },
      implementationProvinceCount: "0", // เพิ่มค่าเริ่มต้น
      regionalData: [],
      provinceData: [],
      debug: {
        error: error instanceof Error ? error.message : String(error),
        timestamp: new Date().toISOString(),
      },
    };
  }
}

/**
 * ฟังก์ชันสำหรับตรวจสอบการเชื่อมต่อกับ Google Sheets
 */
export async function testGoogleSheetsConnection() {
  try {
    console.log('Testing connection to Google Sheets...');
    
    // ตรวจสอบว่ามี credentials ที่จำเป็นหรือไม่
    if (!process.env.GOOGLE_CLIENT_EMAIL) {
      return {
        success: false,
        message: 'GOOGLE_CLIENT_EMAIL ไม่ได้ถูกกำหนดในตัวแปรสภาพแวดล้อม',
        timestamp: new Date().toISOString()
      };
    }
    
    if (!process.env.GOOGLE_PRIVATE_KEY) {
      return {
        success: false,
        message: 'GOOGLE_PRIVATE_KEY ไม่ได้ถูกกำหนดในตัวแปรสภาพแวดล้อม',
        timestamp: new Date().toISOString()
      };
    }
    
    if (!process.env.GOOGLE_SPREADSHEET_ID) {
      return {
        success: false,
        message: 'GOOGLE_SPREADSHEET_ID ไม่ได้ถูกกำหนดในตัวแปรสภาพแวดล้อม',
        timestamp: new Date().toISOString()
      };
    }
    
    // ตั้งค่า auth credentials
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
    
    // ทดสอบดึงข้อมูลจากชีต API Data
    const testResponse = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'API Data!A1:C5',
    });
    
    // ตรวจสอบผลลัพธ์
    if (!testResponse.data.values || testResponse.data.values.length === 0) {
      return {
        success: false,
        message: 'เชื่อมต่อสำเร็จแต่ไม่พบข้อมูลในช่วงที่ระบุ',
        timestamp: new Date().toISOString(),
        details: { responseStatus: testResponse.status }
      };
    }
    
    // ดึงชื่อชีตทั้งหมด
    const sheetsInfo = await sheets.spreadsheets.get({
      spreadsheetId
    });
    
    const sheetNames = sheetsInfo.data.sheets?.map(sheet => sheet.properties?.title) || [];
    
    return {
      success: true,
      message: 'เชื่อมต่อกับ Google Sheets สำเร็จ',
      timestamp: new Date().toISOString(),
      details: { 
        sampleData: testResponse.data.values,
        responseStatus: testResponse.status,
        availableSheets: sheetNames
      }
    };
  } catch (error: any) { // กำหนดประเภทของ error เป็น any
    console.error('Error testing connection:', error);
    return {
      success: false,
      message: `เกิดข้อผิดพลาดในการเชื่อมต่อกับ Google Sheets: ${error.message}`,
      timestamp: new Date().toISOString(),
      details: { error: error.message }
    };
  }
}