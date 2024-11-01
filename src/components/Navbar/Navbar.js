// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../../Home/Home';
import Login from '../../Login/Login';
import Register from '../../Register/Register';
const Navbar = () => {
    return (
        <BrowserRouter>
            <div class="navbar">
                <div class="navbar-start">
                    <a class="navbar-item">Ripple UI</a>
                </div>
                <div class="navbar-end"></div>
                <ul>
                    <li>
                        <Link to="/home" class="navbar-item">Home</Link>
                    </li>
                    <li>
                        <Link to="/login" class="navbar-item">Login</Link>
                    </li>
                    <li>
                        <Link to="/register" class="navbar-item">Register</Link>
                    </li>
                </ul>
            </div>

            <Routes>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
            </Routes>
        </BrowserRouter>
    );
};


export default Navbar;