import React from 'react'
import Navbar from '../components/navbar/Navbar'
import '../wishlist/wishlist.css'
import { useWishlist } from '../context/wishlistcontext'
import ProductCard from "../components/product-card/ProductCard";
import { BsTrashFill } from "react-icons/bs";
import { useState } from 'react';
import axios from 'axios'

const Wishlist = () => {
  const [disabled , setdisabled] = useState(false)
  const {localWishList,setlocalWishList}=useWishlist()
  const removeFromWishlist = (wishobj) => {
    setdisabled(true)
    console.log('remove from wishlist:', wishobj);
    var token = localStorage.getItem('token');
    token = '"'+token+'"'
    const header = {
    authorization: token
    }
    const urltosend = "/api/user/wishlist/" + wishobj._id
    axios.delete(urltosend,{headers : header})
      .then((response)=>{
        setlocalWishList(response.data.wishlist)
        setdisabled(false)
      },
      (error)=>{
        console.log(error); 
      })
    



  }
  
  console.log(localWishList);
  return (
    <div className='wishlist-parent'>
      <Navbar mode={"non-home"} />
      
      <h1 className='pagetitle'>Wishlist</h1>
      <div className="hr-div"></div>
      <div className="wishlist-container">
        {localWishList.map((wishobj)=><div className='wishlist-remove'><ProductCard key={wishobj._id} product={wishobj}/><button disabled={disabled} onClick={()=>removeFromWishlist(wishobj)} className='remove-from-wishlist'><BsTrashFill/></button></div>)}
      </div>
      
    </div>
  )
}

export default Wishlist