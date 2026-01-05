import React from "react";
import OverviewParticipant from "../../Components/PGDM-program/OverviewTab/OverviewParticipant";
import PGDMOverviewAbout from "./PGDMOverviewAbout";
// import PGDMObjectives from "./PGDMObjectives"; // Not used in the trimmed down version I saw effectively used, but let's keep it if needed. Actually it was commented out in PGPMOverViewTab.jsx?
// Lines 24-42 in PGPMOverViewTab.jsx were commented out. I will leave it out for now or comment it out.
import PGDMKeyHighlights from "./PGDMKeyHighlights";
import PGDMBottomBanner from "./PGDMBottomBanner";
import { IndustryConnect } from "./IndustryConnect";

function PGDMOverViewTab() {
    return (
        <>
            <div data-aos="fade-up" className="container my-1 p-3">
                <PGDMOverviewAbout />
            </div>
            <div className="container  p-3">
                <PGDMKeyHighlights />
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
          <PGDMObjectives />
        </div>
      </div> */}

            {/* <IndustryConnect /> */}

            <div className="container my-1 p-3">
                <OverviewParticipant />
            </div>
            {/* <PGDMBottomBanner /> */}
        </>
    );
}

export default PGDMOverViewTab;
