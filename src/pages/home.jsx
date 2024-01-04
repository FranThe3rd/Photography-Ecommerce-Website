import React from 'react'
import { Link } from 'react-router-dom'
import homePageImage from '../assets/homeImg/home.jpg'
import './home.css'
import About from './about/about'



const Home = () => {
  return (
    <div className='home'>
      <div className='wrapper'>
      <img className='home-image' src={homePageImage} alt="" />
      <div className='home-container'></div>
      <div className='home-info'>
        <h1>Juan</h1>
        <Link to="/shop" className='exploreBttn' role='button'>
          Explore Page
        </Link>
      </div>
    </div>
    <About />
    </div>


  )
}

export default Home
