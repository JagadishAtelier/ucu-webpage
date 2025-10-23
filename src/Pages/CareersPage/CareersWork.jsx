import { ChevronRight } from 'lucide-react'
import React from 'react'

function CareersWork() {
  return (
    <div className="captital-campus-content-sec contact-cpo-container">
        <h1>Why Work with Us?</h1>
        <p>At ISB, we offer competitive benefits, a culture of integrity, innovation, and collaboration. Join our diverse, inclusive community, where growth, learning, and impact thrive in a supportive environment.</p>
   <div className='d-flex justify-content-between flex-lg-row flex-md-row flex-column'>
    <img src='https://www.isb.edu/_next/image?url=https%3A%2F%2Fprodcd.isb.edu%2Fmedia%2Fomdphpkc%2Fisb-why-work-with-us.webp%3Fwidth%3D1920%26format%3Dwebp%26quality%3D100&w=3840&q=75' className='cw-right-image'/>
    <div className='d-flex flex-column col-lg-5 col-md-5 col-12'>
        <div className='d-flex justify-content-between cw-action-btn-div align-items-center'>
            <p className='m-0 fw-bold fs-5'>Benefits</p>
            <ChevronRight/>
        </div>
        <div className='d-flex justify-content-between cw-action-btn-div align-items-center'>
            <p className='m-0 fw-bold fs-5'>Values</p>
            <ChevronRight/>
        </div>
        <div className='d-flex justify-content-between cw-action-btn-div align-items-center'>
            <p className='m-0 fw-bold fs-5'>Culture</p>
            <ChevronRight/>
        </div>
    </div>
   </div>
   </div>
  )
}

export default CareersWork