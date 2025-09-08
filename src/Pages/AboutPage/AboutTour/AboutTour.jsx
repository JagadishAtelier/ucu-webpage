import React from 'react'
import './AboutTour.css'
import image from '../../../Assets/aboutPageImage/Special campus tour_img.svg'
import icon from '../../../Assets/aboutPageImage/Special campus tour_icon.svg'

function AboutTour() {
  return (
    <div className='d-flex flex-column flex-lg-row gap-4 justify-content-between align-items-center px-3 px-md-5 py-5'>
      
      {/* Left content */}
      <div data-aos="fade-right" className='d-flex flex-column text-center text-lg-start align-items-center align-items-lg-start justify-content-center gap-3'>
        <img src={icon} className='about-tour-icon' alt="Tour Icon"/>
        <h1 className='fw-bold fs-1 mb-0 text-black'>Special Campus Tour</h1>
        <p className='fs-6'>
          Campus on a tour designed for prospective graduate and professional students.
          You will see how our university like, facilities, students and life in this university. 
          Meet our graduate admissions representative to learn more about our graduate programs 
          and decide what is the best for you.
        </p>
      </div>

      {/* Right image */}
      <img src={image} className='about-tour-img' alt="Campus Tour" data-aos="fade-left"/>
    </div>
  )
}

export default AboutTour
