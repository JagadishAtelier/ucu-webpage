import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Events.css";
import image from "../../Assets/ucu (1)/Rectangle 100.jpg";
import { useModal } from "../Context/ApplyModal/ModalContext";
import { getAllEvents } from "../../Api/HomePageApi/UpcommingEventsApi";

function Events() {
  const [openIndex, setOpenIndex] = useState(null);
  const [active, setActive] = useState("Exam"); // default tab
  const { showModal } = useModal();
  const buttons = ["Exam", "Admission", "Holiday"];
  const [eventdata, setEventData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllEvents();
        setEventData(res.data || res);
        console.log("Event data:", res.data || res);
      } catch (error) {
        console.log("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, []);

  const toggleText = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // ✅ Filter data by selected category
  const filteredData = eventdata.filter(
    (item) => item.category?.toLowerCase() === active.toLowerCase()
  );

  return (
    <div className="eve-platforms-container py-2">
      <div className="event-header" data-aos="fade-down">
        <h1 className="display-4 fw-bold col-12 col-lg-12 text-lg-center text-center">
          Upcoming <span style={{ color: "#5ac501" }}>Events</span>
        </h1>
      </div>

      <div className="eve-platform">
        {/* Image Section */}
        <div className="eve-image-container" data-aos="zoom-in">
          <img src={image} alt="Event" />
          <div className="eve-overlay"></div>
          <div className="eve-overlay-text">
            <h3 className="fw-bold fs-1 fs-lg-1">
              Industry Icons Leadership Summit 2025
            </h3>
            <p className="program-description text-white">
              UCU hosted top business leaders from the BAC, AAC, and CHRO
              councils to discuss future skills and industry trends.
            </p>
          </div>
        </div>

        {/* Events Section */}
        <div className="eve-platform-data-div">
          {/* Tabs */}
          <div className="events-btns-div" data-aos="fade-up" data-aos-delay="200">
            <div className="d-flex gap-3">
              {buttons.map((btn, index) => (
                <button
                  key={index}
                  className={active === btn ? "active-btn" : ""}
                  onClick={() => {
                    setActive(btn);
                    setOpenIndex(null);
                  }}
                >
                  {btn}
                </button>
              ))}
            </div>
            <a href="/" className="event-view-all-a-tag">
              View all
            </a>
          </div>

          {/* Events List */}
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <div
                key={item._id || index}
                className="eve-platform-indiviual-con"
                data-aos="fade-up"
                data-aos-delay={index * 200 + 300}
              >
                <div
                  className="eve-platform-item-div"
                  onClick={() => toggleText(index)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="event-data-and-text">
                    <h1 className="date-text">
                      {new Date(item.date).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                      })}
                    </h1>
                    <h1>{item.eventTitle}</h1>
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
                    <p className="eve-platform-text program-description">
                      {item.eventDesc}
                    </p>
                    <div className="car-explore-btn-div platform-btn d-flex flex-row">
                      <a
                        href={item.exploreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="car-explore-btn py-lg-2 py-1 text-white text-decoration-none"
                      >
                        EXPLORE
                      </a>
                      <a
                        href={item.applyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="car-apply-btn py-lg-2 py-1 text-white text-decoration-none"
                      >
                        APPLY NOW
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-center mt-4 text-muted">No events found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Events;
