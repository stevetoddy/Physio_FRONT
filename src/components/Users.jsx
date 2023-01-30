import React from 'react'
import { Link } from 'react-router-dom'

const Users = ({ users }) => {
    return (
        <>
            <h1>Users</h1>
            {users.length > 0 &&
                <ul>
                {users.map((user, index) => (
                    <li key={index}>

                        <Link to={`/`}>{user.username}</Link>

                    </li>
                ))}
                </ul>
            }
        </>
    )
}

export default Users