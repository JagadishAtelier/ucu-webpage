// import React from "react";
// Reuse or placeholder components
// import IndustryConnect from "../../Pages/PGPMProgram/IndustryConnect";

import PGPMFlexCourseStructure from "./PGPMFlexCourseStructure";
import PGPMFlexInfograph from "./PGPMFlexInfograph";
import PGPMFlexWho from "./PGPMFlexWho";


export default function PGPMFlexOverview() {
    return (
        <>
            <div className="container p-3 pt-0 pt-lg-3">
                {/* Placeholder for About Section */}
                <div className="row">
                    <h1 className="display-5 mb-4 fw-bold col-12 col-lg-12">
                        About <span style={{ color: "#5ac501" }}> PGPM Flex</span>
                    </h1>
                    <p style={{ textAlign: "justify" }}>
                        Accelerate your career with UCU Chennai’s PGPM Flex – a globally benchmarked, industry‑integrated executive management program co‑created and co‑delivered with the industry. Designed for ambitious professionals, the program offers a flexible weekend format that blends rigorous classroom learning with real‑world application, ensuring career growth without interruption. With traditional specializations in Marketing, Finance, Operations, and Analytics and new age specialization options in GCC, Fin-Tech, Product Management and more, participants gain cutting‑edge skills, CXO perspectives, and hands‑on exposure through live projects, mentored dissertations, and industry simulations. Backed by international collaborations, distinguished faculty, and a powerful alumni network, UCU Chennai empowers you to lead with confidence in the digital era. Join us to transform your potential into leadership excellence through authentic industry engagement.
                    </p>
                </div>
            </div>
            <div className="container p-3 pt-0 pt-lg-0  overflow-x-hidden">
                <PGPMFlexWho />
            </div>

            <div className="container overflow-x-hidden">
                <PGPMFlexInfograph />
            </div>
            <div className="container overflow-x-hidden">
                <PGPMFlexCourseStructure />
            </div>
            {/* <div class="PGPXM-download-btnds d-flex flex-column flex-lg-row gap-3 container">
                <button class="btn custom-download-btn d-flex align-items-center">
                    <i class="fas fa-book-open me-3"></i>
                    <span>Download Curriculum</span>
                </button>

                <button class="btn custom-download-btn d-flex align-items-center">
                    <i class="fas fa-users-cog me-3"></i>
                    <span>Download Class Profile</span>
                </button>
            </div> */}

            {/* <PGPMBottomBanner /> */}
        </>
    );
}
