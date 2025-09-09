import React, { useEffect } from "react";
import "./Management.css";
import image1 from "../../Assets/ucu (1)/Rectangle 154.jpg";
import image2 from "../../Assets/ucu (1)/Rectangle 100.jpg";
import Aos from "aos";
import Platforms from "../Platforms/Platforms";
const data = [
  {
    image: image1,
    top: "Customised Learning Program",
    heading: "Customised Learning Program",
    btntext: "Explore Coustomised Programs",
    para: `Ignite your organization’s potential with UCU’s XEL
    Customised Learning Program—an electrifying, tailor-made curriculum engineered to
    catalyze your strategic objectives.
    `,
  },
  {
    image: image2,
    top: "Management Development Programs (MDPs)",
    heading: "Management Development Programs (MDPs)",
    btntext: "Explore MDPS",
    para: `Supercharge your leadership impact with
    UCU’s MDP Executive Programs—immersive, high-velocity experiences designed to
    unleash visionary success
    `,
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
      <div className="management-container container-fluid">
        <div className="car-heading-text">
          <h1 className="h2 fw-bold fs-1 fs-lg-1">
            <strong>eXecutive Education & Learning (XEL)</strong>
          </h1>
          <p className="program-description">
          Turbocharge your executive prowess with XEL’s high-octane courses—ignite
bold leadership and deliver breakthrough results!
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
                  <p className="program-description">{item.para}</p>
                  <a className="EXPLORE-MDPS ">{item.btntext}</a>
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
