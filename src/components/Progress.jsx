import React, { useEffect, useState } from 'react'
import Chart from './Chart'
import Navbar from './Navbar'

// Props
const Progress = ({ id }) => {

  const [userPrograms, setUserPrograms] = useState([])
       

    useEffect(() => {
    async function fetchUserPrograms() {
        let userId = `http://localhost:4001/programs/users/${id.substring(1, 25)}/`
        const res = await fetch(userId)
        const data = await res.json()
        setUserPrograms(data)
    }
    fetchUserPrograms()
    }, [])

    return (
        <>
          <Navbar />
          <h2>Progress</h2>
          <div>
            {userPrograms.map((program, index) => {
              if (program.metrics.length === 0) {
                return null
              }
      
              return (
                <div key={index}>
                  <h4>{program.name}</h4>
                  <Chart metrics={program.metrics} />
                </div>
              )
            })}
          </div>
        </>
      )
}

export default Progress