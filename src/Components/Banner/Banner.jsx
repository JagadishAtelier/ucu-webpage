import React from 'react'
import './Banner.css'
function Banner() {
  return (
    <div className='banner-container'>
              <div className='car-heading-text banner-text'>
        <h1>Take the Next Step in Your Career with UCU</h1>
        <p>Gain industry-aligned knowledge, connect with top leaders, and accelerate your career.</p>
      </div>
      <div className="hero-btn banner-btns">
            <button className='hero-section-apply-btn text-white'>APPLY NOW</button>
            <button className='hero-section-download-btn down-load-btn-ban'>DOWNLOAD BROCHURE</button>
            <button className='hero-section-download-btn text-white'>ENQUIRE NOW</button>
        </div>
    </div>
  )
}

export default Banner
