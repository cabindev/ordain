import { FaWarehouse } from 'react-icons/fa';
import Image from 'next/image';

export default function ContactPage() {
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
          <span className="gold-gradient">ติดต่อ</span>เรา
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          โครงการบวชสร้างสุข มูลนิธิสังฆะเพื่อสังคม
        </p>
      </div>
      
      {/* ติดต่อเรา */}
      <div className="bg-white rounded-xl shadow-xl p-8 mb-12">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4 text-brown-primary">มูลนิธิสังฆะเพื่อสังคม</h3>
            <p className="mb-4 text-gray-600">
              เราขับเคลื่อนโครงการที่สร้างประโยชน์ต่อสังคมด้วยหลักพุทธธรรม หากท่านสนใจเข้าร่วมหรือสนับสนุนโครงการ สามารถติดต่อเราได้ตามช่องทางด้านล่าง
            </p>
            
            <div className="space-y-3 mt-6">
              <div className="flex items-center gap-3">
                <div className="bg-gold-light rounded-full p-2 w-8 h-8 flex items-center justify-center text-brown-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-600">36 ซอยโพธิ์แก้ว 3 แยก 13 ถ.โพธิ์แก้ว แขวงคลองจั่น เขตบางกะปิ กทม. 10240</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-gold-light rounded-full p-2 w-8 h-8 flex items-center justify-center text-brown-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-600">รองผู้อำนวยการชัยณรงค์ คำแดง 081-208-1899</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-gold-light rounded-full p-2 w-8 h-8 flex items-center justify-center text-brown-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-600">example@example.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-gray-900">
                <FaWarehouse className="text-orange-500" />
                <h2 className="text-xl font-medium">คลังสื่อ</h2>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden shadow-sm border border-gray-200">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  src="https://maps.google.com/maps?q=SDN.Warehouse%2C%20Pho%20Kaeo%203%20Alley%2C%20Lane%2013%2C%20Khlong%20Chan%2C%20Bang%20Kapi%20District%2C%20Bangkok%2010240&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
                  aria-label="SDN.Warehouse"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      

    </div>
  );
}