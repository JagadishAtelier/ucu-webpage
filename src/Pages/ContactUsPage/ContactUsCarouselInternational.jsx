import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useNavigate } from "react-router-dom";
const cities = [
    // USA
    {
        title: "USA",
        img: "https://img.freepik.com/free-photo/new-york-city_649448-1230.jpg?w=740"
    },

    // Canada
    {
        title: "Canada",
        img: "https://img.freepik.com/free-photo/ottawa-parliament-hill-building_649448-3630.jpg?w=740"
    },

    // UK
    {
        title: "UK",
        img: "https://img.freepik.com/free-photo/big-ben-houses-parliament-london-uk_268835-1400.jpg?w=740"
    },

    // Germany
    {
        title: "Germany",
        img: "https://img.freepik.com/free-photo/vertical-view-roemerberg-frankfurt-germany_1268-20916.jpg?w=740"
    },

    // France
    {
        title: "France",
        img: "https://img.freepik.com/free-photo/pantheon-surrounded-by-people-cloudy-sky-sunset-paris-france_181624-8826.jpg?w=740"
    },

    // Netherlands
    {
        title: "Netherlands",
        img: "https://img.freepik.com/free-photo/beautiful-shot-pond-near-binnenhof-netherlands_181624-34798.jpg?w=740"
    },

    // Italy
    {
        title: "Italy",
        img: "https://img.freepik.com/free-photo/colosseum-rome-italy_268835-3919.jpg?w=740"
    },

    // Denmark
    {
        title: "Denmark",
        img: "https://img.freepik.com/free-photo/copenhagen-city-denmark_1268-14457.jpg?w=740"
    },

    // Finland
    {
        title: "Finland",
        img: "https://img.freepik.com/free-photo/helsinki-cathedral-finland_181624-33346.jpg?w=740"
    },

    // Spain
    {
        title: "Spain",
        img: "https://img.freepik.com/free-photo/sagrada-familia-barcelona-spain_268835-1412.jpg?w=740"
    },

    // Sweden
    {
        title: "Sweden",
        img: "https://img.freepik.com/free-photo/stockholm-old-town-gamla-stan-sweden_1268-14882.jpg?w=740"
    },

    // Australia
    {
        title: "Australia",
        img: "https://img.freepik.com/free-photo/sydney-opera-house-sydney-australia_181624-38241.jpg?w=740"
    },

    // Japan
    {
        title: "Japan",
        img: "https://img.freepik.com/free-photo/tokyo-tower-japan_649448-2921.jpg?w=740"
    },

    // Philippines
    {
        title: "Philippines",
        img: "https://img.freepik.com/free-photo/manila-cathedral-philippines_181624-17239.jpg?w=740"
    },

    // Singapore
    {
        title: "Singapore",
        img: "https://img.freepik.com/free-photo/marina-bay-sands-night-singapore_181624-1683.jpg?w=740"
    },

    // South Korea
    {
        title: "South Korea",
        img: "https://img.freepik.com/free-photo/gyengbokgung-palace-seoul-south-korea_53876-15741.jpg?w=740"
    },

    // Hong Kong
    {
        title: "Hong Kong",
        img: "https://img.freepik.com/free-photo/hong-kong-skyline-night_181624-20487.jpg?w=740"
    },

    // China
    {
        title: "China",
        img: "https://img.freepik.com/free-photo/great-wall-china_181624-30348.jpg?w=740"
    },

    // UAE
    {
        title: "UAE",
        img: "https://img.freepik.com/free-photo/burj-khalifa-dubai_181624-13247.jpg?w=740"
    },

    // Bahrain
    {
        title: "Bahrain",
        img: "https://img.freepik.com/free-photo/manama-skyline-bahrain_181624-10898.jpg?w=740"
    },

    // Muscat (Oman)
    {
        title: "Muscat",
        img: "https://img.freepik.com/free-photo/sultan-qaboos-mosque-muscat-oman_181624-24345.jpg?w=740"
    },

    // Saudi Arabia
    {
        title: "Saudi Arabia",
        img: "https://img.freepik.com/free-photo/kingdom-centre-tower-riyadh-saudi-arabia_181624-18348.jpg?w=740"
    },

    // Qatar
    {
        title: "Qatar",
        img: "https://img.freepik.com/free-photo/doha-skyline-qatar_181624-20347.jpg?w=740"
    },

    // Israel
    {
        title: "Israel",
        img: "https://img.freepik.com/free-photo/western-wall-jerusalem-israel_181624-25018.jpg?w=740"
    },

    // South Africa
    {
        title: "South Africa",
        img: "https://img.freepik.com/free-photo/table-mountain-cape-town-south-africa_181624-38822.jpg?w=740"
    },
    
    {
        title: "Pune",
        img: "https://img.freepik.com/premium-photo/tourist-enjoying-architectural-wonder-anand-sagar-shri-saint-gajanan-maharaj-sansthan-anand-sagar-is-tourist-attraction-place-shegaon-maharashtra-india_136354-12665.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80"
    },

];


function ContactUsCarouselInternational() {
    const navigate = useNavigate()
    return (
        <div className="captital-campus-content-sec mt-5">
            <h1 className="mb-4">International Chapters</h1>
            <div className="row row-gap-5 align-items-stretch justify-content-center flex-lg-row flex-column">

                {/* LEFT - SWIPER */}
                <div className="col-lg-7">
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
                            320: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="contact-carousel-swiper"
                    >
                        {cities.map((city, index) => (
                            <SwiperSlide key={index}>
                                <div onClick={() => navigate('/contact-chapters-international')} className="contact-carousel-card">
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
                        With a strong community of global HR leaders, UCU actively conducts networking events
                        and activities in over 30 cities across India. Discover all the updates and key highlights
                        of HR industry’s most happening episodes.
                    </p>

                    <div className="d-flex gap-3 mt-4">
                        <button onClick={() => navigate('/contact-chapters-international')} className="btn con-car-btn-success px-4 py-2 fw-bold">KNOW MORE</button>
                        {/* <button onClick={() => navigate('/contact-chapters')} className="btn btn-outline-dark px-4 py-2 fw-bold">KNOW MORE</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUsCarouselInternational;
