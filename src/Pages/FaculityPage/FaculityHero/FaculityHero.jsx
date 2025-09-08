import React from "react";
import "./FaculityHero.css";
import { FaChevronRight } from "react-icons/fa";

function FaculityHero({ 
  title = "Faculty of UCU", 
  breadcrumbs = ["Home", "Faculty Us"], 
  bgImage = "https://demo.farmstudios.net/oakwood/wp-content/uploads/sites/29/2025/08/images-YMZPJG5.jpg" 
}) {
  return (
    <div
      data-aos="fade-down"
      className="fac-hero-section d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start text-white text-center text-lg-start p-3 p-lg-5 p-lg-7"
      style={{
        backgroundImage: `url(${bgImage})`,
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
        <h1 className="fw-bold fs-1 fs-lg-1">{title}</h1>

        {/* Dynamic Breadcrumb */}
        <div className="d-flex align-items-center flex-row gap-2 justify-content-center justify-content-lg-start mt-3">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              <p className="fs-5 mb-0 bread-crumb">{crumb}</p>
              {index < breadcrumbs.length - 1 && (
                <FaChevronRight size={window.innerWidth > 991 ? 12 : 15} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FaculityHero;
