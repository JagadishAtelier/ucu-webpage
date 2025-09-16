import React, { useEffect } from "react";
import "./CareerSection.css";
import image1 from "../../Assets/ucu (1)/Rectangle 43.jpg";
import image2 from "../../Assets/ucu (1)/Rectangle 45.jpg";
import Sales from "../Sales/Sales";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useModal } from "../Context/ApplyModal/ModalContext";

import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const data = [
  {
    image: image1,
    heading: "PGPM - ELITE",
    para: `A one-year Post Graduate Program in Management crafted for professionals with
    3+ years of experience, merging executive leadership principles with real-world industry
    insights to accelerate careers into FinTech, AI consulting, or the GCC economy. Master
    cutting-edge frameworks and market strategies that position you as a transformative leader
    in the new global business landscape`,
  },
  {
    image: image2,
    heading: "PGDM",
    para: `A Two-Year PGPM pairs core management education with immersive industry
    projects for candidates with 0–3 years of experience. Fast-track your entry into new-age job
    roles through global internships, live labs, and executive mentorship—building the leadership
    skills of tomorrow's market demands.
    `,
  },
  {
    image: image1,
    heading: "PGPM - ELITE",
    para: `A one-year Post Graduate Program in Management crafted for professionals with
    3+ years of experience, merging executive leadership principles with real-world industry
    insights to accelerate careers into FinTech, AI consulting, or the GCC economy. Master
    cutting-edge frameworks and market strategies that position you as a transformative leader
    in the new global business landscape`,
  },
  {
    image: image2,
    heading: "PGDM",
    para: `A Two-Year PGPM pairs core management education with immersive industry
    projects for candidates with 0–3 years of experience. Fast-track your entry into new-age job
    roles through global internships, live labs, and executive mentorship—building the leadership
    skills of tomorrow's market demands.
    `,
  },

  
];

function CareerSection() {
  const { showModal } = useModal();
  console.log("useModal hook loaded:", showModal);  
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
      <div className="mx-2 mb-4 d-flex flex-lg-column flex-column text-center align-items-lg-center justify-content-lg-center" data-aos="fade-up">
        <h1 className="display-4 fw-bold col-12 col-lg-12 text-center"><span style={{color:"#5ac501"}}>Full Time </span>Programs
        </h1>
        <p className="mb-4 program-description col-lg-6 text-center">
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
                <h1 className="title mb-3">{item.heading}</h1>
                <p className="program-description">{item.para}</p>
                <div className="car-explore-btn-div">
                  <button onClick={() => showModal("enquiry")} className="btn btn-outline-dark py-2">EXPLORE PGDM</button>
                  <button onClick={() => showModal("apply")} className="btn car-apply-btn py-2">APPLY NOW</button>
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
