// app/components/OrdainStats.tsx
'use client';

import { useEffect, useState } from 'react';
import Loading, { ErrorDisplay, EmptyData } from './ui/loading';
import { 
  RegionalPieChart, 
  AlcoholReductionBarChart, 
  SavingsBarChart,
  AreaImplementationChart 
} from '@/app/ordain/components/ordainChart';
import { 
  FaTrophy, 
  FaMapMarkerAlt, 
  FaPrayingHands, 
  FaWineBottle, 
  FaRegMoneyBillAlt, 
  FaFileSignature, 
  FaCheckCircle 
} from 'react-icons/fa';

// กำหนด type สำหรับข้อมูล
type RegionalData = {
  name: string;
  value: number;
  percentage?: number;
};

type OrdainData = {
  projectName: string;
  projectSubtitle?: string;
  implementationArea?: {
    count: string;
    unit: string;
  };
  policyExpansionArea?: {
    count: string;
    unit: string;
  };
  alcoholReduction?: { 
    total: string;
    templeEvents: string; 
    communityEvents: string 
  };
  modelMonks?: { 
    count: string; 
    unit: string 
  };
  savings?: { 
    alcoholSavings: string; 
    expensePerMonk: string 
  };
  policy?: { 
    count: string; 
    unit: string 
  };
  regionalData?: RegionalData[];
  debug?: any;
};

// สร้าง Card สำหรับแสดงข้อมูลสถิติ
const StatCard = ({ 
  icon, 
  title, 
  value, 
  unit, 
  description, 
  bgClass,
  iconClass 
}: { 
  icon: React.ReactNode, 
  title: string, 
  value: string, 
  unit?: string,
  description?: string,
  bgClass: string,
  iconClass: string
}) => (
  <div className={`${bgClass} rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
    <div className="flex p-5">
      <div className={`flex items-center justify-center h-14 w-14 rounded-lg ${iconClass} text-white`}>
        {icon}
      </div>
      <div className="ml-4 flex-1">
        <h3 className="text-lg font-semibold text-[var(--brown-primary)] truncate">{title}</h3>
        <div className="flex items-end">
          <span className="text-3xl font-bold text-[var(--brown-dark)]">{value}</span>
          {unit && <span className="ml-1 text-sm text-gray-600 mb-1">{unit}</span>}
        </div>
        {description && (
          <p className="mt-1 text-xs text-gray-600">{description}</p>
        )}
      </div>
    </div>
  </div>
);

// สร้าง Card สำหรับแสดงข้อมูลผลสำเร็จ
const SuccessItem = ({ 
  title, 
  value, 
  unit 
}: { 
  title: string, 
  value: string, 
  unit: string 
}) => (
  <li className="flex items-start">
    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-[var(--gold-primary)] flex items-center justify-center text-white text-xs mt-0.5">
      <FaCheckCircle />
    </span>
    <span className="ml-3 text-[var(--brown-primary)]">
      {title}{" "}
      <span className="font-semibold text-[var(--gold-dark)]">
        {value}
      </span>{" "}
      {unit}
    </span>
  </li>
);

export default function OrdainStats({ hideTitle = false }: { hideTitle?: boolean }) {
  const [data, setData] = useState<OrdainData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        // เพิ่ม timestamp เพื่อป้องกันการแคชข้อมูล
        const timestamp = new Date().getTime();
        const response = await fetch(`/api/ordain?t=${timestamp}`, {
          cache: 'no-store',
          headers: {
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache'
          }
        });
        
        const result = await response.json();
        
        console.log(`Data fetched at ${new Date().toISOString()}:`, result);
        
        if (response.ok && result.data) {
          setData(result.data);
        } else {
          console.error('API Error:', result);
          setError(result.error?.message || 'เกิดข้อผิดพลาดในการดึงข้อมูล');
        }
      } catch (err) {
        console.error('Fetch Error:', err);
        setError('เกิดข้อผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์');
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, []);

  // แสดงสถานะ Loading
  if (loading) {
    return <Loading size="large" />;
  }

  // แสดงข้อผิดพลาด
  if (error) {
    return (
      <ErrorDisplay
        message="ไม่สามารถโหลดข้อมูลได้"
        details={error}
        size="large"
      />
    );
  }

  // แสดงเมื่อไม่พบข้อมูล
  if (!data) {
    return (
      <EmptyData
        title="ไม่พบข้อมูล"
        message="ขออภัย ระบบไม่พบข้อมูลโครงการบวชสร้างสุข"
      />
    );
  }

  // ฟังก์ชันสำหรับแปลงตัวเลขให้เป็นรูปแบบที่อ่านง่าย
  const formatNumber = (num?: string) => {
    if (!num) return "0";
    return new Intl.NumberFormat("th-TH").format(parseInt(num));
  };

  // คำนวณการประหยัดค่าใช้จ่ายรวม
  const getTotalSavings = () => {
    if (!data.savings) return "0";
    return formatNumber(
      (
        parseInt(data.savings.alcoholSavings || "0") +
        parseInt(data.savings.expensePerMonk || "0")
      ).toString()
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* หัวข้อและคำอธิบายโครงการ - แสดงเฉพาะเมื่อไม่ได้กำหนด hideTitle = true */}
      {!hideTitle && (
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <span className="gold-gradient bg-clip-text text-transparent">{data.projectName}</span>
          </h1>
          {data.projectSubtitle && (
            <p className="text-xl text-[var(--brown-primary)] max-w-3xl mx-auto">
              {data.projectSubtitle}
            </p>
          )}
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-[var(--gold-light)] to-[var(--gold-primary)] mx-auto rounded-full"></div>
        </div>
      )}

      {/* แผนภูมิและการแสดงผลละเอียด */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* ข้อมูลการลดการบริโภคเครื่องดื่มแอลกอฮอล์ */}
        {data.alcoholReduction && (
          <AlcoholReductionBarChart data={data.alcoholReduction} />
        )}
        
        {/* ข้อมูลสัดส่วนรายภูมิภาค */}
        {data.regionalData && (
          <RegionalPieChart data={data.regionalData} />
        )}
      </div>

      {/* พื้นที่ดำเนินการและการประหยัด */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* พื้นที่ดำเนินการ */}
        {data.implementationArea && data.policyExpansionArea && (
          <AreaImplementationChart data={data} />
        )}

        {/* กราฟการประหยัด */}
        {data.savings && (
          <SavingsBarChart data={data.savings} />
        )}
      </div>

      {/* ข้อมูลเพิ่มเติม */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* พระต้นแบบและนโยบาย */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-[var(--orange-light)] border-opacity-30">
          <div className="px-6 py-4 border-b border-[var(--orange-light)] bg-gradient-to-r from-[var(--orange-light)] to-white bg-opacity-50">
            <h3 className="text-xl font-semibold text-[var(--brown-primary)] flex items-center">
              <FaPrayingHands className="mr-2 text-[var(--orange-primary)]" /> พระต้นแบบและนโยบาย
            </h3>
          </div>
          <div className="px-6 py-6">
            {data.modelMonks ? (
              <div className="bg-[var(--gray-light)] rounded-lg p-6 mb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-[var(--gold-primary)] flex items-center justify-center text-white">
                    <FaPrayingHands size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-[var(--brown-primary)]">
                      จำนวนพระต้นแบบที่ผ่านกระบวนการบวชสร้างสุข
                    </h4>
                    <div className="mt-2 flex items-baseline">
                      <span className="text-3xl font-bold text-[var(--gold-dark)]">
                        {formatNumber(data.modelMonks.count)}
                      </span>
                      <span className="ml-2 text-gray-600">
                        {data.modelMonks.unit || "รูป"}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-gray-600">
                      พระต้นแบบที่ยึดพระธรรมวินัย ประหยัด เรียบง่าย
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <EmptyData title="ไม่พบข้อมูลพระต้นแบบ" size="small" />
            )}

            {data.policy ? (
              <div className="bg-[var(--gray-light)] rounded-lg p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-[var(--orange-primary)] flex items-center justify-center text-white">
                    <FaFileSignature size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-[var(--brown-primary)]">
                      นโยบาย/กติกา/สภาพแวดล้อม
                    </h4>
                    <div className="mt-2 flex items-baseline">
                      <span className="text-3xl font-bold text-[var(--orange-primary)]">
                        {formatNumber(data.policy.count)}
                      </span>
                      <span className="ml-2 text-gray-600">
                        {data.policy.unit || "พื้นที่"}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-gray-600">
                      ที่เอื้อต่อการปรับเปลี่ยนค่านิยมการจัดงานบวช
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <EmptyData title="ไม่พบข้อมูลนโยบาย" size="small" />
            )}
          </div>
          <div className="px-6 py-4 text-sm text-[var(--brown-primary)] border-t border-[var(--orange-light)] border-opacity-30 bg-[var(--orange-light)] bg-opacity-10">
            นโยบายและสภาพแวดล้อมที่เอื้อต่อการปรับเปลี่ยนค่านิยมการจัดงานบวช
          </div>
        </div>

        {/* สรุปโครงการ */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-[var(--gold-primary)] diagonal-pattern">
          <div className="px-6 py-4 border-b border-[var(--gold-primary)] bg-[var(--gold-primary)] bg-opacity-20">
            <h3 className="text-xl font-semibold text-[var(--brown-dark)] flex items-center">
              <FaTrophy className="mr-2 text-[var(--gold-primary)]" /> สรุปผลสำเร็จของโครงการ
            </h3>
          </div>
          <div className="px-6 py-6 bg-white">
            <div className="rounded-lg p-6 border border-[var(--gold-light)] border-opacity-50">
              <h4 className="text-lg font-medium text-[var(--brown-primary)] mb-6 gold-gradient inline-block">
                รูปธรรมความสำเร็จ
              </h4>
              <ul className="space-y-4">
                {data.implementationArea && (
                  <SuccessItem 
                    title="พื้นที่ดำเนินการโครงการบวชสร้างสุข"
                    value={formatNumber(data.implementationArea.count)}
                    unit="พื้นที่"
                  />
                )}
                {data.policyExpansionArea && (
                  <SuccessItem 
                    title="พื้นที่ขยายผลระดับนโยบาย"
                    value={formatNumber(data.policyExpansionArea.count)}
                    unit="พื้นที่"
                  />
                )}
                {data.modelMonks && (
                  <SuccessItem 
                    title="พระต้นแบบที่ผ่านกระบวนการบวชสร้างสุข"
                    value={formatNumber(data.modelMonks.count)}
                    unit="รูป"
                  />
                )}
                {data.alcoholReduction && (
                  <SuccessItem 
                    title="ลดการบริโภคเครื่องดื่มแอลกอฮอล์ในงานบวช"
                    value={formatNumber(data.alcoholReduction.total)}
                    unit="งาน"
                  />
                )}
                {data.savings && (
                  <SuccessItem 
                    title="ประหยัดค่าใช้จ่ายรวม"
                    value={getTotalSavings()}
                    unit="บาท"
                  />
                )}
                {data.policy && (
                  <SuccessItem 
                    title="นโยบาย/กติกา/สภาพแวดล้อมที่เอื้อต่อการปรับเปลี่ยนค่านิยม"
                    value={formatNumber(data.policy.count)}
                    unit="พื้นที่"
                  />
                )}
                {data.regionalData && data.regionalData.length > 0 && (
                  <SuccessItem 
                    title="พื้นที่ดำเนินการใน"
                    value={data.regionalData.length.toString()}
                    unit="ภูมิภาคทั่วประเทศ"
                  />
                )}
              </ul>
            </div>
          </div>
          <div className="px-6 py-4 bg-[var(--gold-primary)] bg-opacity-10 text-center font-medium text-[var(--brown-primary)] border-t border-[var(--gold-primary)]">
            <span className="font-semibold gold-gradient inline-block">งานบวชสร้างสุขต้นแบบ</span> "ยึดพระธรรมวินัย ประหยัด เรียบง่าย" <br className="sm:hidden" />
            <span className="text-sm">(ปลอดเหล้า ปลอดปัจจัยเสี่ยง ลดผลกระทบความรุนแรง)</span>
          </div>
        </div>
      </div>
      
      {/* แถบคั่นด้านล่าง */}
      <div className="w-full h-1 bg-gradient-to-r from-[var(--gold-light)] to-[var(--gold-primary)] rounded-full mt-8 mb-2 opacity-50"></div>
    </div>
  );
}