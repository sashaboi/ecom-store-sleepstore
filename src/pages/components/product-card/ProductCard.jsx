import React from 'react'
import '../product-card/productcard.css'
import { AiOutlineStar,AiFillStar } from "react-icons/ai";
import { useCart } from '../../context/cartcontext';
import axios from 'axios'
import { useState } from 'react';
const ProductCard = ({product}) => {
    const [disabled , setdisabled] = useState(false)
    const {setcartlength,cartlength ,localcart , setlocalcart}=useCart(); 
    var token = localStorage.getItem('token');
                token = '"'+token+'"'
                const header = {
                authorization: token
                
                }        
            const datatosend = {
                "action": {
                "type": "increment"
                }
            } 


    const addtocart = (product)=>{
        setdisabled(true)
        if (localcart.some((obj)=>obj._id ===product._id)){
            
            // eslint-disable-next-line no-useless-concat
            const urltosend = '/api/user/cart' + '/'+ product._id
            
            axios.post(urltosend,datatosend,{headers : header})
            .then((response)=>{

                console.log('incoming cart on increment : ',response.data.cart);
                setlocalcart(response.data.cart);
                setdisabled(false)
            },
            (error)=>{
                console.log('error aliye in increasing quantity',error);
            })
            
            
        }else{
            console.log(product);
            setcartlength(cartlength+1)
            const producttosend = {
                "product":product
            }
            
            axios.post('/api/user/cart',producttosend,{headers : header})
            .then((response)=>{
                console.log('incoming cart on first time add : ',response.data.cart);
                setlocalcart(response.data.cart);
                setdisabled(false)
            },
            (error)=>{
                console.log('error ali be : ', error);
            })
            
        }
    }
    
  return (
    <div className='before-card'>
        <div className='product-card'>
            
            <div className="img-section">
            <img src={product.img} alt={product.title} />
            </div>
            <div className="desc-section">
                <div className="title">
                    {product.title}
                </div>
                <div className="rating">
                    {/* [1,2,3] */}
                    {/* [4,5] */}
                    {[...Array(product.rating)].map(()=><AiFillStar/>)}
                    {[...Array(5 -product.rating)].map(()=><AiOutlineStar/>)}
                </div>
                <div className="info-section">
                    <div className='res'>
                        {product.resolution}
                    </div>
                    <div className='weight'>
                        {product.weight}
                    </div>
                    
                </div>
                <div className='price'>
                    ${product.price}
                </div>
                <button disabled={disabled} className="addtocart" onClick={()=>{addtocart(product)}} >
                
                    Add to Cart
                
                </button>
            </div>
            
        </div>
        
            {product.professional && <div className="badge">Pro</div> }
        
    </div>
  )
}

export default ProductCard