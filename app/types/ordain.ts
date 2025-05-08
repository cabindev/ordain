// types/ordain.ts

export type RegionalData = {
  name: string;
  value: number;
  percentage?: number;
};

export type OrdainData = {
  projectName: string;
  projectSubtitle?: string;
  timestamp?: number;
  implementationArea?: {
    count: string;
    unit: string;
  };
  policyExpansionArea?: {
    count: string;
    unit: string;
  };
  regionalData?: RegionalData[];
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
  summary?: {
    implementationArea: number;
    policyExpansionArea: number;
    modelMonks: number;
    alcoholReductionTotal: number;
    totalSavings: number;
    policy: number;
  };
  debug?: {
    fetchTime?: string;
    rawDataSample?: any;
  };
};