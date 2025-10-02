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
      // heading: "Career Reboot Program",
      para1: `Designed for women aspiring to get back into the corporate`,
      para2: `Program Duration: X months`,
      para3: `Mode: Hybrid`,

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
        <h1 className="display-4 fw-bold col-12 col-lg-12 text-center">Career Reboot Program<span style={{color:"#5ac501"}}> for Women</span>
        </h1>
        <p className="mb-lg-4 mb-0 program-description col-lg-6 text-center">
        UCU’s Career Reboot Program for Women empowers professionals returning from a career break—equipping them with refreshed skills, renewed confidence, and a clear pathway back into the workforce
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
                <ul>
                  <li>
                    <p className="program-description">{item.para1}</p>
                    </li>
                  <li >
                    <p className="program-description">{item.para2}</p>
                    </li>
                  <li >
                    <p className="program-description">{item.para3}</p>
                    </li>
                </ul>
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

export default Wps
