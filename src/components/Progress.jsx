import React, { useEffect, useState } from 'react'
import Chart from './Chart'

// Props
const Progress = ({ userPrograms }) => {

  return (
    <>
      <h2>Progress</h2>
      {/* {data.map((item, index) => (
        <Chart key={index} data={item} />
      ))} */}
      <div>
        <h3>Program 1</h3>
        <Chart />
      </div>
      <div>
        <h3>Program 2</h3>
        <Chart />
      </div>
      
    </>
    
  )
}

export default Progress