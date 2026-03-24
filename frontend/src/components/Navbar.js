import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import './Navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div className='navbar-container'>
            <div className='main-name'><Link to="/">GAGAN</Link></div>
            <div className='main-links'>
                <p><Link to=" /project">Project</Link></p>
                <p>Education</p>
                <p><Link to="/about">About</Link></p>
                <p><Link to='/contact'>Contact</Link></p>
            </div>
            <div class='main-icons'>
                <p><FaLinkedin /></p>
                <p><FaGithub /></p>
                <p><SiLeetcode /></p>
            </div>
        </div>
    );
}

export default Navbar;