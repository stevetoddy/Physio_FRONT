import { React } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const styles = {
    background: 'lightgrey',
    padding: '0.5rem',
    // margin: '0.5rem 2rem',
    borderRadius: '0.5rem',
    color: "black",
}

const linkStyles = {
    textDecoration: 'none',
    color: 'darkBlue'

}

const Programs = ({ userPrograms }) => {
    return (
        <>
            <Navbar />
            {userPrograms.length > 0 && 
            <ul className="list-group">
                {userPrograms.map((program, index) => (
                    <div key={index}>
                        <h4 style={styles} className="list-group-item"><Link style={linkStyles} to={`/programs/${program._id}`} >{program.name}</Link></h4>
                    </div>
                ))}
            </ul>}
        </>
    )
}

export default Programs