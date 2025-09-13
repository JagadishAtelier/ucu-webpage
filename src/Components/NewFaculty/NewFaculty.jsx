import React from 'react'
import { FaChevronRight } from "react-icons/fa";
import NewFacDirectors from './NewFacDirectors';
import NewFacultySec3 from './NewFacultySec3';
import NewFacMoreBanner from './NewFacMoreBanner';
import NewFacSocial from './NewFacSocial';
import NewFacBrand from './NewFacBrand';
import NewFooter from '../NewFooter/NewFooter';
import Navbar from '../Navbar/Navbar';
function NewFaculty() {
  return (
    <div>
      <Navbar/>
    <div
      data-aos="fade-down"
      className="fac-hero-section d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start text-white text-center text-lg-start p-3 p-lg-5 p-lg-7"
      style={{
        backgroundImage: `url("https://demo.farmstudios.net/oakwood/wp-content/uploads/sites/29/2025/08/images-YMZPJG5.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "60vh",
      }}
    >
      <div
        className="w-100 w-lg-100 w-lg-100 ms-lg-7 hero-left"
        data-aos="fade-right"
      >
        {/* Dynamic Title */}
        <h1 className="display-4 fw-bold col-12  text-uppercase">Faculty</h1>

        <div className="d-flex align-items-center flex-row gap-2 justify-content-center justify-content-lg-start mt-3">
              <p className="fs-5 mb-0 bread-crumb">Home</p>
                <FaChevronRight size={window.innerWidth > 991 ? 12 : 15} />
                <p className="fs-5 mb-0 bread-crumb">Faculties</p>
        </div>

      </div>
    </div>

    <NewFacDirectors/>
    <NewFacultySec3/>
    <NewFacMoreBanner/>
    {/* <NewFacSocial/> */}
    <NewFacBrand/>
    <NewFooter/>
    </div>
  )
}

export default NewFaculty
