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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <ul>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
            </ul>

            <p className="font-weight-normal">Competency goals:</p>
            <ul>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
            </ul>

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