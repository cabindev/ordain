// app/ordain/components/ordainChart/AreaImplementationChart.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { EmptyData } from '@/app/components/ui/loading';
import * as echarts from 'echarts/core';
import {
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  GridComponent
} from 'echarts/components';
import { PieChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

// Register necessary components
echarts.use([
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  GridComponent,
  PieChart,
  CanvasRenderer
]);

type ImplementationData = {
  implementationArea?: {
    count: string;
    unit: string;
  };
  policyExpansionArea?: {
    count: string;
    unit: string;
  };
};

export function AreaImplementationChart({ data }: { data: ImplementationData }) {
  const chartRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!chartRef.current || !data.implementationArea || !data.policyExpansionArea) return;
    
    // แปลงข้อมูลสำหรับกราฟวงกลม
    const chartData = [
      { value: parseInt(data.implementationArea.count) || 0, name: 'พื้นที่ดำเนินการ' },
      { value: parseInt(data.policyExpansionArea.count) || 0, name: 'พื้นที่ขยายผล' }
    ];
    
    // สร้าง instance ของ ECharts
    const chart = echarts.init(chartRef.current);
    
    // กำหนดตัวเลือกการแสดงผล
    const option = {
      title: {
        text: 'พื้นที่การดำเนินงาน',
        textStyle: {
          fontFamily: 'Kanit, sans-serif',
          fontSize: 20,
          fontWeight: 'bold',
          color: '#6B4C15'
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
          fontSize: 12,
          color: '#6B4C15'
        }
      },
      series: [
        {
          name: 'จำนวนพื้นที่',
          type: 'pie',
          radius: ['30%', '70%'],
          center: ['60%', '50%'],
          avoidLabelOverlap: true,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: true,
            formatter: '{b}: {c} {d}%',
            fontFamily: 'Kanit, sans-serif'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 16,
              fontWeight: 'bold'
            },
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          data: [
            {
              value: chartData[0].value,
              name: chartData[0].name,
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#FFBB77' },
                  { offset: 1, color: '#FF7E33' }
                ])
              }
            },
            {
              value: chartData[1].value,
              name: chartData[1].name,
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#EACE5C' },
                  { offset: 1, color: '#D4AF37' }
                ])
              }
            }
          ],
          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDuration: 1000
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
  
  if (!data.implementationArea || !data.policyExpansionArea) {
    return <EmptyData title="ไม่พบข้อมูลพื้นที่" message="ไม่สามารถแสดงข้อมูลพื้นที่ดำเนินการ" />;
  }

  return (
    <div className="bg-gradient-to-br from-[#F9F3D9] to-[#EFE3AA] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="px-6 py-4 border-b border-[#EFE3AA]">
        <h3 className="text-xl font-semibold text-[#6B4C15] flex items-center">
          <FaMapMarkerAlt className="mr-2" /> พื้นที่การดำเนินงาน
        </h3>
      </div>
      <div className="px-6 py-4">
        <div className="h-72" ref={chartRef}></div>
      </div>
      <div className="px-6 py-4 bg-[#D4AF37] flex justify-between border-t border-[#EFE3AA]">
        <span className="text-sm text-[#6B4C15] font-medium">
          พื้นที่ดำเนินการ: <span className="font-bold text-[#EFE3AA]">{new Intl.NumberFormat('th-TH').format(parseInt(data.implementationArea.count) || 0)}</span> {data.implementationArea.unit}
        </span>
        <span className="text-sm text-[#6B4C15] font-medium">
          พื้นที่ขยายผล: <span className="font-bold text-[#D4AF37]">{new Intl.NumberFormat('th-TH').format(parseInt(data.policyExpansionArea.count) || 0)}</span> {data.policyExpansionArea.unit}
        </span>
      </div>
    </div>
  );
}

export default AreaImplementationChart;