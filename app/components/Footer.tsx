'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [currentYear] = useState(() => new Date().getFullYear());
  
  return (
    <footer className="bg-gradient-to-b from-[var(--brown-dark)] to-black text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-6 md:mb-0">
            {/* Logo */}
            <a href="https://sdnthailand.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block mb-4"
            >
              <div className="text-xl font-bold text-[var(--gold-primary)]">
                SDN สำนักงานเครือข่ายงดเหล้า
              </div>
            </a>
            <p className="max-w-md text-gray-300">
              สำนักงานเครือข่ายองค์กรงดเหล้า ทำงานขับเคลื่อนนโยบายสาธารณะเพื่อลดปัญหาจากเครื่องดื่มแอลกอฮอล์
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">ลิงก์ด่วน</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                    หน้าหลัก
                  </Link>
                </li>
                <li>
                  <Link href="/ordain/stats" className="text-gray-300 hover:text-white transition-colors">
                    สถิติโครงการ
                  </Link>
                </li>
                <li>
                  <Link href="/ordain/about" className="text-gray-300 hover:text-white transition-colors">
                    เกี่ยวกับเรา
                  </Link>
                </li>
                <li>
                  <Link href="/ordain/contact" className="text-gray-300 hover:text-white transition-colors">
                    ติดต่อเรา
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">ติดต่อเรา</h3>
              <address className="not-italic">
                <p className="text-gray-300 mb-1">36 ซอยโพธิ์แก้ว 3 แยก 13 ถ.โพธิ์แก้ว</p>
                <p className="text-gray-300 mb-1">แขวงคลองจั่น เขตบางกะปิ กทม. 10240</p>
                <p className="text-gray-300 mb-1">
                  <span className="inline-block w-5 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </span>
                  081-208-1899
                </p>
                <p className="text-gray-300">
                  <span className="inline-block w-5 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </span>
                  <a href="mailto:contact@sdnthailand.com" className="hover:text-white transition-colors">
                    contact@sdnthailand.com
                  </a>
                </p>
              </address>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} สำนักงานเครือข่ายองค์กรงดเหล้า. สงวนลิขสิทธิ์</p>
          <div className="mt-2 text-sm">
            <a href="https://sdnthailand.com/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
              นโยบายความเป็นส่วนตัว
            </a>
            <span className="mx-2">|</span>
            <a href="https://sdnthailand.com/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
              ข้อกำหนดการใช้งาน
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}