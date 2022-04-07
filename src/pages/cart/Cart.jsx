import React from 'react'
import CartCard from '../components/card-card/CartCard'
import '../cart/cart.css'
import Navbar from '../components/navbar/Navbar'
import { useCart } from '../context/cartcontext'
import { useAlert } from '../context/AlertContext'
import Alert from '../components/Alert/Alert'
import EmptyState from '../components/emptystate/EmptyState'
const Cart = () => {
  const delivery = 150
  const {alertstatus} =useAlert();
  const {localcart} = useCart();
  const pricereducer = (acc,val)=>{
    acc= acc +(Number(val.price) * Number(val.qty))
    return acc
  }
  const total = localcart.reduce(pricereducer,0)
  console.log(total);
  return (
    <div className='parent-cart'>
      <Navbar mode={"non-home"} />
      { alertstatus && <Alert/>}
      <h1 className='pagetitle'>Cart</h1>
      <div className="hr-div"></div>
      <div className="cart-container">
        <div className="cart-product">
        {localcart.length===0?<EmptyState/>:localcart.map((obj)=><CartCard key={obj._id} product = {obj}/>)}
        </div>
        <div className="cart-total">
          <div className="calc-container">
            <h1><u>Cart total</u></h1>
            <div className="calculation-grid cart-properties">
              <div className='price-total  row-cart-calc'>
                <div className="price-property ">
                  Price
                </div>
                <div className="price-value">
                  ${total}
                </div>
              </div>
              
              <div className='discount row-cart-calc'>
                <div className="price-property">
                  Delivery charges
                </div>
                
                <div className="price-value">
                  ${delivery}
                </div>
              </div>
              <div className='total-cart row-cart-calc'>
                <div className="price-property">
                  Total
                </div>
                
                <div className="price-value">
                  ${total===0?0:total+delivery}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default Cart