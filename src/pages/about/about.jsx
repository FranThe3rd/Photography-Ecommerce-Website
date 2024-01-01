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
          <img src={myImage} alt="" />
        </div>
        <div className='about-text'>
          <h2 className='h2-title'>Hello, I am Juan Landaverde</h2>
          <h3 className='h3-explain'>
          I'm a nature photographer originally from El Salvador, now based in Pennsylvania. My lens captures the intricate beauty of the natural world, focusing on birds in their habitats and the captivating allure of waterfalls. From the vibrant plumage of tropical birds to the serene flow of hidden waterfalls, my goal is to showcase the diverse wonders of our planet. Through my work, I aim to inspire appreciation for nature and encourage the protection of our precious ecosystems.</h3>
          <h3>Instagram: <a className='insta' href='https://www.instagram.com/ijuanlandaverde/' target='_blank'>@ijuanlandaverde</a></h3>
          <h3>Email: juan_landaverde2001@yahoo.com</h3>
        </div>
      </div>
    </div>

  )
}

export default About
