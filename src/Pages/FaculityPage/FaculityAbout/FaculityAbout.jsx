import React from 'react'
import './FaculityAbout.css'
import { FaGlobeAsia,FaAward } from 'react-icons/fa'
function FaculityAbout() {
  return (
    <div className='d-flex flex-column flex-lg-row gap-lg-5 px-4 px-lg-4 py-5 py-lg-5 align-items-lg-center'>
      <div className='col-12 col-lg-6 d-flex flex-column flex-lg-column gap-3'>
        <div className='d-flex flex-row flex-lg-row gap-2 gap-lg-2'>
        <div className='vertical-line'></div>
        <p className='fs-lg-4 text-uppercase'>About the Faculty </p>
        </div>
        <h1 className='display-4 fw-bold col-10'>Building Skills for Global <span style={{ color: "#5ac501" }}>Economic</span> Success</h1>
        <p className='program-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique elit eget lacus rhoncus, a luctus nisl elementum. Etiam sagittis rutrum augue, euismod molestie lorem molestie ut. Aliquam lorem mi, commodo fringilla imperdiet quis, congue vel ex. Sed ante turpis, viverra ac pellentesque nec, euismod sit amet ligula. Aliquam erat volutpat. Aliquam finibus id felis ut imperdiet. Vivamus fermentum at ex non aliquet. Sed elementum diam dolor, sagittis convallis libero consectetur eu. Sed nec lacus convallis, imperdiet felis nec, ultricies elit. Fusce non vehicula diam.</p>
        <div className='d-flex flex-column flex-lg-row gap-lg-2 gap-2 mb-5'>
            <div className='d-flex flex-row text-start align-items-start flex-lg-row gap-3 bgColorBlue p-3 p-lg-3 align-items-lg-start'>
            <div className="icon-wrapper">
    <FaGlobeAsia size={40} className='fa-global'/>
  </div>
                <div>
                    <h3 className='fs-4 fw-600'>Global Internship Opportunities</h3>
                    <p className='icon-para-about'>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
            <div className='text-start align-items-start d-flex flex-row flex-lg-row gap-3 bgColorBlue p-3 p-lg-3 align-items-lg-start'>
            <div className="icon-wrapper">
    <FaAward size={40} />
  </div>
                <div>
                    <h3 className='fs-4 fw-600'>Award Winning Research</h3>
                    <p className='icon-para-about'>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </div>
      </div>

      <div className='fac-about-image'>
        <img src='https://demo.farmstudios.net/oakwood/wp-content/uploads/sites/29/2025/09/image-4AMC5UY.jpg'/>
      </div>
    </div>
  )
}

export default FaculityAbout
