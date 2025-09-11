import React from 'react'
import './NewFac.css'
import { FaArrowRight} from "react-icons/fa";
function NewFacMoreBanner() {
  return (
    <div className='bg-banner-color-fsc text-center d-flex flex-column flex-column text-white gap-2 align-items-center justify-content-center py-lg-5 py-5'>
      <h1 className='fs-2'>More about Faculty & Research</h1>
      <p className='display-6'>Centers of Excellence</p>
      <FaArrowRight size={24}/>
    </div>
  )
}

export default NewFacMoreBanner
