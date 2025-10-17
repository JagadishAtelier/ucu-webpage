import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import modules from the new path
import { Navigation, Pagination, Autoplay } from "swiper/modules";
const data = [
    {image : "https://www.spjimr.org/wp-content/uploads/2025/06/state-of-the-art-classroom.webp",
        text : "Keep moving forward — one step, one task, one deadline at a time",
            prof:"Kartik Jeewan, PGPM 2023-2025"
    },
    {image : "https://www.spjimr.org/wp-content/uploads/2025/06/state-of-the-art-classroom.webp",
        text : "Keep moving forward — one step, one task, one deadline at a time",
            prof:"Kartik Jeewan, PGPM 2023-2025"
    },
    {image : "https://www.spjimr.org/wp-content/uploads/2025/06/state-of-the-art-classroom.webp",
        text : "Keep moving forward — one step, one task, one deadline at a time",
            prof:"Kartik Jeewan, PGPM 2023-2025"
    },
]
function CampusCommunity() {
  return (
    <div className='captital-campus-content-sec my-5'>
        <h1 className='mb-4'>Insights from the SPJIMR community</h1>
        <Swiper
  modules={[Navigation, Pagination, Autoplay]} // include Autoplay
  spaceBetween={20}
  slidesPerView={3}
  className="participant-sec-swiper"
  navigation
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000, disableOnInteraction: false }} // autoplay config
  breakpoints={{
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
  }}
>
        {data.map((item, index) => (
          <SwiperSlide key={index} className="text-center">
            <img
              src={item.image}
              className="campus-faculity-image"
            />
            <div className='campus-community-grid-data'>
            <p className="text-start fs-5 fw-bold">
              {item.text}
            </p>
            <p className="text-start sort-disc">{item.prof}</p>
             <button onClick={()=>navigate(`${activeItem.link}`)} className="btn-cta campus-community-km-btn">know more <span className="chev">›</span></button>
            </div>
           
            </SwiperSlide>
        ))}
              </Swiper>
    </div>
  )
}

export default CampusCommunity