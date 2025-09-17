import React, { useState, useEffect } from "react";
import "./Platforms.css";
import image from "../../Assets/ucu (1)/Rectangle 154.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useModal } from "../Context/ApplyModal/ModalContext";

const data = [
  {
    head: "Sales",
    text: "Boost growth through digital consultative selling and powerful online negotiation.",
  },
  {
    head: "Product Management",
    text: "Product management bridges business, technology, and customers—driving strategy, defining requirements, prioritizing features, and ensuring successful product delivery.",
  },
  {
    head: "Cybersecurity",
    text: "Cybersecurity safeguards digital systems, networks, and data—preventing unauthorized access, mitigating threats, ensuring privacy, and maintaining trust in technology.",
  },
  {
    head: "Digital Marketing",
    text: "Digital marketing promotes brands online—using SEO, social media, content, email, and analytics to engage audiences, drive traffic, and boost sales.",
  },
  {
    head: "Mobilty & Sustainability",
    text: "Mobility & sustainability focus on eco-friendly transport, renewable energy, smart infrastructure, and innovation—reducing emissions, conserving resources, and ensuring greener futures.",
  },
  {
    head: "Consulting",
    text: "Consulting provides expert advice, strategic guidance, and problem-solving—helping organizations improve performance, efficiency, innovation, and achieve sustainable growth successfully.",
  },
  {
    head: "Banking & Finance",
    text: " Banking & finance manage money, investments, and risks—supporting businesses, individuals, and economies through services, innovation, security, and sustainable growth.",
  },
  {
    head: "Business Analytics",
    text: "Business analytics interprets data, identifies patterns, and delivers insights—supporting strategic decisions, improving efficiency, forecasting trends, and driving business growth.",
  },
  {
    head: "Data Science",
    text: "Data science combines statistics, programming, and domain knowledge—analyzing data, building models, uncovering insights, and enabling smarter, evidence-based decisions.",
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
          <span style={{ color: "#5ac501" }}>E-Learning</span> Programs – Learn
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
                    <button className="btn btn-outline-dark py-2">
                      EXPLORE
                    </button>
                    <button
                      onClick={() => showModal("apply")}
                      className="btn apply-btn py-2"
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
