import { React } from 'react'


const CreateProgramName = ({ newProgramName, programName, setProgramName }) => {        
        
    const submitHandler = e => {
        e.preventDefault();
        newProgramName(programName, sessionStorage.id.substring(1, 25))
    }

    return (
        <>
            <form className="mb-3" onSubmit={submitHandler}>
                <h3 style={{margin: "2rem"}}>Program Name</h3>
               
                <input
                    style={{margin: "2rem"}}
                    type="text"
                    className="form-control" 
                    id="exampleFormControlInput1"
                    name="programName"
                    value={programName}
                    placeholder="eg. Foot Rehab..."
                    onChange={(event) => setProgramName(event.target.value)}
                />
                <br />
                    <button style={{margin: "0 2rem 2rem"}} className="login-btn" type="submit" name="submit">Save</button>
                    {/* <input type="submit" name="submit" className="btn btn-primary" /> */}
            </form>
        </>
    )
}

export default CreateProgramName