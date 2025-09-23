import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Events.css";
import image from "../../Assets/ucu (1)/Rectangle 100.jpg";
import { useModal } from "../Context/ApplyModal/ModalContext";
const data = [
  {
    date: "15 Sept",
    head: "Masterclass: Navigating the Global Corporate Landscape",
    text: "Led by global CXOs, this session will cover leadership agility and market expansion strategies.",
  },
  {
    date: "05 Oct",
    head: "Workshop: AI Applications in Business Strategy",
    text: "Interactive workshop on leveraging AI for data-driven decisions and innovation.",
  },
  {
    date: "20 Oct",
    head: "Panel: Career Opportunities in Emerging Sectors",
    text: "Experts from GCC, FinTech, and Mobility industries share hiring trends and skills in demand.",
  },
  {
    date: "08 Nov",
    head: "Webinar: Building Future-Ready Leaders",
    text: "Interactive session with corporate mentors on leadership development.",
  },
];

function Events() {
  const [openIndex, setOpenIndex] = useState(0);
  const [active, setActive] = useState("Latest"); // default active button
  const { showModal } = useModal();
  const buttons = ["Latest", "Exam", "Admission"];

  const toggleText = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // ✅ Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="eve-platforms-container py-5">
      <div className="event-header" data-aos="fade-down">
        <h1 className="display-4 fw-bold col-12 col-lg-4 text-center">Recent <span style={{color:"#5ac501"}}>Events</span></h1>
        <div className="event-header-left">
          <h1 className="display-4 fw-bold col-10 col-lg-10 text-lg-center text-left">Upcoming <span style={{color:"#5ac501"}}>Events</span></h1>
          <a href="/">View all</a>
        </div>
      </div>

      <div className="eve-platform">
        {/* Image Section */}
        <div className="eve-image-container" data-aos="zoom-in">
          <img src={image} alt="Event" />
          <div className="eve-overlay"></div>
          <div className="eve-overlay-text">
            <h3 className="fw-bold fs-1 fs-lg-1">Industry Icons Leadership Summit 2025</h3>
            <p className="program-description">
              UCU hosted top business leaders from the BAC, AAC, and CHRO
              councils to discuss future skills and industry trends.
            </p>
          </div>
        </div>

        {/* Events List */}
        <div className="eve-platform-data-div">
          {/* Buttons */}
          <div
            className="events-btns-div"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {buttons.map((btn, index) => (
              <button
                key={index}
                className={active === btn ? "active-btn" : ""}
                onClick={() => setActive(btn)}
              >
                {btn}
              </button>
            ))}
          </div>

          {/* Event Items */}
          {data.map((item, index) => (
            <div
              key={index}
              className="eve-platform-indiviual-con"
              data-aos="fade-up"
              data-aos-delay={index * 200 + 300} // staggered delay
            >
              <div
                className="eve-platform-item-div"
                onClick={() => toggleText(index)}
                style={{ cursor: "pointer" }}
              >
                <div className="event-data-and-text">
                  <h1 className="date-text">{item.date}</h1>
                  <h1>{item.head}</h1>
                </div>
                <i
                  className={`bi ${
                    openIndex === index
                      ? "bi-chevron-up"
                      : "bi-chevron-down"
                  } transition-icon`}
                ></i>
              </div>

              {openIndex === index && (
                <div data-aos="fade-down" data-aos-duration="600">
                  <p className="eve-platform-text program-description">{item.text}</p>
                  <div className="car-explore-btn-div platform-btn">
                    <button className="car-explore-btn">EXPLORE</button>
                    <button onClick={() => showModal("apply")} className="car-apply-btn">APPLY NOW</button>
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

export default Events;
