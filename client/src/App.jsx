import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import as from '../cg.gif'
import aa from '../gg.gif';
import "./App.css"

function App() {
  
  return (
    <div>
    <Navbar/>
  

    <div className="card-container">
 <div className="card-avs"> 
  <h1>Riddle</h1>
<a href="/g2">  <img src={aa} alt="" /></a>
 
  </div>
  <div className="card-avs">  
    <h1>Scenario quizz</h1>
 <a href="/video/1"><img src={as} alt="" /></a> 

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

