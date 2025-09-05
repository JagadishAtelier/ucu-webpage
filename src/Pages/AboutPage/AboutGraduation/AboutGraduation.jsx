import React from 'react'
import './AboutGraduation.css'
import image from '../../../Assets/aboutPageImage/WhatsApp Image 2025-09-05 at 14.33.24_14c60c6f.jpg'
import icon from '../../../Assets/aboutPageImage/Graduate_icon.svg'
function AboutGraduation() {
  return (
    <div className='d-flex flex-column-reverse pt-0 flex-md-row gap-3 gap-md-3 justify-content-md-between align-items-center alignment-items0md-center px-md-5 py-md-5 py-5 pb-0'>
    <img src={image} className='about-grad-img'/>
      <div className='d-flex text-center text-md-start flex-column align-items-center align-items-md-start justify-content-center justify-content-md-start flex-md-column gap-3 gap-md-3 px-3'>
        <img src={icon} className='about-tour-icon'/>
        <h1 className='fw-bold fs-1 mb-0 text-black'>Graduation</h1>
        <p className='col-md-12 col-12 mb-0 mb-md-0 fs-6 '>Campus on a tour designed for prospective graduate and professional students. You will see how our university like, facilities, studenst and life in this university. Meet our graduate admissions representative to learn more about our graduate programs and decide what it the best for you.</p>
    </div>
    </div>
  )
}

export default AboutGraduation
