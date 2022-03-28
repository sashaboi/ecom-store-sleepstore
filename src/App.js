import React from 'react'
import {Routes , Route} from "react-router-dom"; 
import Mockman from "mockman-js";
import Homepage from './pages/home/Homepage'
import WishList from "./pages/wishlist/Wishlist";
import Cart from "./pages/cart/Cart";
import Products from "./pages/products/Products";
import SignUp from "./pages/auth/signup/SignUp"
import Login from "./pages/auth/login/Login"
import Navbar from './pages/components/navbar/Navbar';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
          <Route path="/mockman" element={<Mockman />}/>
          <Route path="/" element={<Homepage />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/wishlist" element={<WishList />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/SignUp" element={<SignUp />}/>
          <Route path="/Login" element={<Login />}/>
      </Routes>
    </div>
  )
}

export default App