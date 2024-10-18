
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import App from "./App.jsx";
import Login from "./Authentation/Login.jsx";
import Register from "./Authentation/Register.jsx"; 
import DrawingPad from"./Drawing.jsx"
import Game from './Game.jsx'
import Feedback from './Feedback.jsx'
import Game2 from './Game2.jsx'
function Index() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feedback" element={<Feedback/>} />
        <Route path="/video/:id" element={<Game/>} />
        <Route path="/g2" element={<Game2/>} />
        
        
        
       
      </Routes>
    </Router>
  );
}
export default Index;