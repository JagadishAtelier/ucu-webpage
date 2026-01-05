// import React from "react";
// Reuse or placeholder components
// import IndustryConnect from "../../Pages/PGPMProgram/IndustryConnect";
import PGPMBottomBanner from "../../Pages/PGPMProgram/PGPMBottomBanner";
import CourseStructure from "./CourseStructure";
import PGXPM360 from "./PGXPM360";
import WhoIsFor from "./WhoIsFor";

export default function PGXPMOverview() {
    return (
        <>
            <div className="container my-1 p-3">
                {/* Placeholder for About Section */}
                <div className="row">
                    <h1 className="display-5 mb-4 fw-bold col-12 col-lg-12">
                        About <span style={{ color: "#5ac501" }}> PGXPM Flex</span>
                    </h1>
                    <p style={{ textAlign: "justify" }}>
                        <strong>Step into senior leadership with UCU Chennai’s PGXPM – an industry‑integrated executive program designed for mid‑career professionals.</strong> Spanning 20 months with 450+ contact hours and seven immersive residencies, the program blends rigorous classroom learning with real‑world application, ensuring you grow while continuing your career. Co‑created and co‑delivered with industry, PGXPM emphasizes leadership development, strategic thinking, technology, and entrepreneurship, supported by executive coaching and alumni mentorship. With optional international immersion, capstone projects, and ESG initiatives, participants gain holistic exposure to global business challenges. Backed by our distinguished faculty and our host of 1000+ industry experts, UCU Chennai empowers you to transform into a future‑ready leader.
                    </p>
                </div>
            </div>
            <div className="container p-3">
                <WhoIsFor />
            </div>
            
            <div className="container overflow-visible">
                <PGXPM360/>
            </div>
            <div className="container overflow-visible">
                <CourseStructure/>
            </div>

            {/* <PGPMBottomBanner /> */}
        </>
    );
}
