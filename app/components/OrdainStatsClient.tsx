// app/components/OrdainStatsClient.tsx
'use client';

import dynamic from 'next/dynamic';
import Loading from './ui/loading';

// ใช้ dynamic import ใน Client Component
const OrdainStats = dynamic(
  () => import('./OrdainStats'),
  { 
    loading: () => <Loading size="large" message="กำลังโหลดข้อมูลโครงการบวชสร้างสุข กรุณารอสักครู่..." />
  }
);

export default function OrdainStatsClient({ hideTitle = false }: { hideTitle?: boolean }) {
  return <OrdainStats hideTitle={hideTitle} />;
}