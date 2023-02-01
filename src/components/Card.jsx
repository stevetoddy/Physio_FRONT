import React from 'react'

const Card = ({ image, exerciseName, info }) => {
    
    return (
        <>
            <div className="card">
            <img src={ image } className="card-img-top" alt="Exercise Image" />
                <div className="card-body">
                    <h5 className="card-title">{ exerciseName }</h5>
                    <p className="card-text">{ info }</p>
                    <div>
            <label for="complete">Completed</label>
            <input type="checkbox" id="complete"/>
          </div>
          <div>
            <label for="pain/diff">Pain (0-10)</label>
            <select id="scale">
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
            <label for="pain/diff">Difficulty (0-10)</label>
            <select id="scale">
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