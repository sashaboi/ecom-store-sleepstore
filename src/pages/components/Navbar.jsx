import React from 'react'
import {Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <ul>
        <li><Link to="/"> Home </Link> </li>
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