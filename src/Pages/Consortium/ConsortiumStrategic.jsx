import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    head: "Strategic Partners",
    para: "Our strategic partners share our deep commitment to enhance inclusion in global business education and leadership. Thanks to them, students are redefining the world of business from the classroom to the boardroom — and heading confidently towards a successful future. The Consortium values its strategic partnerships with the following organisations and institutions",
  },
  {
    head: "Our Corporate Partners",
    para: "Our strategic partners share our deep commitment to enhance inclusion in global business education and leadership. Thanks to them, students are redefining the world of business from the classroom to the boardroom — and heading confidently towards a successful future. The Consortium values its strategic partnerships with the following organisations and institutions",
  },
  {
    head: "Our Academic Partners",
    para: "Our strategic partners share our deep commitment to enhance inclusion in global business education and leadership. Thanks to them, students are redefining the world of business from the classroom to the boardroom — and heading confidently towards a successful future. The Consortium values its strategic partnerships with the following organisations and institutions",
  },
];

function ConsortiumStrategic() {
  return (
    <div className="captital-campus-content-sec my-4 text-center">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        className="strategic-swiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="consortium-strategic-container">
              <h1 className="text-uppercase fw-bold display-4">{item.head}</h1>
              <p className="mt-3 col-lg-10 col-12 text-center mx-auto">{item.para}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ConsortiumStrategic;
