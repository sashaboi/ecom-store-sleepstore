import React from 'react'
import {Link } from "react-router-dom"
import '../navbar/navbar.css'
const Navbar = () => {
  return (
    <div className='navbar-parent'>
        
          <ul className='left-menu'>
            <li><h1><Link to="/">Drone Store </Link></h1> </li>
          </ul>
          
          <ul className='right-menu'>
            <li><Link to="/mockman"> Mockman </Link> </li>
            <li><Link to="/cart"> Cart </Link> </li>
            <li><Link to="/wishlist"> Wishlist </Link> </li>
            <li><Link to="/products"> Products </Link></li>
            <li><Link to="/Login"> Login </Link></li>
            <li><Link to="/Signup"> Signup </Link></li>
          </ul>  
            
        
    </div>
  )
}

export default Navbar