import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "./HeroSection.css";
import image from "../../Assets/WhatsApp Image 2025-09-01 at 10.11.41_c995dc02.jpg";
import AnnoncementSection from "../AnnoncementSection/AnnoncementSection";

const heroData = [
  {
    header: "Leaders For Corporate World",
    para: "UCU blends academic excellence with real-world experience.",
    images: image,
  },
  {
    header: "Transforming Education",
    para: "Students gain practical skills for future careers.",
    images: image,
  },
  {
    header: "Future Ready Graduates",
    para: "Our programs prepare you for global success.",
    images: image,
  },
];

function HeroSection() {
  return (
    <>
      <div className="hero-section-container position-relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          // autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1}
        >
          {heroData.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="hero-section-data-div">
                <div className="hero-section-left">
                  <h1>{data.header}</h1>
                  <div className="hero-para-line-div">
                    <div className="vertical-line"></div>
                    <p>{data.para}</p>
                  </div>
                  <div className="hero-btn mt-4">
                    <button className="hero-section-apply-btn fw-semibold">
                      APPLY NOW
                    </button>
                    <button className="hero-section-download-btn fw-semibold">
                      DOWNLOAD BROCHURE
                    </button>
                  </div>
                </div>
                <div className="hero-image">
                  <img src={data.images} alt="hero" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation buttons */}
        <button className="custom-prev">
          <ChevronLeft size={28} color="#fff" />
        </button>
        <button className="custom-next">
          <ChevronRight size={28} color="#fff" />
        </button>
      </div>

      <AnnoncementSection />
    </>
  );
}

export default HeroSection;
