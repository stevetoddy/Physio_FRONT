import React from 'react'
import { Link } from 'react-router-dom'


const UpdatedProgram = ({ programName, oneProgram }) => {
    
    console.log("HERE", oneProgram)
    
    return (
        <>
            <h1>Exercise Added To {programName}!</h1>
            <button><Link to={"/createbody"}>Add Another Exercise to {programName}</Link></button>
            <h4>OR</h4>
            <button><Link to={"/"}>Save {programName} to your Programs List!</Link></button>
        </>
    )
}

export default UpdatedProgram