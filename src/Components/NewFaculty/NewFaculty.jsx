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
    <div
      data-aos="fade-down"
      className="d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start text-white text-center text-lg-start p-3 p-lg-5 p-lg-7"
      style={{
        backgroundImage: `url("https://sdabocconiasiacenter.com/wp-content/uploads/2024/07/Faculty.jpeg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "60vh",
      }}
    >
      <div
        className="w-100 w-lg-75 w-lg-50 ms-lg-7 hero-left"
        data-aos="fade-right"
      >
        {/* Dynamic Title */}
        <h1 className="fw-bold fs-1 fs-lg-1">Faculty</h1>
      </div>
    </div>

    <NewFacDirectors/>
    <NewFacultySec3/>
    <NewFacMoreBanner/>
    <NewFacSocial/>
    <NewFacBrand/>
    <NewFooter/>
    </div>
  )
}

export default NewFaculty
