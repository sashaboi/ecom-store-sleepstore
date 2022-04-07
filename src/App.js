import React from 'react'
import {Routes , Route} from "react-router-dom"; 
import Mockman from "mockman-js";
import Homepage from './pages/home/Homepage'
import WishList from "./pages/wishlist/Wishlist";
import Cart from "./pages/cart/Cart";
import Products from "./pages/products/Products";
import Product from './pages/product/Product';
import SignUp from "./pages/auth/signup/SignUp"
import Login from "./pages/auth/login/Login"
import LostElement from './pages/LostElement/LostElement';
const App = () => {
  return (
    <div>
      {/* use location react router dom */}
      <Routes>
          <Route path="/*" element={<LostElement />}/>
          <Route path="/mockman" element={<Mockman />}/>
          <Route path="/" element={<Homepage />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/wishlist" element={<WishList />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/product/:id" element={<Product />}/>
          <Route path="/SignUp" element={<SignUp />}/>
          <Route path="/Login" element={<Login />}/>
      </Routes>
    </div>
  )
}

export default App