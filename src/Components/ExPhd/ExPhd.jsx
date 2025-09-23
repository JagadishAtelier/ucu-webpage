import React, { useEffect } from "react";
import image1 from "../../Assets/homeImage/UCU Logo SVG/business-people-manager-working-their-new-project-classroom.jpg";
import image2 from "../../Assets/ucu (1)/Rectangle 45.jpg";
import Sales from "../Sales/Sales";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useModal } from "../Context/ApplyModal/ModalContext";
import './ExPhd.css'
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { FaUserTie } from "react-icons/fa"; 
const data = [
    {
      image: image1,
      heading: "Executive PhD",
      para: `The Executive PhD (EPhD) is a doctoral-level program tailored for working professionals, combining advanced research with career continuity.
      Designed for Industry Leaders aspiring a career in academia 
      `,
      eligible : "10+ years of work experience"
    },
    // {
    //   image: image2,
    //   heading: "PGDM",
    //   para: `A Two-Year PGPM pairs core management education with immersive industry
    //   projects for candidates with 0–3 years of experience. Fast-track your entry into new-age job
    //   roles through global internships, live labs, and executive mentorship—building the leadership
    //   skills of tomorrow's market demands.
    //   `,
    // },
  
    
  ];
function ExPhd() {
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
        <h1 className="display-4 fw-bold col-12 col-lg-12 text-center"><span style={{color:"#5ac501"}}>Executive </span>PhD
        </h1>
        <p className="mb-lg-4 mb-0 program-description col-lg-6 text-center">
        An Executive PhD (or EPhD) is a doctoral‐level programme designed specifically for experienced professionals / executives, enabling them to pursue rigorous research while continuing in their careers

        </p>
      </div>

      {/* ✅ Swiper with AOS on each card */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={10}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
        }}
        className="car-swiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="car-item-div ex-phd-container" data-aos="fade-up" data-aos-delay={index * 200}>
              <div className="car-image-wrapper exPhd-img-div">
                <img src={item.image} alt={item.heading} className="exPhd-img"/>
              </div>
              <div className="car-right">
                <h1 className="title mb-3">{item.heading}</h1>
                <p className="program-description">{item.para}</p>
                <div className="d-flex flex-row gap-2 items-center">
                  <FaUserTie />
                  <p className="program-description">{item.eligible}</p>
                </div>
                <div className="car-explore-btn-div">
                  <button className="btn btn-outline-dark py-2">EXPLORE</button>
                  <button onClick={() => showModal("apply")} className="btn car-apply-btn py-2">APPLY NOW</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ExPhd
