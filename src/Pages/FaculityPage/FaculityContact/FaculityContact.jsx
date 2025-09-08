import React from 'react'
import './FaculityContact.css'
import { FaGlobeAsia,FaAward } from 'react-icons/fa'
import bgImage from '../../../Assets/aboutPageImage/image-ucu.svg'
function FaculityContact() {
  return (
    <div className='mt-lg-5 mt-5 d-flex flex-column flex-lg-row gap-lg-5 px-4 px-lg-4 py-5 py-lg-5 align-items-lg-center'
    style={{
        backgroundImage : `url(${bgImage})`,
        backgroundPosition : "center",
        backgroundSize : "cover",
        backgroundRepeat : "no-repeat",
        minHeight : "60vh"

    }}
    >
      <div className='col-12 col-lg-6 d-flex flex-column flex-lg-column gap-3 text-white'>
        <div className='d-flex flex-row flex-lg-row gap-2 gap-lg-2'>
        <div className='vertical-line'></div>
        <p className='fs-lg-4 text-uppercase'>Contacts </p>
        </div>
        <h1 className='display-4 fw-bold col-10'>Contact Our Team for <span style={{ color: "#5ac501" }}>Support</span> Today</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur ex quis lorem elementum varius. Nam vestibulum, ex sit amet dapibus eleifend, lectus justo finibus erat, eget commodo lorem diam vitae nulla.</p>
      </div>

      <div className='d-flex flex-column flex-lg-column gap-3 gap-lg-3 fac-contact-right'>
        <div className=' d-flex flex-column flex-lg-row align-items-center align-items-lg-center gap-2 gap-lg-4 text-white'>
        <div className='name-input-con'>
            <p className='text-white mb-0'>First Name</p>
            <input type='text' placeholder='Enter Your First Name' className='contact-input'/>
        </div>
        <div className='name-input-con'>
            <p className='text-white mb-0'>Last Name</p>
            <input type='text' placeholder='Enter Your Last Name' className='contact-input'/>
        </div>
        </div>

        <div>
            <p className='text-white mb-0'>Email</p>
            <input type='text' placeholder='Enter Your Email' className='contact-input'/>
        </div>

        <div>
            <p className='text-white mb-0'>Comment</p>
            <textarea className='fac-textarea' placeholder='Message'></textarea>
        </div>

        <button className='contact-send-msg'>
            SEND MESSAGE
        </button>
      </div>
    </div>
  )
}

export default FaculityContact
