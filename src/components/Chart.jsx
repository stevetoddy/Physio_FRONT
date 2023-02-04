import React from 'react'
import { Line } from 'react-chartjs-2'
import './Chart.css'

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

  const datasetsToRender = data.datasets.filter(dataset => dataset.data.length > 0)
  if (!datasetsToRender.length) {
    return null
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
        ticks: {
          color: 'black',
          max: 110,
          callback: function(value, index, values) {
            if (value > 100) {
              return ''
            }
            return value + '%'
          }
        }
      }
  }
  }
  return (
    <>
    <div className="chart">
      <div style={
          {
          width: '600px',
          height: '300px',
          padding: '20px',
          backgroundColor: 'white'
          }
        }>
        <Line
          data = {data}
          options = {options}
        ></Line>
      </div>
    </div>
    </>
  )
}

export default Chart