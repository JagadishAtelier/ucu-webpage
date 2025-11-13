import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
  {
    image:
      "https://img.freepik.com/free-photo/professors-discussing-research-campus_23-2148827119.jpg",
    head: "Global University Partnerships",
    desc: "Collaborations with international universities for student exchange, joint research, and dual degree programs.",
  },
  {
    image:
      "https://img.freepik.com/free-photo/teacher-explaining-students-classroom_23-2148862121.jpg",
    head: "Faculty Exchange Programs",
    desc: "Academic collaborations that enable faculty to teach, train, and share expertise across partner institutions.",
  },
  {
    image:
      "https://img.freepik.com/free-photo/group-students-scientific-laboratory_23-2148827205.jpg",
    head: "Collaborative Research Projects",
    desc: "Joint academic research initiatives addressing global challenges through interdisciplinary studies.",
  },
  {
    image:
      "https://img.freepik.com/free-photo/students-attending-online-lecture_23-2148920114.jpg",
    head: "Curriculum Development Alliances",
    desc: "Partnerships with academia to co-develop modern curricula aligned with industry trends and global standards.",
  },
  {
    image:
      "https://img.freepik.com/free-photo/students-graduation-ceremony-holding-diplomas_23-2148751078.jpg",
    head: "Student Exchange & Mobility",
    desc: "Opportunities for students to study abroad, gain global exposure, and experience diverse learning cultures.",
  },
];


function AcademicCollab() {
  return (
    <div className="captital-campus-content-sec mt-4">
      <h1 className="mb-4 text-center">Academic Collaboration</h1>

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
  )
}

export default AcademicCollab