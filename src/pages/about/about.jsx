import React from 'react'
import './about.css'
import myImage from '../../assets/aboutImg/aboutme.jpg'
import { InstagramLogo } from 'phosphor-react'

const About = () => {
  return (
    <div className='about'>
      <h1>About</h1>
      <div className='about-info'>
        <img src={myImage} alt="" />
        <h3>
          Hello! I'm Juan Landaverde, a photographer with a deep appreciation for the natural world. Originally from El Salvador, I now call Pennsylvania home. My journey behind the lens is fueled by a profound connection to the diverse landscapes and wildlife that have shaped my life.
          Specializing in nature photography, I aim to capture the essence of my surroundings. From the vibrant scenes of El Salvador to the tranquil beauty of Pennsylvania, my photos seek to convey the awe-inspiring moments found in the ordinary.
          "Live and let Live" is more than a mantra—it's a philosophy that guides my work. Each image reflects not only the beauty of nature but also the delicate balance we share with it.
          This website is a platform to share my visual stories with you. Consider bringing a touch of nature into your space through the purchase of prints. Your support allows me to continue exploring and documenting the incredible world we inhabit.
        </h3>
      </div>
    </div>
  )
}

export default About
