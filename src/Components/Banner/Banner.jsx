import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Banner.css";
import { useModal } from "../Context/ApplyModal/ModalContext";
function Banner() {
  const { showModal } = useModal();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // triggers only once
      offset: 100,
    });
  }, []);

  return (
    <div className="banner-container">
      <div
        className="car-heading-text banner-text"
        data-aos="fade-up"
      >
        <h1 className="fw-bold fs-1 fs-lg-1">Take the Next Step in Your Career with UCU</h1>
        <p>
          Gain industry-aligned knowledge, connect with top leaders, and
          accelerate your career.
        </p>
      </div>

      <div
        className="hero-btn banner-btns"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <button onClick={() => showModal("apply")} className="hero-section-apply-btn text-white">APPLY NOW</button>
        <button onClick={() => showModal("brochure")} className="hero-section-download-btn down-load-btn-ban">
          DOWNLOAD BROCHURE
        </button>
        <button onClick={() => showModal("enquiry")} className="hero-section-download-btn text-white">
          ENQUIRE NOW
        </button>
      </div>
    </div>
  );
}

export default Banner;
