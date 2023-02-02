import React, { useState } from 'react'

const Card = ({ image, exerciseName, info, onSubmit }) => {

    const [complete, setComplete] = useState(0)
    const [pain, setPain] = useState(0)
    const [diff, setDifficulty] = useState(0)

    const handleSubmit = () => {
        onSubmit({
            image,
            exerciseName,
            info, 
            complete, 
            pain,
            diff
        })
    }

    return (
        <>
            <div className="card">
            <img src={ image } className="card-img-top" alt="Exercise Image" />
                <div className="card-body">
                    <h5 className="card-title">{ exerciseName }</h5>
                    <p className="card-text">{ info }</p>
                    <div>
                        <label htmlFor="complete">Completed</label>
                        <input 
                        type="checkbox"
                        id="complete"
                        onChange={() => setComplete(1)}/>
                    </div>
                <div>
                    <label htmlFor="pain/diff">Pain (0-10)</label>
                    <select 
                        id="scale"
                        value={pain}
                        onChange={e => setPain(e.target.value)}
                        >
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
                </div>
                <div>
                <label htmlFor="pain/diff">Difficulty (0-10)</label>
                <select 
                    id="scale"
                    value={diff}
                    onChange={e => setDifficulty(e.target.value)}>
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
                </div>
            </div>
        </div>
        <br />
        </>
    )
}

export default Card