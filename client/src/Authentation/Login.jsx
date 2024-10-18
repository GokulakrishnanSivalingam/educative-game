import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Navbar from '../Navbar';
import { FaUser } from "react-icons/fa";


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  async function Log(e) {
    e.preventDefault();

    let isValid = true;

  
    setEmailError('');
    setPasswordError('');

    
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    }

    if (!isValid) {
      return; 
    }

    
    const resp = await fetch('http://localhost:5172/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (resp.ok) {
      navigate('/'); 
    } else {
      console.log('Login failed');
    }
  }

  return (
    <>
      <div>
        <Navbar></Navbar>
        <div className="cont">
        <fieldset>
     <center>  <div className="icon"><h1><FaUser/></h1></div> </center>  <br />
          <form>
            <label htmlFor="email">Email</label><br />
            <input
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              
            /><br />
         
            {emailError && <p className="error-text">{emailError}</p>}
            
            <label htmlFor="password">Password</label><br />
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)} 
            /><br />
          
            {passwordError && <p className="error-text">{passwordError}</p>}

            <div className="check">
              <input type="checkbox" />
              <span>remember me</span>
            </div>
            <br />
            <center>
             <div className="auth"> <button type="submit" onClick={Log}>Login</button></div>
            </center>
          </form>
          <br />
          <p>do not have any account? <a href="/register">register</a></p>
        </fieldset></div>
        <br />
      </div>
    </>
  );
}

export default Login;
