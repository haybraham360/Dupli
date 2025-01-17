'use client'

import React from 'react';
import dynamic from 'next/dynamic';

const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

const RevenuePieChart: React.FC = () => {
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'pie',
      width: 400, 
      height: 400, 

    },
    labels: ['Product 1', 'Product 2', 'Product 3', 'Product 4'],
    colors: ['#00b8d4', '#ff6b6b', '#9b59b6', '#3498db'],
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 1200,
        options: {
          chart: {
            width: '180',
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  const series = [35, 25, 18, 22];

  return (
    <div>
      <ApexCharts 
        options={options} 
        series={series} 
        type="pie" 
        height={600}  
        width={400}
      />
    </div>
  );
};

export default RevenuePieChart;