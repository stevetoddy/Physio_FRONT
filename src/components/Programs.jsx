import { React } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import './Programs.css'



const Programs = ({ userPrograms }) => {
    return (
        <>
            <Navbar />
       
        <div className="parent-div">
            {userPrograms.length > 0 && 
            <ul className="list-group">
                {userPrograms.map((program, index) => (
                    <div key={index}>
                        <h4  className="list-group-item"><Link  to={`/programs/${program._id}`} >{program.name}</Link>Hello</h4>
                    </div>
                ))}
            </ul>}
       </div>
        </>
    )
}

export default Programs