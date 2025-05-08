// app/ordain/components/ordainChart/RegionalPieChart.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { EmptyData } from '@/app/components/ui/loading';
import * as echarts from 'echarts/core';
import {
  TooltipComponent,
  LegendComponent,
  TitleComponent,
} from 'echarts/components';
import { PieChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

// Register necessary components
echarts.use([
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  PieChart,
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

export function RegionalPieChart({ data }: ChartProps) {
  const chartRef = useRef<HTMLDivElement>(null);
  
  // กำหนดสีที่สดใสและสวยงามมากขึ้น
  const COLORS = [
    '#D4AF37', '#6B4C15', '#FF7E33', '#EACE5C', 
    '#9f7f24', '#FF9E5C', '#4d370f', '#b3872f'
  ];
  
  useEffect(() => {
    if (!data || data.length === 0 || !chartRef.current) return;
    
    // สร้าง instance ของ ECharts
    const chart = echarts.init(chartRef.current);
    
    // กำหนดตัวเลือกการแสดงผลใหม่ให้สดใสขึ้น
    const option = {
      title: {
        text: 'สัดส่วนรายภูมิภาค',
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
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
        textStyle: {
          fontFamily: 'Kanit, sans-serif'
        },
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderColor: '#D4AF37',
        borderWidth: 1,
        textStyle: {
          color: '#6B4C15'
        },
        extraCssText: 'box-shadow: 0 4px 8px rgba(212, 175, 55, 0.2);'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        top: 'middle',
        textStyle: {
          fontFamily: 'Kanit, sans-serif',
          fontSize: 12,
          color: '#6B4C15'
        },
        itemGap: 10,
        itemWidth: 15,
        itemHeight: 10,
        icon: 'roundRect'
      },
      series: [
        {
          name: 'จำนวนพื้นที่',
          type: 'pie',
          radius: ['40%', '75%'],
          center: ['60%', '50%'],
          avoidLabelOverlap: true,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
            shadowBlur: 10,
            shadowColor: 'rgba(212, 175, 55, 0.2)'
          },
          label: {
            show: true,
            formatter: '{b}: {d}%',
            fontFamily: 'Kanit, sans-serif',
            fontSize: 12,
            color: '#6B4C15',
            fontWeight: 'bold'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 16,
              fontWeight: 'bold',
              color: '#D4AF37'
            },
            itemStyle: {
              shadowBlur: 20,
              shadowColor: 'rgba(212, 175, 55, 0.5)'
            }
          },
          labelLine: {
            show: true,
            length: 15,
            length2: 10,
            smooth: true
          },
          data: data.map((item, index) => ({
            name: item.name,
            value: item.value,
            itemStyle: {
              color: COLORS[index % COLORS.length]
            }
          })),
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
  
  if (!data || data.length === 0) {
    return <EmptyData title="ไม่พบข้อมูลภูมิภาค" message="ไม่สามารถแสดงข้อมูลสัดส่วนรายภูมิภาค" />;
  }

  return (
    <div className="bg-gradient-to-br from-[#F9F3D9] to-[#EFE3AA] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="px-6 py-4 border-b border-[#D4AF37]">
        <h3 className="text-xl font-semibold text-[#6B4C15] flex items-center">
          <FaMapMarkerAlt className="mr-2 text-[#D4AF37]" /> สัดส่วนรายภูมิภาค
        </h3>
      </div>
      <div className="px-6 py-4">
        <div className="h-80" ref={chartRef}></div>
      </div>
      <div className="px-6 py-4 bg-[#F9F3D9] text-sm text-[#6B4C15] text-center border-t border-[#D4AF37]">
        <span className="font-medium">ข้อมูลการกระจายตัวของพื้นที่โครงการบวชสร้างสุขตามภูมิภาค</span>
        <div className="mt-2 text-xs diagonal-pattern rounded-md p-2">
          <span className="text-[#9f7f24]">ข้อมูลรวมจาก {data.length} ภูมิภาคทั่วประเทศ</span>
        </div>
      </div>
    </div>
  );
}

export default RegionalPieChart;