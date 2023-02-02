import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
            <form className="mb-3" onSubmit={submitHandler}>
                <label htmlFor="exampleFormControlInput1" className="form-label">{programName}</label>
               
                <input
                    type="text"
                    className="form-control" 
                    id="exampleFormControlInput1"
                    name="name"
                    value={exerciseName}
                    placeholder="eg. Toe Squeeze..."
                    onChange={(event) => setExerciseName(event.target.value)}
                />
                <br />
                <input
                    type="text"
                    className="form-control" 
                    id="exampleFormControlInput1"
                    name="info"
                    value={exerciseInfo}
                    placeholder="eg. 30 Reps..."
                    onChange={(event) => setExerciseInfo(event.target.value)}
                />
                    <input type="submit" name="submit" className="btn btn-primary" />

            </form>
        </>
    )
}
export default CreateProgramBody