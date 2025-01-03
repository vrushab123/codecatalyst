import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS for styling

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle the menu
    };

    return (
        <nav className="navbar">
            <button className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className="logo">
                <img src="/assets/navicon.png" alt="Logo" /> {/* Replace with your logo */}
            </div>
            <ul className={`nav-links ${isOpen ? "active" : ""}`}>
                <li><a href="/">HOME</a></li>
                <li><a href="/blog">BLOG</a></li>
                <li><a href="/items">ITEMS</a></li>
                <li><a href="#hire-us">WORK WITH US!</a></li>
                <li><a href="/projects">PROJECTS</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
