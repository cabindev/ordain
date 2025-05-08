import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* ส่วนหัว */}
      <div className="mb-16 text-center">
        <div className="relative inline-block">
          <Image 
            src="/ordain.png" 
            width={120} 
            height={120} 
            alt="มูลนิธิสังฆะเพื่อสังคม"
            className="mx-auto mb-6"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-brown-primary">
          โครงการ<span className="gold-gradient">บวชสร้างสุข</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          ขับเคลื่อนโยบายสาธารณะงานบวชสร้างสุขสู่สุขภาวะชุมชนและสังคมด้วยหลักพุทธธรรม
        </p>
      </div>

      {/* ข้อมูลโครงการ */}
      <div className="bg-white rounded-xl shadow-xl p-8 mb-12">
        <div className="flex flex-col md:flex-row gap-6 mb-10">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-brown-primary mb-6">รายละเอียดโครงการ</h2>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="bg-gold-primary rounded-full p-2 text-white h-8 w-8 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-brown-dark">ชื่อโครงการ</h3>
                  <p>ขับเคลื่อนโยบายสาธารณะงานบวชสร้างสุขสู่สุขภาวะชุมชนและสังคมด้วยหลักพุทธธรรม</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="bg-gold-primary rounded-full p-2 text-white h-8 w-8 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-brown-dark">หน่วยงานที่รับทุน</h3>
                  <p>มูลนิธิสังฆะเพื่อสังคม</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="bg-gold-primary rounded-full p-2 text-white h-8 w-8 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-brown-dark">ผู้รับผิดชอบโครงการ</h3>
                  <p>นายชัยณรงค์ คำแดง</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="relative h-full">
              <div className="absolute -top-24 -left-12 text-9xl text-gray-100 opacity-30 font-serif pointer-events-none">
                "
              </div>
              <div className="relative z-10 h-full flex flex-col">
                <p className="italic text-gray-600 flex-grow">
                  โครงการบวชสร้างสุขมุ่งเน้นการสืบสานประเพณีบวชที่สอดคล้องกับพระธรรมวินัยและวัฒนธรรมท้องถิ่น โดยลดการบริโภคเครื่องดื่มแอลกอฮอล์ในงานบุญ และสร้างผลลัพธ์ที่ดีต่อสุขภาวะชุมชนและสังคมอย่างยั่งยืน
                </p>
                <div className="mt-6 text-right">
                  <span className="text-orange-primary font-semibold">— มูลนิธิสังฆะเพื่อสังคม</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* วัตถุประสงค์ */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-brown-primary">
          <span className="gold-gradient">วัตถุประสงค์</span>ของโครงการ
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow p-6 transform transition-transform hover:scale-105">
            <div className="bg-gold-light rounded-full w-14 h-14 flex items-center justify-center mb-4 text-brown-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-brown-primary">พัฒนากลไกเครือข่าย</h3>
            <p className="text-gray-600">
              เพื่อพัฒนากลไกเครือข่ายพระสงฆ์นักพัฒนาสังฆะเพื่อสังคมในการขยายแนวคิด พื้นที่ พระสงฆ์นักประสานงาน นักสื่อสาร ผู้นำการเปลี่ยนแปลง ขับเคลื่อนบวชสร้างสุขในวงกว้าง
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow p-6 transform transition-transform hover:scale-105">
            <div className="bg-gold-light rounded-full w-14 h-14 flex items-center justify-center mb-4 text-brown-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-brown-primary">สร้างกระบวนการมีส่วนร่วม</h3>
            <p className="text-gray-600">
              เพื่อสนับสนุนให้เกิดกระบวนการมีส่วนร่วม แลกเปลี่ยนขยายพื้นที่รูปธรรมระดับภาค และพัฒนานโยบายสาธารณะงานบวชสร้างสุขต้นแบบที่สอดคล้องวัฒนธรรมท้องถิ่น
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow p-6 transform transition-transform hover:scale-105">
            <div className="bg-gold-light rounded-full w-14 h-14 flex items-center justify-center mb-4 text-brown-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-brown-primary">พัฒนาศักยภาพการสื่อสาร</h3>
            <p className="text-gray-600">
              เพื่อพัฒนาศักยภาพพระนักสื่อสาร รูปแบบการสื่อสาร ช่องทางการสื่อสารสาธารณะในวงกว้างและข้อความที่สอดคล้องกับสถานการณ์ และท้องถิ่น
            </p>
          </div>
        </div>
      </div>
      
      {/* ร่วมสนับสนุนโครงการ */}
      <div className="mt-16 text-center mb-16">
        <h2 className="text-2xl font-bold mb-6 text-brown-primary">ร่วมสนับสนุนโครงการบวชสร้างสุข</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-8">
          การสนับสนุนของท่านจะช่วยขับเคลื่อนให้เกิดการเปลี่ยนแปลงทางสังคมที่ดีขึ้น 
          สร้างความตระหนักในการอนุรักษ์ประเพณีอันดีงาม และส่งเสริมสุขภาวะที่ดีของชุมชน
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-gold-primary hover:bg-gold-dark text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg">
            สนับสนุนโครงการ
          </button>
          <Link href="/contact" className="bg-orange-primary hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg">
            ติดต่อเรา
          </Link>
        </div>
      </div>
    </div>
  );
}