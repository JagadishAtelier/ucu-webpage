import React, { useState, useRef, useEffect } from "react";
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
import banner1 from '../../Assets/aac/Banner1UCU.png'
import banner2 from '../../Assets/aac/2.png'
import banner3 from '../../Assets/aac/Banner3.png'
import banner4 from '../../Assets/aac/4.png'
import banner8 from '../../Assets/aac/8.png'
import bannerImage from '../../Assets/aac/FinalBannerImage.png'
import { getBanners } from "../../Api/HomePageApi/HeroSectionApi";
// const heroData = [
//   {
//     header: <>Guided by Industry & <span className="color-highlight"> Academic </span> Icons</>,
//     para: "Every program is co-created and co-delivered by academia and industry—where faculty and industry CXOs collaborate to build future-ready, job-relevant learning experiences for students",
//     images: bannerImage,
//   },
//   {
//     header: <>Future Ready Programs for <span className="color-highlight">Emerging Industry</span> Sectors</>,
//     para: "From GCC and FinTech to Healthcare and Semiconductor industries, our specialised programs are expertly tailored to empower talent to lead innovation and deliver transformative strategies from day one.",
//     images: bannerImage,
//   },
//   {
//     header: <><span className="color-highlight">Business Advisory </span>Council</>,
//     para: "Our Business Advisory Council (BAC) anchors UCU’s strategic vision—shaping curriculum, guiding long-term direction, and ensuring every program delivers tangible career value from day one",
//     images: bannerImage,
//   },
//   {
//     header: <><span className="color-highlight">Academic Advisory </span>Council</>,
//     para: "UCU’s Academic Advisory Council (AAC) strengthens our intellectual core—shaping curriculum, deepening academic rigor, and laying the foundation of business knowledge to nurture future leaders",
//     images: bannerImage,
//   },
//   {
//     header: <><span className="color-highlight">CHRO Advisory </span>Council</>,
//     para: "UCU’s CHRO Advisory Council brings strategic HR minds together to shape talent frameworks, leadership readiness, and workforce evolution—ensuring our programs mirror the priorities of enterprise people strategy.",
//     images: bannerImage,
//   },
//   {
//     header: <><span className="color-highlight">Talent Acquisition </span>Council </>,
//     para: "UCU’s Talent Acquisition Council draws on frontline recruitment expertise to align hiring realities with learner outcomes—crafting career pathways that meet the pulse of industry demand",
//     images: bannerImage,
//   },
//   {
//     header: <><span className="color-highlight">L&D Advisory </span>Council</>,
//     para: "UCU’s L&D Advisory Council collaborates with learning leaders to refine instructional design, enhance learner engagement, and embed growth mindsets into every stage of professional development",
//     images: bannerImage,
//   },
//   {
//     header: <><span className="color-highlight">Young CXO </span>Council</>,
//     para: " UCU’s Young CXO Council (YCC) connects tomorrow’s talent with today’s trailblazing leaders—driving measurable corporate impact and channeling boardroom insights directly into our classrooms",
//     images: bannerImage,
//   },
// ];


function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const [heroData, setHeroData] = useState([]);

  const { showModal } = useModal();
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getBanners();
        console.log("banner data:", res.data || res);
        setHeroData(res.data?.data || res.data || res || []);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, []);

  if (!heroData.length) return null;

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
          autoplay={{ delay: 4000000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1}
        >
          {heroData.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="hero-section-data-div">
                <div
                  className={`hero-section-left ${index === activeIndex ? "slide-active" : ""
                    }`}
                >
                  <h1
                    className="content-slide-in display-4 fw-bold col-10"
                    dangerouslySetInnerHTML={{ __html: data.bannerTitle }}
                  />
                  <div className="hero-para-line-div content-slide-in">
                    <div className="vertical-line"></div>
                    <p className="program-description">{data.bannerContent}</p>
                  </div>
                  <div className="hero-btn mt-4 content-slide-in">
                    <button onClick={() => showModal("apply")} className="hero-section-apply-btn fw-semibold">
                      <a  className="text-white text-decoration-none">APPLY NOW</a>
                    </button>
                    <button className="hero-section-download-btn fw-semibold">
                      <a href={data.pdf}
                        target="_blank"
                        rel="noopener noreferrer" className="text-white text-decoration-none">DOWNLOAD BROCHURE</a>
                    </button>
                  </div>
                </div>

                <div
                  className={`hero-image ${index === activeIndex ? "slide-active" : ""
                    }`}
                >
                  <img
                    className="image-slide-in"
                    src={data.bannerImage?.[0]}
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