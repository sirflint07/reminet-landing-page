'use client'

import {Line} from 'react-chartjs-2'
import { Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend } from 'chart.js';

  ChartJS.register(
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement, 
    Title, 
    Tooltip, 
    Legend
  )

const LineGraphStats = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Webinar Stats',
      },
    },
  }
  return (
    <div>
      <Line options={options}/>
    </div>
  )
}

export default LineGraphStats
