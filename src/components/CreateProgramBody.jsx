import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
import './CreateProgramBody.css'

const CreateProgramBody = ({ addExercise, programName, fetchOneProgram }) => {
    
    const nav = useNavigate()

    const [exerciseName, setExerciseName] = useState([]);
    const [exerciseInfo, setExerciseInfo] = useState([]);
        
    const submitHandler = e => {
        e.preventDefault();
        addExercise(exerciseName, exerciseInfo)
        fetchOneProgram()
        nav("/updatedprogram")
    }

    return (
        <>
            <Navbar />

            <div className="create-name-container">
            <form className="create-name-form" onSubmit={submitHandler}>
                <h3>{programName}</h3>
               
                <input
                    // style={{margin: "0 2rem"}}
                    type="text"
                    className="input" 
                    id="exampleFormControlInput1"
                    name="name"
                    value={exerciseName}
                    placeholder="eg. Toe Squeeze..."
                    onChange={(event) => setExerciseName(event.target.value)}
                />
                <br />
                <input
                    style={{margin: "0 2rem 2rem"}}
                    type="text"
                    className="input" 
                    id="exampleFormControlInput1"
                    name="info"
                    value={exerciseInfo}
                    placeholder="eg. 30 Reps..."
                    onChange={(event) => setExerciseInfo(event.target.value)}
                />
                    <button style={{margin: "0 2rem 2rem"}} className="login-btn" type="submit" name="submit">Save</button>
                    
                    {/* <input type="submit" name="submit" className="btn btn-primary" /> */}

            </form>
            </div>
        </>
    )
}
export default CreateProgramBody