import { React } from 'react'
import { Link } from 'react-router-dom'

const styles = {
    background: 'lightgrey',
    padding: '0.5rem',
    margin: '0.5rem',
    borderRadius: '0.5rem',
    color: "black"
}

const Programs = ({ userPrograms }) => {
    return (
        <>
           {userPrograms.length > 0 && 
           <ul className="list-group">
                {userPrograms.map((program, index) => (
                    <div key={index}>
                        <li className="list-group-item"><Link to={`/programs/${program._id}`}>{program.name}</Link></li>
                    </div>
                ))}
            </ul>}
        </>
    )
}

export default Programs