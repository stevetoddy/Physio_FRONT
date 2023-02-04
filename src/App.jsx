import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import HomePage from './components/HomePage'
import Programs from './components/Programs'
import Progress from './components/Progress'
import UserPrograms from './components/UserPrograms'
import Login from './components/Login'
import jwt_decode from 'jwt-decode'
import BadLogin from './components/BadLogin'
import SignUp from './components/SignUp'
import CreateProgramName from './components/CreateProgramName'
import CreateProgramBody from './components/CreateProgramBody'
import UpdatedProgram from './components/UpdatedProgram'



export function App() {

    const nav = useNavigate()
   
    // POST Login Details
    const loginDetails = async (email, password) => {

    try {      
        const newLogin = {
            email : email,
            password: password
        }

        const userLogin = await fetch('https://physioappapi-production.up.railway.app/auth/login', {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newLogin)
        })

        localStorage.clear()

        const data = await userLogin.json()
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
    const programId = sessionStorage.ProgramId



    
         
        
    const [programName, setProgramName] = useState([])

    // POST New Program Name
    const newProgramName = async (name, userID) => {

        try {      
            const newPName = {
                name: name,
                userID: userID
            }
    
            const newName = await fetch('https://physioappapi-production.up.railway.app/programs/', {
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


    // GET Logged In Users Programs 
    const [userPrograms, setUserPrograms] = useState([])
       
    useEffect(() => {
    async function fetchUserPrograms() {
        let userId = `https://physioappapi-production.up.railway.app/programs/users/${id.substring(1, 25)}/`
        const res = await fetch(userId)
        const data = await res.json()
        setUserPrograms(data)
    }
    fetchUserPrograms()
    }, [id, programId])


    // PUT New Exercises
    const addExercise = async (name, info) => {

        try {      
            const exercise = {
                exercises: {
                    name: name,
                    image: "IMAGE LINK",
                    info: info
                    }
                }

            const newExercise = await fetch(`https://physioappapi-production.up.railway.app/programs/exercise/${programId.substring(1, 25)}`, {
                method: 'PUT',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(exercise)
            })
    
            const data = await newExercise.json()

        } catch (err) {
            <h2>{err.message}</h2>
        }} 


        // GET One Program by ID 

        const [oneProgram, setOneProgram] = useState([])

        async function fetchOneProgram() {
            let userId = `https://physioappapi-production.up.railway.app/programs/${sessionStorage.ProgramId.substring(1, 25)}/`
            const res = await fetch(userId)
            const data = await res.json()
            setOneProgram(data)
        }

    return (
        <>
            <Routes>
                <Route path='/login' element={<Login loginDetails={loginDetails} />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/' element={<HomePage />} />
                <Route path='/user/program' element={<UserPrograms userPrograms={userPrograms} />} />
                <Route path='/programs' element={<Programs userPrograms={userPrograms} />} />
                <Route path='/programs/:id' element={<UserPrograms />} />
                <Route path='/badDetails' element={<BadLogin />} />
                <Route path='/chart' element={<Progress id={id} userPrograms={userPrograms}/>} />
                <Route path='/progress' element={<Progress userPrograms={userPrograms} id={id} />} />
                <Route path='/createname' element={<CreateProgramName newProgramName={newProgramName} programName={programName} setProgramName={setProgramName} fetchOneProgram={fetchOneProgram} />} />
                <Route path='/createbody' element={<CreateProgramBody addExercise={addExercise} programName={programName} oneProgram={oneProgram} fetchOneProgram={fetchOneProgram} />} />
                <Route path='/updatedprogram' element={<UpdatedProgram programName={programName} oneProgram={oneProgram}/>} />
                <Route path='*' element={<h4>Page not found!</h4>} />
            </Routes>
        </>
    )
}

export default App

