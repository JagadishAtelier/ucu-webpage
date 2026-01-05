import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useNavigate } from "react-router-dom";
const cities = [
    {
        title: "DELHI & NCR",
        img: "https://img.freepik.com/free-photo/typographic-optical-illusions-delhi_23-2150921914.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80"
    },
    {
        title: "Mumbai",
        img: "https://img.freepik.com/free-photo/high-angle-shot-bandra-worli-sealink-mumbai-enveloped-with-fog_181624-9734.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80"
    },
    {
        title: "Kolkata",
        img: "https://img.freepik.com/premium-photo/victoria-memorial-is-monument-museum-located-kolkata-west-bengal-india_459244-68.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80"
    },
    {
        title: "Bangalore",
        img: "https://img.freepik.com/premium-photo/mysore-palace_78361-1014.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80"
    },
    {
        title: "Hyderabad",
        img: "https://img.freepik.com/free-photo/architecture-ancient-monument-world-heritage-day-celebration_23-2151297157.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80"
    },
    {
        title: "Assam",
        img: "https://img.freepik.com/premium-photo/scenic-view-mountains-against-cloudy-sky_1048944-16107144.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80"
    },
    {
        title: "Ahmedabad",
        img: "https://img.freepik.com/free-photo/mehrangarh-fort_1357-12.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80"
    },
    {
        title: "Coimbatore",
        img: "https://img.freepik.com/free-photo/temple-atop-clouds-sunrise_23-2152002049.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80"
    },
    {
        title: "Kochi",
        img: "https://img.freepik.com/free-photo/beautiful-sunrise-fishing-dip-nets-pakpra-phatthalung-thailand_335224-813.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80"
    },
    {
        title: "Telangana ",
        img: "https://img.freepik.com/free-photo/parinirvana-stupa-temple-kushinagar-india_554837-289.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80"
    },
     {
        title: "Pune",
        img: "https://img.freepik.com/premium-photo/tourist-enjoying-architectural-wonder-anand-sagar-shri-saint-gajanan-maharaj-sansthan-anand-sagar-is-tourist-attraction-place-shegaon-maharashtra-india_136354-12665.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80"
    },

];
// ✅ Sort alphabetically
const sortedCities = [...cities].sort((a, b) =>
  a.title.localeCompare(b.title, "en", { sensitivity: "base" })
);
function ContactUsCarousel() {
    const navigate = useNavigate()
    return (
        <div className="captital-campus-content-sec mt-5">
            <h1 className="mb-4 display-5 fw-bold"><span style={{ color: "#5ac501" }}>India</span> Centers</h1>
            <div className="row row-gap-5 align-items-stretch justify-content-center flex-lg-row flex-column">

                {/* LEFT - SWIPER */}
                <div className="col-lg-7 contact-us-swiper-div">
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={3}
                        spaceBetween={20}
                        loop={true}
                        speed={1200}
                        autoplay={{
                            delay: 2000000,
                            disableOnInteraction: false
                        }}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="contact-carousel-swiper"
                    >
                        {sortedCities.map((city, index) => (
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
                <div className="contact-carousel-text col-lg-5 col-11 mx-auto bg-white p-3 shadow d-flex flex-column justify-content-between">
                    <p className="fw-bold m-0" style={{ color: "#0f1a48" }}>UCU Chapters</p>
                    <h2 className="fw-bold mt-2">Presence across major cities in India</h2>
                    <p className="text-muted mt-3">
                        India’s leading brands continue to strengthen their presence across major cities, ensuring that customers in metropolitan and Tier-1 locations have easy access to their products and services.
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
