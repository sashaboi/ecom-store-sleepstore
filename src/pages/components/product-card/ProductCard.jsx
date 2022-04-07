import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../product-card/productcard.css'
import { AiOutlineStar,AiFillStar } from "react-icons/ai";
import {v4 as uuid} from 'uuid'
import { useCart } from '../../context/cartcontext';
import axios from 'axios'
import { useState } from 'react';
import { useAlert } from '../../context/AlertContext'

const ProductCard = ({product,renderclass}) => {
    let navigate = useNavigate();
    
    const  {showalert} = useAlert();
    const [disabled , setdisabled] = useState(false)
    const [addtocartbtn , setaddtocartbtn] =useState({text:"Add to Cart",class:"addtocart"})
    
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
                showalert({text:"One more Added to Cart !",alerttype:"success"})
                console.log('incoming cart on increment : ',response.data.cart);
                setlocalcart(response.data.cart);
                setdisabled(false)
            },
            (error)=>{
                console.log('error aliye in increasing quantity',error);
                navigate('/login')
            })
            
            
        }else{
            console.log(product);
            setcartlength(cartlength+1)
            const producttosend = {
                "product":product
            }
            
            axios.post('/api/user/cart',producttosend,{headers : header})
            .then((response)=>{
                showalert({text:"Item Added to Cart !",alerttype:"success"})
                setaddtocartbtn({text:"Add One More",class:"increasequantity"})
                console.log('incoming cart on first time add : ',response.data.cart);
                setlocalcart(response.data.cart);
                setdisabled(false)
                
                // setcartorgoto("added")
            },
            (error)=>{
                console.log('error ali be : ', error);
                navigate('/login')
            })
            
        }
    }
    const goToProduct = (prod) =>{
        console.log(prod);
        const individualurl ='/product/'+ prod._id
        navigate(individualurl)
    }    
  return (
    <div className='before-card'>
        <div className={renderclass}>
            
            <div className="img-section">
            <img onClick={()=>goToProduct(product)} src={product.img} alt={product.title} />
            </div>
            <div className="vertical-line-div"></div>
            <div className="desc-section">
                <div onClick={()=>goToProduct(product)} className="title">
                    {product.title}
                </div>
                <div className="rating">
                    {/* [1,2,3] */}
                    {/* [4,5] */}
                    {[...Array(product.rating)].map((obj)=><AiFillStar key={uuid()}/>)}
                    {[...Array(5 -product.rating)].map((obj)=><AiOutlineStar key={uuid()} />)}
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
                <button disabled={disabled} className={addtocartbtn.class} onClick={()=>{addtocart(product)}} >
                    
                {addtocartbtn.text}
                </button>
            </div>
            
        </div>
        
            {product.professional && <div className="badge">Pro</div> }
        
    </div>
  )
}

export default ProductCard