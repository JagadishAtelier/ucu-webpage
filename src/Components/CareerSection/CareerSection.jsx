import React, { useEffect } from "react";
import "./CareerSection.css";
import image1 from "../../Assets/ucu (1)/Rectangle 43.jpg";
import image2 from "../../Assets/ucu (1)/Rectangle 45.jpg";
import Sales from "../Sales/Sales";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useModal } from "../Context/ApplyModal/ModalContext";

import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import { CalendarDays, User } from "lucide-react";
import ExpandableText from "./ExpandableText";
const data = [
  {
    image: image1,
    heading: "Post Graduate Program in Management - ELITE (PGPM-ELITE)",
    para: `A one-year Post Graduate Program in Management designed for experienced professionals—integrating executive leadership frameworks with real-world business insight to accelerate career impact`,
    buttonText:"Explore More",
    elgible : "3+ years of experience",
    duration : "18 months",
  },
  {
    image: image2,
    heading: "Post Graduate Diploma in Management (PGDM)",
    para: `A two-year UCU’s Post Graduate Diploma in Management (PGDM) for Freshers is designed to launch high-potential talent into the business world—building strong foundations and accelerating their journey into impactful careers.
    `,
    buttonText:"Explore More",
    elgible : "0 - 3 years of experience",
    duration : "24 months"

  },
  // {
  //   image: image1,
  //   heading: "PGPM - ELITE",
  //   para: `A one-year Post Graduate Program in Management crafted for professionals with
  //   3+ years of experience, merging executive leadership principles with real-world industry
  //   insights to accelerate careers into FinTech, AI consulting, or the GCC economy. Master
  //   cutting-edge frameworks and market strategies that position you as a transformative leader
  //   in the new global business landscape`,
  //   buttonText:"Explore-PGPM-ELITE"
  // },
  // {
  //   image: image2,
  //   heading: "PGDM",
  //   para: `A Two-Year PGPM pairs core management education with immersive industry
  //   projects for candidates with 0–3 years of experience. Fast-track your entry into new-age job
  //   roles through global internships, live labs, and executive mentorship—building the leadership
  //   skills of tomorrow's market demands.
  //   `,
  //   buttonText:"Explore-PGDM"
  // },
];
const secondRowdata = [
  {
    image: "https://plus.unsplash.com/premium_photo-1691849271953-5f727dfaf1ae?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "PGPM Flex – Weekend MBA for Working Professionals",
    para: `A one-year Post Graduate Program in Management crafted for professionals with 3+ years of experience, merging executive leadership principles with real-world industry
 insights to accelerate careers into FinTech, AI consulting, or the GCC economy.`,
    buttonText:"Explore More",
    elgible : "3+ years of experience",
    duration : "18 months",
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1691844987876-e27e1b502338?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "PGXPM – Executive Leadership Program for High-Potential Professionals",
    para: `A Two-Year PGPM pairs core management education with immersive industry
     projects for candidates with 0–3 years of experience. Fast-track your entry into new-age job
    roles through global internships, live labs, and executive mentorship—building the leadership
   skills of tomorrow's market demands.
    `,
    buttonText:"Explore More",
    elgible : "0 - 3 years of experience",
    duration : "24 months"

  },
  // {
  //   image: image1,
  //   heading: "PGPM - ELITE",
  //   para: `A one-year Post Graduate Program in Management crafted for professionals with
  //   3+ years of experience, merging executive leadership principles with real-world industry
  //   insights to accelerate careers into FinTech, AI consulting, or the GCC economy. Master
  //   cutting-edge frameworks and market strategies that position you as a transformative leader
  //   in the new global business landscape`,
  //   buttonText:"Explore-PGPM-ELITE"
  // },
  // {
  //   image: image2,
  //   heading: "PGDM",
  //   para: `A Two-Year PGPM pairs core management education with immersive industry
  //   projects for candidates with 0–3 years of experience. Fast-track your entry into new-age job
  //   roles through global internships, live labs, and executive mentorship—building the leadership
  //   skills of tomorrow's market demands.
  //   `,
  //   buttonText:"Explore-PGDM"
  // },
];

function CareerSection() {
  const { showModal } = useModal();
  console.log("useModal hook loaded:", showModal);  
  // const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // animation triggers only once
      offset: 100, // offset from bottom
    });
  }, []);

  return (
    <div className="car-container container-fluid mt-4">
      <div className="mx-2 d-flex flex-lg-column flex-column text-center align-items-lg-center justify-content-lg-center" data-aos="fade-up">
        <h1 className="display-4 fw-bold col-12 col-lg-12 text-center"><span style={{color:"#5ac501"}}>Full Time </span>Programs
        </h1>
        <p className="mb-0 sort-disc col-lg-8 text-center">
        Discover UCU’s full-time programs—tailored to build sharp business acumen, hands-on skills, and global perspective for high-impact careers in today’s fast-evolving corporate world
        </p>
      </div>

      {/* ✅ Swiper with AOS on each card */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={10}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
        className="car-swiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="car-item-div" style={{background:"linear-gradient(205deg, rgba(23, 3, 169, 1) 1%, rgba(7, 186, 243, 1) 100%)"}} data-aos="fade-up" data-aos-delay={index * 200}>
              <div className="car-image-wrapper">
                <img src={item.image} alt={item.heading} />
              </div>
              <div className="car-right">
                <h1 className="title mb-lg-3 mb-0">{item.heading}</h1>
<ExpandableText text={item.para} limit={120} color="#fff" />

                <div className="d-flex flex-row gap-2 items-center">
                  <User size={18} color="#07b5f1"/>
                  <p className="program-description">{item.elgible}</p>
                </div>
                <div className="d-flex flex-row gap-2 items-center">
                <CalendarDays size={18} color="#07b5f1"/>
                  <p className="program-description">{item.duration}</p>
                </div>
                <div className="car-explore-btn-div">
                  <button className="btn green-explore-btn py-2">{item.buttonText}</button>
                  <button onClick={() => showModal("apply")} className="btn car-apply-btn py-2">APPLY NOW</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="">
            <div className="mx-2 d-flex flex-lg-column flex-column text-center align-items-lg-center justify-content-lg-center" data-aos="fade-up">
        <h1 className="display-4 fw-bold col-12 col-lg-12 text-center"><span style={{color:"#5ac501"}}>Flexi  </span>Programs
        </h1>
        <p className="mb-0 sort-disc col-lg-12 text-center" style={{width:"100%",maxWidth:"100"}}>
        Fast track your career with our specialized management programs without taking a break from your career
        </p>
      </div>
      <Swiper
        modules={[Pagination]}
        spaceBetween={10}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
        className="car-swiper"
      >
        {secondRowdata.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="car-item-div" style={{background:"linear-gradient(205deg, rgba(23, 3, 169, 1) 1%, rgba(7, 186, 243, 1) 100%)"}} data-aos="fade-up" data-aos-delay={index * 200}>
              <div className="car-image-wrapper">
                <img src={item.image} alt={item.heading} />
              </div>
              <div className="car-right">
                <h1 className="title mb-lg-3 mb-0">{item.heading}</h1>
<ExpandableText text={item.para} limit={120} color="#fff" />

                <div className="d-flex flex-row gap-2 items-center">
                  <User size={18} color="#07b5f1" className=""/>
                  <p className="program-description">{item.elgible}</p>
                </div>
                <div className="d-flex flex-row gap-2 items-center">
                <CalendarDays size={18} color="#07b5f1" className=""/>
                  <p className="program-description">{item.duration}</p>
                </div>
                <div className="car-explore-btn-div">
                  <button className="btn green-explore-btn py-2">{item.buttonText}</button>
                  <button onClick={() => showModal("apply")} className="btn car-apply-btn py-2">APPLY NOW</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>

      <Sales />
    </div>
  );
}

export default CareerSection;
