import React from 'react'
import './FaculityHero.css'
import { FaChevronRight } from 'react-icons/fa'
function FaculityHero() {
  return (
    <div data-aos="fade-down" className='fac-hero-section d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start text-white text-center text-lg-start p-3 p-lg-5 p-lg-7'
        style={{
            backgroundImage : `url(${"https://demo.farmstudios.net/oakwood/wp-content/uploads/sites/29/2025/08/images-YMZPJG5.jpg"})`,
            backgroundSize : "cover",
            backgroundPosition: "center",
            backgroundRepeat : "no-repeat",
            minHeight : "60vh"
        }}
    >
        <div className='w-100 w-lg-75 w-lg-50 ms-lg-7 hero-left' data-aos="fade-right">
            <h1 className='fw-bold fs-1 fs-lg-1 fs-lg-1'>
            Faculty of UCU
            </h1>
            <div className='d-flex align-items-center flext-row gap-2 gap-lg-2 justify-content-center justify-content-lg-start mt-3'>
                <p className='fs-5 mb-0'>Home</p>
                <FaChevronRight size={15} /> 
                <p className='fs-5 mb-0'>Faculty Us</p>

            </div>

        </div>

      
    </div>
  )
}

export default FaculityHero
