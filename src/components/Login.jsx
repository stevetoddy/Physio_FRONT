import { React, useState } from 'react'

const Login = ({ loginDetails }) => {

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

export default Login



