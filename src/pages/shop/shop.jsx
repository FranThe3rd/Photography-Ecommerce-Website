import React from 'react'
import './shop.css'
import { PRODUCT_LIST } from './products'
import Product from './product'

const Shop = () => {
  return (
    <div className='shop'>
      <h1>Products</h1>
      <div className='products'>
        {PRODUCT_LIST.map((product) => (
          <Product data={product}/>
        ))}
      </div>
    </div>
  )
}

export default Shop
