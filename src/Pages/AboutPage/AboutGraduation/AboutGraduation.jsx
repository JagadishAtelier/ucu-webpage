import React from 'react'
import './AboutGraduation.css'
import image from '../../../Assets/aboutPageImage/fee.jpg'
import icon from '../../../Assets/aboutPageImage/Graduate_icon.svg'
function AboutGraduation() {
  return (
    <div className='d-flex flex-column-reverse pt-0 flex-lg-row gap-3 gap-lg-3 justify-content-lg-between align-items-center alignment-items0md-center px-lg-5 py-lg-0 py-5 pb-0'>
    <img src={image} className='about-grad-img' data-aos="fade-right"/>
      <div data-aos="fade-left" className='d-flex text-center text-lg-start flex-column align-items-center align-items-lg-start justify-content-center justify-content-lg-start flex-lg-column gap-3 gap-lg-3 px-3'>
        <img src={icon} className='about-tour-icon'/>
        <h1 className='fw-bold fs-1 mb-0 text-black'>Graduation</h1>
        <p className='col-lg-12 col-12 mb-0 mb-lg-0 fs-6 '>Campus on a tour designed for prospective graduate and professional students. You will see how our university like, facilities, studenst and life in this university. Meet our graduate admissions representative to learn more about our graduate programs and decide what it the best for you.</p>
    </div>
    </div>
  )
}

export default AboutGraduation
