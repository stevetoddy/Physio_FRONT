import { React, useState, useEffect }from 'react'
import { useNavigate } from 'react-router-dom'

nav = useNavigate()


const BuildProgram = ({ id }) => {
  
///////////////////////////////////////////////////////////////////////////////////////////////

    // POST Login Details
  const newProgram = async ( name, exercises ) => {

    try {      
        const newProgram = {
            name: name, 
            exercises: exercises, 
            userID: id
        }

        const userLogin = await fetch('http://localhost:4001/programs', {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newLogin)
        })

        localStorage.clear()

        const data = await userLogin.json()
        console.log(data)
        sessionStorage.setItem('token', JSON.stringify(data))
        const info = jwt_decode(sessionStorage.token)
        sessionStorage.clear()
        sessionStorage.setItem('id', JSON.stringify(info.comparedUser[0]._id))
        nav(`/home`)

    } catch (err) {
        nav('/buildprogram')
    }}
  
///////////////////////////////////////////////////////////////////////////////////////////////

    const [data,setData] = useState({
        email:"",
        password:""
    });
                
    const { email, password } = data;
            
    const changeHandler = e => {
        const userDetails = {[e.target.name]:[e.target.value]}

        setData({...data, [e.target.name]:[e.target.value]});
        }  
        
    const submitHandler = e => {
        e.preventDefault();
        loginDetails(data.email[0], data.password[0])
    }
  
///////////////////////////////////////////////////////////////////////////////////////////////


    return (
        <>
        <form onSubmit={submitHandler}>
                <input type="text" name="email" value={email}
                onChange={changeHandler}/><br />
            
                <input type="password" name="password" value={password}
                onChange={changeHandler}/><br />
            
                <input type="submit" name="submit" />
        </form>
    </>
    )
}

export default BuildProgram