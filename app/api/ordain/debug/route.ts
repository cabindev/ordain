import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // แสดงข้อมูลสภาพแวดล้อม
    const envInfo = {
      clientEmail: process.env.GOOGLE_CLIENT_EMAIL,
      privateKeyExists: !!process.env.GOOGLE_PRIVATE_KEY,
      spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
    };

    // ตั้งค่า auth
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
    
    // ทดลองดึงข้อมูลโดยไม่ระบุชื่อชีต (จะใช้ชีตแรกโดยอัตโนมัติ)
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'A1:E10', // ไม่ระบุชื่อชีต
    });

    return NextResponse.json({
      success: true,
      envInfo,
      dataFound: !!response.data.values,
      rowCount: response.data.values?.length || 0,
      sampleData: response.data.values?.slice(0, 3) || [] // แสดง 3 แถวแรก
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message,
      errorDetails: error.errors || [],
      envInfo: {
        clientEmail: process.env.GOOGLE_CLIENT_EMAIL,
        privateKeyExists: !!process.env.GOOGLE_PRIVATE_KEY,
        spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID
      }
    });
  }
}