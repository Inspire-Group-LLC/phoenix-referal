import React, { useEffect, useRef } from "react";
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // Use 'chart.js/auto' for the latest version

const LineChart = ( visible ) => {


  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: (value) => `${value}%`,
          color: 'white',
          font: {
            size: '10px',
            family: 'Montserrat',
            weight: 500
          }
        },
      },
      x: {
        type: 'category', // Specify 'category' for the x-axis
        ticks: {
          color: 'white',
          font: {
            size: '10px',
            family: 'Montserrat',
            weight: 500
          }
        },
      },
    },
  };


  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Destroy the existing chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Generate labels for the last 7 days
    const labels = Array.from({ length: 7 }, (_, index) => {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() - index);

      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();

      return `${day}/${month}`;
    });

    // Create a new chart instance
    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels.reverse(),
        datasets: [
          {
            label: 'none',
            data: [50, 75, 30],
            borderColor: '#fff',
            borderWidth: 3,
            fill: false,
            pointRadius: 0,
            tension: 0.4
          },
        ],
      },
      options:
        options
      ,
    });

    // Cleanup the chart instance when the component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return(
    <>
    {console.log(visible)}
     <canvas ref={chartRef} height='40vh' width='100%' />
 
     </>
  )

};

export default LineChart;
