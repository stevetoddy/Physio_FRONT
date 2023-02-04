import React, { useEffect, useState } from 'react'
import Chart from './Chart'
import Navbar from './Navbar'
import './Progress.css'

// const styles = {
//     background: 'lightgrey',
//     padding: '0.5rem',
//     width: '525px',
//     margin: '0.5rem 1rem',
//     borderRadius: '0.5rem',
//     color: "black",
// }

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
    }, [userPrograms])

    return (
        <>
          <Navbar />
         
        <div className="progress-container">
          <h2 className="heading">Progress</h2>
        </div>
        
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