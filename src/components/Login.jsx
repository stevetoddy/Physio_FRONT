import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = ({ loginDetails }) => {

    sessionStorage.clear()

    const [data,setData] = useState({
        email:"",
        password:""
    })
                
    const { email, password } = data
            
    const changeHandler = e => {
        const userDetails = {[e.target.name]:[e.target.value]}

        setData({...data, [e.target.name]:[e.target.value]})
        }  
        
    const submitHandler = e => {
        e.preventDefault()
        loginDetails(data.email[0], data.password[0])
    }
           
    return (
        <>
           <div className="Auth-form-container">
                <form className="Auth-form" onSubmit={submitHandler}>
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Login</h3>
                        <div className="inputs">
                            
                            <label style={{margin: "20px 0 0"}} htmlFor="">Email</label>

                            <input className="email" type="text" name="email" placeholder="Enter email" value={email}
                            onChange={changeHandler}/><br />

                            <label style={{margin: "20px 0 0"}} htmlFor="">Password</label>

                            <input className="password" type="password" name="password" placeholder="Enter password" value={password}
                            onChange={changeHandler}/><br />
                        
                            <button style={{margin: "20px 0"}} className="login-btn" type="submit" name="submit">Login</button>
                        </div>
                        <Link  style={{margin:"10px"}} to={`/signup`}>Sign Up</Link>

                    </div>

                </form>
            </div>  
            <div>
            </div>
        </>
    )
}

export default Login



