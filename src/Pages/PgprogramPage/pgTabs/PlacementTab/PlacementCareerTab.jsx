import React from 'react';
import './PlacementTab.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
const data = [
  {
    image: "https://www.spjimr.org/wp-content/uploads/2022/09/c2e511cc-7525-48fa-a85f-cfcd06c9f61c-1-jpeg.webp",
    head: "Mock interviews and group discussion preparations",
    para: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    image: "https://www.spjimr.org/wp-content/uploads/2022/09/c2e511cc-7525-48fa-a85f-cfcd06c9f61c-1-jpeg.webp",
    head: "CV Reviews",
    para: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    image: "https://www.spjimr.org/wp-content/uploads/2022/09/c2e511cc-7525-48fa-a85f-cfcd06c9f61c-1-jpeg.webp",
    head: "Mentorship",
    para: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    image: "https://www.spjimr.org/wp-content/uploads/2022/09/c2e511cc-7525-48fa-a85f-cfcd06c9f61c-1-jpeg.webp",
    head: "Industry and Role",
    para: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];

function PlacementCareerTab() {
  return (
    <div>
      <h1 className='fs-2 fw-medium mt-5'>Career services</h1>
    <p>
        To make participants industry ready and find professional opportunities that meet their career aspirations and goals, the SPJIMR Career Services team conducts a wide range of learning activities and events. These events and activities showcased below are constantly reviewed and reinvented to stay ahead of the curve.
    </p>

      <Swiper
      modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{ delay: 100000, disableOnInteraction: false }} // ✅ autoplay without importing module
        loop={true}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="placement-car-slide my-3">
              <img src={item.image} alt={item.head} className="placement-car-image" />
              <h3 className="placement-car-head">{item.head}</h3>
              <p className="placement-car-para">{item.para}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default PlacementCareerTab;
