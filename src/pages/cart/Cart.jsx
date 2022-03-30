import React from 'react'
import '../cart/cart.css'
import Navbar from '../components/navbar/Navbar'
import { useEffect , useState } from 'react'
import axios from 'axios'
import CartCard from '../components/card-card/CartCard'
const Cart = () => {
  const [localcart , setlocalcart] = useState([])
  useEffect(()=>{
    console.log('use effect running');
    var token = localStorage.getItem('token');
    token = '"'+token+'"'
    const header = {
    authorization: token
    
    }
    console.log(token)
    axios.get('/api/user/cart',{headers : header})
    .then((response)=>{
      console.log('cart fetch',response.data.cart);
      setlocalcart(response.data.cart);      
    },
    (error)=>{
      console.log(error);
      
    })
  },[]);
  return (
    <div className='parent-cart'>
      <Navbar mode={"non-home"} />
      <h1 className='pagetitle'>Cart</h1>
      <div className="hr-div"></div>
      {localcart.map((obj)=><CartCard key={obj._id} product = {obj}/>)}
    </div>
  )
}

export default Cart