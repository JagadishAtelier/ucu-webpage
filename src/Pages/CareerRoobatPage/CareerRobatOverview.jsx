// import React from "react";
// Reuse or placeholder components
// import IndustryConnect from "../../Pages/PGPMProgram/IndustryConnect";
import PGPMBottomBanner from "../../Pages/PGPMProgram/PGPMBottomBanner";
import CareerRobatApply from "./CareerRobatApply";
import CareerRobatFeatures from "./CareerRobatFeatures";
import CRPFWFlow from "./CRPFWFlow";


export default function CareerRobatOverview() {
    return (
        <>
            <div className="container my-1 p-3">
                {/* Placeholder for About Section */}
                <div className="row">
                    <h1 className="display-5 mb-4 fw-bold col-12 col-lg-12">
                        About <span style={{ color: "#5ac501" }}> Career Reboot Program for Women</span>
                    </h1>
                    <p style={{ textAlign: "justify" }}>
UCU’s Career Reboot Program for Women is aimed at re-equipping women on a career break into high impact roles in the corporate world. The 6-month program combines classroom learning with hands-on experience via live projects, thereby giving updated industry and corporate overview to candidates.

                    </p>
                </div>
            </div>
            <div className="container p-3">
                <CareerRobatApply />
            </div>
            
            <div className="container overflow-visible">
                <CareerRobatFeatures/>
            </div>
            <div className="container overflow-visible">
                <CRPFWFlow/>
            </div>
                    <div class="PGPXM-download-btnds d-flex flex-column flex-lg-row gap-3 container">
          <button class="btn custom-download-btn d-flex align-items-center">
            <i class="fas fa-book-open me-3"></i>
            <span>Download Curriculum</span>
          </button>

          <button class="btn custom-download-btn d-flex align-items-center">
            <i class="fas fa-users-cog me-3"></i>
            <span>Download Class Profile</span>
          </button>
        </div>

            {/* <PGPMBottomBanner /> */}
        </>
    );
}
