import React from 'react'
import { Link } from 'react-router-dom'
import './navbarMain.css'
import {ShoppingCart} from 'phosphor-react'
import { InstagramLogo } from 'phosphor-react';




const NavbarMain = () => {
  return (
    <div className='navbarMain'>
        <h2>Juan Landaverde</h2>
        <div className='linksMain'>
          <a href='https://www.instagram.com/ijuanlandaverde/' target='_blank' rel='noopener noreferrer'><InstagramLogo className='instagramLogo'  size={32}/></a>
          <Link to='/cart'><ShoppingCart className='shoppingCart' size={32}/></Link>
        </div>
    </div>
  )
}

export default NavbarMain
