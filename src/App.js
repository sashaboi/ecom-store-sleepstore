import React from 'react'
import {Routes , Route} from "react-router-dom"; 
import Mockman from "mockman-js";
import Homepage from './pages/Homepage'
import WishList from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import SignUp from "./pages/auth/SignUp"
import Login from "./pages/auth/Login"
import Navbar from './pages/components/Navbar';
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