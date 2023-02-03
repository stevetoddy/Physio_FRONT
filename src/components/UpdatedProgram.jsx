import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'


const UpdatedProgram = ({ programName }) => {
        
    return (
        <>
            <Navbar />
            <h3 style={{margin: "2rem"}}>Exercise Added To {programName}!</h3>
            <Link style={{margin: "2rem"}} to={"/createbody"}>Add Another Exercise to {programName}</Link>

            <h4 style={{margin: "2rem"}}>OR</h4>

            <Link style={{margin: "2rem"}} to={"/"}>Save {programName} to your Programs List!</Link>
        </>
    )
}

export default UpdatedProgram