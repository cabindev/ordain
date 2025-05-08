// app/ordain/stats/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import OrdainStatsClient from '@/app/components/OrdainStatsClient';
import { FaChartBar, FaArrowLeft, FaMapMarkerAlt, FaPrayingHands, FaWineBottle } from 'react-icons/fa';

export const metadata = {
  title: 'โครงการบวชสร้างสุข | สถิติและข้อมูล',
  description: 'ข้อมูลสถิติและผลการดำเนินงานโครงการบวชสร้างสุข พื้นที่ปลอดภัย ที่มีการควบคุมการดื่มเครื่องดื่มแอลกอฮอล์ในงานบุญประเพณี',
};

export default function OrdainStatsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--gold-light)] to-white pt-24 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section - ปรับให้คล้ายกับเว็บไซต์ต้นแบบ */}
        <div className="relative overflow-hidden rounded-xl shadow-xl mb-12 bg-[var(--brown-primary)]">
          <div className="absolute inset-0 opacity-10 diagonal-pattern"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8">
            <div className="md:w-2/3 mb-8 md:mb-0 text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-[var(--gold-primary)]">โครงการบวชสร้างสุข</span>
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-6 max-w-2xl">
                ข้อมูลสถิติและผลการดำเนินงานโครงการที่สร้างพื้นที่ปลอดภัย ควบคุมการดื่มเครื่องดื่มแอลกอฮอล์ในงานบุญประเพณี
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/" 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-[var(--brown-primary)] bg-white hover:bg-[var(--gold-light)] transition-colors duration-300 shadow-md"
                >
                  <FaArrowLeft className="mr-2" /> กลับสู่หน้าหลัก
                </Link>
                <span className="inline-flex items-center px-4 py-2 bg-[var(--gold-primary)] bg-opacity-20 text-white text-base font-medium rounded-md">
                  <FaChartBar className="mr-2" /> แสดงผลข้อมูลปี 2567
                </span>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <div className="relative w-48 h-48 md:w-60 md:h-60 p-4 rounded-full">
                <Image 
                  src="/ordain.png" 
                  alt="โลโก้โครงการบวชสร้างสุข"
                  width={240}
                  height={240}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* ส่วนแสดงข้อมูลสถิติตัวเลขสรุป - ตามต้นแบบ */}
        <div className="bg-[#FFF9E3] rounded-xl shadow-lg overflow-hidden mb-12 border border-[var(--gold-light)]">
          <h2 className="text-xl font-bold text-[var(--brown-primary)] px-6 py-3 flex items-center border-b border-[var(--gold-light)]">
            <span className="inline-block w-1 h-6 bg-[var(--gold-primary)] mr-3 rounded-sm"></span>
            ภาพรวมการดำเนินงาน
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-x divide-[var(--gold-light)]">
            <div className="p-6 text-center relative">
              <div className="absolute top-4 right-4 h-8 w-8 flex items-center justify-center bg-[var(--gold-primary)] bg-opacity-25 text-[var(--gold-primary)] rounded-full">
                <FaMapMarkerAlt />
              </div>
              <div className="mb-2 text-[var(--brown-primary)] font-medium">พื้นที่ดำเนินการ</div>
              <div className="text-4xl font-bold text-[var(--gold-primary)]">170<span className="text-xl">+</span></div>
              <div className="text-sm text-gray-600 mt-1">พื้นที่ทั่วประเทศ</div>
            </div>
            
            <div className="p-6 text-center relative">
              <div className="absolute top-4 right-4 h-8 w-8 flex items-center justify-center bg-[var(--orange-primary)] bg-opacity-25 text-[var(--orange-primary)] rounded-full">
                <FaPrayingHands />
              </div>
              <div className="mb-2 text-[var(--brown-primary)] font-medium">พระต้นแบบ</div>
              <div className="text-4xl font-bold text-[var(--orange-primary)]">450<span className="text-xl">+</span></div>
              <div className="text-sm text-gray-600 mt-1">รูป</div>
            </div>
            
            <div className="p-6 text-center relative">
              <div className="absolute top-4 right-4 h-8 w-8 flex items-center justify-center bg-[var(--brown-primary)] bg-opacity-25 text-[var(--brown-primary)] rounded-full">
                <FaWineBottle />
              </div>
              <div className="mb-2 text-[var(--brown-primary)] font-medium">งานบวชปลอดเหล้า</div>
              <div className="text-4xl font-bold text-[var(--brown-dark)]">350<span className="text-xl">+</span></div>
              <div className="text-sm text-gray-600 mt-1">งาน</div>
            </div>
          </div>
        </div>

        {/* ส่วนแสดงรายละเอียดกราฟ - ลดความซ้ำซ้อน */}
        <div className="mt-8 relative">
          {/* ใช้ OrdainStatsClient แต่ไม่ต้องมีหัวข้อโครงการซ้ำอีก - กำจัดความซ้ำซ้อน */}
          <OrdainStatsClient hideTitle={true} />
        </div>
        
        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-[var(--gold-light)] text-center">
          <p className="text-sm text-gray-600">
            ข้อมูลปรับปรุงล่าสุด: พฤษภาคม 2567
          </p>
          <div className="mt-4 flex justify-center">
            <Link href="https://sdnthailand.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--brown-primary)] hover:text-[var(--gold-primary)] transition-colors duration-300">
              สำนักงานเครือข่ายงดเหล้า
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}