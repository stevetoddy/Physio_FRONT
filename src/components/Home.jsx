import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <h1>HOME PAGE</h1>
            <ul>
                <li><Link to={`/`}>Home</Link></li>
                <li><Link to={`/users`}>Users</Link></li>
                <li><Link to={`/user/program`}>Programs</Link></li>
                <li><Link to={`/login`}>Login</Link></li>
            </ul>
        </>
    )
}

export default Home