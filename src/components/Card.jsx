import React from 'react'
import './Card.css'

const Card = ({ image, exerciseName, info, pain, difficulty, completion, updateMetrics, index }) => {

    return (
        <>
       
            <div className="card" style={{textAlign:"center", width:"400px", padding:"2rem", marginLeft:"30vw"}}>
            <img src={ image } className="card-img-top" alt="Exercise Image" />
                <div className="card-body">
                    <h5 className="card-title">{ exerciseName }</h5>
                    <p className="card-text">{ info }</p>
                    <div>
                        <p>Pain: 
                            <select value={pain} onChange={(e) => updateMetrics(index, parseInt(e.target.value,10), difficulty, completion)}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            </select>
                        </p>
                        <p>Difficulty:
                            <select value={difficulty} onChange={(e) => updateMetrics(index, pain, parseInt(e.target.value), completion)}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            </select>
                        </p>
                        <p>Completion:
                            <input 
                            type="checkbox" 
                            checked={completion === 1} 
                            onChange={(e) => updateMetrics(index, pain, difficulty, parseInt(e.target.checked ? 1 : 0, 10))} 
                            />
                        </p>
                </div>
            </div>
        </div>
                <br />
                
        </>
    )
}

export default Card