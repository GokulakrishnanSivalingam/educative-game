import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import as from '../cg.gif'
import aa from '../gg.gif';
import "./App.css"
import {Link } from "react-router-dom"

function App() {
  
  return (
    <div>
    <Navbar/>
  

    <div className="card-container">
 <div className="card-avs"> 
  <h1>Riddle</h1>
<Link to="/g2">  <img src={aa} alt="" /></Link>
 
  </div>
  <div className="card-avs">  
    <h1>Scenario quizz</h1>
 <Link to="/video/1"><img src={as} alt="" /></Link> 

</div>
</div> 
<div className="container1"><div className="gif">
  
  </div>
  <div className="gif"></div></div>
   <Footer/>
    </div>
  );
}

export default App;

