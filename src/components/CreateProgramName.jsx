import { React } from 'react'


const CreateProgramName = ({ newProgramName, programName, setProgramName }) => {        
        
    const submitHandler = e => {
        e.preventDefault();
        newProgramName(programName, sessionStorage.id.substring(1, 25))
    }

    return (
        <>
            <form className="mb-3" onSubmit={submitHandler}>
                <label htmlFor="exampleFormControlInput1" className="form-label">Program Name</label>
               
                <input
                    type="text"
                    className="form-control" 
                    id="exampleFormControlInput1"
                    name="programName"
                    value={programName}
                    placeholder="eg. Foot Rehab..."
                    onChange={(event) => setProgramName(event.target.value)}
                />
                <br />
                    <input type="submit" name="submit" className="btn btn-primary" />
            </form>
        </>
    )
}

export default CreateProgramName