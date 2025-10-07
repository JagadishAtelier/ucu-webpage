import React from 'react';
import './AboutPageHero.css'; // Keep this import for your custom CSS
import { FaChevronRight } from 'react-icons/fa';
import heroImage from '../../../Assets/aboutPageImage/ucu-About us.svg'; // Ensure this path is correct

function AboutPageHero() {
  return (
    <div
      data-aos="fade-down"
      className="hero-section d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start text-white text-center text-lg-start p-3 p-md-5 p-lg-7" // Adjusted padding for medium screens
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "60vh",
        // No need for a separate overlay here, as we'll handle it in CSS
      }}
    >
      <div className='hero-content-wrapper' data-aos="fade-right"> {/* New wrapper for better control */}
        <h1 className='fw-bold display-4 display-md-3 display-lg-2'> {/* Larger, more impactful heading */}
          About UCU
        </h1>
        <div className='d-flex align-items-center flex-row gap-2 justify-content-center justify-content-lg-start mt-3 fs-5'> {/* Combined `gap` for all screen sizes */}
          <p className='mb-0'>Home</p>
          <FaChevronRight size={15} />
          <p className='mb-0'>About Us</p>
        </div>
      </div>
    </div>
  );
}

export default AboutPageHero;