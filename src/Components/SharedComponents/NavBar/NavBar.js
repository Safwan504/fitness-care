import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand text-light ms-5" href="/"><strong>Fitness Care</strong></a>
                <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active ms-3 text-light" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-3 text-light" to="/mycourses">My Courses</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-3 text-light" to="/allServices">Admin</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-3 text-light" href="/">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-3 text-light" href="/">Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-5 ms-3 text-light" href="/login"><button className="btn btn-success">Login</button></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;