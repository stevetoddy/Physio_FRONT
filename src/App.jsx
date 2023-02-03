import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Users from './components/Users'
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
import Navbar from './components/Navbar'



export function App() {

    const nav = useNavigate()
   
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
    }, [loginDetails, fetchOneProgram])
    
         
        
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
                exercises: {
                    name: name,
                    image: "IMAGE LINK",
                    info: info
                    }
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

            
    
        } catch (err) {
            <h2>{err.message}</h2>
        }} 


        // GET One Program by ID 

        const [oneProgram, setOneProgram] = useState([]);

        async function fetchOneProgram() {
            let userId = `http://localhost:4001/programs/${sessionStorage.ProgramId.substring(1, 25)}/`
            const res = await fetch(userId)
            const data = await res.json()
            setOneProgram(data)
        }

        // const [oneProgramByName, setOneProgramByName] = useState([]);

        // async function getProgramByName(name) {
        //     let program = `http://localhost:4001/programs/name/${name}/`
        //     const res = await fetch(program)
        //     const data = await res.json()
        //     setOneProgramByName(data)

        // }


    return (
        <>

            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/users' element={<Users />} />
                <Route path='/user/program' element={<UserPrograms userPrograms={userPrograms} />} />
                <Route path='/programs' element={<Programs userPrograms={userPrograms} />} />
                <Route path='/programs/:id' element={<UserPrograms />} />
                <Route path='/login' element={<Login loginDetails={loginDetails} />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/badDetails' element={<BadLogin />} />
                <Route path='/chart' element={<Progress id={id}/>} />
                <Route path='/progress' element={<Progress userPrograms={userPrograms} />} />
                <Route path='/createname' element={<CreateProgramName newProgramName={newProgramName} programName={programName} setProgramName={setProgramName} fetchOneProgram={fetchOneProgram} />} />
                <Route path='/createbody' element={<CreateProgramBody addExercise={addExercise} programName={programName} oneProgram={oneProgram} fetchOneProgram={fetchOneProgram} />} />
                <Route path='/updatedprogram' element={<UpdatedProgram programName={programName} oneProgram={oneProgram}/>} />
                <Route path='*' element={<h4>Page not found!</h4>} />
            </Routes>
        </>
    )
}

export default App

