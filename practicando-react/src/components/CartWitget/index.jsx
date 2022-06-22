import React from 'react'
import { FiShoppingCart } from 'react-icons/fi';

const CartWidget = () => {
  return (
    <div className='cart'>
      <FiShoppingCart size={35} style color='white'/>
    </div>
    
  )
}

export default CartWidget