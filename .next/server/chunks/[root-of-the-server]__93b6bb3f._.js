module.exports = {

"[project]/.next-internal/server/app/api/ordain/test/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

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
    "extractSheetData": (()=>extractSheetData)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$googleapis__$5b$external$5d$__$28$googleapis$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/googleapis [external] (googleapis, cjs)");
;
const extractNumber = (value)=>{
    if (value === undefined || value === null) return 0;
    // ถ้าเป็นตัวเลขอยู่แล้ว
    if (typeof value === 'number') return value;
    // ถ้าเป็น string ให้แปลงเป็นตัวเลข
    const cleanValue = value.toString().replace(/,/g, '').trim();
    const parsed = parseFloat(cleanValue);
    return isNaN(parsed) ? 0 : parsed;
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
        const spreadsheetId = ("TURBOPACK compile-time value", "1irWdri3mJdCnpmxtLjvqsq00JN769tLVGr7wbuDlqL4");
        // ระบุชีต "Data reports" อย่างเฉพาะเจาะจง
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range: 'Data reports!A1:Z100',
            valueRenderOption: 'UNFORMATTED_VALUE',
            dateTimeRenderOption: 'FORMATTED_STRING'
        });
        const rawData = response.data.values;
        if (!rawData || rawData.length === 0) {
            throw new Error('ไม่พบข้อมูลในชีต Data reports');
        }
        console.log(`Data fetched from "Data reports" sheet: rows=${rawData.length}`);
        // หาข้อมูลในแผ่นงาน "Data reports"
        // ตัวอย่าง: ค้นหาข้อมูลจากแถวหรือคอลัมน์ที่มีป้ายกำกับเฉพาะ
        let implementationAreaCount = 0;
        let policyExpansionAreaCount = 0;
        let alcoholReductionTotal = 0;
        let modelMonksCount = 0;
        let alcoholSavings = 0;
        let expensePerMonk = 0;
        let policyCount = 0;
        // ค้นหาแถวที่มีข้อมูลสำคัญโดยการวนลูปและตรวจสอบค่าในคอลัมน์แรก
        for(let i = 0; i < rawData.length; i++){
            const row = rawData[i];
            if (!row || row.length === 0) continue;
            const label = String(row[0]).toLowerCase();
            // ตรวจสอบป้ายกำกับและดึงข้อมูลจากคอลัมน์ที่เหมาะสม
            if (label.includes('พื้นที่ดำเนินการโครงการ')) {
                implementationAreaCount = extractNumber(row[1]);
            } else if (label.includes('พื้นที่ขยายผลระดับนโยบาย')) {
                policyExpansionAreaCount = extractNumber(row[1]);
            } else if (label.includes('งานบวชที่ลดการบริโภคแอลกอฮอล์')) {
                alcoholReductionTotal = extractNumber(row[1]);
            } else if (label.includes('พระต้นแบบ')) {
                modelMonksCount = extractNumber(row[1]);
            } else if (label.includes('ประหยัดค่าเหล้าเบียร์')) {
                alcoholSavings = extractNumber(row[1]);
            } else if (label.includes('ประหยัดค่าใช้จ่ายต่อการบวชพระ')) {
                expensePerMonk = extractNumber(row[1]);
            } else if (label.includes('นโยบาย') || label.includes('กติกา')) {
                policyCount = extractNumber(row[1]);
            }
        }
        // พิมพ์ค่าที่ดึงได้เพื่อตรวจสอบ
        console.log({
            implementationAreaCount,
            policyExpansionAreaCount,
            alcoholReductionTotal,
            modelMonksCount,
            alcoholSavings,
            expensePerMonk,
            policyCount
        });
        // สร้างข้อมูลภูมิภาค - ต้องหาจากแผ่นงานเช่นกัน
        const regionalData = [
            {
                name: "เหนือบน",
                value: 17,
                percentage: 10.0
            },
            {
                name: "เหนือล่าง",
                value: 20,
                percentage: 11.8
            },
            {
                name: "อีสานบน",
                value: 35,
                percentage: 20.6
            },
            {
                name: "อีสานล่าง",
                value: 24,
                percentage: 14.1
            },
            {
                name: "ตะวันออก",
                value: 19,
                percentage: 11.2
            },
            {
                name: "กลาง/ปริมณฑล",
                value: 17,
                percentage: 10.0
            },
            {
                name: "ใต้บน",
                value: 18,
                percentage: 10.6
            },
            {
                name: "ใต้ล่าง",
                value: 20,
                percentage: 11.8
            }
        ];
        // สร้างข้อมูลโดยรวมเพื่อส่งกลับ
        const data = {
            projectName: "โครงการบวชสร้างสุข",
            projectSubtitle: "พื้นที่ปลอดภัย ที่มีการควบคุมการดื่มเครื่องดื่มแอลกอฮอล์ในงานบุญประเพณี",
            timestamp: new Date().getTime(),
            implementationArea: {
                count: implementationAreaCount.toString(),
                unit: 'พื้นที่'
            },
            policyExpansionArea: {
                count: policyExpansionAreaCount.toString(),
                unit: 'พื้นที่'
            },
            regionalData: regionalData,
            alcoholReduction: {
                total: alcoholReductionTotal.toString(),
                templeEvents: "220",
                communityEvents: "130"
            },
            modelMonks: {
                count: modelMonksCount.toString(),
                unit: "รูป"
            },
            savings: {
                alcoholSavings: alcoholSavings.toString(),
                expensePerMonk: expensePerMonk.toString()
            },
            policy: {
                count: policyCount.toString(),
                unit: "พื้นที่"
            },
            debug: {
                fetchTime: new Date().toISOString(),
                sheetName: "Data reports"
            }
        };
        return data;
    } catch (error) {
        console.error('Error extracting sheet data:', error);
        throw error;
    }
}
}}),
"[project]/app/api/ordain/test/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// app/api/ordain/test/route.ts
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
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$googleSheets$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["testGoogleSheetsConnection"])();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(result, {
            headers: {
                'Cache-Control': 'no-store, max-age=0, must-revalidate',
                'Expires': '0',
                'Pragma': 'no-cache'
            }
        });
    } catch (error) {
        console.error('API test error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: 'เกิดข้อผิดพลาดในการทดสอบการเชื่อมต่อ',
            error: error.message
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__93b6bb3f._.js.map