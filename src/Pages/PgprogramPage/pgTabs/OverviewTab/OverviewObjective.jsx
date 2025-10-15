import React from "react";
import videoimage from "../../../../Assets/aboutPageImage/vision_image1.jpg";
import { FaPlayCircle } from "react-icons/fa";


function OverviewObjective() {
    return (
        <div style={{ paddingBottom: "150px", position: "relative" }} className="container my-1">
            <h1 className="display-4 fw-bold col-12 col-lg-12 mb-3">
                <span style={{ color: "#fff" }}>Objective</span>
            </h1>
            <p className="font-weight-normal">
                 The PGDM program is designed to nurture globally attuned, socially conscious leaders who embody UCU’s mission to influence managerial practice and drive value-based growth through wise innovation. The program’s core objectives are:
            </p>
            <ul>
                <p className="fw-light"><li><span className="fw-bold">Empower students with robust conceptual foundations and interpersonal acumen , </span> fostering collaboration and a deep sense of social responsibility in managerial decision-making </li></p>
                <p className="fw-light"><li><span className="fw-bold">Cultivate a hands-on, action-oriented learning culture, </span> where students are encouraged to engage deeply, take initiative, and embrace real-world challenges 
Create immersive environments that spark innovation, enabling students to think creatively, challenge conventions, and develop breakthrough solutions </li></p>
                
                <p className="fw-light"><li><span className="fw-bold">Deliver a pedagogical experience that harmonizes academic rigor with industry relevance, </span>ensuring that learning is both intellectually rich and practically applicable </li></p>
                <p className="fw-light"><li><span className="fw-bold">Embed domain-centric exposure throughout the program,</span>so students graduate with firsthand experience and are equipped to contribute from Day One—not as novices, but as prepared professionals
</li></p>
            </ul>

            <p className="">PGDM Competency Goals at UCU:</p>
            <ol>
                <p><li><span className="fw-bold ">Develop Responsible, Socially Conscious Leaders</span></li></p>
                <p className="fw-light mt-2">Cultivate ethical leadership grounded in empathy, sustainability, and societal impact. </p>
                <p><li><span className="fw-bold">Build Global Management Capability</span></li></p>
                <p className="fw-light mt-2">Equip students to navigate complex, cross-border business environments with cultural fluency and strategic agility. </p>
                <p><li><span className="fw-bold">Ensure Functional and Cross-Functional Mastery</span></li></p>
                <p className="fw-light mt-2">Foster deep expertise across core business domains while enabling integrative thinking across functions. </p>
                <p><li><span className="fw-bold">Strengthen Decision-Making Acumen</span></li></p>
                <p className="fw-light mt-2"> Train students to make data-driven, context-aware, and ethically sound managerial decisions. </p>
                <p><li><span className="fw-bold">Ignite Innovative Leadership</span></li></p>
                <p className="fw-light mt-2"> Empower students to lead transformation through creativity, entrepreneurial thinking, and future-focused vision.</p>
            </ol>

            {/* VIDEO CONTAINER */}
            <div
                className="my-4 position-absolute overview-video video-con-objectives"
            >
                <a href="#">
                <img
                    src={videoimage}
                    alt="Video thumbnail"
                    style={{
                        height: "350px",
                        borderRadius: "10px",
                        position: "relative",
                        zIndex: 1,
                        width: "700px"
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