import React from 'react'
import { useNavigate } from 'react-router-dom'
import empty from '../../assets/images/empty.jpg'
import './emptystate.css'
const EmptyState = () => {
    const navigate =useNavigate();
  return (
    <div className='emptystate'>
        <h3>This list is empty</h3>
        <img src={empty} alt="empty state" />
        <button onClick={()=>navigate('/products')} className='addtocart'>Go to products</button>
    </div>
  )
}

export default EmptyState