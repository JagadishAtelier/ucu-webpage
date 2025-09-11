import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./HeroSection.css";
import image from "/slider-1.jpg";
import image1 from "/slider-2.jpg";
import image2 from "/slider-3.jpg";
import AnnoncementSection from "../AnnoncementSection/AnnoncementSection";
import { useModal } from "../Context/ApplyModal/ModalContext";
const heroData = [
  {
    header: <>Shaping Leaders for the <span className="color-highlight">Corporate</span> World</>,
    para: "At Universal Corporate University (UCU), we blend academic excellence with real-world corporate insights to create industry-ready leaders",
    images: image,
  },
  {
    header: <>Future-Ready Programs for <span className="color-highlight">High-Growth</span> Sectors</>,
    para: "From GCC and FinTech to Mobility, our specialized programs prepare professionals to thrive in industries driving global innovation.",
    images: image1,
  },
  {
    header: <>Guided by Industry & Academic <span className="color-highlight">Icons</span></>,
    para: "Our Business, Academic, CHRO, Talent, and Young CXO councils bring together thought leaders who shape programs, mentor learners, and ensure industry relevance.",
    images: image2,
  },
];


function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const { showModal } = useModal();

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <>
      <div className="hero-section-container position-relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1}
        >
          {heroData.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="hero-section-data-div">
                <div
                  className={`hero-section-left ${
                    index === activeIndex ? "slide-active" : ""
                  }`}
                >
                  <h1 className="content-slide-in display-4 fw-bold col-10">{data.header}</h1>
                  <div className="hero-para-line-div content-slide-in">
                    <div className="vertical-line"></div>
                    <p className="program-description">{data.para}</p>
                  </div>
                  <div className="hero-btn mt-4 content-slide-in">
                    <button onClick={() => showModal("apply")} className="hero-section-apply-btn fw-semibold">
                      APPLY NOW
                    </button>
                    <button onClick={() => showModal("brochure")} className="hero-section-download-btn fw-semibold">
                      DOWNLOAD BROCHURE
                    </button>
                  </div>
                </div>

                <div
                  className={`hero-image ${
                    index === activeIndex ? "slide-active" : ""
                  }`}
                >
                  <img
                    className="image-slide-in"
                    src={data.images}
                    alt="hero"
                  />
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
      {/* <AnnoncementSection /> */}
    </>
  );
}

export default HeroSection;