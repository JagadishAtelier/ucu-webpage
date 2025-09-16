import React, { useEffect } from "react";
import image1 from "../../Assets/homeImage/UCU Logo SVG/close-up-women-working-together.jpg";
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
      heading: "Women’s Program",
      para: `A “Women’s Program” (sometimes called Women’s Leadership Program, Gender Leadership Initiative, Women in Academia etc.) refers to structured programmes designed to support the development, empowerment, and advancement of women in professional, academic, or leadership roles.`,
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


function Wps() {
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
        <h1 className="display-4 fw-bold col-12 col-lg-12 text-center"><span style={{color:"#5ac501"}}> Women's </span>Program
        </h1>
        <p className="mb-4 program-description col-lg-6 text-center">
        A “Women’s Program” (sometimes called Women’s Leadership Program, Gender Leadership Initiative, Women in Academia etc.) refers to structured programmes designed to support the development, empowerment, and advancement of women in professional, academic, or leadership roles.
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
                <div className="car-explore-btn-div">
                  <button onClick={() => showModal("enquiry")} className="btn btn-outline-dark py-2">EXPLORE</button>
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

export default Wps
