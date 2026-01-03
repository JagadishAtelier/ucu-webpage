import React from 'react';
import './AboutPageHero.css';
import { FaChevronRight } from 'react-icons/fa';

function AboutPageHero({ title,sub, breadcrumb = [], bgImage }) {
  return (
    <div
      data-aos="fade-down"
      className="hero-section about-hero-banner-bg d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start text-white text-center text-lg-start p-3 p-md-5 p-lg-7"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        minHeight: "50vh",
      }}
    >
      <div className="hero-content-wrapper" data-aos="fade-right">
        <h1 className="fw-bold display-4 display-md-3 display-lg-2">{title}</h1>
        {sub && (
         <p>({sub})</p>
        )}
        {/* ✅ Breadcrumb rendering */}
        <div className="d-flex align-items-center flex-row gap-2 justify-content-center justify-content-lg-start mt-3 fs-5">
          {breadcrumb.map((item, index) => (
            <React.Fragment key={index}>
              <p className="mb-0">{item}</p>
              {index < breadcrumb.length - 1 && <FaChevronRight size={15} />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutPageHero;
