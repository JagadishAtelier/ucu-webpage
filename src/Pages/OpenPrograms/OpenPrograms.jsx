import React from 'react'
import './OpenPrograms.css'
import Navbar from '../../Components/Navbar/Navbar'
import NewFooter from '../../Components/NewFooter/NewFooter'
import { FaChevronRight } from 'react-icons/fa';
import CurrentMonthPrograms from './CurrentMonthPrograms';
import NextMonthPrograms from './NextMonthPrograms';
function OpenPrograms() {
  return (
    <div>
        <Navbar/>
    <div
      data-aos="fade-down"
      className="hero-section d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start text-white text-center text-lg-start p-3 p-md-5 p-lg-7"
      style={{
        backgroundImage: `url("https://img.freepik.com/premium-photo/group-professional-web-developer-discuss-about-data-analysis-while-computer-screen-show-computer-code-modern-office-close-up-digital-engineering-web-development-concept-burgeoning_31965-270942.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "60vh",
      }}
    >
              <div
                className="w-100 w-lg-75 w-lg-50 ms-lg-5"
                data-aos="fade-right"
              >
                {/* Dynamic Title */}
                <h1 className="fw-bold fs-1 fs-lg-1">Chennai Campus</h1>
              </div>

              <div className='position-absolute bottom-0 left-0 d-flex align-items-center campus-route-bg py-2'>
                <p className='m-0'>UCU</p>
                <FaChevronRight/>
                <p className='m-0'>Chennai Campus</p>
              </div>
    </div>
    <CurrentMonthPrograms/>
    <NextMonthPrograms/>
        <NewFooter/>
    </div>
  )
}

export default OpenPrograms