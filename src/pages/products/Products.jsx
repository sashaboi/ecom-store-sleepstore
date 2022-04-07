import React from 'react'
import Navbar from '../components/navbar/Navbar'
import '../products/products.css'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import ProductCard from '../components/product-card/ProductCard'
import { AiFillStar } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import {useCart} from '../context/cartcontext' 
import Alert from '../components/Alert/Alert'
import { useAlert } from '../context/AlertContext'

const Products = () => {
  const {dispatch,state} = useCart(); 
  const  {alertstatus} = useAlert();
  const [localcategories , setlocalcategories] = useState([])
  const [inputvalue , setinputvalue] = useState(0)
  
  useEffect(()=>{
    
    axios.get('/api/categories')
    .then((response)=>{
      
      setlocalcategories(response.data.categories)
    },
    (error)=>{
      console.log(error); 
    })

  },[])
  return (
    <div>
      <Navbar mode={"non-home"} />
      { alertstatus && <Alert/>}
      <div className="title-section align-center">
      <h1 className='pagetitle'>Products</h1>
      <div className="hr-div"></div>
      </div>
      
      <div className="products-container">
        <div className="filter-section">
          <div className="title-section sub-title">
            <h1  >Filter</h1>
            
          </div>
          <div className="filters">
          <div className="linediv"></div>
            <div className='order-sort '>
            <div className="high hori-align">
              <p className='filter-title'>Low to high</p>
              <input onChange={()=>{dispatch({type:"lowtohigh",payload:{data:state}})}} type="radio" name="123" id="1" />
              </div>
              
              <div className="low hori-align">
              <p className='filter-title '>High to low</p>
              <input onInput={()=>{dispatch({type:"hightolow",payload:{data:state}})}} type="radio" name="123" id="2" />
              </div>
              
              
              
              
            </div>
            <div className="linediv"></div>
            <div className='price-sort'>
              <p className='filter-title'>Sort by price</p>
              <div className="range-div">
              <input step="1000" min="0" max="12000" onInput={(e)=>{
                dispatch({type:"range",payload:{data:state,range:e.target.value}})
                setinputvalue(e.target.value)}} type="range" name="" id="" />
              <p>{inputvalue}</p>
              </div>
              
            </div>
            <div className="linediv"></div>
            <div className='rating-sort'>
              <p className='filter-title'>Sort by rating</p>
              <div className="stars">
                <div onClick={()=>dispatch({type:'5star',payload:state})} className="star"><AiFillStar/> 5 star only</div>
                <div onClick={()=>dispatch({type:'4star',payload:state})} className="star"><AiFillStar/> 4 star or above</div>
                <div onClick={()=>dispatch({type:'3star',payload:state})} className="star"><AiFillStar/> 3 star or above</div>
                <div onClick={()=>dispatch({type:'2star',payload:state})} className="star"><AiFillStar/> 2 star or above</div>
                <div onClick={()=>dispatch({type:'1star',payload:state})} className="star"><AiFillStar/> 1 star or above</div>
              
              </div>
              
            </div>
            <div className="linediv"></div>
            <div onClick={()=>dispatch({type:"reset"})} className="reset-filters">
              Reset Filters
            </div>
          </div>
          
        </div>
        <div className="products-section">
          <div className="title-section sub-title alignment">
            <h1>Products : {state.length}</h1>
            <div className="search-bar">
              <div className='search-icon'><BiSearch/></div><input onChange={(e)=>dispatch({type:'search',payload:e.target.value})} type="text" name="" id="" placeholder='Search' />
            </div>
            <div className="categories-productpage">
            <p>Categories:</p>
            <div className='product-categories'>{localcategories.map((obj)=><li key={obj._id} onClick={()=>dispatch({type:"categoryfilter",payload:obj.categoryName})} className='category-in-products'>{obj.categoryName}</li>)}</div>
            </div>
          </div>
          <div className="product-listing">
          {state.map((obj)=><ProductCard renderclass = {"vertical"} key={obj._id} product={obj} />)}
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products