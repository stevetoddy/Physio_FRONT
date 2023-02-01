import { React, useState } from 'react'

const CreateProgramBody = ({ addExercise, programName, fetchOneProgram, oneProgram }) => {
    
    const [exerciseName, setExerciseName] = useState([]);
    const [exerciseInfo, setExerciseInfo] = useState([]);
                
        
    const submitHandler = e => {
        e.preventDefault();
        console.log("here", exerciseName, exerciseInfo)
        addExercise(exerciseName, exerciseInfo)
        fetchOneProgram()
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

        <>
            <br />
            {oneProgram.map((program, index) => (
                <div key={index}>
                    <h2>{program.name}</h2>
                    {program.exercises.map((exercise, index) => (
                        <div key={index}>
                            <NewCard image={exercise.image} exerciseName={exercise.name} info={exercise.info} />
                        </div>
                    ))}
                </div>                
            ))}
            {oneProgram <= 0 ? <h4>No Exercises Found!</h4> : '' } 
        </>
        </>
    )
}
export default CreateProgramBody