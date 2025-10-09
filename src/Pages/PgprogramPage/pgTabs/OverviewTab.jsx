import React from "react";
import OverviewAbout from "./OverviewTab/OverviewAbout";
import OverviewObjective from "./OverviewTab/OverviewObjective";
import bgImage from "../../../Assets/aboutPageImage/vision_mission_bg1.png";



function OverviewTab() {
    return (
        <>
            <div data-aos="fade-up" className="container my-1 p-3">
                <OverviewAbout />
            </div>
            <div
                data-aos="fade-up"
                className="aboutphil-container text-white p-lg-5"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    minHeight: "60vh",
                    marginBottom: "100px",
                }}
            >
                <OverviewObjective />
            </div>
        </>
    );
}

export default OverviewTab;