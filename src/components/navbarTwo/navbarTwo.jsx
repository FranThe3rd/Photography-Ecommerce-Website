import React from 'react'
import { Link } from 'react-router-dom'
import './navbarTwo.css'



const NavbarTwo = () => {

  
  return (
    <div className='navbar'>
        <div className='links'>
            <Link to='/'>Home</Link>
            <Link to='/shop'>Shop</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    </div>
  )
}

export default NavbarTwo
