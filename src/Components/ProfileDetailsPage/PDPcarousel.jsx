import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./PDPpage.css";

const data = [
  {
    image:
      "https://www.spjain.org/hubfs/Dr%20Abhijit%20Dasgupta%20Easy%20Shiksha-1.jpg",
    head: "Five must have skills for a successful Data Science career",
    para: `Dr Abhijit Dasgupta shares the essential skills every aspiring data scientist must master. This article, published in Easy Shiksha provides insights into statistics, machine learning, and more to help build a successful career in data science.`,
  },
  {
    image:
      "https://www.spjain.org/hubfs/Dr%20Abhijit%20Dasgupta%20Higher%20Education%20Review.jpg",
    head: "Five must have skills for a successful Data Science career",
    para: `Dr Abhijit Dasgupta shares the essential skills every aspiring data scientist must master. This article, published in Easy Shiksha provides insights into statistics, machine learning, and more to help build a successful career in data science.`,
  },
  {
    image:
      "https://www.spjain.org/hubfs/Digital%20Learning%20article%20Dr%20Abhijit%20Dasgupta%20(1).jpg",
    head: "Five must have skills for a successful Data Science career",
    para: `Dr Abhijit Dasgupta shares the essential skills every aspiring data scientist must master. This article, published in Easy Shiksha provides insights into statistics, machine learning, and more to help build a successful career in data science.`,
  },
];

function PDPcarousel() {
  return (
    <div className="mt-lg-5 my-5 mx-lg-auto ">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="d-flex flex-column-reverse flex-md-row flex-lg-row">
              <div className="d-flex flex-column flex-lg-column text-start text-lg-left gap-2 pdp-carousel-text p-lg-5 py-5 text-white">
                <h4 className="fs-5 fw-bold">{item.head}</h4>
                <div className='vertical-line-pdp'></div>
                <p className="fs-6 fw-light">{item.para}</p>
                <button className="rma-btn">Read Article</button>
              </div>
              <div className="pdp-carousel-img-div">
              <img src={item.image} alt={item.head} className="pdp-carousel-img"/>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default PDPcarousel;
