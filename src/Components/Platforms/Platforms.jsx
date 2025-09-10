import React, { useState, useEffect } from "react";
import "./Platforms.css";
import image from "../../Assets/ucu (1)/Rectangle 154.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const data = [
  {
    head: "Sales",
    text: "Boost growth through digital consultative selling and powerful online negotiation.",
  },
  {
    head: "Cyber Security",
    text: "Enhance skills through online learning with expert guidance and mastery in digital threat defense.",
  },
  {
    head: "AI",
    text: "Build AI skills through online platforms and drive smarter innovation.",
  },
  {
    head: "Product Management",
    text: "Master online product lifecycles through agile tools and market-driven decisions.",
  },
  {
    head: "Digital Marketing",
    text: "Learn marketing online with interactive modules, real-time analytics, and growth-focused strategies.",
  },
  {
    head: "Mobility & Sustainability",
    text: "Learn online to design green solutions with smart and sustainable transport technology.",
  },
  {
    head: "Consulting",
    text: "Learn online to drive business transformation with problem-solving and stakeholder collaboration.",
  },
  {
    head: "Banking & Finance",
    text: "Learn online to optimize finance with risk management, investment, and compliance skills.",
  },
  {
    head: "Product Marketing",
    text: "Learn online to drive product success with positioning, launches, and performance analytics.",
  },
  {
    head: "Data Analytics",
    text: "Learn online to turn raw data into insights using analytics and visualization tools.",
  },
];


function Platforms() {
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const toggleText = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="platforms-container">
      <div className="d-flex flex-lg-column flex-column align-items-lg-center justify-content-lg-center mb-4" data-aos="fade-up">
        <h1 className="display-4 fw-bold col-12 col-lg-6 text-center">
          <span style={{color:"#5ac501"}}>E-Learning</span> Programs – Learn Anytime, Anywhere
        </h1>
        <p className="program-description col-lg-6 text-center">
          Flexible, online versions of UCU’s programs with the same academic
          rigor, designed for professionals who prefer learning at their own
          pace.
        </p>
      </div>

      <div className="platform">
      <div className="image-wrapper">
  <img src={image} alt="Platform illustration" data-aos="fade-right" />
</div>

        <div className="platform-data-div">
          {data.map((item, index) => (
            <div
              key={index}
              className="platform-indiviual-con"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div
                className="platform-item-div"
                onClick={() => toggleText(index)}
                style={{ cursor: "pointer" }}
              >
                <h1 className="title mb-3">{item.head}</h1>
                <i
                  className={`bi bi-chevron-down chevron-icon ${
                    openIndex === index ? "rotate" : ""
                  }`}
                ></i>
              </div>

              {openIndex === index && (
                <div data-aos="fade-left">
                  <p className="platform-text program-description">{item.text}</p>
                  <div className="car-explore-btn-div-faq">
                    <button className="btn btn-outline-dark py-2">
                      EXPLORE PGDM
                    </button>
                    <button className="btn apply-btn py-2">APPLY NOW</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Platforms;
