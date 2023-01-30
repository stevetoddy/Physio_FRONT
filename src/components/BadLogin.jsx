import React from 'react'
import { Link } from 'react-router-dom'

const BadLogin = () => {
  return (
    <div>
        <h2>Login Details are wrong!</h2>
        <Link to='/login'>Go Back to Login</Link>
    </div>
  )
}

export default BadLogin