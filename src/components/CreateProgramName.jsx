import { React } from 'react'
import './CreateProgramName.css'


const CreateProgramName = ({ newProgramName, programName, setProgramName }) => {        
        
    const submitHandler = e => {
        e.preventDefault();
        newProgramName(programName, sessionStorage.id.substring(1, 25))
    }

    return (
        
        
        <div className="create-name-container">

        
            <form className="create-name-form" onSubmit={submitHandler}>
                <h3 className="program-name-heading">Program Name</h3>
               
                <input
                    
                    type="text"
                    className="input" 
                    id="exampleFormControlInput1"
                    name="programName"
                    value={programName}
                    placeholder="eg. Foot Rehab..."
                    onChange={(event) => setProgramName(event.target.value)}
              />
                <br />
                    <button className="name-save-button" type="submit" name="submit">Save</button>
                    {/* <input type="submit" name="submit" className="btn btn-primary" /> */}
            </form>
        </div>
    )
}

export default CreateProgramName