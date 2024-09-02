import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/nav.css';
import logo from './img/logo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header>
                <div className="logo">
                    <div className="name">
                        <img src={logo} height="80px" width="80px" alt="Anshul Kumar Logo" />
                        <h3>&lt;</h3>
                        <h3 className="color">Anshul</h3>
                        <h3>/&gt;</h3>
                    </div>

                    <div className="menu-button" onClick={toggleMenu}>{isMenuOpen ? 'X' : '☰'}</div>
                </div>
                <nav>
                    <ul className={`nav-list  ${isMenuOpen ? 'show' : ''}`}>
                        <li className="nav-item"><Link to="/">Home</Link></li>
                        <li className="nav-item"><Link to="/about">About</Link></li>
                        <li className="nav-item"><Link to="/blogs">Blogs</Link></li>
                        <li className="nav-item"><Link to="/skills">Skills</Link></li>
                        <li className="nav-item"><Link to="/project">Projects</Link></li>
                        <li className="nav-item e"><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
