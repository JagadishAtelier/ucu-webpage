import React, { useEffect, useState } from "react";
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
  const [showMore, setShowMore] = useState(false);
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
        <div className="d-flex flex-lg-column flex-column align-items-lg-center justify-content-lg-center">
          <h1 className="display-4 fw-bold col-12 col-lg-6 text-center">
            <span style={{ color: "#5ac501" }}>eXecutive</span> Education &
            Learning (XEL)
          </h1>
          <p className="program-description col-lg-6 text-center">
          Turbocharge your executive prowess with XEL’s high-octane courses—ignite bold leadership and deliver breakthrough results!
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
        {showMore && (
          <div className="extra-content my-4 mx-auto" data-aos="fade-up">
            <div className="extra-content-inner">
              <h3>1 Year CXO Accelerator Program with Campus Immersion</h3>
              <p className="sort-disc">
                An intensive, one-year executive learning journey designed to
                empower business leaders with cutting-edge skills, strategic
                insights, and real-world leadership exposure. The program blends
                academic rigor with practical industry immersion to prepare
                leaders for the challenges of tomorrow.
              </p>

              {/* Grid Section */}
              <div className="cxo-grid">
                <div className="cxo-card bg-cxo">
                  <h4>CXO</h4>
                  <p>
                    Master cross-functional leadership, strategy execution, and
                    boardroom decision-making.
                  </p>
                </div>
                <div className="cxo-card bg-cio">
                  <h4>CIO</h4>
                  <p>
                    Drive digital transformation, IT governance, and innovation
                    in technology adoption.
                  </p>
                </div>
                <div className="cxo-card bg-cto">
                  <h4>CTO</h4>
                  <p>
                    Build expertise in emerging technologies, product
                    innovation, and scalable architectures.
                  </p>
                </div>
                <div className="cxo-card bg-cmo">
                  <h4>CMO</h4>
                  <p>
                    Lead customer-first growth, brand building, and data-driven
                    marketing strategies.
                  </p>
                </div>
                <div className="cxo-card bg-chro">
                  <h4>CHRO</h4>
                  <p>
                    Transform people strategy, organizational culture, and
                    workforce innovation.
                  </p>
                </div>
                <div className="cxo-card bg-cfo">
                  <h4>CFO</h4>
                  <p>
                    Strengthen financial strategy, risk management, and global
                    capital allocation.
                  </p>
                </div>
                <div className="cxo-card bg-cpo">
                  <h4>CPO</h4>
                  <p>
                    Optimize product vision, design thinking, and customer
                    experience excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="view-more-wrapper mt-4">
          <button
            onClick={() => setShowMore((prev) => !prev)}
            className="btn car-apply-btn expo-btn"
            style={{ fontWeight: "300" }}
          >
            {showMore ?"View Less" :"View More" }
          </button>
        </div>
      </div>
    </div>
  );
}

export default Management;
