import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useNavigate } from "react-router-dom";

const cities = [
  { title: "North", img: "https://img.freepik.com/free-photo/typographic-optical-illusions-delhi_23-2150921914.jpg" },
  { title: "South", img: "https://img.freepik.com/free-photo/temple-atop-clouds-sunrise_23-2152002049.jpg" },
  { title: "East", img: "https://img.freepik.com/premium-photo/victoria-memorial-is-monument-museum-located-kolkata-west-bengal-india_459244-68.jpg" },
  { title: "West", img: "https://img.freepik.com/free-photo/high-angle-shot-bandra-worli-sealink-mumbai-enveloped-with-fog_181624-9734.jpg" },
  { title: "Central", img: "https://img.freepik.com/free-photo/mehrangarh-fort_1357-12.jpg" },
];

function ContactUsCarousel({ section }) {
  const navigate = useNavigate();
  const sectionCities = section?.states?.length
    ? section.states.map((state) => ({ title: state.name, img: state.image }))
    : cities;
  const sortedCities = [...sectionCities].sort((a, b) =>
    a.title.localeCompare(b.title, "en", { sensitivity: "base" })
  );
  const link = section?.link || "/contact-chapters";

  return (
    <div id="regional-centers" className="captital-campus-content-sec mt-5">
      <h1 className="mb-4 display-5 fw-bold">
        <span style={{ color: "#5ac501" }}>India</span> Regional Centers
      </h1>
      <div className="row row-gap-5 align-items-stretch justify-content-center flex-lg-row flex-column">
        <div className="col-lg-7 contact-us-swiper-div">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            speed={1200}
            autoplay={{
              delay: 2000000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="contact-carousel-swiper"
          >
            {sortedCities.map((city, index) => (
              <SwiperSlide key={`${city.title}-${index}`}>
                <div onClick={() => navigate(link)} className="contact-carousel-card">
                  <img src={city.img} alt={city.title} className="contact-carousel-img" />
                  <div className="contact-carousel-title">{city.title}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="contact-carousel-text col-lg-5 col-11 mx-auto bg-white p-3 shadow d-flex flex-column justify-content-between">
          <p className="fw-bold m-0" style={{ color: "#0f1a48" }}>
            {section?.tag || "UCU Centers"}
          </p>
          <h2 className="fw-bold mt-2">{section?.title || "Presence across major regions in India"}</h2>
          <p className="text-muted mt-3">
            {section?.content ||
              "UCU regional chapters connect Rising Leaders across North, South, East, West and Central India."}
          </p>

          <div className="d-flex gap-3 mt-4">
            <button onClick={() => navigate(link)} className="btn con-car-btn-success px-4 py-2 fw-bold">
              KNOW MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsCarousel;
