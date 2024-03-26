import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, Title, Tooltip, Legend, ArcElement } from 'chart.js';

Chart.register(Title, Tooltip, Legend, ArcElement);

const data = {
  labels: ['Postive', 'Negative'],
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
      text: 'Pie Chart',
    },
  },
};

function PieChart() {
  return(
  <Pie data={data} options={options} />
  ); 
}

export default PieChart;