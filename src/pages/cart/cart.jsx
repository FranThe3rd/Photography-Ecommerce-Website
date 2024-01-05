import React, { useContext } from 'react'
import './cart.css'
import { ShopContext } from '../../context/shop-context'
import { PRODUCT_LIST } from '../shop/products';
import CartItem from './cart-item';

const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  const isEmpty = PRODUCT_LIST.every((product) => cartItems[product.id] === 0);

  return (
    <div className='cart'>
      <h1>Cart</h1>
      <div className='cartItems'>
        {PRODUCT_LIST.map((product) => {
          if (cartItems[product.id] > 0) {
            return <CartItem data={product} />;
          }
          return null;
        })}
        {isEmpty && <h2 className='emptyCart'>Cart is empty</h2>}
      </div>
    </div>
  );
};

export default Cart;
