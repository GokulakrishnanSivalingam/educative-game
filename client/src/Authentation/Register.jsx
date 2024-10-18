import { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { BiSolidUserRectangle } from "react-icons/bi";
import Navbar from '../Navbar';
function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmpassword, setConfirmPassword] = useState("")
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmpasswordError, setConfirmPasswordError] = useState('');
  
  async function Log(e) {
    e.preventDefault();

    let isValid = true;

   
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError
  
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    }
    if (!confirmpassword) {
      setConfirmPasswordError('confirm Password is required');
      isValid = false;
    }
    if (password!=confirmpassword) {
      setConfirmPasswordError('Password is incorrect');
      isValid = false;
    }
    
    if (!isValid) {
      return; 
    }
    const resp = await fetch("http://localhost:5172/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        confirmpassword
      }),
    })
    if (resp.ok) {
    
      navigate('/'); 
    } else {
      
      console.log("Login failed");
    }

 
  }

   
  

  return (
    <>
      <div>
        <Navbar></Navbar>
   <div className="cont">   <fieldset>
    <center><div className="icon"> <h1>< BiSolidUserRectangle /></h1></div> </center>  <br />
        <form >
          <label htmlFor="email">Email</label><br />
          <input 
            type="text" 
            name="email" 
            onChange={(e) => setEmail(e.target.value)} 
            required
          /><br />{emailError && <p className="error-text">{emailError}</p>}
          
          <label htmlFor="password">Password</label><br />
          <input 
            type="password" 
            name="password" 
            onChange={(e) => setPassword(e.target.value)} 
            required
          /><br />
               {passwordError && <p className="error-text">{passwordError}</p>} 
           <label htmlFor="password">confirm-Password</label><br />
          <input 
            type="password" 
            name="confirmpassword" 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            
          />   
           {confirmpasswordError && <p className="error-text">{confirmpasswordError}</p>} <br /><br />
     <center><div className="auth"><button onClick={Log}>register</button></div></center>   
     
        </form>
      
        </fieldset></div>  <br />
    

      </div>
    </>
  )
}

export default Register