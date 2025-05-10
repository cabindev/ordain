// app/api/ordain/route.ts

import { NextResponse } from 'next/server';
import { extractSheetData } from '@/app/lib/googleSheets';

export const dynamic = 'force-dynamic'; // ป้องกันการแคชผลลัพธ์ของ API
export const revalidate = 0; // บังคับรีเฟรชข้อมูลทุกครั้งที่เรียกใช้

export async function GET(req: Request) {
  try {
    console.log('API request started:', new Date().toISOString());
    
    // ดึงข้อมูลจาก Google Sheets
    const data = await extractSheetData();
    
    console.log('Data successfully extracted');
    
    // ส่งข้อมูลกลับพร้อมตั้งค่า header เพื่อป้องกันการแคช
    return NextResponse.json(
      { data, source: 'google_sheets' },
      { 
        headers: {
          'Cache-Control': 'no-store, max-age=0, must-revalidate',
          'Expires': '0',
          'Pragma': 'no-cache'
        } 
      }
    );
  } catch (error: any) { // กำหนด type เป็น any เพื่อให้เข้าถึง properties ได้
    console.error('Error in API route:', error);
    
    // ส่งข้อมูลว่างเปล่าเมื่อเกิดข้อผิดพลาด
    return NextResponse.json(
      { 
        data: {
          projectName: "โครงการบวชสร้างสุข",
          projectSubtitle: "พื้นที่ปลอดภัยที่มีการควบคุมการดื่มเครื่องดื่มแอลกอฮอล์ในงานบุญประเพณี",
          timestamp: new Date().getTime(),
          implementationArea: {
            count: "0",
            unit: 'พื้นที่',
          },
          policyExpansionArea: {
            count: "0",
            unit: 'พื้นที่',
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
          regionalData: [],
          provinceData: [], // เพิ่มข้อมูลจังหวัด
        }, 
        source: 'error_fallback',
        error: {
          message: 'เกิดข้อผิดพลาดในการเข้าถึงข้อมูล Google Sheet',
          details: error instanceof Error ? error.message : String(error)
        }
      },
      { 
        status: 500, // เพิ่ม status code
        headers: {
          'Cache-Control': 'no-store, max-age=0, must-revalidate',
          'Expires': '0',
          'Pragma': 'no-cache'
        } 
      }
    );
  }
}