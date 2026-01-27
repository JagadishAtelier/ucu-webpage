import React, { useState, useEffect } from "react";
import "./Platforms.css";
import image from "../../Assets/ucu (1)/Rectangle 154.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useModal } from "../Context/ApplyModal/ModalContext";
import { link } from "framer-motion/client";
import { useNavigate } from "react-router-dom";

const data = [
  // {
  //   head: "Sales",
  //   text: "Master the art and science of selling with industry-driven strategies that fuel revenue and relationships",
  // },
  {
    head: "Product Management",
    text: "Build, launch, and lead breakthrough products with cross-functional expertise and market-first thinking",
    link:"/program/product"
  },
  {
    head: "Cybersecurity",
    text: "Protect the digital frontier with cutting-edge skills in risk, resilience, and cyber intelligence",
        link:"/program/cybersecurity"
  },
  {
    head: "Brand Management & Digital Marketing",
    text: "Drive growth & enhance brand value in the digital age through data-led storytelling and performance marketing mastery",
        link:"/program/dm-ai"
  },
  {
    head: "Mobilty & Sustainability",
    text: "Shape the future of smart, sustainable ecosystems with innovation at the intersection of tech and impact",
        link:"/program/Mobilty"
  },
  {
    head: "Consulting",
    text: "Become a trusted advisor with analytical thinking, strategic insight, and boardroom-ready problem solving",
        link:"/program/consulting"
  },
  {
    head: "Banking & Finance",
    text: " Navigate the banking & financial landscape with domain depth, regulatory fluency, and technology enabled thinking to spearhead value driven outcomes",
        link:"/program/banking-finance"
  },
  {
    head: "Business Analytics",
    text: "Turn data into decisions with analytical tools that power business performance and strategic clarity",
        link:"/program/international-business"
  },
  {
    head: "Data Science & AI",
    text: "Harness the power of algorithms and AI to unlock insights, automate intelligence, and transform industries",
        link:"/program/product"
  },
];

const industryData = [
  {
    head: "Fin-Tech",
    text: `Lead the financial revolution with cutting-edge skills in digital finance, innovation, and tech-powered disruption
    `,
        link:"/program/fintech"
  },
  {
    image:
      "https://www.colliers.com/-/media/images/colliers/asia/india/research-images/2024/1536gccreport.ashx?bid=3dd61b5289dd4e2abf9a823864443392",
    head: "Global Capability Center (GCC)",
    text: `Step into the engine room of global enterprises—mastering strategy, scale, and operational excellence across GCCs
    `,
        link:"/program/gcc"
  },
  {
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoY2FyZXxlbnwwfHwwfHx8MA%3D%3D",
    head: "Healthcare & Lifescience",
    text: "A focused program that delves into the intricacies of modern logistics, procurement, and supply chain.",
        link:"/program/HealthTech-Ignition"
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1683121716061-3faddf4dc504?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2VtaWNvbmR1Y3RvcnxlbnwwfHwwfHx8MA%3D%3D",
    head: "Semiconductor",
    text: "Specialized program focused on financial technology and innovations.",
        link:"/program/Advanced-Manufacturing"
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

function Platforms() {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("functional");
  const { showModal } = useModal();
  const navigate = useNavigate()
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
  const currentData = activeTab === "functional" ? data : industryData;

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
        <p className="sort-disc mb-lg-1 col-lg-6 text-center">
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
          {/* Tabs */}
          <div className="d-flex gap-3 mb-3 border-bottom pb-3 justify-content-center">
            <button
              onClick={() => {
                setActiveTab("functional");
                setOpenIndex(null);
              }}
              className={`btn border py-lg-2 px-lg-3 col-5 ${
                activeTab === "functional" ? "text-white" : "text-dark"
              }`}
              style={{
                backgroundColor:
                  activeTab === "functional" ? "#74C61B" : "#ffffff",
              }}
            >
              Functional
            </button>
            <button
              onClick={() => {
                setActiveTab("industry");
                setOpenIndex(null);
              }}
              className={`btn border py-lg-2 px-lg-3 col-5 ${
                activeTab === "industry" ? "text-white" : "text-dark"
              }`}
              style={{
                backgroundColor:
                  activeTab === "industry" ? "#74C61B" : "#ffffff",
              }}
            >
              Industry-Sector
            </button>
          </div>
          {currentData.map((item, index) => (
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
                    <button onClick={()=>navigate(item.link)} className="btn btn-outline-dark py-lg-2 py-1">
                      EXPLORE
                    </button>
                    <button
                      onClick={() => showModal("apply")}
                      className="btn apply-btns py-lg-2 py-1"
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
