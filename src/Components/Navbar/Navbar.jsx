import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar-container'>
      <a href='/'>Home</a>
      <div className='subPages-head'>
      <a href='/'>About UCU</a>
      <i class="bi bi-chevron-down"></i>
    </div>
      <div className='subPages-head'>
      <a href='/'>Programs</a>
      <i class="bi bi-chevron-down"></i>
    </div>
      <div className='subPages-head'>
      <a href='/'>Corporate connect</a>
      <i class="bi bi-chevron-down"></i>
    </div>
      <div className='subPages-head'>
      <a href='/'>insights</a>
      <i class="bi bi-chevron-down"></i>
    </div>
      <div className='subPages-head'>
      <a href='/'>Admissions</a>
      <i class="bi bi-chevron-down"></i>
    </div>
      <a href='/'>Contact Us</a>
      <i class="bi bi-search"></i>
    </div>
  )
}

export default Navbar
