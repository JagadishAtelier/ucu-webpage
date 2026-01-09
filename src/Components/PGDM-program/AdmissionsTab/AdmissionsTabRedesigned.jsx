import React from "react";
import "./AdmissionsTabRedesigned.css";
import { FaGraduationCap, FaClipboardCheck, FaCalendarAlt } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export default function AdmissionsTabRedesigned() {
    const { pathname } = useLocation();

    const pathSegments = pathname.split("/").filter(Boolean); // split and remove empty segments
    const lastSegment = pathSegments[pathSegments.length - 1]; // get only the last segment
    const heading = lastSegment
        ? lastSegment.replace(/-/g, " ").toUpperCase()
        : "HOME";
    return (
        <section className="admissions-redesign-container">
            {/* Title */}
            <h3 className="admissions-redesign-title">{heading} Admission Process</h3>

            {/* Intro */}
            <p className="admissions-intro">
                UCU is keen to engage with the finest from the vast talent pool
                available to further its mission: to influence managerial practice and
                promote value-based growth by advancing wise innovations. Our admissions
                and selection process is rigorous and designed to identify candidates with
                strong leadership potential and academic excellence.
            </p>

            {/* Timeline Table Section */}
            <div className="timeline-section">
                <h4 className="timeline-title">
                    <FaCalendarAlt color="#5ac501" style={{ marginRight: "10px", fontSize: "0.8em" }} />
                    Important Timelines (2026–2028)
                </h4>
                <div className="timeline-table-wrapper">
                    <table className="timeline-table">
                        <thead>
                            <tr>
                                <th>Application stages</th>
                                <th>Phase – I</th>
                                <th>Phase – II</th>
                                <th>Phase – III</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Dates for applying online */}
                            <tr>
                                <td>Dates for applying online</td>
                                <td>April</td>
                                <td>June</td>
                                <td>August</td>
                            </tr>

                            {/* Submission */}
                            <tr>
                                <td>Submission of duly completed application form</td>
                                <td>May</td>
                                <td>July</td>
                                <td>September</td>
                            </tr>

                            {/* Shortlist... spans 3 cols */}
                            <tr>
                                <td>Shortlist and interview dates</td>
                                <td colSpan="3" style={{ textAlign: "center" }}>
                                    Between June to October<br />
                                    <span style={{ fontSize: "0.9em", color: "#666" }}>(Only shortlisted candidates will be notified by email)</span>
                                </td>
                            </tr>

                            {/* Admission offers */}
                            <tr>
                                <td>Admission offers*</td>
                                <td>August</td>
                                <td>End of September</td>
                                <td>Mid-October onwards</td>
                            </tr>

                            {/* Final offers */}
                            <tr>
                                <td>Final offers</td>
                                <td colSpan="3">Mid-October onwards*</td>
                            </tr>

                            {/* Entrance exam score dates - ROWSPAN 3 */}
                            <tr>
                                <td rowSpan="3">Entrance exam score dates</td>
                                <td colSpan="3">Last date to submit score: End of September</td>
                            </tr>
                            <tr>
                                {/* Entrance exam score dates (merged above) */}
                                <td colSpan="3">Accepted GMAT scores: September 30, 2020 to September 30, 2025</td>
                            </tr>
                            <tr>
                                {/* Entrance exam score dates (merged above) */}
                                <td colSpan="3">Accepted CAT scores: 2023, 2024, 2025</td>
                            </tr>

                            {/* Batch commencement date */}
                            <tr>
                                <td>Batch commencement date</td>
                                <td colSpan="3">December 2026</td>
                            </tr>

                            {/* Please note */}
                            <tr>
                                <td>Please note*</td>
                                <td colSpan="3" style={{ fontSize: "0.9em", lineHeight: "1.4" }}>
                                    Admission and final offers will be extended only to candidates who have been selected after successfully completing the interview process and have submitted all required documents, as well as valid CAT/GMAT test scores.<br />
                                    (These also include documents requested for verification.)
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p style={{ marginTop: "1rem", fontSize: "0.85rem", color: "#666" }}>
                    Note: Applicants can apply only once in any of the given admission phases. Applying in any phase does not impact your chances of securing an admission offer.
                </p>
            </div>

            {/* Eligibility & Selection Grid */}
            <div className="details-grid">
                {/* Eligibility Card */}
                <div className="detail-card">
                    <h4 className="detail-title">
                        <FaGraduationCap color="#5ac501" /> Eligibility Criteria
                    </h4>
                    <ul className="detail-list">
                        <li>
                            <strong>Academic Background:</strong> Bachelor’s degree with at least
                            50% marks or equivalent CGPA in any discipline from a recognised
                            university.
                        </li>
                        <li>
                            <strong>Entrance Exams:</strong> Valid scores in CAT or GMAT are
                            accepted.
                        </li>
                        <li>
                            <strong>Work Experience:</strong> Both fresh graduates and candidates
                            with up to five years of work experience can apply.
                        </li>
                    </ul>
                </div>

                {/* Selection Process Card */}
                <div className="detail-card">
                    <h4 className="detail-title">
                        <FaClipboardCheck color="#5ac501" /> Selection Process
                    </h4>
                    <p style={{ marginBottom: "1rem", color: "#555", fontSize: "0.95rem" }}>
                        Shortlisted candidates are invited for interviews based on their overall profile. Final selection considers:
                    </p>
                    <ul className="detail-list">
                        <li>Academic record & consistency</li>
                        <li>Entrance test performance (CAT/GMAT)</li>
                        <li>Relevance and quality of work experience (if any)</li>
                        <li>Achievements and leadership potential</li>
                        <li>Performance in personal interviews</li>
                    </ul>
                </div>
            </div>

            {/* Application Process Section */}
            <div className="application-process">
                <h4 className="detail-title">How to Apply</h4>
                <p>
                    Aspirants must fill out the online application form available starting September.
                    Ensure all details are accurate before submission.
                </p>
                <p className="fee-info">Application Processing Fee: ₹2000</p>

                <div style={{ marginTop: "1.5rem" }} className="darkbtn">
                    <button
                        className="apply-butn"
                        onClick={() => window.open("/apply", "_blank")}
                    >
                        Apply Now
                    </button>
                </div>
            </div>
        </section>
    );
}
