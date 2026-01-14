// import React from "react";
// Reuse or placeholder components
// import IndustryConnect from "../../Pages/PGPMProgram/IndustryConnect";
import PGPMBottomBanner from "../../Pages/PGPMProgram/PGPMBottomBanner";
import CareerRobatApply from "./CareerRobatApply";
import CareerRobatFeatures from "./CareerRobatFeatures";
import CRPFWFlow from "./CRPFWFlow";
import { BookOpen, UserCog } from "lucide-react";


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
                <CareerRobatFeatures />
            </div>
            <div className="container overflow-visible">
                <CRPFWFlow />
            </div>
            <div className="pgxpm-download-actions d-flex flex-column flex-md-row gap-4 mt-5 justify-content-center mb-5">
                <button className="btn pgxpm-download-btn d-flex align-items-center justify-content-center gap-3">
                    <div className="icon-box">
                        <BookOpen size={20} />
                    </div>
                    <span>Download Curriculum</span>
                </button>

                <button className="btn pgxpm-download-btn d-flex align-items-center justify-content-center gap-3">
                    <div className="icon-box">
                        <UserCog size={20} />
                    </div>
                    <span>Download Class Profile</span>
                </button>
            </div>

            {/* <PGPMBottomBanner /> */}
        </>
    );
}
