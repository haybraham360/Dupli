'use client'

import React from 'react';
import dynamic from 'next/dynamic';

const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

const AcquisitionChart: React.FC = () => {
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'bar',
      height: 350,
      width: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '100%',
        borderRadius: 1,
        borderRadiusApplication: 'end'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun'],
    },
    fill: {
      opacity: 1
    },
    responsive: [
      {
        breakpoint: 1200,
        options: {
          chart: {
            width: '180',
            height: '180',
          }
        },
      },
    ],
}

  const series: ApexAxisChartSeries = [
    {
      name: 'Value',
      data: [-73.7, 72.2, -22.9, 68.1, 82.5],
    },
  ];

  return (
    <div>
      <ApexCharts options={options} series={series} type="bar" height={300} width={350} />
    </div>
  );
};

export default AcquisitionChart;