import { React, useState, useEffect } from 'react'
import NewCard from './Card'


const UserPrograms = ({ id }) => {
    
    // Get LOGGED IN USERS PROGRAMS 
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