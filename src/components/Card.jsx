import React from 'react'

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
                            <select value={pain} onChange={(e) => updateMetrics(index, e.target.value, difficulty, completion)}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            </select>
                        </p>
                        <p>Difficulty:
                            <select value={difficulty} onChange={(e) => updateMetrics(index, pain, e.target.value, completion)}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            </select>
                        </p>
                        <p>Completion:
                            <input 
                            type="checkbox" 
                            checked={completion === 1} 
                            onChange={(e) => updateMetrics(index, pain, difficulty, e.target.checked ? 1 : 0)} 
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