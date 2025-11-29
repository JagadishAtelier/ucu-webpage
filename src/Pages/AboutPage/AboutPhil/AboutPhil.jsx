import React from "react";
import "./AboutPhil.css";
import bgImage from "../../../Assets/aboutPageImage/vision_mission_bg2.png";
import iconVision from "../../../Assets/aboutPageImage/vision.svg"; // replace with actual icon
import iconMission from "../../../Assets/aboutPageImage/mission.svg"; // replace with actual icon
import visionImage from "../../../Assets/aboutPageImage/vision_image1.jpg"; // new image for vision

const data = [
  {
    icon: iconVision,
    head: "<span> Vision</span>",
    para: `To be a globally recognised force in business education—democratising access, 
    bridging rural-urban divides, and empowering learners and educators through a curriculum 
    co-created and delivered by industry leaders and corporate practitioners, within a lifelong 
    learning ecosystem that redefines global teaching standards and prepares agile talent for 
    the future of work.`,
    image: visionImage, // new field for vision image
  },
  {
    icon: iconMission,
    head: "<span > Mission</span>",
    para: (
      <>
      
        <ul className="mission-list text-lg-right">
          <li className="mb-2">
            To co-create and co-deliver cutting-edge, contemporary, and
            future-ready curricula in active collaboration with industry
            leaders, ensuring every learning experience is rooted in enterprise
            relevance and designed for real-world impact.
          </li>
          <li className="mb-2">
            To equip MBA aspirants and professionals with the skills and
            knowledge required to excel in a competitive business landscape.
          </li>
          <li className="mb-2">
            To accelerate academic transformation across partner institutions by
            empowering their faculty through development programs co-created and
            delivered with UCU’s expansive industry network—driving measurable
            upliftment in teaching outcomes and institutional performance.
          </li>
          <li className="mb-2">
            To champion inclusive education by leveraging advanced digital
            platforms that connect rural and urban learners to high-quality
            business education—unlocking potential, accelerating growth, and
            fostering a more equitable talent landscape.
          </li>
        </ul>
      </>
    ),
  },
];

function AboutPhil() {
  return (
    <div
      data-aos="fade-up"
      className="aboutphil-container text-white "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "60vh",
      }}
    >
      <div 
        className="w-100 h-100 p-3 p-lg-5" 
        style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.58)', // Adjust the '0.4' value to control opacity
          padding: '1px' // Add a small padding to ensure the overlay takes effect
        }}
      >
      <div className="row w-lg-100 py-4 py-lg-0 justify-content-center">
        {data.map((item, index) => (
          <div
            key={index}
            className={`col-12 col-lg-6 d-flex flex-column align-items-center align-items-lg-start mb-4 px-3 ${
              index === 0
                ? "text-left align-items-lg-start border-end-lg"
                : "text-right align-items-lg-start"
            }`}
            data-aos={index === 0 ? "fade-right" : "fade-left"}
          >
            <div
              className="d-flex justify-content-center align-items-center my-2 p-2 rounded-circle"
              style={{ width: "60px", height: "60px",backgroundColor: "rgba(255, 255, 255, 0.93)", border:'3px solid rgb(152 159 208)' }}
            >
              <img
                src={item.icon}
                alt={item.head}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>

            <h1 className="fw-bold vission-h1 fs-2 mb-3 text-center text-lg-start" dangerouslySetInnerHTML={{ __html: item.head }  }>
            </h1>
            {typeof item.para === "string" ? (
              <p className=" vission-p fs-6 mb-3 text-lg-start">{item.para}</p>
            ) : (
              <div className=" vission-p fs-6 mb-3 text-lg-right">{item.para}</div>
            )}

            {/* Add supplementary image under Vision */}
            {item.image && index === 0 && (
              <img
                src={item.image}
                alt="Vision Illustration"
                className="vision-supplementary-image mt-0"
                style={{ maxWidth: "100%", borderRadius: "10px" }}
              />
            )}
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default AboutPhil;
