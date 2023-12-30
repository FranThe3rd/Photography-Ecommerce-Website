import React from 'react'
import { Link } from 'react-router-dom'
import './navbarMain.css'
import {ShoppingCart} from 'phosphor-react'
import { UserCircle } from 'phosphor-react';




const NavbarMain = () => {
  return (
    <div className='navbarMain'>
        <h2>Juan Landaverde</h2>
        <div className='linksMain'>
          <Link to='/about'><UserCircle color='black' size={32}/></Link>
          <Link to='/cart'><ShoppingCart color='black' size={32}/></Link>
        </div>
    </div>
  )
}

export default NavbarMain
