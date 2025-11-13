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

function InternationalCollab() {
    return (
        <div className="captital-campus-content-sec mt-4">
            <h1 className="text-start">International Collaboration</h1>
            <p>International Collaboration focuses on building strong partnerships with reputed global universities, research institutions, and industries to promote academic excellence and innovation. Through student and faculty exchange programs, joint research projects, and dual-degree opportunities, it aims to enhance cross-cultural understanding and global competence. The initiative encourages participation in international conferences, workshops, and collaborative learning platforms, providing exposure to diverse academic ecosystems. By fostering global networks and knowledge sharing, International Collaboration enables institutions to address global challenges, drive sustainable development, and prepare students to become globally responsible professionals.</p>
            <h1 className="my-4 text-center">International Companies</h1>

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
                            <div className="international-collab-bg">
                                <h5 className="fw-bold mb-2">{item.head}</h5>
                                <p style={{ fontSize: "0.9rem" }}>{item.desc}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <h1 className="my-4 text-center">Universities</h1>

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
                            <div className="international-collab-bg">
                                <h5 className="fw-bold mb-2">{item.head}</h5>
                                <p style={{ fontSize: "0.9rem" }}>{item.desc}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default InternationalCollab