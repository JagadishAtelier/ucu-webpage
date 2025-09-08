import React from 'react'
import './AboutPageHero.css'
import { FaChevronRight } from 'react-icons/fa'
import heroImage from '../../../Assets/aboutPageImage/ucu-About us.svg'
function AboutPageHero() {
  return (
    <div data-aos="fade-down" className='hero-section d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start text-white text-center text-lg-start p-3 p-lg-5 p-lg-7'
        style={{
            backgroundImage : `url(${heroImage})`,
            backgroundSize : "cover",
            backgroundPosition: "center",
            backgroundRepeat : "no-repeat",
            minHeight : "60vh"
        }}
    >
        <div className='w-100 w-lg-75 w-lg-50 ms-lg-7 hero-left' data-aos="fade-right">
            <h1 className='fw-bold fs-1 fs-lg-1 fs-lg-1'>
                About UCU
            </h1>
            <div className='d-flex align-items-center flext-row gap-3 gap-lg-4 justify-content-center justify-content-lg-start mt-3'>
                <p className='fs-5 mb-0'>Home</p>
                <FaChevronRight size={15} /> 
                <p className='fs-5 mb-0'>About Us</p>

            </div>

        </div>

      
    </div>
  )
}

export default AboutPageHero
