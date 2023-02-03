import React, { useState, useContext, createContext, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import Card from './Card'
import Navbar from './Navbar';

export const MetricsContext = createContext({});

const UserPrograms = () => {
  const [pain, setPain] = useState([0, 0, 0]);
  const [difficulty, setDifficulty] = useState([0, 0, 0]);
  const [completion, setCompletion] = useState([0, 0, 0]);
  const { id } = useParams();
  const [oneProgram, setOneProgram] = useState({ loading: true });


  const updateMetrics = (index, newPain, newDifficulty, newCompletion) => {
    setPain(prevPain => {
      const newPainArray = [...prevPain];
      newPainArray[index] = newPain;
      return newPainArray;
    });
    setDifficulty(prevDifficulty => {
      const newDifficultyArray = [...prevDifficulty];
      newDifficultyArray[index] = newDifficulty;
      return newDifficultyArray;
    });
    setCompletion(prevCompletion => {
      const newCompletionArray = [...prevCompletion];
      newCompletionArray[index] = newCompletion;
      return newCompletionArray;
    });
  };


  const handleSubmit = (x) => {
    const totalPain = pain.reduce((a, b) => a + b, 0);
    const totalDifficulty = difficulty.reduce((a, b) => a + b, 0);
    const totalCompletion = completion.reduce((a, b) => a + b, 0);
    const metrics = {
        date: new Date().toLocaleDateString() + "",
        pain: totalPain / x,
        difficulty: totalDifficulty / x,
        completion: totalCompletion / x
    }
    fetch(`http://localhost:4002/metrics/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(metrics)
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    async function fetchOneProgram() {
      const res = await fetch(`http://localhost:4002/programs/${id}/`);
      const data = await res.json();
      setOneProgram(data);
    }
    fetchOneProgram();
  }, [id]);

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
            <h2 style={{marginLeft:"32vw"}}>{oneProgram.name}</h2>
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
            <form onSubmit={handleSubmit(oneProgram.exercises.length)}>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </>)}
    </MetricsContext.Provider>
    </div>
    </>
  )
}

export default UserPrograms