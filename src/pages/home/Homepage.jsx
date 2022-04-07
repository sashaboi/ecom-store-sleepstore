import React from 'react'
import '../home/homepage.css'
import banner from '../assets/images/banner-img.jpg'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import CategoryCard from '../components/category-card/CategoryCard'
import Navbar from '../components/navbar/Navbar'
import { useAlert } from '../context/AlertContext'
import Alert from '../components/Alert/Alert'


// import arrange nicely global - components
const Homepage = () => {
  const {alertstatus} =useAlert();
  const [categories , setcategories] = useState([])
  useEffect(()=>{
    
    //study try catch 
    axios.get('/api/categories')
    .then((response)=>{
      setcategories(response.data.categories);
      
    },
    (error)=>{
      console.log(error);
      
    })
  },[])
  return (
    
    <div className='homepage'>
      <Navbar mode={"home"}/>
      { alertstatus && <Alert/>}
      {/* page type  could replace mode */}
      <div className='banner-text'>
      <p>Fly Now</p>
      </div>
      
      <img className='banner-img' src={banner} alt="" />
      
      <div className="quote">
          Wit beyond measure is man's greatest treasure! Second is drones :) - Elon Musk
        </div>
        
      <div className="categories">
        <h1>
          Categories
        </h1>
        <div className="hr-div">
        {/* use classes instead of h1 with classes */}
        </div>
        <div className="category-container">
        {categories.map((obj)=><CategoryCard category={obj}/>)}
        </div>
        
      </div>
    </div>
  )
}

export default Homepage