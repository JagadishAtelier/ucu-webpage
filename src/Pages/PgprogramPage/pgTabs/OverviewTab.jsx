import React from "react";
import OverviewAbout from "./OverviewTab/OverviewAbout";
import bgImage from "../../../Assets/aboutPageImage/vision_mission_bg1.png";
import OverviewObjective from "../../../Components/PGDM-program/OverviewTab/OverviewObjective";
import OverviewKeyhighlights from "../../../Components/PGDM-program/OverviewTab/OverviewKeyhighlights";
import OverviewParticipant from "../../../Components/PGDM-program/OverviewTab/OverviewParticipant";
function OverviewTab() {

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
            <div className="container my-1 p-3">
                <OverviewParticipant />
            </div>
        </>
    );
}

export default OverviewTab;