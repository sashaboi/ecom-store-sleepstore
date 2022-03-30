import React from 'react'
import '../card-card/cartcard.css'
import { useCart } from '../../context/cartcontext'
import { BsTrashFill } from "react-icons/bs";
import { useState } from 'react';
import axios from 'axios'
const CartCard = ({product}) => {
  const { localcart,setlocalcart} = useCart();
  console.log(localcart);
  const [disabled , setdisabled] = useState(false)
  var token = localStorage.getItem('token');
  token = '"'+token+'"'
  const header = {
  authorization: token

  }        
  
  
  const incrementdata = {
    "action": { 
    "type": "increment"
    }
  } 
  const decrementdata = {
    "action": { 
    "type": "decrement"
    }
  } 
  const deleteproduct = (data) =>{
    console.log('delete is fired');
    const urltosend = '/api/user/cart/' + data._id
    console.log(urltosend);
    axios.delete(urltosend,{headers : header})
    .then((response)=>{
      setlocalcart(response.data.cart)
      console.log(response.data.cart);
      
    },
    (error)=>{
      console.log(error); 
    })
  }
  const decrementproduct =  (data) => {
    setdisabled(true)
    console.log('decrement is fired');
    const urltosend = '/api/user/cart/' + data._id
    axios.post(urltosend,decrementdata,{headers : header})
      .then((response)=>{
        setlocalcart(response.data.cart)
        setdisabled(false)
      },
      (error)=>{
        console.log(error); 
      })
  }
  const incrementproduct =  (data) => {
    const urltosend = '/api/user/cart/' + data._id
    axios.post(urltosend,incrementdata,{headers : header})
      .then((response)=>{
        setlocalcart(response.data.cart)
      },
      (error)=>{
        console.log(error); 
      })
  }


  const decrementHandler = (data) => {
    if (localcart.some((obj)=>obj._id === data._id)){
      localcart.map((obj)=>
        (obj._id===data._id)?
            (obj.qty===1)?
              deleteproduct(obj)//dustbin is here please fire delete api
              :decrementproduct(obj) //more than one so fire decrement api
            :console.log('itemnotfound')
      
        
      )
    }else{
      console.log('doesnt contain');
    }
    
  }



  
  
  return (
    <div className='cartcard'>
      <div className="img-section">
        <img src={product.img} alt={product.title} />
      </div>
      <div className="info-section-cart">
        <div className="product-title-cart">
        {product.title}
        </div>
        <div className="details-cart">
          <div className="qty-cart">
            <button disabled={disabled} onClick={()=>decrementHandler(product)} className="minusbutton qty-btn">
            {(product.qty >1)?"-":<BsTrashFill/>} 
            </button>
            {product.qty}
            <div onClick={()=>incrementproduct(product)} className="plusbutton  qty-btn">
              +
            </div>
          </div>
        </div>
        <div className="cart-price">
          ${product.price}
        </div>
      </div>
      
    </div>
  )
}

export default CartCard