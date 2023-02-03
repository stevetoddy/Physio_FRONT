import React, { useState, useContext, createContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Card from './Card'
import Navbar from './Navbar'

export const MetricsContext = createContext({})


const UserPrograms = () => {
    
  const nav = useNavigate()
  
  const [pain, setPain] = useState([0, 0, 0])
  const [difficulty, setDifficulty] = useState([0, 0, 0])
  const [completion, setCompletion] = useState([0, 0, 0])
  const { id } = useParams()
  const [oneProgram, setOneProgram] = useState({ loading: true })


  const updateMetrics = (index, newPain, newDifficulty, newCompletion) => {
    setPain(prevPain => {
      const newPainArray = [...prevPain]
      newPainArray[index] = newPain
      return newPainArray
    })
    setDifficulty(prevDifficulty => {
      const newDifficultyArray = [...prevDifficulty]
      newDifficultyArray[index] = newDifficulty
      return newDifficultyArray
    })
    setCompletion(prevCompletion => {
      const newCompletionArray = [...prevCompletion]
      newCompletionArray[index] = newCompletion
      return newCompletionArray
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const x = oneProgram.exercises.length
    const totalPain = pain.reduce((a, b) => a + b, 0)
    const totalDifficulty = difficulty.reduce((a, b) => a + b, 0)
    const totalCompletion = completion.reduce((a, b) => a + b, 0)
    const metrics = {
        date: new Date().toLocaleDateString(),
        pain: totalPain / x,
        diff: totalDifficulty / x,
        complete: totalCompletion / x
    }
    console.log(metrics)
    fetch(`http://localhost:4001/programs/metrics/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ metrics })
    })
      .then(res => res.json())
      .catch(err => console.err)
      nav('/chart')
  }
  

  useEffect(() => {
    async function fetchOneProgram() {
        const res = await fetch(`http://localhost:4001/programs/${id}/`)
        const data = await res.json()
        setOneProgram(data)
        setPain(Array(data.exercises.length).fill(0))
        setDifficulty(Array(data.exercises.length).fill(0))
        setCompletion(Array(data.exercises.length).fill(0))
        }
        fetchOneProgram()
    }, [id])

  return (
    <>
    <Navbar />
    <div>
    <MetricsContext.Provider
      value={{ pain, difficulty, completion, updateMetrics }}
    >
      {oneProgram && oneProgram.exercises && (
        <>
          <br />
          <div>
            <h2 style={{marginLeft:"35vw"}}>{oneProgram.name}</h2>
            <div>
              {oneProgram.exercises.map((exercise, i) => (
                <Card
                  key={i}
                  pain={pain[i]}
                  difficulty={difficulty[i]}
                  completion={completion[i]}
                  updateMetrics={updateMetrics}
                  index={i}
                  image={exercise.image}
                  exerciseName={exercise.name}
                  info={exercise.info}
                />
              ))}
            </div>
            <form onSubmit={handleSubmit}>
              <input style={{marginLeft:"35vw"}} type="submit" value="Submit" />
            </form>
          </div>
        </>)}
    </MetricsContext.Provider>
    </div>
    </>
  )
}

export default UserPrograms