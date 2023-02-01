
import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, useParams, useNavigate } from 'react-router-dom'
import Users from './components/Users'
import HomePage from './components/HomePage'
import Programs from './components/UserPrograms'
import UserPrograms from './components/UserPrograms'
// import Landing from './components/Landing'
import Login from './components/Login'
import jwt_decode from 'jwt-decode'
import BadLogin from './components/BadLogin'
import SignUp from './components/SignUp'
import Progress from './components/Progress'


function App() {
   

    const nav = useNavigate()

    const [users, setUsers] = useState([])

    useEffect(() => {
        async function fetchUsers() {
            const res = await fetch('http://localhost:4001/users')
            const data = await res.json()
            setUsers(data)
        }
        fetchUsers()
    }, [])

    const [programs, setPrograms] = useState([])

    useEffect(() => {
        async function fetchPrograms() {
            const res = await fetch(`http://localhost:4001/programs/`)
            const data = await res.json()
            setPrograms(data)
        }
        fetchPrograms()
    }, [])

   


    // POST Login Details
    const loginDetails = async (email, password) => {

    try {      
        const newLogin = {
            email : email,
            password: password
        }

        const userLogin = await fetch('http://localhost:4001/auth/login', {
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
        nav('/badDetails')
    }}

    const id = sessionStorage.id

    return (
        <>
            <Routes>
                {/* <Route path='/' element={<Landing />} /> */}
                <Route path='/home' element={<HomePage />} />
                <Route path='/users' element={<Users />} />
                <Route path='/programs' element={<Programs />} />
                <Route path='/user/program' element={<UserPrograms id={id} />} />
                <Route path='/login' element={<Login loginDetails={loginDetails} />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/badDetails' element={<BadLogin />} />
                <Route path='/users/progress' element={<Progress id={id} />} />
                <Route path='*' element={<h4>Page not found!</h4>} />
            </Routes>
        </>
    )
}

export default App

