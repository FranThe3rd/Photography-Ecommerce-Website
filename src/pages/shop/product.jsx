import React from 'react'

const Product = (props) => {
    const { id, productName, price, productImage } = props.data
    return (
        <div className='product'>
            <div className='productInfo'>
                <img src={productImage} alt={productName} />
                <h2>{productName}</h2>
                <h3>From ${price}</h3>
            </div>
        </div>
    )
}

export default Product
