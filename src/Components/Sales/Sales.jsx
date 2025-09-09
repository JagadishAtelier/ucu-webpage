import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Sales.css";

import image1 from "../../Assets/ucu (1)/Rectangle 53.jpg";
import image2 from "../../Assets/ucu (1)/Rectangle 53-1.jpg";
import image3 from "../../Assets/ucu (1)/Rectangle 53-2.jpg";
import image4 from "../../Assets/ucu (1)/Rectangle 100.jpg";
import Aos from "aos";

const functionalData = [
  { image: image1, heading: "Sales", para: `Accelerate revenue with strategic consultative selling and high-impact
  negotiation skills.` },
  { image: image2, heading: "Cyber Security", para: ` Fortify digital infrastructures with proactive cyber defense and
  mastery in the business of threat intelligence.` },
  { image: image3, heading: "AI", para: `Harness AI algorithms and deployment frameworks to drive data-driven
  innovation.
  ` },
  { image: image4, heading: "Product Management", para: ` Lead end-to-end product lifecycles with agile roadmaps and
  market-driven insights.
  ` },
  { image: image1, heading: "Digital Marketing", para: `Maximize brand reach with data-driven campaigns and
  omnichannel engagement strategies` },
  { image: image3, heading: "Mobility & Sustainability", para: `Pioneer green mobility solutions by integrating sustainable
  design with smart transport tech.` },
  { image: image4, heading: "Consulting", para: `Deliver strategic business transformations through structured
  problem-solving and stakeholder engagement.
  ` },
  { image: image2, heading: "Banking & Finance", para: `Optimize financial performance with risk management,
  investment analysis, and compliance expertise.
  ` },
  { image: image1, heading: "Product Marketing", para: `Drive product success with compelling positioning, launch
  planning, and performance analytics.
  ` },
  { image: image2, heading: "Data Analytics", para: `Transform raw data into actionable insights using advanced analytics
  and visualization techniques
  ` },
];

const industryData = [
  {
    image: image4,
    heading: "FinTech",
    para: `Revolutionize financial services with blockchain, digital payments, and
    regulatory tech innovation.
    `,
  },
  {
    image: image2,
    heading: "Global Capability Centers (GCCs)",
    para: ` Excel in GCC operations with best-in-class
    governance, service delivery, and cross-border collaboration.
    `,
  },
  {
    image: image3,
    heading: "Supply Chain Management & Logistics",
    para: "A focused program that delves into the intricacies of modern logistics, procurement, and supply chain.",
  },
  {
    image: image4,
    heading: "FinTech",
    para: "Specialized program focused on financial technology and innovations.",
  },
  {
    image: image2,
    heading: "Global Capability Centers (GCC)",
    para: "Intensive program for students preparing for careers in global shared services and business operations.",
  },
  {
    image: image3,
    heading: "Supply Chain Management & Logistics",
    para: "A focused program that delves into the intricacies of modern logistics, procurement, and supply chain.",
  },
];

function Sales() {
  const [activeTab, setActiveTab] = useState("functional");

  useEffect(() => {
    Aos.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  const data = activeTab === "functional" ? functionalData : industryData;

  return (
    <div className="sales-container container-fluid my-3">
      <div className="car-heading-text text-center mb-4">
        <h1 className="h1">
          <strong>Diploma Programs</strong>
        </h1>
        <p>
          Explore our range of industry-focused programs designed to equip
          students with practical skills and career-ready expertise.
        </p>
      </div>

      {/* Tabs */}
      <div className="sales-tabs text-center mb-4">
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
        {data.map((item, index) => (
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
                    EXPLORE PGDM
                  </button>
                  <button className="car-apply-btn expo-btn">APPLY NOW</button>
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
