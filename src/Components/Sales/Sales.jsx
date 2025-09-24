import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Sales.css";
import { useModal } from "../Context/ApplyModal/ModalContext";
import image1 from "../../Assets/ucu (1)/Rectangle 53.jpg";
import image2 from "../../Assets/ucu (1)/Rectangle 53-1.jpg";
import image3 from "../../Assets/ucu (1)/Rectangle 53-2.jpg";
import image4 from "../../Assets/ucu (1)/Rectangle 100.jpg";
import Aos from "aos";

const functionalData = [
  { image: image1, heading: "Sales", para: `Master the art and science of selling with industry-driven strategies that fuel revenue and relationships` },
  { image: image2, heading: "Product Management", para: `  Build, launch, and lead breakthrough products with cross-functional expertise and market-first thinking` },
  { image: image3, heading: "Cyber Security", para: `Protect the digital frontier with cutting-edge skills in risk, resilience, and cyber intelligence` },
  { image: image4, heading: "Brand Management & Digital Marketing", para: ` Drive growth & enhance brand value in the digital age through data-led storytelling and performance marketing mastery  ` },
  { image: image1, heading: "Mobility & Sustainability", para: `Shape the future of smart, sustainable ecosystems with innovation at the intersection of tech and impact` },
  { image: image3, heading: "Consulting", para: `Become a trusted advisor with analytical thinking, strategic insight, and boardroom-ready problem solving` },
  { image: image4, heading: "Banking & Finance", para: ` Navigate the banking & financial landscape with domain depth, regulatory fluency, and technology enabled thinking to spearhead value driven outcomes ` },
  { image: image2, heading: "Business Analytics", para: `Turn data into decisions with analytical tools that power business performance and strategic clarity` },
  { image: image1, heading: "Data Science & AI", para: `Harness the power of algorithms and AI to unlock insights, automate intelligence, and transform industries` },
];

const industryData = [
  {
    image: image4,
    heading: "Fin-Tech",
    para: `Lead the financial revolution with cutting-edge skills in digital finance, innovation, and tech-powered disruption
    `,
  },
  {
    image: image2,
    heading: "Global Capability Center (GCC)",
    para: `Step into the engine room of global enterprises—mastering strategy, scale, and operational excellence across GCCs
    `,
  },
  {
    image: image3,
    heading: "Healthcare & Lifescience",
    para: "A focused program that delves into the intricacies of modern logistics, procurement, and supply chain.",
  },
  {
    image: image4,
    heading: "Semiconductor",
    para: "Specialized program focused on financial technology and innovations.",
  },
  // {
  //   image: image2,
  //   heading: "Global Capability Centers (GCC)",
  //   para: "Intensive program for students preparing for careers in global shared services and business operations.",
  // },
  // {
  //   image: image3,
  //   heading: "Supply Chain Management & Logistics",
  //   para: "A focused program that delves into the intricacies of modern logistics, procurement, and supply chain.",
  // },
];

function Sales() {
  const [activeTab, setActiveTab] = useState("functional");
  const { showModal } = useModal();
  useEffect(() => {
    Aos.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  // const data = activeTab === "functional" ? functionalData : industryData;

  return (
    <div className="sales-container container-fluid my-lg-5 my-1">
      <div className="d-flex flex-lg-column flex-column align-items-lg-center justify-content-lg-center text-center mb-4">
        <h1 className="display-4 fw-bold col-12 col-lg-12 text-center">
          <span style={{color:"#5ac501"}}>Diploma</span> Programs
        </h1>
        <p className="col-lg-6 text-center">
        Explore our range of industry-focused programs designed to equip students with practical skills and career-ready expertise.
        </p>
      </div>
      {/* <div className="sales-tabs text-center mb-4">
        <button
          className={`tab-btn ${activeTab === "functional" ? "active" : ""}`}
          onClick={() => setActiveTab("functional")}
        >
          Functional (off-line)
        </button>
        <button
          className={`tab-btn ${activeTab === "industry" ? "active" : ""}`}
          onClick={() => setActiveTab("industry")}
        >
          Industry-Sector Specific Offerings
        </button>
      </div> */}
      <div>
      <h1 className="display-6 fw-bold col-12 col-lg-12 text-center">
      Functional (off-line)
        </h1>
      </div>
      <Swiper
        modules={[Pagination,Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
        className="sales-swiper"
      >
        {functionalData.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="sales-item-div"
              data-aos="fade-up"
              data-aos-delay={index * 250}
            >
              <img src={item.image} alt={item.heading} />
              <div className="p-3 position-relative">
                <h1 className="mt-3">{item.heading}</h1>
                <p className="mb-3">{item.para}</p>
                <div className="car-explore-btn-div sales-btn p-1">
                  <button className="car-explore-btn expo-btn btn btn-outline-dark">
                    EXPLORE
                  </button>
                  <button onClick={() => showModal("apply")} className="car-apply-btn expo-btn">APPLY NOW</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div>
      <h1 className="display-6 fw-bold col-12 col-lg-12 text-center mt-lg-5 mt-3">
      Industry-Sector Specific Offerings
        </h1>
      </div>

      <Swiper
        modules={[Pagination,Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
        className="sales-swiper"
      >
        {industryData.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="sales-item-div"
              data-aos="fade-up"
              data-aos-delay={index * 250}
            >
              <img src={item.image} alt={item.heading} />
              <div className="p-3 position-relative">
                <h1 className="mt-3">{item.heading}</h1>
                <p className="mb-3">{item.para}</p>
                <div className="car-explore-btn-div sales-btn p-1">
                  <button className="car-explore-btn expo-btn btn btn-outline-dark">
                    EXPLORE
                  </button>
                  <button onClick={() => showModal("apply")} className="car-apply-btn expo-btn">APPLY NOW</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Sales;
