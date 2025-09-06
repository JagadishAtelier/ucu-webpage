import React, { useEffect } from "react";
import "./CareerSection.css";
import image1 from "../../Assets/ucu (1)/Rectangle 43.jpg";
import image2 from "../../Assets/ucu (1)/Rectangle 45.jpg";
import Sales from "../Sales/Sales";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const data = [
  {
    image: image1,
    heading: "PGPM-ELITE – Post Graduate Diploma in Management",
    para: "A comprehensive 2-year program tailored for fresh graduates to gain in-depth knowledge of business fundamentals, hands-on industry exposure, and holistic personality development for long-term career growth.",
  },
  {
    image: image2,
    heading: "PGDM – Post Graduate Program in Management",
    para: "An accelerated 1-year management program crafted for working professionals to sharpen decision-making skills, enhance leadership abilities, and prepare for senior roles in a competitive global business environment.",
  },
  {
    image: image1,
    heading: "PGPM-ELITE – Post Graduate Diploma in Management",
    para: "With a strong emphasis on case studies, live projects, and internships, this 2-year course empowers young graduates to develop analytical, problem-solving, and communication skills essential for the corporate world.",
  },
  {
    image: image2,
    heading: "PGDM – Post Graduate Program in Management",
    para: "Designed for mid-level professionals, this 1-year program blends strategic management concepts with real-world application, helping participants fast-track their careers and transition into leadership positions.",
  },
  
];

function CareerSection() {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // animation triggers only once
      offset: 100, // offset from bottom
    });
  }, []);

  return (
    <div className="car-container container-fluid mt-5">
      <div className="car-heading-text mx-2 mb-4" data-aos="fade-up">
        <h1 className="h2">
          <strong>Full Time Programs</strong>
        </h1>
        <p className="mb-4">
        Explore our full-time programs designed to equip students and professionals with strong business acumen, practical skills, and global exposure to excel in today’s dynamic corporate landscape.
        </p>
      </div>

      {/* ✅ Swiper with AOS on each card */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={10}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
        className="car-swiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="car-item-div" data-aos="fade-up" data-aos-delay={index * 200}>
              <div className="car-image-wrapper">
                <img src={item.image} alt={item.heading} />
              </div>
              <div className="car-right">
                <h1>{item.heading}</h1>
                <p>{item.para}</p>
                <div className="car-explore-btn-div">
                  <button onClick={()=>navigate('/pgpm-elite')} className="btn btn-outline-dark py-2">EXPLORE PGDM</button>
                  <button onClick={()=>navigate('/pgdm')} className="btn car-apply-btn py-2">APPLY NOW</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Sales />
    </div>
  );
}

export default CareerSection;
