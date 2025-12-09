import React from "react";
import OverviewAbout from "./OverviewTab/OverviewAbout";
import OverviewObjective from "./OverviewTab/OverviewObjective";
import bgImage from "../../Assets/aboutPageImage/vision_mission_bg2.png";
import OverviewKeyhighlights from "./OverviewTab/OverviewKeyhighlights";
import OverviewIndustryconnect from "./OverviewTab/OverviewIndustryconnect";
import OverviewParticipant from "./OverviewTab/OverviewParticipant";
import { useLocation } from "react-router-dom";
import SpecificationSection from "./SpecificationSection/SpecificationSection";
import ThoughtLeadersSection from "./OverviewTab/ThoughtLeadersSection";
import CurriculumOverview from "./OverviewTab/CurriculumOverview";
import PGPMBottomBanner from "../../Pages/PGPMProgram/PGPMBottomBanner";
function OverviewTab() {

    return (
        <>
            <div data-aos="fade-up" className="container my-1 p-3">
                <OverviewAbout />
            </div>
            <div
                data-aos="fade-up"
                className="aboutphil-container text-white"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    minHeight: "60vh",
                    marginBottom: "100px",
                }}
            >
                <div className="w-100 h-100 p-lg-5 p-3" style={{backgroundColor:"rgba(0,0,0,0.58)"}}>
                <OverviewObjective /></div>
            </div>
            <div className="container my-1 p-3">
                <OverviewKeyhighlights />
            </div>
           
            <ThoughtLeadersSection/>
             
            <div className="container my-1 p-3">
                <OverviewParticipant />
            </div>
            <CurriculumOverview/>
                  <div className="mt-5">
      <PGPMBottomBanner/>
      </div>
        </>
    );
}

export default OverviewTab;