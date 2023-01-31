import React, { useEffect, useState } from 'react'
import Chart from './Chart'

// Props
const Progress = ({ id }) => {

  const [userPrograms, setUserPrograms] = useState([])
    
    
  useEffect(() => {
  async function fetchUserPrograms() {
      const res = await fetch(`http://localhost:4001/programs/users/${sessionStorage.id}`)
      const data = await res.json()
      setUserPrograms(data)
      console.log(data)
  }
  fetchUserPrograms()
  }, [])

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