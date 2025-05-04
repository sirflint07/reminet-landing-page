'use client';

import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels);

const PieChartStats = () => {
  const data = {
    labels: [
      'Python',
      'JavaScript',
      'React',
      'Node.js',
      'Data Science',
      'Machine Learning',
      'UI/UX Design',
      'Web Development',
      'Mobile Development',
      'Cloud Computing'
    ],
    datasets: [
      {
        label: 'Enrollments',
        data: [120, 150, 180, 200, 220, 240, 260, 280, 300, 320],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(199, 199, 199, 0.6)',
          'rgba(83, 102, 255, 0.6)',
          'rgba(255, 102, 178, 0.6)',
          'rgba(102, 255, 178, 0.6)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(199, 199, 199, 1)',
          'rgba(83, 102, 255, 1)',
          'rgba(255, 102, 178, 1)',
          'rgba(102, 255, 178, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        color: '#111',
        formatter: (value, context) => {
          return context.chart.data.labels[context.dataIndex];
        },
        font: {
          weight: 'bold',
          size: 8,
          family: 'Arial',
          lineHeight: 1.2
        }
      },
      title: {
        display: true,
        text: 'Course Enrollments by Year (2016–2025)',
        font: { size: 18 },
        padding: { top: 20, bottom: 20 },
        color: '#666'
      },
      legend: {
        position: 'bottom',
        labels: { padding: 12 }
      }
    }
  };

  return (
    <div className="w-full px-4 py-6 bg-white">
      <div className="relative w-full h-[70vh] md:h-[50%] lg:w-1/2 mx-auto">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default PieChartStats;