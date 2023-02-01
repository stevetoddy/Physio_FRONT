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
  console.log(userPrograms)

  return (
    <>
      <h2>Progress</h2>
      {/* {data.map((item, index) => (
        <Chart key={index} data={item} />
      ))} */}
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
      <div>
        <h3>Program 2</h3>
        <Chart />
      </div>
      
    </>
    
  )
}

export default Progress