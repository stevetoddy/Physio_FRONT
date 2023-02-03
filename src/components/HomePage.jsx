import React from 'react'
import Avatar from './Images/avatar.png'

import './Homepage.css'
import Navbar from './Navbar'

const Home = () => {
    return (
        <>
        <Navbar />

        <div className='homepage-container'>
            <div className="homepage-img-wrapper">
                <img className="avatar" src={Avatar}></img>
                <h1 className="welcome">Welcome to Physio App</h1>
            </div>
        </div>
        </>
    )
}

export default Home