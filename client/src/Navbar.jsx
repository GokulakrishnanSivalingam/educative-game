
import React, { useState } from 'react';
import './Navbar.css';
import { MdOutlineLogin } from "react-icons/md";



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">AVLearn</div>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li> <a href="/">Home</a></li>
        <li> <a to="/">About</a></li>
        <li><a to="/feedback">Feedback</a></li>
        <li><a href="/register">Register</a></li>
    
 
 <div className="log"><li><a href='/login'><MdOutlineLogin/></a></li></div>
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
