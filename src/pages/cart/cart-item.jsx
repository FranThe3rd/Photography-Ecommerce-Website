import React from 'react'
import { ShopContext } from '../../context/shop-context'
import { useContext } from 'react'
import './cart.css'
const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data
    const { addToCart,cartItems,removeFromCart } = useContext(ShopContext)
    const  cartItemAmount = cartItems[id]

    return (
        <div className='cartItem'>
            <img src={productImage} alt={productName} />
            <h3>{productName}</h3>
            <h4>Quantity: {cartItemAmount}</h4>
            <p>Price: ${price}</p>
            <div><button className='removeBttn' onClick={() => removeFromCart(id)}>-</button>
            <button type='addBttn' onClick={() => addToCart(id)}>+</button></div>
       
        </div>
    )
}

export default CartItem
