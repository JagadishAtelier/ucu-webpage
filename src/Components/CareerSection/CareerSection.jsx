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

const data = [
  {
    image: image1,
    heading: "PGDM – Post Graduate Diploma in Management",
    para: "A 2-year MBA program designed for fresh graduates (0–3 years of experience) to build strong management foundations and launch successful careers.",
  },
  {
    image: image2,
    heading: "PGPM – Post Graduate Program in Management",
    para: "A 1-year fast-track MBA program for professionals with 3+ years of experience, focused on leadership, strategic thinking, and global business readiness.",
  },
  {
    image: image1,
    heading: "PGDM – Post Graduate Diploma in Management",
    para: "A 2-year MBA program designed for fresh graduates (0–3 years of experience) to build strong management foundations and launch successful careers.",
  },
  {
    image: image2,
    heading: "PGPM – Post Graduate Program in Management",
    para: "A 1-year fast-track MBA program for professionals with 3+ years of experience, focused on leadership, strategic thinking, and global business readiness.",
  },
];

function CareerSection() {
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
          <strong>Programs Designed for Every Career Stage</strong>
        </h1>
        <p className="mb-4">
          Discover UCU’s industry-aligned programs that prepare you for
          leadership, innovation, and career growth.
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
                  <button className="btn btn-outline-dark py-2">EXPLORE PGDM</button>
                  <button className="btn car-apply-btn py-2">APPLY NOW</button>
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
