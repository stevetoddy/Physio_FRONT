import React from 'react'
import { Line } from 'react-chartjs-2'

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip
} from 'chart.js'

ChartJS.register(
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip
)

// Now I need to start using props to get this dynamic!
function Chart( {metrics} ) {
  // Iterate functions over date/completion/diff/pain
  console.log(metrics)
  // const dates = metrics.map(object => object.date)
  // console.log(dates)
  const data = {
    // Dates
    
    labels: ['19/04/22', '22/04/22', '24/04/22'],
    datasets: [
      {
        label: 'Difficulty',
        // Difficulty
        data: [6, 3, 9],
        backgroundColor: 'aqua',
        borderColor: 'black',
        pointBorderColor: 'black',
        tension: 0.4
      },
      {
        label: 'Pain',
        // Pain
        data: [9, 5, 2],
        backgroundColor: 'red',
        borderColor: 'black',
        pointBorderColor: 'black',
        tension: 0.4,
        yAxisID: 'y'
      },
      {
        label: 'Completion (%)',
        // Completion
        data: [60, 40, 20],
        backgroundColor: 'yellow',
        borderColor: 'black',
        pointBorderColor: 'black',
        tension: 0.4,
        yAxisID: 'percentage'
      }
    ]
  }

  const options = {
    type: 'line',
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        min: 0, 
        max: 10,
        position: 'left'
      },
      percentage: {
        position: 'right',
        beginAtZero: true,
        max: 100,
        ticks: {
          color: 'yellow'
        }
      }
  }
  }
  return (
    <div className="App">
      <div style={
          {
          width: '600px',
          height: '300px',
          padding: '20px',
          backgroundColor: 'grey'
          }
        }>
        <Line
          data = {data}
          options = {options}
        ></Line>
      </div>
    </div>
  )
}

export default Chart