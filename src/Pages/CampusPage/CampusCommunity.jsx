import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate()
  return (
    <div className='captital-campus-content-sec mt-5'>
        <h1 className='mb-4 display-5 fw-bold'>Insights from the <span style={{color:"#5ac501"}}>UCU community</span></h1>
        <Swiper
  modules={[Navigation, Pagination, Autoplay]} // include Autoplay
  spaceBetween={20}
  slidesPerView={3}
  className="participant-sec-swiper pb-0"
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
          <SwiperSlide key={index} className="text-center mb-5">
            <img
              src={item.image}
              className="campus-faculity-image"
            />
            <div className='campus-community-grid-data'>
            <p className="text-start fs-5 fw-bold mb-0">
              {item.text}
            </p>
            <p className="text-start sort-disc mb-0">{item.prof}</p>
             <button onClick={()=>navigate(`/blog`)} className="btn-cta campus-community-km-btn">know more <span className="chev">›</span></button>
            </div>
           
            </SwiperSlide>
        ))}
              </Swiper>
    </div>
  )
}

export default CampusCommunity