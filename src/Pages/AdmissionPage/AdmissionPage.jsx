import React from 'react'
import './AdmissionPage.css'
import Navbar from '../../Components/Navbar/Navbar'
import NewFooter from '../../Components/NewFooter/NewFooter'
import { ChevronRight } from 'lucide-react'
import AdmissionDetails from './AsmissionDetails'
function AdmissionPage() {
  return (
    <div>
        <Navbar/>
            <div
      data-aos="fade-down"
      className="fac-hero-section d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start text-white text-center text-md-start text-lg-start p-3 p-lg-5 p-lg-7"
      style={{
        backgroundImage: `url(https://www.mathslesson.co.uk/img/566fd77d6f2c885ec540f5f8e076021f.jpg?28)`,
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
                <h1 className="fw-bold fs-1 fs-lg-1">Admissions</h1>
              </div>

              <div className='position-absolute bottom-0 left-0 d-flex align-items-center campus-route-bg py-3'>
                <p className='m-0'>UCU</p>
                <ChevronRight/>
                <p className='m-0'>Admissions</p>
              </div>
    </div>
    <AdmissionDetails/>
        <NewFooter/>
    </div>
  )
}

export default AdmissionPage