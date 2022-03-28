import React from 'react'
import '../home/homepage.css'
import banner from '../assets/images/banner-img.jpg'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import CategoryCard from '../components/category-card/CategoryCard'
const Homepage = () => {
  const [categories , setcategories] = useState([])
  useEffect(()=>{
    console.log('use effect running');
    
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
      <img className='banner-img' src={banner} alt="" />
      
      <div className="quote">
          Wit beyond measure is man's greatest treasure! Second is drones :) - Elon Musk
        </div>
        
      <div className="categories">
        <h1>
          Categories
        </h1>
        <div className="hr-div">
        
        </div>
        <div className="category-container">
        {categories.map((obj)=><CategoryCard category={obj}/>)}
        </div>
        
      </div>
    </div>
  )
}

export default Homepage