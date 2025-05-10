// app/ordain/components/ordainChart/ProvinceBarChart.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { FaCity } from 'react-icons/fa';
import { EmptyData } from '@/app/components/ui/loading';
import * as echarts from 'echarts/core';
import {
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  GridComponent,
  ToolboxComponent,
  DataZoomComponent
} from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

// Register necessary components
echarts.use([
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  GridComponent,
  ToolboxComponent,
  DataZoomComponent,
  BarChart,
  CanvasRenderer
]);

type ProvinceData = {
  name: string;
  value: number;
  percentage?: number;
};

type ChartProps = {
  data: ProvinceData[];
  topCount?: number;
};

export function ProvinceBarChart({ data, topCount = 10 }: ChartProps) {
  const chartRef = useRef<HTMLDivElement>(null);
  const [chartMode, setChartMode] = useState<'implementation' | 'model'>('implementation');
  
  // แยกข้อมูลจังหวัดตามประเภทและแก้ไข prefix ออก
  const implementationData = data.filter(item => item.name.includes('province_imp:'))
    .map(item => ({
      ...item,
      name: item.name.replace('province_imp:', '') // ลบ prefix ออก
    }));
  
  const modelData = data.filter(item => item.name.includes('province_model:'))
    .map(item => ({
      ...item,
      name: item.name.replace('province_model:', '') // ลบ prefix ออก
    }));
  
  console.log('Implementation data:', implementationData.length);
  console.log('Model data:', modelData.length);
  
  useEffect(() => {
    if (!chartRef.current) return;
    
    const chart = echarts.init(chartRef.current);
    
    // เลือกข้อมูลตาม mode
    const dataSource = chartMode === 'implementation' ? implementationData : modelData;
    
    // เรียงลำดับข้อมูลตามค่าจากมากไปน้อย
    const sortedData = [...dataSource]
      .sort((a, b) => b.value - a.value)
      .slice(0, topCount);
      
    const title = chartMode === 'implementation' 
      ? 'สัดส่วนพื้นที่ดำเนินการรายจังหวัด (10 อันดับแรก)'
      : 'จำนวนงานบวชสร้างสุขต้นแบบรายจังหวัด (10 อันดับแรก)';
      
    const color = chartMode === 'implementation' ? '#D4AF37' : '#6B4C15';
    const textLabel = chartMode === 'implementation' ? 'พื้นที่' : 'งาน';
    
    // กำหนดตัวเลือกการแสดงผลตามโหมดที่เลือก
    const option = {
      title: {
        text: title,
        textStyle: {
          fontFamily: 'Kanit, sans-serif',
          fontSize: 18,
          fontWeight: 'bold',
          color: '#6B4C15'
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
          return `${data.name}: ${data.value} ${textLabel} (${data.data.percentage || 0}%)`;
        },
        textStyle: {
          fontFamily: 'Kanit, sans-serif'
        }
      },
      toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      grid: {
        left: '5%',
        right: '10%',
        bottom: '15%',
        top: '15%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        name: chartMode === 'implementation' ? 'จำนวนพื้นที่' : 'จำนวนงาน',
        nameLocation: 'middle',
        nameGap: 30,
        axisLabel: {
          fontFamily: 'Kanit, sans-serif'
        }
      },
      yAxis: {
        type: 'category',
        data: sortedData.map(item => item.name), // แสดงเฉพาะชื่อจังหวัด
        axisLabel: {
          fontFamily: 'Kanit, sans-serif'
        }
      },
      dataZoom: [
        {
          type: 'inside',
          orient: 'vertical',
          startValue: 0,
          endValue: topCount - 1
        }
      ],
      series: [
        {
          name: chartMode === 'implementation' ? 'พื้นที่ดำเนินการ' : 'งานบวชสร้างสุขต้นแบบ',
          type: 'bar',
          data: sortedData.map(item => ({
            value: item.value,
            percentage: item.percentage,
            itemStyle: {
              color: color
            }
          })),
          label: {
            show: true,
            position: 'right',
            formatter: function(params: any) {
              return `${params.value} (${params.data.percentage || 0}%)`;
            },
            fontFamily: 'Kanit, sans-serif'
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
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
  }, [implementationData, modelData, chartMode, topCount]);
  
  if (!data || data.length === 0) {
    return <EmptyData title="ไม่พบข้อมูลจังหวัด" message="ไม่สามารถแสดงข้อมูลรายจังหวัดได้" />;
  }

  return (
    <div className="bg-gradient-to-br from-[#F9F3D9] to-[#EFE3AA] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="px-6 py-4 border-b border-[#D4AF37]">
        <h3 className="text-xl font-semibold text-[#6B4C15] flex items-center">
          <FaCity className="mr-2 text-[#D4AF37]" /> ข้อมูลรายจังหวัด
        </h3>
      </div>
      <div className="px-6 py-2 flex justify-center gap-4">
        <button 
          onClick={() => setChartMode('implementation')}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            chartMode === 'implementation' 
              ? 'bg-[#D4AF37] text-white' 
              : 'bg-[#F9F3D9] text-[#6B4C15] hover:bg-[#EFE3AA]'
          } transition-colors duration-200`}
        >
          พื้นที่ดำเนินการ
        </button>
        <button 
          onClick={() => setChartMode('model')}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            chartMode === 'model' 
              ? 'bg-[#6B4C15] text-white' 
              : 'bg-[#F9F3D9] text-[#6B4C15] hover:bg-[#EFE3AA]'
          } transition-colors duration-200`}
        >
          งานบวชสร้างสุขต้นแบบ
        </button>
      </div>
      <div className="px-6 py-4">
        <div className="h-[500px]" ref={chartRef}></div>
      </div>
      <div className="px-6 py-4 bg-[#F9F3D9] text-sm text-[#6B4C15] text-center border-t border-[#D4AF37]">
        <span className="font-medium">ข้อมูลการกระจายตัวรายจังหวัด</span>
        <div className="mt-2 text-xs diagonal-pattern rounded-md p-2">
          <span className="text-[#9f7f24]">
            {chartMode === 'implementation' 
              ? `ข้อมูลพื้นที่ดำเนินการจาก ${implementationData.length} จังหวัดทั่วประเทศ`
              : `ข้อมูลงานบวชสร้างสุขต้นแบบจาก ${modelData.length} จังหวัดทั่วประเทศ`}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProvinceBarChart;