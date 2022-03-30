import React from 'react'
import '../card-card/cartcard.css'
const CartCard = ({product}) => {
    console.log(product);
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
            <div className="minusbutton qty-btn">
              -
            </div>
            {product.qty}
            <div className="plusbutton  qty-btn">
              +
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default CartCard