import React from "react";
import bgImage from "../../Assets/aboutPageImage/vision_mission_bg2.png";
import OverviewTab from "../PgprogramPage/pgTabs/OverviewTab";
import OverviewObjective from "../../Components/PGDM-program/OverviewTab/OverviewObjective";
import OverviewKeyhighlights from "../../Components/PGDM-program/OverviewTab/OverviewKeyhighlights";
import SpecificationSection from "../../Components/PGDM-program/SpecificationSection/SpecificationSection";
import OverviewParticipant from "../../Components/PGDM-program/OverviewTab/OverviewParticipant";
import CurriculumOverview from "../../Components/PGDM-program/OverviewTab/CurriculumOverview";
import PGPMOverviewAbout from "./PGPMOverviewAbout";
import PGPMObjectives from "./PGPMObjectives";
import PGPMKeyHighlights from "./PGPMKeyHighlights";
import PGPMBottomBanner from "./PGPMBottomBanner";
import { IndustryConnect } from "./IndustryConnect";

function PGPMOverViewTab() {
  return (
    <>
      <div data-aos="fade-up" className="container my-1 px-3">
        <PGPMOverviewAbout />
      </div>
      <div className="container  px-3">
        <PGPMKeyHighlights />
      </div>
      {/* <div
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
        <div
          className="w-100 h-100 p-lg-5 p-3"
          style={{ backgroundColor: "rgba(0,0,0,0.58)" }}
        >
          <PGPMObjectives />
        </div>
      </div> */}
      {/* <div className="container my-1 p-3">
        <SpecificationSection />
      </div> */}
      <IndustryConnect />

      <div className="container my-1 p-3">
        <OverviewParticipant />
      </div>
      {/* <PGPMBottomBanner /> */}
    </>
  );
}

export default PGPMOverViewTab;

