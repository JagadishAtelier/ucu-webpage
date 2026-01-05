import React from "react";
import "../../Pages/PgprogramPage/pgTabs/PGPMAdmission/PGPMAdmission.css";
import PGPMBottomBanner from "../../Pages/PGPMProgram/PGPMBottomBanner";

function PGXPMAdmission() {
    return (
        <section className="pgdm-section">
            <div className="container my-4">
                <h1 className="display-5 fw-bold">
                    <span style={{ color: "#5ac501" }}>Admission</span> Process
                </h1>
                <p>
                    Admissions to the PGXPM follow a comprehensive evaluation process designed to identify
                    leaders with potential.
                </p>
                <p>
                    The program looks for individuals with{" "}
                    <strong>
                        significant professional experience, leadership potential, and distinctive achievements.
                    </strong>
                </p>

                {/* Placeholder for sub-components found in PGPM version */}
                <div className="my-5">
                    <h4>Key Dates</h4>
                    <p className="text-muted">Applications Open: To be announced</p>
                </div>

                <div className="my-5">
                    <h4>Evaluation Process</h4>
                    <ul>
                        <li>Application Review</li>
                        <li>Interview with Panel</li>
                        <li>Final Offer</li>
                    </ul>
                </div>

                <div className="">
                    <PGPMBottomBanner />
                </div>
            </div>
        </section>
    );
}

export default PGXPMAdmission;
