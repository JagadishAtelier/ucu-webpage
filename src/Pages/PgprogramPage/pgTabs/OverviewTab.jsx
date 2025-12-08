import React from "react";
import OverviewAbout from "./OverviewTab/OverviewAbout";
import OverviewObjective from "./OverviewTab/OverviewObjective";
import bgImage from "../../../Assets/aboutPageImage/vision_mission_bg1.png";
import OverviewKeyhighlights from "./OverviewTab/OverviewKeyhighlights";
import OverviewParticipant from "./OverviewTab/OverviewParticipant";
import { useLocation } from "react-router-dom";
import SpecificationSection from "./SpecificationSection/SpecificationSection";
function OverviewTab() {
    const { pathname } = useLocation();
    const isPGPM = pathname.includes("pgpm");

    return (
        <>
            <div data-aos="fade-up" className="container my-1 p-3">
                <OverviewAbout />
            </div>
            <div
                data-aos="fade-up"
                className="aboutphil-container text-white p-lg-5 p-3"
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
            <div className="container my-1 p-3">
                <OverviewKeyhighlights />
            </div>
            {isPGPM && (
                <div className="container my-1 p-3">
                    <SpecificationSection />
                </div>
            )}
            <div className="container my-1 p-3">
                <OverviewParticipant />
            </div>
        </>
    );
}

export default OverviewTab;