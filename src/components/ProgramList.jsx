import { React } from 'react'
import { Link } from 'react-router-dom'

const styles = {
    background: 'lightgrey',
    padding: '0.5rem',
    margin: '0.5rem',
    borderRadius: '0.5rem',
    color: "black"
}

const ProgramList = ({ programs }) => {
    return (
        <>
            <ul className="list-group">
                <li className="list-group-item"><Link to='/steve/program'>Steve's Programs</Link></li>
                <li className="list-group-item"><Link to='/oli/program'>Oli's Programs</Link></li>
                <li className="list-group-item"><Link to='/kane/program'>Kane's Programs</Link></li>
            </ul>
        </>
    )
}

export default ProgramList