// app/ordain/components/ordainChart/SavingsBarChart.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
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

type SavingsData = {
  alcoholSavings: string;
  expensePerMonk: string;
};

export function SavingsBarChart({ data }: { data?: SavingsData }) {
  const chartRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!data || !chartRef.current) return;
    
    // แปลงข้อมูลสำหรับกราฟแท่ง
    const chartData = [
      { name: 'ประหยัดค่าเหล้าเบียร์', value: parseInt(data.alcoholSavings) || 0 },
      { name: 'ประหยัดค่าใช้จ่ายต่อการบวชพระ', value: parseInt(data.expensePerMonk) || 0 },
      { name: 'ประหยัดรวม', value: (parseInt(data.alcoholSavings) || 0) + (parseInt(data.expensePerMonk) || 0) }
    ];
    
    // สร้าง instance ของ ECharts
    const chart = echarts.init(chartRef.current);
    
    // กำหนดตัวเลือกการแสดงผล
    const option = {
      title: {
        text: 'การประหยัดค่าใช้จ่าย (บาท)',
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
          return `${data.name}: ${new Intl.NumberFormat('th-TH').format(data.value)} บาท`;
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
            color: '#D4AF37'
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
            color: 'rgba(212, 175, 55, 0.2)',
            type: 'dashed'
          }
        }
      },
      series: [
        {
          name: 'จำนวนเงิน',
          type: 'bar',
          barWidth: '60%',
          data: chartData.map((item, index) => ({
            value: item.value,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: index === 2 ? '#D4AF37' : (index === 0 ? '#FF7E33' : '#6B4C15') },
                { offset: 1, color: index === 2 ? '#EACE5C' : (index === 0 ? '#FFBB77' : '#9f7f24') }
              ]),
              borderRadius: [8, 8, 0, 0],
              shadowColor: 'rgba(212, 175, 55, 0.3)',
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
            color: '#6B4C15'
          },
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(212, 175, 55, 0.1)',
            borderRadius: [6, 6, 0, 0]
          }
        }
      ],
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
    return <EmptyData title="ไม่พบข้อมูลการประหยัด" message="ไม่สามารถแสดงข้อมูลการประหยัดค่าใช้จ่าย" />;
  }

  const totalSavings = (parseInt(data.alcoholSavings) || 0) + (parseInt(data.expensePerMonk) || 0);

  return (
    <div className="bg-gradient-to-br from-[#F9F3D9] to-[#EACE5C] bg-opacity-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="px-6 py-4 border-b border-[#D4AF37]">
        <h3 className="text-xl font-semibold text-[#6B4C15] flex items-center">
          <FaRegMoneyBillAlt className="mr-2 text-[#D4AF37]" /> การประหยัดค่าใช้จ่าย
        </h3>
      </div>
      <div className="px-6 py-4">
        <div className="h-80" ref={chartRef}></div>
      </div>
      <div className="px-6 py-4 bg-[#F9F3D9] text-center border-t border-[#D4AF37]">
        <span className="text-sm text-[#6B4C15] font-medium">
          สังคมไทยประหยัดค่าใช้จ่ายรวมกว่า <span className="font-bold text-[#D4AF37]">{new Intl.NumberFormat('th-TH').format(totalSavings)}</span> บาท
        </span>
      </div>
    </div>
  );
}

export default SavingsBarChart;