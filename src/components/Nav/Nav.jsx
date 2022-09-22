import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <div className='Nav'>
      <a href="#Hero-sight"><h1 className='logo'>DIA<div className='button'><div className='na'>NA ARCHIB</div></div>ONG</h1></a>
      <div className='Nav-links'>
        <li className='links'><a href="#Hero-sight">Home</a></li>
        <li className='links'>My Works</li>
        <li className='links'>About</li>
        <li className='links'>Contact me</li>
      <a href="https://twitter.com/Diana_archibong" target="_blank"  ><div className='twitter'><div className='border'><input type="button"  className='Hero-buttons twiter-link '  value="@Diana_archibong" /></div></div></a>
      </div>
    </div>
  )
}

export default Nav