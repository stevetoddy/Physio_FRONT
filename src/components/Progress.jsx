import React, { useEffect, useState } from 'react'
import Chart from './Chart'

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
      <h2>Progress</h2>
      <div>
      {userPrograms.map((program, index) => (
                <div key={index}>
                    <h2>{program.name}</h2>
                    <Chart metrics={program.metrics} />
                    </div> 
                    )
              )
        }
      </div>
    </>
    
  )
}

export default Progress