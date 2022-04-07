import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import './lostelement.css'
import lostimage from '../assets/images/lostimage.jpg'
const LostElement = () => {
    const navigate = useNavigate();
  return (
    <div className='lostpage-parent'>
        <Navbar mode={"non-home"} />
        <h1 className='pagetitle'>404: Page not found</h1>
        <img src={lostimage} alt="404image" />
        <button onClick={()=>navigate('/products')} className='addtocart'>Go to Products</button>
    </div>
  )
}

export default LostElement