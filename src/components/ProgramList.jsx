import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const styles = {
    background: 'lightgrey',
    padding: '0.5rem',
    margin: '0.5rem',
    borderRadius: '0.5rem',
    color: "black"
}

const ProgramList = ({ id }) => {
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
            <h2>Program List</h2>

            <ul className="list-group">
                {userPrograms.map((program, index) => (
                    <div key={index}>
                        <li className="list-group-item"><Link to='/steve/program'>{program.name}</Link></li>
                    </div>
                ))}
            </ul>
        </>
    )
}

export default ProgramList