import { React, useState, useEffect } from 'react'
import NewCard from './Card'


const UserPrograms = ({ userId }) => {
    
    const [userPrograms, setUserPrograms] = useState([])
    
    
    useEffect(() => {
    async function fetchUserPrograms() {
        const res = await fetch(`http://localhost:4001/programs/users/${userId}`)
        const data = await res.json()
        setUserPrograms(data)
        console.log(data)
    }
    fetchUserPrograms()
    }, [])
  

    return (
        <>
            <br />
            {userPrograms.map((program, index) => (
                <div key={index}>
                    <h2>{program.name}</h2>
                    {program.exercises.map((exercise, index) => (
                        <div key={index}>
                            <NewCard image={exercise.image} exerciseName={exercise.name} info={exercise.info} />
                        </div>
                    ))}
                </div>                
            ))} 
        </>
    )
}

export default UserPrograms