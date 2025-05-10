// app/ordain/components/ordainChart/ProvinceImplementationChart.tsx
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
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import type { EChartsOption } from 'echarts'; // เพิ่มการนำเข้า type EChartsOption

// Register necessary components
echarts.use([
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  GridComponent,
  BarChart,
  CanvasRenderer
]);

type ProvinceData = {
  name: string;
  value: number;
  region?: string;
};

type ChartProps = {
  data: ProvinceData[];
};

// กำหนด interface สำหรับ Region Colors
interface RegionColorMap {
  [key: string]: string;
}

export function ProvinceImplementationChart({ data }: ChartProps) {
  const chartRef = useRef<HTMLDivElement>(null);
  
  // กำหนดสีตามภูมิภาค
  const REGION_COLORS: RegionColorMap = {
    'เหนือ': '#D4AF37',       // Northern - Gold
    'อีสาน': '#FF7E33',       // Northeastern - Orange
    'กลาง': '#6B4C15',        // Central - Brown
    'ตะวันออก': '#4d370f',    // Eastern - Dark Brown
    'ตะวันตก': '#9f7f24',     // Western - Light Brown
    'ใต้': '#EACE5C',         // Southern - Light Gold
    'default': '#b3872f'      // Default color
  };
  
  useEffect(() => {
    if (!data || data.length === 0 || !chartRef.current) return;
    
    // Sort data by value in descending order
    const sortedData = [...data].sort((a, b) => b.value - a.value);
    
    // Take top 15 provinces for better visualization
    const topProvinces = sortedData.slice(0, 15);
    
    // สร้าง instance ของ ECharts
    const chart = echarts.init(chartRef.current);
    
    // กำหนดตัวเลือกการแสดงผล
    const option: EChartsOption = {
      title: {
        text: 'สัดส่วนรายจังหวัด',
        textStyle: {
          fontFamily: 'Kanit, sans-serif',
          fontSize: 20,
          fontWeight: 'bold',
          color: '#D4AF37'
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
          const total = sortedData.reduce((sum, item) => sum + item.value, 0);
          const percentage = (data.value / total * 100).toFixed(1);
          return `${data.name}: ${data.value} พื้นที่ (${percentage}%)`;
        },
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderColor: '#D4AF37',
        borderWidth: 1,
        textStyle: {
          fontFamily: 'Kanit, sans-serif',
          color: '#6B4C15'
        },
        extraCssText: 'box-shadow: 0 4px 8px rgba(212, 175, 55, 0.2);'
      },
      grid: {
        left: '5%',
        right: '5%',
        bottom: '15%',
        top: '20%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: topProvinces.map(item => item.name),
        axisLabel: {
          fontFamily: 'Kanit, sans-serif',
          fontSize: 12,
          interval: 0,
          rotate: 45,
          color: '#6B4C15'
        },
        axisTick: {
          alignWithLabel: true
        }
      },
      yAxis: {
        type: 'value',
        name: 'จำนวนพื้นที่',
        nameTextStyle: {
          fontFamily: 'Kanit, sans-serif',
          color: '#6B4C15'
        },
        axisLabel: {
          formatter: function(value: number) {
            return value.toLocaleString('th-TH');
          },
          fontFamily: 'Kanit, sans-serif',
          color: '#6B4C15'
        }
      },
      series: [
        {
          name: 'จำนวนพื้นที่',
          type: 'bar',
          barWidth: '60%',
          data: topProvinces.map(item => ({
            value: item.value,
            itemStyle: {
              color: item.region ? REGION_COLORS[item.region] || REGION_COLORS.default : REGION_COLORS.default
            }
          })),
          label: {
            show: true,
            position: 'top',
            formatter: function(params: any) {
              return params.value.toLocaleString('th-TH');
            },
            fontFamily: 'Kanit, sans-serif',
            fontSize: 12,
            color: '#6B4C15',
            fontWeight: 'bold'
          },
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          },
          itemStyle: {
            borderRadius: [8, 8, 0, 0],
            shadowBlur: 5,
            shadowColor: 'rgba(212, 175, 55, 0.3)'
          }
        }
      ],
      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDuration: 1000
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
    return <EmptyData title="ไม่พบข้อมูลรายจังหวัด" message="ไม่สามารถแสดงข้อมูลสัดส่วนรายจังหวัด" />;
  }

  // Calculate total number of areas
  const totalAreas = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-gradient-to-br from-[#F9F3D9] to-[#EFE3AA] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="px-6 py-4 border-b border-[#D4AF37]">
        <h3 className="text-xl font-semibold text-[#6B4C15] flex items-center">
          <FaMapMarkerAlt className="mr-2 text-[#D4AF37]" /> สัดส่วนรายจังหวัด
        </h3>
      </div>
      <div className="px-6 py-4">
        <div className="h-96" ref={chartRef}></div>
      </div>
      <div className="px-6 py-4 bg-[#F9F3D9] text-sm text-[#6B4C15] text-center border-t border-[#D4AF37]">
        <span className="font-medium">ข้อมูลการกระจายตัวของพื้นที่โครงการบวชสร้างสุขตามจังหวัด</span>
        <div className="mt-2 text-xs diagonal-pattern rounded-md p-2">
          <span className="text-[#9f7f24]">ข้อมูลรวมจาก {data.length} จังหวัดทั่วประเทศ รวมพื้นที่ทั้งสิ้น {totalAreas.toLocaleString('th-TH')} พื้นที่</span>
        </div>
      </div>
    </div>
  );
}

export default ProvinceImplementationChart;