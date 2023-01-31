import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <h1>HOME PAGE</h1>
            <ul>
                <li><Link to={`/`}>Home</Link></li>
                <li><Link to={`/user/program`}>User Programs</Link></li>
                <li><Link to={`/programs`}>Programs</Link></li>
                <li><Link to={`/login`}>Login</Link></li>
                <li><Link to={`/signup`}>Sign Up</Link></li>
                <li><Link to={`/chart`}>Chart</Link></li>
            </ul>
        </>
    )
}

export default Home