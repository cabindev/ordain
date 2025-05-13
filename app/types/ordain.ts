// types/ordain.ts

export type RegionalData = {
  name: string;
  value: number;
  percentage?: number;
};

export type ProvinceData = {
  name: string;
  value: number;
  percentage?: number;
};

export type OrdainData = {
  projectName: string;
  projectSubtitle?: string;
  timestamp: number;
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
  implementationProvinceCount?: string; // เพิ่ม field นี้เพื่อเก็บจำนวนจังหวัดที่ดำเนินการ
  regionalData?: RegionalData[];
  provinceData?: ProvinceData[];
  debug?: any;
};