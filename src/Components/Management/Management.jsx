import React, { useEffect } from "react";
import "./Management.css";
import image1 from "../../Assets/ucu (1)/Rectangle 154.jpg";
import image2 from "../../Assets/ucu (1)/Rectangle 100.jpg";
import Aos from "aos";
import Platforms from "../Platforms/Platforms";
const data = [
  {
    image: image1,
    top: "Customised Programs",
    heading: "Customised Programs",
    para: "Short-term, intensive programs designed to build managerial and functional expertise across industries.",
  },
  {
    image: image2,
    top: "MDPS",
    heading: "MDPs – Management Development Programs",
    para: "Short-term, intensive programs designed to build managerial and functional expertise across industries.",
  },
];
function Management() {
  useEffect(() => {
    Aos.init({
      duration: 1000, // animation duration
      once: true, // animation triggers only once
      offset: 100, // offset from bottom
    });
  }, []);
  return (
    <div className="bg-img">
      <div className="management-container container-fluid mt-5">
        <div className="car-heading-text">
          <h1 className="h2">
            <strong>Executive Education</strong>
          </h1>
          <p>
            6-month program for undergraduates eager to build careers in
            business development and client engagement.
          </p>
        </div>
        <div className="man-data-div">
          {data.map((item, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 200}>
              <h1 className="top-text-man h3 fw-semibold">{item.top}</h1>
              <div className="man-item-div-container">
                <img src={item.image} />
                <div className="man-item-content">
                  <h1>{item.heading}</h1>
                  <p>{item.para}</p>
                  <a className="EXPLORE-MDPS">EXPLORE MDPS</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div data-aos="zoom-in" data-aos-delay="100">
        <Platforms />
      </div>
    </div>
  );
}

export default Management;
