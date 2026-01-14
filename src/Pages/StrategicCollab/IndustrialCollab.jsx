import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
  {
    image:
      "https://img.freepik.com/free-photo/colleagues-discussing-project-laptop_23-2148827132.jpg",
    head: "Corporate Partnerships",
    desc: "Collaborations with leading industries for internships, research projects, and recruitment drives.",
  },
  {
    image:
      "https://img.freepik.com/free-photo/business-people-meeting_53876-102728.jpg",
    head: "Technology Alliances",
    desc: "Joint ventures with tech companies to explore cutting-edge digital transformation and innovation.",
  },
  {
    image:
      "https://img.freepik.com/free-photo/scientists-laboratory-with-microscope_23-2148827195.jpg",
    head: "Research & Development",
    desc: "Industry-driven R&D initiatives focusing on applied sciences and real-world problem solving.",
  },
  {
    image:
      "https://img.freepik.com/free-photo/industrial-workers-factory_23-2148827220.jpg",
    head: "Manufacturing Collaboration",
    desc: "Hands-on industry exposure through factory visits, product design challenges, and skill development programs.",
  },
  {
    image:
      "https://img.freepik.com/free-photo/robotic-handshake-human-hand_53876-129770.jpg",
    head: "AI & Automation",
    desc: "Collaborations to implement automation, robotics, and AI-driven solutions for smarter industries.",
  },
];

function IndustrialCollab() {
  return (
    <div className="captital-campus-content-sec mt-4">
      <h1 className="mb-4 text-center">Industry <span className="text-green">Partners</span></h1>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-4 px-3"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="industry-collab-card shadow d-flex flex-column align-items-center text-center"
            >
              <div className="industry-collab-image"
              style={{ height: "30vh", width: "100%", objectFit: "cover" }}
              >
                <img
                  src={item.image}
                  alt={item.head}
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="industry-collab-bg">
              <h5 className="fw-bold mb-2" style={{color:"white"}}>{item.head}</h5>
              <p style={{ fontSize: "0.9rem" }}>{item.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}

export default IndustrialCollab;
