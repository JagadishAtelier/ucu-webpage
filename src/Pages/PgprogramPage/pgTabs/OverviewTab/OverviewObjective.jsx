import React from "react";
import videoimage from "../../../../Assets/aboutPageImage/vision_image1.jpg";
import { FaPlayCircle } from "react-icons/fa";


function OverviewObjective() {
    return (
        <div style={{ paddingBottom: "200px", position: "relative" }} className="container my-1">
            <h1 className="display-4 fw-bold col-12 col-lg-12 mb-3">
                <span style={{ color: "#fff" }}>Objective</span>
            </h1>
            <p className="font-weight-normal">
                Objective Competency goals PGDM (BM) aims to develop socially sensitive leaders with a global mindset...
            </p>
            <ul>
                <li>To develop a holistic understanding of the business environment...</li>
                <li>To hone analytical, problem-solving, decision-making, and leadership skills...</li>
                <li>To develop the ability to communicate effectively with stakeholders...</li>
                <li>To foster a commitment to ethical and socially responsible business practices.</li>
                <li>To prepare students for successful careers in a variety of industries and sectors...</li>
            </ul>

            <p className="font-weight-normal">Competency goals:</p>
            <ul>
                <li>Business acumen: Develop a deep understanding of business concepts...</li>
                <li>Leadership skills: Cultivate leadership qualities such as vision...</li>
                <li>Communication skills: Develop the ability to effectively communicate...</li>
                <li>Entrepreneurial mindset: Cultivate an entrepreneurial mindset...</li>
            </ul>

            {/* VIDEO CONTAINER */}
            <div
                className="my-4 position-absolute overview-video"
                style={{
                    left: "30%",
                    zIndex: 2,
                }}
            >
                <a href="#">
                <img
                    src={videoimage}
                    alt="Video thumbnail"
                    style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "10px",
                        position: "relative",
                        zIndex: 1,
                    }}
                />
                <div
                    className="play-btn-container"
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: "10%",
                        transform: "translate(-50%, -50%)",
                        zIndex: 3,
                        color: "#5ac501",
                        cursor: "pointer",
                    }}
                >
                    <FaPlayCircle size={60} />
                </div>
                </a>
            </div>
        </div>
    );
}

export default OverviewObjective;