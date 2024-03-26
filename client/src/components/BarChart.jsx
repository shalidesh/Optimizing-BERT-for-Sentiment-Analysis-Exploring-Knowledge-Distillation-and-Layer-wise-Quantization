import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale ,LinearScale} from 'chart.js';
Chart.register(LinearScale,Title, Tooltip, Legend, BarElement, CategoryScale);

const data = {
  labels: ['Positive', 'Negative'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [10, 15],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Bar Chart',
    },
  },
};

function BarChart() {
  return(
    <Bar data={data} options={options} height={300} />
  ); 
}

export default BarChart;
