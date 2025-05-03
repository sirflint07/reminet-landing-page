'use client';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarGraphStats = () => {
  const data = {
    labels: [
      'JavaScript',
      'Python',
      'React',
      'Node.js',
      'Data Science',
      'Machine Learning',
      'UI/UX Design',
    ],
    datasets: [
      {
        label: 'Number of Students',
        data: [120, 180, 150, 100, 90, 75, 130],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(199, 199, 199, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(199, 199, 199, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,          // <-- allow container to control height
    plugins: {
      legend: { position: 'top' },
      title: {
        display: true,
        text: 'Students per Course on Reminet',
      },
    },
    scales: {
      x: { ticks: { autoSkip: false } }, // ensure labels don’t drop on small screens
    },
  };

  return (
    <div className="w-full p-5">
      {/* full‑width on mobile, 2/3 on md+, fixed heights per breakpoint */}
      <div className="w-full md:w-2/3 lg:w-1/2 mx-auto h-64 md:h-96 lg:h-[80vh]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarGraphStats;