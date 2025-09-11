import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import './PDPpage.css'
import bgImage from '../../Assets/aboutPageImage/image-ucu.svg'
import PDPcarousel from './PDPcarousel';
import PDPsubjects from './PDPsubjects';
import PDPexp from './PDPexp';
import NewFooter from '../NewFooter/NewFooter';
import { useLocation } from "react-router-dom";
function PDPhero() {
    const location = useLocation();
    const faculty = location.state; 
  return (
    <>
    <div className='d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-center text-center text-lg-start py-4 px-3 p-lg-5 p-lg-7 bg-darkblue'
    style={{
      backgroundImage : `url(${bgImage})`,
      backgroundPosition : "center",
      backgroundSize : "cover",
      backgroundRepeat : "no-repeat",
      minHeight : "60vh"

  }}
    >
        <div className='bg-white d-flex flex-column flex-md-row flex-lg-row gap-5 mx-lg-5 hero-white-container align-items-lg-center'>
        <div className='pdp-hero-img-container'>
            <img src={faculty.image} className='pdp-hero-img'/>
            <div className='pdp-hero-img-div'>
        </div>
        </div>

        <div className='d-flex flex-column flex-lg-column gap-1 text-lg-left ms-lg-4 align-items-start text-start'>
            <div className='vertical-line-pdp'></div>
            <h3>{faculty.name}</h3>
            <div className='d-flex flex-row flex-lg-row justify-content-between'>
            <p className='fs-6 fw-bold'>{faculty.prof}</p>
            <FaLinkedin size={25} className='linked-in-icon'/>
            </div>
            <div className='border bg-light border-2 mb-lg-1'></div>


            <p>Education</p>
            <ul className='education-li-list'>
                <li>PhD in Customer Experience Management, Dr RML Avadh University, India</li>
                <li>PhD in Customer Experience Management, Dr RML Avadh University, India</li>
                <li>PhD in Customer Experience Management, Dr RML Avadh University, India</li>
            </ul>
        </div>
        </div>
    </div>
    <PDPcarousel/>
    <PDPsubjects/>
    <PDPexp/>
    <NewFooter/>
    </>
  )
}

export default PDPhero
