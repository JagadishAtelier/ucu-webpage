import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Sales.css";

import image1 from "../../Assets/ucu (1)/Rectangle 53.jpg";
import image2 from "../../Assets/ucu (1)/Rectangle 53-1.jpg";
import image3 from "../../Assets/ucu (1)/Rectangle 53-2.jpg";
import image4 from "../../Assets/ucu (1)/Rectangle 100.jpg";

const data = [
  {
    image: image1,
    heading: "Diploma in Cybersecurity",
    para: "Hands-on training for students aiming to enter the high-demand field of data security and digital protection.",
  },
  {
    image: image2,
    heading: "Diploma in GCC",
    para: "Intensive program for students preparing for careers in global shared services and business operations.",
  },
  {
    image: image3,
    heading: "Diploma in AI & Product Management",
    para: "Practical learning for students interested in the fast-growing fields of artificial intelligence and product strategy.",
  },
  {
    image: image4,
    heading: "Diploma in Sales",
    para: "6-month program for undergraduates eager to build careers in business development and client engagement.",
  },
];

function Sales() {
  return (
    <div className="sales-container container-fluid mt-5 mb-5">
      <div className="car-heading-text text-center mb-4">
        <h1 className="h1">
          <strong>Diploma Programs</strong>
        </h1>
        <p>
          Explore our range of industry-focused programs designed to equip
          students with practical skills and career-ready expertise.
        </p>
      </div>

      <Swiper
        modules={[Pagination]}
        spaceBetween={5}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="sales-swiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="sales-item-div">
              <img src={item.image} alt={item.heading} />
              <div className="p-3 position-relative">
                <h1 className="mt-3">{item.heading}</h1>
                <p className="mb-3">{item.para}</p>
                <div className="car-explore-btn-div sales-btn p-1">
                  <button className="car-explore-btn expo-btn btn btn-outline-dark">
                    EXPLORE PGDM
                  </button>
                  <button className="car-apply-btn expo-btn">APPLY NOW</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Sales;
