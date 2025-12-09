import React from 'react';
import './PlacementTab.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
export const data = [
  {
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
    head: "Mock interviews and group discussion preparations",
    para: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg",
    head: "CV Reviews",
    para: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    image: "https://images.pexels.com/photos/1181715/pexels-photo-1181715.jpeg",
    head: "Mentorship",
    para: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
    head: "Industry and Role",
    para: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];


function PlacementCareerTab() {
  return (
    <div>
      <h1 className='fs-2 fw-medium mt-5'>Career services</h1>
    <p>
        To make participants industry ready and find professional opportunities that meet their career aspirations and goals, the UCU Career Services team conducts a wide range of learning activities and events. These events and activities showcased below are constantly reviewed and reinvented to stay ahead of the curve.
    </p>

      <Swiper
      modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // ✅ autoplay without importing module
        loop={true}
                breakpoints={{
          0: { slidesPerView: 1 },       // ✅ 1 slide on mobile
          768: { slidesPerView: 2 },     // ✅ 2 slides on tablets
          1024: { slidesPerView: 3 }     // ✅ 3 slides on desktop
        }}
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
