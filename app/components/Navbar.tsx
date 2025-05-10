// app/components/Navbar.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const MENU_ITEMS = [
  { name: 'หน้าหลัก', href: '/' },
  { name: 'โครงการบวชสร้างสุข', href: '/ordain/stats' },
  { name: 'เกี่ยวกับเรา', href: '/ordain/about' },
  { name: 'ติดต่อเรา', href: '/ordain/contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // ตรวจจับการเลื่อนหน้าจอเพื่อเปลี่ยนสีพื้นหลัง Navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // ซ่อนเมนูเมื่อขนาดหน้าจอเปลี่ยนเป็นขนาดใหญ่
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo และข้อความ SDN THAILAND */}
          <a href="https://sdnthailand.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <Image 
              src="/logosdnthailand.png" 
              alt="SDN สำนักงานเครือข่ายงดเหล้า" 
              width={120} 
              height={40}
              className="h-10 w-auto"
            />
            <span className={`ml-2 font-bold text-sm md:text-lg ${
              scrolled ? 'text-[var(--brown-primary)]' : 'text-white'
            }`}>
              SDN THAILAND
            </span>
          </a>

          {/* เมนูบนจอขนาดใหญ่ */}
          <div className="hidden md:flex items-center space-x-6">
            {MENU_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors text-sm font-medium ${
                  pathname === item.href
                    ? 'text-[var(--gold-dark)] font-bold'
                    : scrolled 
                      ? 'text-gray-700 hover:text-[var(--gold-primary)]' 
                      : 'text-black hover:text-[var(--gold-light)]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* ปุ่มแฮมเบอร์เกอร์สำหรับมือถือ */}
          <button
            type="button"
            className={`md:hidden p-2 ${scrolled ? 'text-[var(--brown-primary)]' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'ปิดเมนู' : 'เปิดเมนู'}
          >
            {isMenuOpen ? (
              // ไอคอน X
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // ไอคอนแฮมเบอร์เกอร์
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* เมนูสำหรับมือถือ */}
        <div 
          className={`md:hidden fixed top-[56px] left-0 w-full bg-white transform transition-transform duration-300 ease-in-out shadow-lg ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="py-2 px-4 diagonal-pattern">
            {MENU_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block py-3 px-4 text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-[var(--gold-primary)] bg-[var(--gold-light)] bg-opacity-20 rounded'
                    : 'text-gray-700 hover:text-[var(--gold-primary)] hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-2 py-3 px-4 text-xs text-gray-500 border-t border-gray-100">
              <a href="https://sdnthailand.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[var(--gold-primary)]">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                เว็บไซต์หลัก sdnthailand.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}