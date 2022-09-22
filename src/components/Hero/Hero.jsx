import React from 'react'
import './Hero.css'
import Image1 from "../../assets/Image1.png"


const Hero = () => {
  return (
    <div>   
      <div className='Hero-headers-wrapper'>
      <div className='Hero-headers'>
      <h1 className='digital-marketer first'>Digital Marketer</h1>
      <h1 className='digital-marketer second'>Digital Marketer</h1>
      <div className='img-wrapper'><img src={Image1} className="Hero-img" alt="" /></div>
          <h1 className='writer'>WRITER</h1>
           </div>
           </div> 
           <div className='mobile-wrapper'>
           <div className=''><img src={Image1} className="mobile-img" alt="" /></div>
           <div className='Hero-buttons-wrapper'>
           <div className='border hire-me'><button className='Hero-buttons '>Hire a writer</button></div>
           <div className='border hire-me'><button className='Hero-buttons'> Hire a digital marketr</button></div>
           </div>
           </div>
          
    </div>
  )
}

export default Hero