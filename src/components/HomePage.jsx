import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from './Images/avatar.png'

const Home = () => {
    return (
        <>

<img className="avatar" src={Avatar}></img>
            <h1>HOME PAGE</h1>
            <ul>
                <li><Link to={`/`}>Home</Link></li>
                <li><Link to={`/programs`}>Programs List</Link></li>
                <li><Link to={`/login`}>Login</Link></li>
                <li><Link to={`/signup`}>Sign Up</Link></li>
                <li><Link to={`/chart`}>Chart</Link></li>
                <li><Link to={`/progress`}>Progress</Link></li>
                <li><Link to={`/createname`}>Create Program</Link></li>
            </ul>
        </>
    )
}

export default Home