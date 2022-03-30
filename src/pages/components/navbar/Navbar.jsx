import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import "../navbar/navbar.css";

import { useCart } from "../../context/cartcontext";
const Navbar = (mode) => {
  const {cartlength } = useCart();
  
  console.log(mode);
  const classnametext = mode.mode + " navbar-parent";
  return (
    <div className={classnametext}>
      <ul className="left-menu ">
        <li>
          <h1>
            <Link to="/">Drone Store </Link>
          </h1>{" "}
        </li>
      </ul>

      <ul className="right-menu">
        <li>
          <Link to="/mockman"> Mockman </Link>{" "}
        </li>

        <li>
          <Link to="/wishlist"> Wishlist </Link>{" "}
        </li>
        <li>
          <Link to="/products"> Products </Link>
        </li>
        <li>
          <Link to="/Login"> Login </Link>
        </li>
        <li>
          <Link to="/Signup"> Signup </Link>
        </li>
        <li className="cart-link-navbar">
          <Link to="/cart">
            {" "}
            <BsFillCartFill />{" "}
          </Link>
          <div className="cart-nav-badge">{cartlength}</div>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
