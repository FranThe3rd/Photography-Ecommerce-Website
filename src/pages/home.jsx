import React from 'react'
import { Link } from 'react-router-dom'
import homePageImage from '../assets/homeImg/home.jpg'
import './home.css'

const Home = () => {
  return (
    <div className='home'>
      <img src={homePageImage} alt="" />
      <div className='home-container'></div>
      <div className='home-info'>
        <h1>Juan</h1>
        <Link to="/shop" className='exploreBttn' role='button'>
          Explore Page
        </Link>
      </div>
    </div>
  )
}

export default Home
