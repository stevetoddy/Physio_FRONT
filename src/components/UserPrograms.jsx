import { React } from 'react'
import Card from './Card'


const UserPrograms = ({ userPrograms }) => {
    
    return (
        <>
        <br />
            {userPrograms.map((program, index) => (
                <div key={index}>
                    <h2>{program.name}</h2>
                    {program.exercises.map((exercise, index) => (
                        <div key={index}>
                            <Card image={exercise.image} exerciseName={exercise.name} info={exercise.info} />
                        </div>
                    ))}
                    <form>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>                
            ))}
            {userPrograms <= 0 ? <h4>No Exercises Found!</h4> : '' } 
        </>
    )
}

export default UserPrograms