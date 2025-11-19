import React from "react";
import "./Testimonial.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
        name: "Rahul Mehta",
        comment:
            "The placement support was excellent, and I received multiple interview opportunities. Truly grateful!",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
        name: "Priya Sharma",
        comment:
            "The faculty is very supportive, and the overall learning environment helped me grow professionally.",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
        name: "Arun Kumar",
        comment:
            "One of the best institutes for career growth. Their training programs shaped my skills effectively.",
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        name: "Sneha Patel",
        comment:
            "Amazing support and high-quality training helped me achieve my goals.",
    },
];

function Testimonial() {
    return (
        <div className="testi-wrapper">
            <h1 className="display-4 fw-bold col-12 text-center">
                <span style={{ color: "#5ac501" }}>Testimonials</span>
            </h1>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                slidesPerView={3}   // ✅ show 3 per page
                breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="testi-swiper"
            >
                {testimonials.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div
                            className="testi-card"
                            style={{ backgroundImage: `url(${item.image})` }}
                        >
                            <div className="testi-overlay"></div>

                            <div className="testi-content">
                                <h3 className="testi-name">{item.name}</h3>
                                <p className="testi-comment">{item.comment}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
}

export default Testimonial;
