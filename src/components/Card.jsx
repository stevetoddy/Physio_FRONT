import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ image, exerciseName, info }) => {
    
    return (
        <>
            <div className="card">
            <img src={ image } className="card-img-top" alt="Exercise Image" />
                <div className="card-body">
                    <h5 className="card-title">{ exerciseName }</h5>
                    <p className="card-text">{ info }</p>
                    <Link to="/" className="btn btn-primary">Complete</Link>
                </div>
            </div>
            <br />
        </>
    )
}

export default Card