// app/ordain/page.tsx
import { redirect } from 'next/navigation';

export default function OrdainPage() {
  // ทำการ redirect ไปยัง /ordain/stats โดยอัตโนมัติ
  redirect('/ordain/stats');
}