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
    header: <>Guided by Industry &<span className="color-highlight">Academic </span> Icons</>,
    para: "Every program is co-created and co-delivered by academia and industry—where faculty and industry CXOs collaborate to build future-ready, job-relevant learning experiences for students",
    images: image,
  },
  {
    header: <>Future Ready Programs for <span className="color-highlight">Emerging Industry</span> Sectors</>,
    para: "From GCC and FinTech to Healthcare and Semiconductor industries, our specialised programs are expertly tailored to empower talent to lead innovation and deliver transformative strategies from day one.",
    images: image1,
  },
  {
    header: <><span className="color-highlight">Business Advisory </span>Council (BAC)</>,
    para: "Our Business Advisory Council (BAC) anchors UCU’s strategic vision—shaping curriculum, guiding long-term direction, and ensuring every program delivers tangible career value from day one",
    images: image2,
  },
  {
    header: <><span className="color-highlight">Academic Advisory </span>Council (AAC)</>,
    para: "UCU’s Academic Advisory Council (AAC) strengthens our intellectual core—shaping curriculum, deepening academic rigor, and laying the foundation of business knowledge to nurture future leaders",
    images: image2,
  },
  {
    header: <><span className="color-highlight">CHRO Advisory </span>Council (CHRAC)</>,
    para: "UCU’s CHRO Advisory Council brings strategic HR minds together to shape talent frameworks, leadership readiness, and workforce evolution—ensuring our programs mirror the priorities of enterprise people strategy.",
    images: image2,
  },
  {
    header: <><span className="color-highlight">Talent Acquisition </span>Council (TAC)</>,
    para: "UCU’s Talent Acquisition Council draws on frontline recruitment expertise to align hiring realities with learner outcomes—crafting career pathways that meet the pulse of industry demand",
    images: image2,
  },
  {
    header: <><span className="color-highlight">L&D Advisory </span>Council (L&DAC)</>,
    para: "UCU’s L&D Advisory Council collaborates with learning leaders to refine instructional design, enhance learner engagement, and embed growth mindsets into every stage of professional development",
    images: image2,
  },
  {
    header: <><span className="color-highlight">Young CXOL&D Advisory </span>Council (YCC)</>,
    para: " UCU’s Young CXO Council (YCC) connects tomorrow’s talent with today’s trailblazing leaders—driving measurable corporate impact and channeling boardroom insights directly into our classrooms",
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