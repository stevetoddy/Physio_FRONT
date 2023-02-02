import { React, useState } from 'react'
import './Login.css'

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
           <div className="Auth-form-container">
                <form className="Auth-form" onSubmit={submitHandler}>
                    <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Login In</h3>
                    <div className="inputs">
                    
                    <input className="email" type="text" name="email" placeholder="Enter email" value={email}
                    onChange={changeHandler}/><br />
                
                    <input className="password" type="password" name="password" placeholder="Enter password" value={password}
                    onChange={changeHandler}/><br />
                
                      <button className="login-btn" type="submit" name="submit">Login</button>
                        </div>
                        </div>
                        </form>
            </div>  
        </>
    )
}

export default Login



