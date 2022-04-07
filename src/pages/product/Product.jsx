import React from 'react'

import { useParams,useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import { useCart } from '../context/cartcontext'


 
import ProductCard from '../components/product-card/ProductCard'
import './Product.css'
const Product = () => {
    const navigate =useNavigate();
    const { state } =useCart();
    
    const {id} = useParams();
    
    const prodtoshow = state.find((obj)=>obj._id===id)
    
  return (
    <div className='single-product-parent'>
        <Navbar mode={"non-home"} />
        <ProductCard renderclass = "horizontal" product={prodtoshow} />
        
        <button className='addtocart' onClick={()=>navigate("/products")}>Back to Products</button>
    </div>
  )
}

export default Product