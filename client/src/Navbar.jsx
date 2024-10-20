
import React, { useState } from 'react';
import './Navbar.css';
import { MdOutlineLogin } from "react-icons/md";
import {Link } from "react-router-dom"



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">AVLearn</div>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li> <Link to="/">Home</Link></li>
        <li> <Link to="/">About</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
        <li><Link to="/register">Register</Link></li>
    
 
 <div className="log"><li><Link to='/login'><MdOutlineLogin/>  login</Link></li></div>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
   
    </nav>
  );
}

export default Navbar;
