import React from 'react'
import { ShopContext } from '../../context/shop-context'
import { useContext } from 'react'

const Product = (props) => {
    const { id, productName, price, productImage } = props.data
    const { addToCart,cartItems } = useContext(ShopContext)
    const  cartItemAmount = cartItems[id]
    return (
        <div className='product'>
            <div className='productInfo'>
                <img src={productImage} alt={productName} />
                <h2>{productName}</h2>
                <h3>From ${price}</h3>
                <button className='addBttn' role="button" onClick={() => addToCart(id)}>Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
            </div>
        </div>
    )
}

export default Product
