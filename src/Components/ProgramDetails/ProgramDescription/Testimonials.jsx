// src/components/Testimonials.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonials.css";

import { Star, StarHalf } from "lucide-react";

// Example testimonial data
const testimonials = [
  {
    text: "The program gave me the confidence and knowledge to excel in my field.",
    author: "David John",
    role: "Artist and Instructor",
    rating: 4.5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s",
  },
  {
    text: "I loved the hands-on learning approach and supportive faculty.",
    author: "Sarah Lee",
    role: "Graduate Student",
    rating: 5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s",
  },
  {
    text: "The curriculum was practical and aligned with industry needs.",
    author: "Michael Chen",
    role: "Data Analyst",
    rating: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s",
  },
  {
    text: "Best academic experience I’ve had – highly recommend!",
    author: "Priya Sharma",
    role: "MBA Graduate",
    rating: 5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s",
  },
];

const Testimonials = () => {
  return (
    <div>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 }, // 2 per view on tablet+
        }}
        className="testimonial-swiper"
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx}>
            <div className="testimonial-card p-4 shadow-sm h-100">
              {/* Rating */}
              <div className="rating-star mb-3 d-flex text-warning">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={18} fill="#ffc107" />
                ))}
                {/* {t.rating % 1 !== 0 && <StarHalf size={18} />} */}
              </div>
              <p className="fst-italic">"{t.text}"</p>
              <div className="d-flex align-items-center gap-3 mt-4">
                <img
                  src={t.img}
                  alt={t.author}
                  className="rounded-circle"
                  width="50"
                  height="50"
                />
                <div>
                  <h6 className="mb-0">{t.author}</h6>
                  <small className="text-muted">{t.role}</small>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
