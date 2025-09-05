import React from 'react'
import './AboutJourney.css'
import image from '../../../Assets/aboutPageImage/ucu_journey_img.svg'
function AboutJourney() {
  return (
    <div className='d-flex flex-column flex-md-row gap-4 align-items-md-center align-items-center px-md-5 my-md-5 my-5'>
      <img src={image} className='journey-image'/>
      <div className='d-flex flex-column gap-4 text-black text-center text-md-start px-2'>
        <h1 className='fw-bold fs-1 mb-0'>UCU’s Journey</h1>
        <p className='fs-6 mb-0 lh-base'>If you’re looking for a university that prepares you to lead in a dynamic global economy, UCU is the right place. We evaluate every application holistically — considering academic merit, professional experience, and personal drive — to build a diverse and vibrant learning community.</p>
        </div>
    </div>
  )
}

export default AboutJourney
