// app/components/OrdainChart.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import { EmptyData } from './ui/loading';
import * as echarts from 'echarts/core';
import {
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  GridComponent
} from 'echarts/components';
import { PieChart, BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

// Register necessary components
echarts.use([
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  GridComponent,
  PieChart,
  BarChart,
  CanvasRenderer
]);

type RegionalData = {
  name: string;
  value: number;
  percentage?: number;
};

type ChartProps = {
  data: RegionalData[];
};

// กำหนดสีที่สวยงามตาม root variables
const COLORS = [
  'var(--gold-primary)', 'var(--gold-dark)', 'var(--brown-primary)', 'var(--brown-dark)',
  'var(--orange-light)', 'var(--orange-primary)', 'var(--gold-light)', '#73c0de'
];

export function RegionalPieChart({ data }: ChartProps) {
  const chartRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!data || data.length === 0 || !chartRef.current) return;
    
    // สร้าง instance ของ ECharts
    const chart = echarts.init(chartRef.current);
    
    // กำหนดตัวเลือกการแสดงผล
    const option = {
      title: {
        text: 'สัดส่วนรายภูมิภาค',
        textStyle: {
          fontFamily: 'Kanit, sans-serif',
          fontSize: 18,
          fontWeight: 'bold'
        },
        left: 'center',
        top: 10
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
        textStyle: {
          fontFamily: 'Kanit, sans-serif'
        }
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        top: 'middle',
        textStyle: {
          fontFamily: 'Kanit, sans-serif',
          fontSize: 12
        }
      },
      series: [
        {
          name: 'จำนวนพื้นที่',
          type: 'pie',
          radius: ['35%', '70%'],
          center: ['60%', '50%'],
          avoidLabelOverlap: true,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: true,
            formatter: '{b}: {d}%',
            fontFamily: 'Kanit, sans-serif'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '18',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: true
          },
          data: data.map((item, index) => ({
            name: item.name,
            value: item.value,
            itemStyle: {
              color: COLORS[index % COLORS.length]
            }
          }))
        }
      ]
    };
    
    // แสดงกราฟ
    chart.setOption(option);
    
    // Resize observer สำหรับการทำให้กราฟ responsive
    const resizeObserver = new ResizeObserver(() => {
      chart.resize();
    });
    
    resizeObserver.observe(chartRef.current);
    
    return () => {
      resizeObserver.disconnect();
      chart.dispose();
    };
  }, [data]);
  
  if (!data || data.length === 0) {
    return <EmptyData title="ไม่พบข้อมูลภูมิภาค" message="ไม่สามารถแสดงข้อมูลสัดส่วนรายภูมิภาค" />;
  }

  return (
    <div className="bg-gradient-to-br from-[var(--gold-light)] to-[var(--gold-primary)] bg-opacity-10 rounded-lg shadow-lg overflow-hidden mb-10">
      <div className="px-6 py-4 border-b border-[var(--gold-primary)] border-opacity-30">
        <h3 className="text-xl font-semibold text-[var(--brown-primary)]">สัดส่วนรายภูมิภาค</h3>
      </div>
      <div className="px-6 py-4">
        <div className="h-80" ref={chartRef}></div>
      </div>
      <div className="px-6 py-4 bg-[var(--gold-light)] bg-opacity-20 text-sm text-[var(--brown-primary)] text-center border-t border-[var(--gold-primary)] border-opacity-30">
        ข้อมูลการกระจายตัวของพื้นที่โครงการบวชสร้างสุขตามภูมิภาค
      </div>
    </div>
  );
}

type AlcoholReductionData = {
  total: string;
  templeEvents: string;
  communityEvents: string;
};

export function AlcoholReductionBarChart({ data }: { data?: AlcoholReductionData }) {
  const chartRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!data || !chartRef.current) return;
    
    // แปลงข้อมูลสำหรับกราฟแท่ง
    const chartData = [
      { name: 'งานบวชทั้งหมด', value: parseInt(data.total) || 0 },
      { name: 'งานบวชในวัด', value: parseInt(data.templeEvents) || 0 },
      { name: 'งานบวชในชุมชน', value: parseInt(data.communityEvents) || 0 },
    ];
    
    // สร้าง instance ของ ECharts
    const chart = echarts.init(chartRef.current);
    
    // กำหนดตัวเลือกการแสดงผล
    const option = {
      title: {
        text: 'การลดการบริโภคเครื่องดื่มแอลกอฮอล์',
        textStyle: {
          fontFamily: 'Kanit, sans-serif',
          fontSize: 18,
          fontWeight: 'bold'
        },
        left: 'center',
        top: 10
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        formatter: function(params: any) {
          const data = params[0];
          return `${data.name}: ${new Intl.NumberFormat('th-TH').format(data.value)} งาน`;
        },
        textStyle: {
          fontFamily: 'Kanit, sans-serif'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '8%',
        top: '25%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: chartData.map(item => item.name),
        axisLabel: {
          fontFamily: 'Kanit, sans-serif',
          fontSize: 12,
          interval: 0,
          rotate: 0
        }
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: function(value: number) {
            return new Intl.NumberFormat('th-TH').format(value);
          },
          fontFamily: 'Kanit, sans-serif'
        }
      },
      series: [
        {
          name: 'จำนวนงาน',
          type: 'bar',
          barWidth: '60%',
          data: chartData.map((item, index) => ({
            value: item.value,
            itemStyle: {
              color: COLORS[index % COLORS.length]
            }
          })),
          label: {
            show: true,
            position: 'top',
            formatter: function(params: any) {
              return new Intl.NumberFormat('th-TH').format(params.value);
            },
            fontFamily: 'Kanit, sans-serif'
          },
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          },
          itemStyle: {
            borderRadius: [5, 5, 0, 0]
          }
        }
      ]
    };
    
    // แสดงกราฟ
    chart.setOption(option);
    
    // Resize observer สำหรับการทำให้กราฟ responsive
    const resizeObserver = new ResizeObserver(() => {
      chart.resize();
    });
    
    resizeObserver.observe(chartRef.current);
    
    return () => {
      resizeObserver.disconnect();
      chart.dispose();
    };
  }, [data]);
  
  if (!data) {
    return <EmptyData title="ไม่พบข้อมูลการลดการบริโภค" message="ไม่สามารถแสดงข้อมูลการลดการบริโภคเครื่องดื่มแอลกอฮอล์" />;
  }

  return (
    <div className="bg-gradient-to-br from-[var(--orange-light)] to-[var(--orange-primary)] bg-opacity-10 rounded-lg shadow-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-[var(--orange-primary)] border-opacity-30">
        <h3 className="text-xl font-semibold text-[var(--brown-primary)]">การลดการบริโภคเครื่องดื่มแอลกอฮอล์</h3>
      </div>
      <div className="px-6 py-4">
        <div className="h-72" ref={chartRef}></div>
      </div>
      <div className="px-6 py-4 bg-[var(--orange-light)] bg-opacity-20 flex justify-between border-t border-[var(--orange-primary)] border-opacity-30">
        <span className="text-sm text-[var(--brown-primary)]">งานบวชทั้งหมด: {new Intl.NumberFormat('th-TH').format(parseInt(data.total) || 0)} งาน</span>
        <span className="text-sm text-[var(--brown-primary)]">งานบวชในวัด: {new Intl.NumberFormat('th-TH').format(parseInt(data.templeEvents) || 0)} งาน</span>
      </div>
    </div>
  );
}