import React from 'react'
import './AboutPageHero.css'
import { FaChevronRight } from 'react-icons/fa'
import heroImage from '../../../Assets/aboutPageImage/ucu-About us.svg'
function AboutPageHero() {
  return (
    <div className='hero-section d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-start text-white text-center text-md-start p-3 p-md-5 p-lg-7'
        style={{
            backgroundImage : `url(${heroImage})`,
            backgroundSize : "cover",
            backgroundPosition: "center",
            backgroundRepeat : "no-repeat",
            minHeight : "60vh"
        }}
    >
        <div className='w-100 w-md-75 w-lg-50 ms-md-7 hero-left'>
            <h1 className='fw-bold fs-1 fs-md-1 fs-lg-1'>
                About UCU
            </h1>
            <div className='d-flex align-items-center flext-row gap-3 gap-md-4 justify-content-center justify-content-md-start mt-3'>
                <p className='fs-5 mb-0'>Home</p>
                <FaChevronRight size={15} /> 
                <p className='fs-5 mb-0'>About Us</p>

            </div>

        </div>

      
    </div>
  )
}

export default AboutPageHero
