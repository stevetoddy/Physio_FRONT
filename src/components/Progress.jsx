import React, { useEffect, useState } from 'react'
import Chart from './Chart'
import Navbar from './Navbar'

const styles = {
    background: 'lightgrey',
    padding: '0.5rem',
    width: '525px',
    margin: '2rem 1rem 0',
    borderRadius: '0.5rem',
    color: "black",
}

const Progress = ({ id }) => {

  const [userPrograms, setUserPrograms] = useState([])
       

    useEffect(() => {
    async function fetchUserPrograms() {
        let userId = `http://physioappapi-production.up.railway.app/programs/users/${id.substring(1, 25)}/`
        const res = await fetch(userId)
        const data = await res.json()
        setUserPrograms(data)
    }
    fetchUserPrograms()
    }, [])

    return (
        <>
          <Navbar />
          <h2 style={{margin: '1rem 1rem 2rem'}}>Progress</h2>
          <div>
            {userPrograms.map((program, index) => {
              if (program.metrics.length === 0) {
                return null
              }
      
              return (
                <div key={index}>
                  <h4 style={styles}>{program.name}</h4>
                  <Chart metrics={program.metrics} />
                </div>
              )
            })}
          </div>
        </>
      )
}

export default Progress