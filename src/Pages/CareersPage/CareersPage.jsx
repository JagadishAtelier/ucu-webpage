import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import NewFooter from '../../Components/NewFooter/NewFooter'
import { ChevronRight } from 'lucide-react'
import CareersPageBuild from './CareersPageBuild'
import './CareersPage.css'
import CareersPageOpening from './CareersPageOpening'
import CareesrContact from './CareesrContact'
import CareersWork from './CareersWork'
import CareersQuery from './CareersQuery'
function CareersPage() {
  return (
    <div>
        <Navbar/>
                    <div
      data-aos="fade-down"
      className="fac-hero-section d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start text-white text-center text-md-start text-lg-start p-3 p-lg-5 p-lg-7"
      style={{
        backgroundImage: `url(https://wallpaperaccess.com/full/1393520.jpg)`,
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
                <h1 className="fw-bold fs-1 fs-lg-1"><span style={{color:"#5ac501"}}>Careers</span></h1>
              </div>

              <div className='position-absolute bottom-0 left-0 d-flex align-items-center campus-route-bg py-3'>
                <p className='m-0'>UCU</p>
                <ChevronRight/>
                <p className='m-0'>Careers</p>
              </div>
    </div>
    <CareersPageBuild/>
    <CareersPageOpening/>
    <CareesrContact/>
    <CareersWork/>
    <CareersQuery/>
        <NewFooter/>
    </div>
  )
}

export default CareersPage