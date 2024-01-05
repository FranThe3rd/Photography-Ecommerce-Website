import React from 'react'
import { PRODUCT_LIST } from '../pages/shop/products';
import { useState, createContext } from 'react';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCT_LIST.length+1; i++) {
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems,setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    }


    const contextValue = {cartItems,addToCart,removeFromCart}

  return (
    <ShopContext.Provider value ={contextValue}>{props.children}</ShopContext.Provider>
  )
}

export default ShopContextProvider
