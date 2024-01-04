import React from 'react'
import './about.css'
import myImage from '../../assets/aboutImg/aboutme.jpg'
import { InstagramLogo } from 'phosphor-react'

const About = () => {
  return (
    <div className='about'>
      <h1 className='title'>About</h1>
      <div className='about-wrapper'>
        <div className='about-image'>
          <img className='juan-pic' src={myImage} alt="" />
        </div>
        <div className='about-text'>
          <h2 className='h2-title'>Hello, I am Juan Landaverde</h2>
          <h3 className='h3-explain'>
          I'm a nature photographer originally from El Salvador, now based in Pennsylvania. My lens captures the intricate beauty of the natural world, focusing on birds in their habitats and the captivating allure of waterfalls. Explore the breathtaking beauty of nature through my photography, where each image captures the essence of the great outdoors. Click on the "Shop" tab to immerse yourself in a collection of stunning nature photos that bring the wonders of the natural world to life.
</h3>
        </div>
      </div>
    </div>

  )
}

export default About
