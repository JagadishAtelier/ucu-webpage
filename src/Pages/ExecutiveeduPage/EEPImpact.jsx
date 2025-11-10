import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const data = [
    {
        videoUrl: "https://youtu.be/uvyTVoElld4?si=ET5MBHw44ReoNMhG",
        head: "Empowering Rural Entrepreneurs",
        content:
            "Meet Kavita, who transformed her small tailoring shop in a remote village into a thriving enterprise after attending an executive development program. Today, she mentors 50+ women entrepreneurs in her community, creating sustainable livelihoods."
    },
    {
        videoUrl: "https://youtu.be/uvyTVoElld4?si=ET5MBHw44ReoNMhG",
        head: "From Manager to Visionary Leader",
        content:
            "Rohit, a mid-level manager, used insights from the General Management Programme to drive innovation within his company. His leadership helped launch a new product line that doubled revenue within a year."
    },
    {
        videoUrl: "https://youtu.be/uvyTVoElld4?si=ET5MBHw44ReoNMhG",
        head: "Sustainability Through Innovation",
        content:
            "Ananya’s idea to repurpose plastic waste into affordable construction materials won recognition after completing an executive education course on sustainable business strategy. Her initiative now partners with NGOs to build eco-friendly homes."
    },
    {
        videoUrl: "https://youtu.be/uvyTVoElld4?si=ET5MBHw44ReoNMhG",
        head: "Transforming Education with Technology",
        content:
            "After participating in a leadership workshop, Arjun developed a low-cost digital learning tool that has reached over 20,000 rural students across India, bridging the gap between quality education and accessibility."
    },
    {
        videoUrl: "https://youtu.be/uvyTVoElld4?si=ET5MBHw44ReoNMhG",
        head: "Driving Social Impact Through Corporate Responsibility",
        content:
            "Priya, a corporate professional, designed a CSR initiative that provides free vocational training to underprivileged youth. The program has trained over 3,000 individuals, empowering them with skills for sustainable employment."
    }
];

function convertToEmbedUrl(url) {
    const videoId = url.split("youtu.be/")[1].split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
}

function EEPImpact() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 120,
        });
    }, []);

    return (
        <div className="eepim-industry-container captital-campus-content-sec mt-5">
            <div
                className="d-flex flex-column flex-lg-column align-items-lg-center justify-content-lg-center"
                data-aos="fade-up"
            >
                <h1 className="text-center">
                    Inspiring Stories of Success and Impact
                </h1>
            </div>

            {/* ✅ Swiper Integration */}
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={2}
                autoplay={{
                    delay: 250000,
                    disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 1 },
                    1024: { slidesPerView: 2 },
                }}
                className="eepim-industry-card-div px-3"
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="eepim-industry-card"
                            data-aos="zoom-in"
                            data-aos-delay={index * 200}
                        >
                            <iframe
                                className="eepim-i-frame"
                                src={convertToEmbedUrl(item.videoUrl)}
                                title={item.author}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            <div className="d-flex flex-column justify-content-start text-start">
                                <p>{item.head}</p>
                                <p className="program-description">{item.content}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default EEPImpact;
