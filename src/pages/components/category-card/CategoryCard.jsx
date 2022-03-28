import React from 'react'
import '../category-card/categorycard.css'
const CategoryCard = (obj) => {
    console.log(obj);
  return (
    <div className='category-card'>
        <div className="category-title">
        {obj.category.categoryName}
        </div>
        <div className="desc">
        {obj.category.description}
        </div>
        <button className='action-button'>
            Action
        </button>
        
    </div>
  )
}

export default CategoryCard