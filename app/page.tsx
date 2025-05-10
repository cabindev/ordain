import Link from 'next/link';
import Image from 'next/image';


export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Hero Background - Gradient instead of image */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[var(--brown-dark)] via-[var(--brown-primary)] to-[var(--gold-dark)]"></div>
        <div className="absolute inset-0 z-0 opacity-30 diagonal-pattern"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            โครงการ<span className="gold-gradient"> บวชสร้างสุข</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-10">
            ขับเคลื่อนโยบายสาธารณะงานบวชสร้างสุขสู่สุขภาวะชุมชนและสังคมด้วยหลักพุทธธรรม
            ลดการบริโภคเครื่องดื่มแอลกอฮอล์ในพิธีกรรมทางศาสนา
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/ordain/stats" 
              className="bg-gradient-to-r from-[var(--gold-primary)] to-[var(--gold-dark)] hover:from-[var(--gold-dark)] hover:to-[var(--gold-primary)] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg"
              aria-label="ดูสถิติโครงการ"
            >
              ดูสถิติโครงการ
            </Link>
            <Link 
              href="/ordain/about" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 font-bold py-3 px-8 rounded-lg transition-colors"
              aria-label="เรียนรู้เพิ่มเติมเกี่ยวกับโครงการ"
            >
              เรียนรู้เพิ่มเติม
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 bg-gradient-to-b from-white to-[var(--gold-light)]/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--brown-primary)]">
              ส่งเสริมประเพณีบวชที่<span className="gold-gradient"> สร้างสุข</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              วัฒนธรรมการบวชที่งดงามของไทย ควรปราศจากเครื่องดื่มแอลกอฮอล์ 
              เพื่อสร้างสุขภาวะที่ดีให้แก่ชุมชนและผู้เข้าร่วมพิธีกรรม
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1: Network Development */}
            <div className="gradient-bg backdrop-blur-sm border border-white/50 rounded-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[var(--gold-light)] to-[var(--gold-primary)] rounded-full flex items-center justify-center mb-4 shadow-md">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--brown-primary)] mb-2">พัฒนาเครือข่าย</h3>
              <p className="text-gray-600">
                สร้างและพัฒนาเครือข่ายพระสงฆ์นักพัฒนาและนักสื่อสาร เพื่อขับเคลื่อนงานบวชสร้างสุขในวงกว้าง
              </p>
            </div>

            {/* Feature 2: Public Policy */}
            <div className="gradient-bg backdrop-blur-sm border border-white/50 rounded-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[var(--gold-light)] to-[var(--gold-primary)] rounded-full flex items-center justify-center mb-4 shadow-md">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--brown-primary)] mb-2">นโยบายสาธารณะ</h3>
              <p className="text-gray-600">
                ผลักดันนโยบายสาธารณะงานบวชสร้างสุขต้นแบบที่สอดคล้องกับวัฒนธรรมท้องถิ่นทั่วประเทศ
              </p>
            </div>

            {/* Feature 3: Communication Development */}
            <div className="gradient-bg backdrop-blur-sm border border-white/50 rounded-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[var(--gold-light)] to-[var(--gold-primary)] rounded-full flex items-center justify-center mb-4 shadow-md">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--brown-primary)] mb-2">พัฒนาการสื่อสาร</h3>
              <p className="text-gray-600">
                พัฒนาศักยภาพพระนักสื่อสาร และช่องทางการสื่อสารที่เข้าถึงประชาชนในวงกว้าง
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/ordain/stats" 
              className="inline-flex items-center text-[var(--brown-primary)] font-medium hover:text-[var(--gold-dark)] transition-colors"
              aria-label="ดูสถิติและข้อมูลเพิ่มเติม"
            >
              ดูสถิติและข้อมูลเพิ่มเติม
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Preview Section */}
      <section className="py-16 bg-gradient-to-r from-[var(--brown-primary)] to-[var(--brown-dark)] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">ความสำเร็จของโครงการ</h2>
            <p className="max-w-2xl mx-auto text-white/80">
              ตลอดระยะเวลาการดำเนินโครงการ เราได้สร้างการเปลี่ยนแปลงอย่างเป็นรูปธรรม
              ในการส่งเสริมพิธีบวชปลอดเครื่องดื่มแอลกอฮอล์
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-[var(--gold-primary)]">500+</h3>
              <p className="text-white/80">พิธีบวชปลอดแอลกอฮอล์</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-[var(--gold-primary)]">10,000+</h3>
              <p className="text-white/80">ผู้เข้าร่วมโครงการ</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-[var(--gold-primary)]">50+</h3>
              <p className="text-white/80">ชุมชนที่เข้าร่วม</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[var(--gold-light)] to-[var(--gold-primary)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[var(--brown-dark)]">ร่วมเป็นส่วนหนึ่งในการสร้างการเปลี่ยนแปลง</h2>
          <p className="max-w-2xl mx-auto mb-10 text-[var(--brown-primary)]">
            การสนับสนุนของท่านจะช่วยส่งเสริมประเพณีบวชที่งดงาม ปราศจากเครื่องดื่มแอลกอฮอล์ และสร้างสุขภาวะที่ดีให้แก่ชุมชนและสังคม
          </p>
          <Link 
            href="/ordain/contact" 
            className="bg-[var(--brown-primary)] hover:bg-[var(--brown-dark)] text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg inline-block"
            aria-label="ติดต่อเราเพื่อเข้าร่วมโครงการ"
          >
            ติดต่อเรา
          </Link>
        </div>
      </section>
    </div>
  );
}
