import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useNavigate } from "react-router-dom";

const cities = [
  { title: "USA", img: "https://img.freepik.com/free-photo/new-york-city_649448-1230.jpg?w=740" },
  { title: "Canada", img: "https://img.freepik.com/free-photo/ottawa-parliament-hill-building_649448-3630.jpg?w=740" },
  { title: "UK", img: "https://img.freepik.com/free-photo/big-ben-houses-parliament-london-uk_268835-1400.jpg?w=740" },
  { title: "Singapore", img: "https://img.freepik.com/free-photo/marina-bay-sands-night-singapore_181624-1683.jpg?w=740" },
  { title: "Australia", img: "https://img.freepik.com/free-photo/sydney-opera-house-sydney-australia_181624-38241.jpg?w=740" },
];

function ContactUsCarouselInternational({ section }) {
  const navigate = useNavigate();
  const sectionCities = section?.countries?.length
    ? section.countries.map((country) => ({ title: country.name, img: country.image }))
    : cities;
  const sortedCities = [...sectionCities].sort((a, b) =>
    a.title.localeCompare(b.title, "en", { sensitivity: "base" })
  );
  const link = section?.link || "/contact-chapters-international";

  return (
    <div className="captital-campus-content-sec mt-5">
      <h1 className="mb-4 display-5 fw-bold">
        <span style={{ color: "#5ac501" }}>International </span> Centers
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
              delay: 2000,
              disableOnInteraction: false,
              reverseDirection: true,
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
          <h2 className="fw-bold mt-2">{section?.title || "Presence across leading countries worldwide"}</h2>
          <p className="text-muted mt-3">
            {section?.content ||
              "UCU international chapters support global accessibility, community engagement and regional coordination."}
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

export default ContactUsCarouselInternational;
