import React from 'react'
import { FaInstagram,FaFacebook,FaLinkedin,FaYoutube } from "react-icons/fa";
function NewFacSocial() {
  return (
    <div className='bg-light d-flex flex-column flex-lg-column gap-2 justify-content-center align-items-center mt-lg-2 mt-2 py-lg-5 py-5 mt-lg-5 mt-5'>
        <h1>Follow us on</h1>
        <div className="d-flex gap-3">
      <div className="icon facebook">
        <FaFacebook />
      </div>
      <div className="icon linkedin">
        <FaLinkedin />
      </div>
      <div className="icon youtube">
        <FaYoutube />
      </div>
      <div className="icon instagram">
        <FaInstagram />
      </div>
    </div>

    </div>
  )
}

export default NewFacSocial
