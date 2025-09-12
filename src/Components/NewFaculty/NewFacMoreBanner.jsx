import React from 'react'
import './NewFac.css'
import { FaArrowRight} from "react-icons/fa";
import bgImage from '../../Assets/aboutPageImage/image-ucu.svg'
function NewFacMoreBanner() {
  return (
    // <div className='bg-banner-color-fsc text-center d-flex flex-column flex-column text-white gap-2 align-items-center justify-content-center py-lg-5 py-5 mt-lg-5 mt-5'>
    <div className='d-flex flex-column flex-lg-column align-items-center justify-content-center justify-content-lg-start text-white text-center text-lg-start py-4 px-3 p-lg-5 p-lg-7 bg-darkblue'
    style={{
      backgroundImage : `url(${bgImage})`,
      backgroundPosition : "center",
      backgroundSize : "cover",
      backgroundRepeat : "no-repeat",
      minHeight : "20vh"

  }}
    >
      <h1 className='fs-2'>More about Faculty & Research</h1>
      <p className='display-6'>Centers of Excellence</p>
      <FaArrowRight size={24}/>
    </div>
  )
}

export default NewFacMoreBanner
