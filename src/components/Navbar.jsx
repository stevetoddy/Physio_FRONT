import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (

        // 'class' is replaced with 'className' to avoid errors

        <nav id="heading" className="navbar navbar-expand-lg bg-warning bg-gradient">
            <div  className="container-fluid">

                {/* 'Link' replaces anchor tags, and 'to' replaces the href to avoid re-render*/}
                {/* Anything using 'Link' must be a child of a 'BrowserRouter' */}
                <Link  id='journal-h1' className="navbar-brand"  to="/">
                    Physio App
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/programs">
                                Programs List
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/chart">
                                Progress
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/createname">
                                Create Program
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar