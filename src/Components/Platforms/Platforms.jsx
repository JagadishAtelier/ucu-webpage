import React, { useState, useEffect } from "react";
import "./Platforms.css";
import image from "../../Assets/ucu (1)/Rectangle 154.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useModal } from "../Context/ApplyModal/ModalContext";

const data = [
  {
    head: "Sales",
    text: "Master the art and science of selling with industry-driven strategies that fuel revenue and relationships",
  },
  {
    head: "Product Management",
    text: "Build, launch, and lead breakthrough products with cross-functional expertise and market-first thinking",
  },
  {
    head: "Cybersecurity",
    text: "Protect the digital frontier with cutting-edge skills in risk, resilience, and cyber intelligence",
  },
  {
    head: "Brand Management & Digital Marketing",
    text: "Drive growth & enhance brand value in the digital age through data-led storytelling and performance marketing mastery",
  },
  {
    head: "Mobilty & Sustainability",
    text: "Shape the future of smart, sustainable ecosystems with innovation at the intersection of tech and impact",
  },
  {
    head: "Consulting",
    text: "Become a trusted advisor with analytical thinking, strategic insight, and boardroom-ready problem solving",
  },
  {
    head: "Banking & Finance",
    text: " Navigate the banking & financial landscape with domain depth, regulatory fluency, and technology enabled thinking to spearhead value driven outcomes",
  },
  {
    head: "Business Analytics",
    text: "Turn data into decisions with analytical tools that power business performance and strategic clarity",
  },
  {
    head: "Data Science & AI",
    text: "Harness the power of algorithms and AI to unlock insights, automate intelligence, and transform industries",
  },
];

function Platforms() {
  const [openIndex, setOpenIndex] = useState(0);
  const { showModal } = useModal();
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
      <div
        className="d-flex flex-lg-column flex-column align-items-lg-center justify-content-lg-center mb-4"
        data-aos="fade-up"
      >
        <h1 className="display-4 fw-bold col-12 col-lg-6 text-center">
          <span style={{ color: "#5ac501" }}>UCU-Online</span> Programs – Learn
          Anytime, Anywhere
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
            <div key={index} className="platform-indiviual-con">
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
                  <p className="platform-text program-description">
                    {item.text}
                  </p>
                  <div className="car-explore-btn-div-faq">
                    <button className="btn btn-outline-dark py-lg-2 py-1">
                      EXPLORE
                    </button>
                    <button
                      onClick={() => showModal("apply")}
                      className="btn apply-btn py-lg-2 py-1"
                    >
                      APPLY NOW
                    </button>
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
