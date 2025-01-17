'use client'

import React from 'react';
import dynamic from 'next/dynamic';
import revenueSource from '@/mock data/revenueSource';
// import ReactECharts from 'echarts-for-react';

const ReactECharts = dynamic(() => import('echarts-for-react'), { ssr: false });


const RevenueChart: React.FC = () => {
  const options: echarts.EChartsOption = {
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: revenueSource.map((data) => data.year),
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Series 1',
        type: 'line',
        smooth: true,
        data: revenueSource.map((data) => data.series1),
        lineStyle: {
          width: 2,
        },
        itemStyle: {
          color: '#A6CEE3',
          borderWidth: 2,
          borderColor: '#A6CEE3',
          shadowColor: '#A6CEE3',
          shadowBlur: 10,
        },
      },
      {
        name: 'Series 2',
        type: 'line',
        smooth: true,
        data: revenueSource.map((data) => data.series2),
        lineStyle: {
          width: 2,
        },
        itemStyle: {
          color: '#9C93FF',
          borderWidth: 2,
          borderColor: '#9C93FF',
          shadowColor: '#B2DF8A',
          shadowBlur: 10,
        },
      },
      {
        name: 'Series 3',
        type: 'line',
        smooth: true,
        data: revenueSource.map((data) => data.series3),
        lineStyle: {
          width: 2,
        },
        itemStyle: {
          color: '#FFC085',
          borderWidth: 2,
          borderColor: '#FFC085',
          shadowColor: '#FFC085',
          shadowBlur: 10,
        },
      },
      {
        name: 'Series 4',
        type: 'line',
        smooth: true,
        data: revenueSource.map((data) => data.series4),
        lineStyle: {
          width: 2,
        },
        itemStyle: {
          color: '#6EC0E1',
          borderWidth: 2,
          borderColor: '#6EC0E1',
          shadowColor: '#6EC0E1',
          shadowBlur: 10,
        },
      },
      {
        name: 'Series 5',
        type: 'line',
        smooth: true,
        data: revenueSource.map((data) => data.series5),
        lineStyle: {
          width: 2,
        },
        itemStyle: {
          color: '#FF9893',
          borderWidth: 2,
          borderColor: '#FF9893',
          shadowColor: '#FF9893',
          shadowBlur: 10,
        },
      },
      {
        name: 'Series 6',
        type: 'line',
        smooth: true,
        data: revenueSource.map((data) => data.series6),
        lineStyle: {
          width: 2,
        },
        itemStyle: {
          color: '#FFC085',
          borderWidth: 2,
          borderColor: '#FFC085',
          shadowColor: '#FFC085',
          shadowBlur: 10,
        },
      },
    ],
  };

  return (
    <div>
      <ReactECharts option={options} style={{ height: '400px' }} />
    </div>
  );
};

export default RevenueChart;