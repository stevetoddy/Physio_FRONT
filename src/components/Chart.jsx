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

function Chart( {metrics} ) {

  const dates = metrics.map(metric => metric.date)
  const diff = metrics.map(metric => metric.diff)
  const completion = metrics.map(metric => metric.complete * 100)
  const pain = metrics.map(metric => metric.pain)

  const data = {
    // Dates
    
    labels: dates,
    datasets: [
      {
        label: 'Difficulty',
        // Difficulty
        data: diff,
        backgroundColor: 'aqua',
        borderColor: 'black',
        pointBorderColor: 'black',
        tension: 0.4
      },
      {
        label: 'Pain',
        // Pain
        data: pain,
        backgroundColor: 'red',
        borderColor: 'black',
        pointBorderColor: 'black',
        tension: 0.4,
        yAxisID: 'y'
      },
      {
        label: 'Completion (%)',
        // Completion
        data: completion,
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