import { React, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from './Card'


const UserPrograms = ({ userPrograms }) => {
    
    const { id } = useParams()

    // GET One Program by ID 
    const [oneProgram, setOneProgram] = useState([]);

    async function fetchOneProgram() {
        let userId = `http://localhost:4001/programs/${id}/`
        const res = await fetch(userId)
        const data = await res.json()
        setOneProgram(data)
    }

    fetchOneProgram()
    return (
        <>
        {oneProgram && 
        <>
        {/* {Object.keys(oneProgram).map((key) => (
            <div key={key}>
                <h3>{oneProgram.key}</h3>
            </div>
        ))} */}

            <br />
                <div>
                    <h2>{oneProgram.name}</h2>


                    {oneProgram.exercises &&    
                    <div>                   
                        {oneProgram.exercises.map((exercise, index) => (
                            <div key={index}>
                                <Card image={exercise.image} exerciseName={exercise.name} info={exercise.info} />
                            </div>
                        ))}
                    </div>    
                    }

                    <form>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>               
            </>
            }
        </>
    )
}

export default UserPrograms