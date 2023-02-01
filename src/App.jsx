
import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, useParams, useNavigate } from 'react-router-dom'
import Users from './components/Users'
import HomePage from './components/HomePage'
import Programs from './components/UserPrograms'
import Progress from './components/Progress'
import UserPrograms from './components/UserPrograms'
import Login from './components/Login'
import Chart from './components/Chart'
import jwt_decode from 'jwt-decode'
import BadLogin from './components/BadLogin'
import SignUp from './components/SignUp'
import CreateProgramName from './components/CreateProgramName'
import CreateProgramBody from './components/CreateProgramBody'


function App() {
   
    const nav = useNavigate()


    // TEMP Route getting all Users
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function fetchUsers() {
            const res = await fetch('http://localhost:4001/users')
            const data = await res.json()
            setUsers(data)
        }
        fetchUsers()
    }, [])


    // TEMP Route getting all Programs
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
        nav(`/`)

    } catch (err) {
        nav('/badDetails')
    }}


    // Logged In Users Id
    const id = sessionStorage.id
    const programId = sessionStorage.programId


    // GET Logged In Users Programs 
    const [userPrograms, setUserPrograms] = useState([])
       
    useEffect(() => {
    async function fetchUserPrograms() {
        let userId = `http://localhost:4001/programs/users/${id.substring(1, 25)}/`
        const res = await fetch(userId)
        const data = await res.json()
        setUserPrograms(data)
    }
    fetchUserPrograms()
    }, [])
    
         
        
    const [programName, setProgramName] = useState([]);

    // POST New Program Name
    const newProgramName = async (name, userID) => {

        try {      
            const newPName = {
                name: name,
                userID: userID
            }
    
            const newName = await fetch('http://localhost:4001/programs/', {
                method: 'POST',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newPName)
            })
    
            const data = await newName.json()

            sessionStorage.setItem('ProgramId', JSON.stringify(data._id))
            nav('/createbody') 
    
        } catch (err) {
            <h2>{err.message}</h2>
        }}


    // PUT New Exercises
    const addExercise = async (name, info) => {

        try {      
            const exercise = {
                name: name,
                image: "Temp Image",
                info: info
            }
    
            const newExercise = await fetch(`http://localhost:4001/programs/exercise/${programId.substring(1, 25)}`, {
                method: 'PUT',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(exercise)
            })
    
            const data = await newExercise.json()

            
            console.log(data)
            nav('/user/programs') 
    
        } catch (err) {
            <h2>{err.message}</h2>
        }} 



    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/users' element={<Users />} />
                <Route path='/programs' element={<Programs />} />
                <Route path='/user/program' element={<UserPrograms userPrograms={userPrograms} />} />
                <Route path='/login' element={<Login loginDetails={loginDetails} />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/badDetails' element={<BadLogin />} />
                <Route path='/chart' element={<Chart />} />
                <Route path='/progress' element={<Progress userPrograms={userPrograms} />} />
                <Route path='/createname' element={<CreateProgramName newProgramName={newProgramName} programName={programName} setProgramName={setProgramName} />} />
                <Route path='/createbody' element={<CreateProgramBody addExercise={addExercise} programName={programName} />} />
                <Route path='*' element={<h4>Page not found!</h4>} />
            </Routes>
        </>
    )
}

export default App

