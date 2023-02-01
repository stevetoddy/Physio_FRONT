import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

  const [formData, setFormData] = useState({username: '', email: '', password: ''})
  const navigate = useNavigate()

  const handleFormDataChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('http://localhost:4001/auth/signup', {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json"},
    })

    const data = await res.json()
    
    navigate('/login')
    
  }

  return (
    <>
        <h1>Sign Up</h1>
        <h2>Please fill in your details here</h2>
        <form onSubmit={handleSubmit}>
                <div className="username-signup-container">
                    <label>Username:</label>
                    <input type="text" name="username" placeholder="e.g JaneDoe" value={formData.username}
                    onChange={handleFormDataChange}/><br />
                </div>
                <div className="email-signup-container">
                    <label>Email:</label>
                    <input type="email" name="email" placeholder="e.g janedoe@email.com" value={formData.email}
                    onChange={handleFormDataChange}/><br />
                </div>
                <div className="password-signup-container">
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password}
                    onChange={handleFormDataChange}/><br />
                </div>
                    <input type="submit" name="submit" value="Sign Up"/>
        </form>
    </>
  )
}

export default SignUp