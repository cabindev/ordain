// app/ordain/components/ordainChart/AlcoholReductionBarChart.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import { FaWineBottle } from 'react-icons/fa';
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

// Register necessary components
echarts.use([
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  GridComponent,
  BarChart,
  CanvasRenderer
]);

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
    
    // กำหนดตัวเลือกการแสดงผลใหม่ให้สดใสขึ้น
    const option = {
      title: {
        text: 'การลดการบริโภคเครื่องดื่มแอลกอฮอล์',
        textStyle: {
          fontFamily: 'Kanit, sans-serif',
          fontSize: 20,
          fontWeight: 'bold',
          color: '#FF7E33'
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
          rotate: 0,
          color: '#6B4C15'
        },
        axisLine: {
          lineStyle: {
            color: '#FF9E5C'
          }
        }
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: function(value: number) {
            return new Intl.NumberFormat('th-TH').format(value);
          },
          fontFamily: 'Kanit, sans-serif',
          color: '#6B4C15'
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255, 126, 51, 0.2)',
            type: 'dashed'
          }
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
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#FF7E33' },
                { offset: 1, color: '#FFBB77' }
              ]),
              borderRadius: [8, 8, 0, 0],
              shadowColor: 'rgba(255, 126, 51, 0.3)',
              shadowBlur: 10
            }
          })),
          label: {
            show: true,
            position: 'top',
            formatter: function(params: any) {
              return new Intl.NumberFormat('th-TH').format(params.value);
            },
            fontFamily: 'Kanit, sans-serif',
            fontSize: 14,
            fontWeight: 'bold',
            color: '#FF7E33'
          },
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(255, 158, 92, 0.1)',
            borderRadius: [6, 6, 0, 0]
          }
        }
      ],
      // เพิ่มเอฟเฟกต์เงา
      animation: true,
      animationDuration: 1000,
      animationEasing: 'elasticOut'
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
    <div className="bg-gradient-to-br from-[#FFEFEA] to-[#FFC8B0] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="px-6 py-4 border-b border-[#FF9E5C]">
        <h3 className="text-xl font-semibold text-[#FF7E33] flex items-center">
          <FaWineBottle className="mr-2" /> การลดการบริโภคเครื่องดื่มแอลกอฮอล์
        </h3>
      </div>
      <div className="px-6 py-4">
        <div className="h-72" ref={chartRef}></div>
      </div>
      <div className="px-6 py-4 bg-[#FFEFEA] flex justify-between border-t border-[#FF9E5C]">
        <span className="text-sm text-[#6B4C15] font-medium">งานบวชทั้งหมด: <span className="font-bold text-[#FF7E33]">{new Intl.NumberFormat('th-TH').format(parseInt(data.total) || 0)}</span> งาน</span>
        <span className="text-sm text-[#6B4C15] font-medium">งานบวชในวัด: <span className="font-bold text-[#FF7E33]">{new Intl.NumberFormat('th-TH').format(parseInt(data.templeEvents) || 0)}</span> งาน</span>
      </div>
    </div>
  );
}

export default AlcoholReductionBarChart;