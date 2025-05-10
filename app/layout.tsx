// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'โครงการบวชสร้างสุข | สำนักงานเครือข่ายงดเหล้า',
  description: 'ขับเคลื่อนโยบายสาธารณะงานบวชสร้างสุขสู่สุขภาวะชุมชนและสังคมด้วยหลักพุทธธรรม',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}