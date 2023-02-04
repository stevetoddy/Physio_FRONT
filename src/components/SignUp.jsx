import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SignUp.css'

const SignUp = () => {

  const [formData, setFormData] = useState({username: '', email: '', password: ''})
  const navigate = useNavigate()

  const handleFormDataChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('http://physioappapi-production.up.railway.app/auth/signup', {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json"},
    })

    const data = await res.json()
    
    navigate('/login')
    
  }

  return (
    <>
    
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
               <div className="inputs">
                <label style={{margin: "20px 0 0"}} htmlFor="">Name</label>
                 <div className="username-signup-container">
                      <input className="username"type="text" name="username" placeholder="e.g JaneDoe" value={formData.username}
                      onChange={handleFormDataChange}/><br />
                </div>
               
                <label style={{margin: "20px 0 0"}} htmlFor="">Email</label>
                <div className="email-signup-container">
                    <input className="email" type="email" name="email" placeholder="e.g janedoe@email.com" value={formData.email}
                    onChange={handleFormDataChange}/><br />
                </div>
                
                <label style={{margin: "20px 0 0"}} htmlFor="">Password</label>
                <div className="password-signup-container">
                    <input className="password"type="password" name="password" placeholder="Must be at least 5 Characters long" value={formData.password}
                    onChange={handleFormDataChange}/><br />
               </div>
       
            </div>
             <button style={{margin: "20px 0"}} className="login-btn" type="submit" name="submit">Submit</button>
          </div>
        </form>
        </div> 
    </>
  )
}

export default SignUp