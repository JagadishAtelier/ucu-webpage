import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useNavigate } from "react-router-dom";
const cities = [
    {
        title: "DELHI & NCR",
        img: "https://nimbuscluster.blob.core.windows.net/server01/nhrdn/image/image-imV_BRs5Rzm2yGxB2g0-p-1659429933"
    },
    {
        title: "GOA",
        img: "https://nimbuscluster.blob.core.windows.net/server01/nhrdn/image/image-m1ESRKjRCnB33UJKVwdJr-1659429963"
    },
    {
        title: "HOSUR",
        img: "https://nimbuscluster.blob.core.windows.net/server01/nhrdn/image/image-upQmPVA0JnW-ORusew6G2-1659429987"
    },
    {
        title: "HOSUR",
        img: "https://nimbuscluster.blob.core.windows.net/server01/nhrdn/image/image-upQmPVA0JnW-ORusew6G2-1659429987"
    }
];

function ContactUsCarousel() {
    const navigate = useNavigate()
    return (
        <div className="contact-carousel-wrapper container-fluid py-5 mx-auto">
            <div className="row row-gap-5 align-items-stretch justify-content-center flex-lg-row flex-column">

                {/* LEFT - SWIPER */}
                <div className="col-lg-6">
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={3}
                        spaceBetween={20}
                        loop={true}
                        speed={1200}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            576: {
                                slidesPerView: 2,
                                spaceBetween: 15
                            },
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            },
                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 25
                            }
                        }}
                        className="contact-carousel-swiper"
                    >
                        {cities.map((city, index) => (
                            <SwiperSlide key={index}>
                                <div onClick={() => navigate('/contact-chapters')} className="contact-carousel-card">
                                    <img src={city.img} alt={city.title} className="contact-carousel-img" />
                                    <div className="contact-carousel-title">{city.title}</div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* RIGHT - TEXT BLOCK */}
                <div className="contact-carousel-text col-lg-4 col-11 mx-auto bg-white p-3 shadow d-flex flex-column justify-content-between">
                    <p className="fw-bold m-0" style={{ color: "#0f1a48" }}>UCU Chapters</p>
                    <h2 className="fw-bold mt-2">Presence across major cities in India</h2>
                    <p className="text-muted mt-3">
                        With a strong community of global HR leaders, UCU actively conducts networking events
                        and activities in over 30 cities across India. Discover all the updates and key highlights
                        of HR industry’s most happening episodes.
                    </p>

                    <div className="d-flex gap-3 mt-4">
                        <button onClick={() => navigate('/contact-chapters')} className="btn con-car-btn-success px-4 py-2 fw-bold">KNOW MORE</button>
                        {/* <button onClick={() => navigate('/contact-chapters')} className="btn btn-outline-dark px-4 py-2 fw-bold">KNOW MORE</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUsCarousel;
