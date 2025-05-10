module.exports = {

"[project]/.next-internal/server/app/api/ordain/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/googleapis [external] (googleapis, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("googleapis", () => require("googleapis"));

module.exports = mod;
}}),
"[project]/app/lib/googleSheets.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// lib/googleSheets.ts
__turbopack_context__.s({
    "extractNumber": (()=>extractNumber),
    "extractSheetData": (()=>extractSheetData),
    "testGoogleSheetsConnection": (()=>testGoogleSheetsConnection)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$googleapis__$5b$external$5d$__$28$googleapis$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/googleapis [external] (googleapis, cjs)");
;
const extractNumber = (value)=>{
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
async function extractSheetData() {
    try {
        console.log('Start extracting sheet data:', new Date().toISOString());
        // ตั้งค่า auth credentials
        const auth = new __TURBOPACK__imported__module__$5b$externals$5d2f$googleapis__$5b$external$5d$__$28$googleapis$2c$__cjs$29$__["google"].auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
            },
            scopes: [
                'https://www.googleapis.com/auth/spreadsheets.readonly'
            ]
        });
        const sheets = __TURBOPACK__imported__module__$5b$externals$5d2f$googleapis__$5b$external$5d$__$28$googleapis$2c$__cjs$29$__["google"].sheets({
            version: 'v4',
            auth
        });
        const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
        console.log('Fetching data from sheet:', spreadsheetId);
        // ดึงข้อมูลจากชีต API Data (เพิ่มขอบเขตเพื่อรองรับข้อมูลจังหวัดเพิ่มเติม)
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range: 'API Data!A1:C150',
            valueRenderOption: 'UNFORMATTED_VALUE',
            dateTimeRenderOption: 'FORMATTED_STRING'
        });
        const values = response.data.values || [];
        console.log('Fetched data rows:', values.length);
        if (values.length === 0) {
            throw new Error('No data found in API Data sheet');
        }
        // แปลงข้อมูลเป็น key-value object
        const dataMap = {};
        const regionalData = [];
        const provinceData = [];
        // ตัวแปรสำหรับติดตามส่วนของข้อมูล
        let isRegionSection = false;
        let isProvinceImpSection = false;
        let isProvinceModelSection = false;
        // วนลูปผ่านข้อมูลที่ได้รับ
        for (const row of values){
            if (!row[0]) continue; // ข้ามแถวที่ไม่มีข้อมูลในคอลัมน์ A
            const key = String(row[0]).trim();
            // ตรวจสอบส่วนของข้อมูล
            if (key === 'region') {
                isRegionSection = true;
                isProvinceImpSection = false;
                isProvinceModelSection = false;
                console.log('Entering region section');
                continue;
            } else if (key === 'province_imp') {
                isRegionSection = false;
                isProvinceImpSection = true;
                isProvinceModelSection = false;
                console.log('Entering province implementation section');
                continue;
            } else if (key === 'province_model') {
                isRegionSection = false;
                isProvinceImpSection = false;
                isProvinceModelSection = true;
                console.log('Entering province model section');
                continue;
            } else if (key === 'end_data' || key.includes('end_') || key === '') {
                isRegionSection = false;
                isProvinceImpSection = false;
                isProvinceModelSection = false;
                console.log('Exiting data section');
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
                    percentage: percentage
                });
            } else if (isProvinceImpSection) {
                // เก็บข้อมูลจังหวัด
                const value = extractNumber(row[1]);
                const percentage = row.length > 2 ? extractNumber(row[2]) : 0;
                provinceData.push({
                    name: `province_imp:${key}`,
                    value: value,
                    percentage: percentage
                });
            } else if (isProvinceModelSection) {
                // เก็บข้อมูลจังหวัด
                const value = extractNumber(row[1]);
                const percentage = row.length > 2 ? extractNumber(row[2]) : 0;
                provinceData.push({
                    name: `province_model:${key}`,
                    value: value,
                    percentage: percentage
                });
            } else {
                // เก็บข้อมูลทั่วไป
                dataMap[key] = row[1];
            }
        }
        console.log('Data mapped:', Object.keys(dataMap).length);
        console.log('Regional data:', regionalData.length);
        console.log('Province data:', provinceData.length);
        // แสดงตัวอย่างข้อมูลจังหวัด
        if (provinceData.length > 0) {
            console.log('Sample province data:', provinceData.slice(0, 3));
        }
        // สร้าง OrdainData จาก dataMap
        const data = {
            projectName: String(dataMap['projectName'] || "โครงการบวชสร้างสุข"),
            projectSubtitle: String(dataMap['projectSubtitle'] || "พื้นที่ปลอดภัยที่มีการควบคุมการดื่มเครื่องดื่มแอลกอฮอล์ในงานบุญประเพณี"),
            timestamp: new Date().getTime(),
            implementationArea: {
                count: String(dataMap['implementationArea'] || "0"),
                unit: 'พื้นที่'
            },
            policyExpansionArea: {
                count: String(dataMap['policyArea'] || "0"),
                unit: 'พื้นที่'
            },
            alcoholReduction: {
                total: String(dataMap['alcoholReduction'] || "0"),
                templeEvents: String(dataMap['templeEvents'] || "0"),
                communityEvents: String(dataMap['communityEvents'] || "0")
            },
            modelMonks: {
                count: String(dataMap['modelMonks'] || "0"),
                unit: "รูป"
            },
            savings: {
                alcoholSavings: String(dataMap['alcoholSavings'] || "0"),
                expensePerMonk: String(dataMap['expensePerMonk'] || "0")
            },
            policy: {
                count: String(dataMap['policy'] || "0"),
                unit: "พื้นที่"
            },
            regionalData: regionalData.length > 0 ? regionalData : undefined,
            provinceData: provinceData.length > 0 ? provinceData : undefined,
            debug: {
                timestamp: new Date().toISOString(),
                rowsProcessed: values.length,
                regionCount: regionalData.length,
                provinceCount: provinceData.length
            }
        };
        console.log('Data successfully processed');
        return data;
    } catch (error) {
        console.error('Error extracting sheet data:', error);
        // ส่งคืนข้อมูลว่างเปล่าแทนที่จะใช้ข้อมูลตัวอย่าง
        return {
            projectName: "โครงการบวชสร้างสุข",
            projectSubtitle: "พื้นที่ปลอดภัยที่มีการควบคุมการดื่มเครื่องดื่มแอลกอฮอล์ในงานบุญประเพณี",
            timestamp: new Date().getTime(),
            implementationArea: {
                count: "0",
                unit: 'พื้นที่'
            },
            policyExpansionArea: {
                count: "0",
                unit: 'พื้นที่'
            },
            alcoholReduction: {
                total: "0",
                templeEvents: "0",
                communityEvents: "0"
            },
            modelMonks: {
                count: "0",
                unit: "รูป"
            },
            savings: {
                alcoholSavings: "0",
                expensePerMonk: "0"
            },
            policy: {
                count: "0",
                unit: "พื้นที่"
            },
            regionalData: [],
            provinceData: [],
            debug: {
                error: error instanceof Error ? error.message : String(error),
                timestamp: new Date().toISOString()
            }
        };
    }
}
async function testGoogleSheetsConnection() {
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
        const auth = new __TURBOPACK__imported__module__$5b$externals$5d2f$googleapis__$5b$external$5d$__$28$googleapis$2c$__cjs$29$__["google"].auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
            },
            scopes: [
                'https://www.googleapis.com/auth/spreadsheets.readonly'
            ]
        });
        const sheets = __TURBOPACK__imported__module__$5b$externals$5d2f$googleapis__$5b$external$5d$__$28$googleapis$2c$__cjs$29$__["google"].sheets({
            version: 'v4',
            auth
        });
        const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
        // ทดสอบดึงข้อมูลจากชีต API Data
        const testResponse = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range: 'API Data!A1:C5'
        });
        // ตรวจสอบผลลัพธ์
        if (!testResponse.data.values || testResponse.data.values.length === 0) {
            return {
                success: false,
                message: 'เชื่อมต่อสำเร็จแต่ไม่พบข้อมูลในช่วงที่ระบุ',
                timestamp: new Date().toISOString(),
                details: {
                    responseStatus: testResponse.status
                }
            };
        }
        // ดึงชื่อชีตทั้งหมด
        const sheetsInfo = await sheets.spreadsheets.get({
            spreadsheetId
        });
        const sheetNames = sheetsInfo.data.sheets?.map((sheet)=>sheet.properties?.title) || [];
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
    } catch (error) {
        console.error('Error testing connection:', error);
        return {
            success: false,
            message: `เกิดข้อผิดพลาดในการเชื่อมต่อกับ Google Sheets: ${error.message}`,
            timestamp: new Date().toISOString(),
            details: {
                error: error.message
            }
        };
    }
}
}}),
"[project]/app/api/ordain/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// app/api/ordain/route.ts
__turbopack_context__.s({
    "GET": (()=>GET),
    "dynamic": (()=>dynamic),
    "revalidate": (()=>revalidate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$googleSheets$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/googleSheets.ts [app-route] (ecmascript)");
;
;
const dynamic = 'force-dynamic'; // ป้องกันการแคชผลลัพธ์ของ API
const revalidate = 0; // บังคับรีเฟรชข้อมูลทุกครั้งที่เรียกใช้
async function GET(req) {
    try {
        console.log('API request started:', new Date().toISOString());
        // ดึงข้อมูลจาก Google Sheets
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$googleSheets$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["extractSheetData"])();
        console.log('Data successfully extracted');
        // ส่งข้อมูลกลับพร้อมตั้งค่า header เพื่อป้องกันการแคช
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            data,
            source: 'google_sheets'
        }, {
            headers: {
                'Cache-Control': 'no-store, max-age=0, must-revalidate',
                'Expires': '0',
                'Pragma': 'no-cache'
            }
        });
    } catch (error) {
        console.error('Error in API route:', error);
        // ส่งข้อมูลว่างเปล่าเมื่อเกิดข้อผิดพลาด
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            data: {
                projectName: "โครงการบวชสร้างสุข",
                projectSubtitle: "พื้นที่ปลอดภัยที่มีการควบคุมการดื่มเครื่องดื่มแอลกอฮอล์ในงานบุญประเพณี",
                timestamp: new Date().getTime(),
                implementationArea: {
                    count: "0",
                    unit: 'พื้นที่'
                },
                policyExpansionArea: {
                    count: "0",
                    unit: 'พื้นที่'
                },
                alcoholReduction: {
                    total: "0",
                    templeEvents: "0",
                    communityEvents: "0"
                },
                modelMonks: {
                    count: "0",
                    unit: "รูป"
                },
                savings: {
                    alcoholSavings: "0",
                    expensePerMonk: "0"
                },
                policy: {
                    count: "0",
                    unit: "พื้นที่"
                },
                regionalData: [],
                provinceData: []
            },
            source: 'error_fallback',
            error: {
                message: 'เกิดข้อผิดพลาดในการเข้าถึงข้อมูล Google Sheet',
                details: error instanceof Error ? error.message : String(error)
            }
        }, {
            headers: {
                'Cache-Control': 'no-store, max-age=0, must-revalidate',
                'Expires': '0',
                'Pragma': 'no-cache'
            }
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__b1e93639._.js.map