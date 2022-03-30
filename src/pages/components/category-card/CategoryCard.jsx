import React from 'react'
import '../category-card/categorycard.css'
import { useNavigate } from "react-router-dom";

const CategoryCard = (obj) => {
  let navigate = useNavigate();
  const clickHandler = ()=>{
    navigate('/products')
  }
    console.log(obj);
  return (
    <div className='category-card'>
        <div className="category-title">
        {obj.category.categoryName}
        </div>
        <div className="desc">
        {obj.category.description}
        </div>
        <button onClick={()=>clickHandler()} className='action-button'>
            Action
        </button>
        
    </div>
  )
}

export default CategoryCard