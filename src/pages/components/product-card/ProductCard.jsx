import React from 'react'
import '../product-card/productcard.css'
import { AiOutlineStar,AiFillStar } from "react-icons/ai";
import { useCart } from '../../context/cartcontext';
const ProductCard = ({product}) => {
    const {dispatch}= useCart()
    
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
                <div onClick={()=>dispatch({type:"addtocart",payload:product})} className="addtocart">
                    <p>Add to Cart</p>
                </div>
            </div>
            
        </div>
        
            {product.professional && <div className="badge">Pro</div> }
        
    </div>
  )
}

export default ProductCard