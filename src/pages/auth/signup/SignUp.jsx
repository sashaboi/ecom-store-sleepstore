import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import '../login/login.css'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [email , setemail] =useState('adarshbalak@gmail.com')
  const [password , setpassword] =useState('adarshbalika')
  const data = {
    "email": email,
    "password": password,
    "data1":"dummy data",
    "data2":"dummy data2"
  }
  let navigate = useNavigate();
  const loginHandler = () =>{
    
    axios.post('/api/auth/signup',data)
    .then((response)=>{
      console.log('singup successful!',response.data.encodedToken);
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
        <h1 className='pagetitle'>SignUp</h1>
        <div className="hr-div"></div>

        <div className="form-container">
          <h3>Email</h3>
          <input onChange={(e)=>setemail(e.target.value)} type="email" name="" id="" placeholder='adarshbalika@gmail.com'/>
          <h3>Password</h3>
          <input onChange={(e)=>setpassword(e.target.value)} type="password" name="" id="" placeholder='adarshbalika' />
          <div onClick={()=>loginHandler()} className="login-btn">
            Signup
          </div>
          <div onClick={()=>loginHandler()} className="secondary-btn">
          Default Signup
          </div>
          
        </div>
      </div>
      
    </div>
  )
}

export default SignUp