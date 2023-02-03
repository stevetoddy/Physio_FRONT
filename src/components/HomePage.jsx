import React from 'react'
import Avatar from './Images/avatar.png'

const Home = () => {
    return (
        <>
            <div >
                <img style={{width:"200px", margin:"20px"}}className="avatar" src={Avatar}></img>
                <h1>Welcome to Physio App</h1>
            </div>
        </>
    )
}

export default Home