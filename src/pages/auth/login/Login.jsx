import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";


import Navbar from '../../components/navbar/Navbar'
import '../login/login.css'
import { useAlert } from '../../context/AlertContext';

const Login = () => {
  const {showalert}=useAlert();
  const [email , setemail] =useState('adarshbalika@gmail.com')
  const [password , setpassword] =useState('adarshbalika')
  const data = {
    "email": email,
    "password": password
  }
  let navigate = useNavigate();
  const loginHandler = () =>{
    
    axios.post('/api/auth/login',data)
    .then((response)=>{
      showalert({text:"Logged in successfully",alerttype:"success"})
      localStorage.setItem('token', response.data.encodedToken);
      navigate('/products')
    },
    (error)=>{
      console.log(error);
    })
  }
  
  return (
    <div className='login-parent' >
      <Navbar mode={"non-home"} />
      <div className='login'>
        <h1 className='pagetitle'>Login</h1>
        <div className="hr-div"></div>

        <div className="form-container">
          <h3>Email</h3>
          <input onChange={(e)=>setemail(e.target.value)} type="email" name="" id="" placeholder='adarshbalika@gmail.com'/>
          <h3>Password</h3>
          <input onChange={(e)=>setpassword(e.target.value)} type="password" name="" id="" placeholder='adarshbalika' />
          <div onClick={()=>loginHandler()} className="login-btn">
            Login
          </div>
          <div className="extra-options">
            <div className="remember">
              <input type="checkbox" name="" id="" />
              Remember me
            </div>
            <p onClick={()=>loginHandler()}>login as guest</p>
            
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Login