import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { List } from 'phosphor-react'
import { InstagramLogo } from 'phosphor-react'
import { ShoppingCart } from 'phosphor-react'


import './navbar.css'


const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)


    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }


    return (
        <nav className="navbar">
            <div className="container-nav">
                <div className="logo">
                    <h1>Juan Landaverde</h1>
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <List size={40} color='black' />
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li>
                            <NavLink onClick={handleShowNavbar} to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={handleShowNavbar} to="/shop">Shop</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={handleShowNavbar} to="/contact">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={handleShowNavbar} to="/cart">
                                <ShoppingCart size={30} color='black' />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={handleShowNavbar} to="https://www.instagram.com/ijuanlandaverde/" target="_blank" rel="noopener noreferrer">
                                <InstagramLogo size={30} color='black' />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Navbar