import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GraduationCap, Briefcase, FileCheck, CheckCircle2 } from "lucide-react";
import "../../Pages/PGPMFlexPage/PGPMFlexPage.css"; // Reuse PGPM Flex CSS

const PGXPMAddEle = () => {
    return (
        <section className="PGPMFLEX-admission-eligible-section">
            <Container>

                <header className="PGPMFLEX-admission-eligible-header text-center mb-5">
                    <h1 className="display-5 fw-bold">
                        PGXPM <span style={{ color: "#5ac501" }}> Eligibility</span>
                    </h1>
                    <p className="mx-auto" style={{ maxWidth: '600px' }}>Prerequisites for applying to the PGXPM program</p>
                </header>

                <Row className="g-4 PGPMFLEX-admission-eligible-grid">

                    {/* Card 1: Education (Blue) */}
                    <Col md={6} lg={3}>
                        <div className="PGPMFLEX-admission-eligible-card theme-blue">
                            <div className="PGPMFLEX-card-body">
                                <span className="PGPMFLEX-admission-eligible-label">Education</span>
                                <p className="PGPMFLEX-card-desc">
                                    Bachelor’s degree or equivalent in any discipline, with an academic track record of 50% throughout.
                                </p>
                                <div className="PGPMFLEX-tags-container">
                                    <span className="PGPMFLEX-tag-pill">50% Aggregate</span>
                                    <span className="PGPMFLEX-tag-pill">Degree</span>
                                </div>
                            </div>
                            <div className="PGPMFLEX-card-footer">
                                <span>Learn More</span>
                                <div className="PGPMFLEX-footer-icon">
                                    <GraduationCap size={20} />
                                </div>
                            </div>
                        </div>
                    </Col>

                    {/* Card 2: Work Experience (Orange) */}
                    <Col md={6} lg={3}>
                        <div className="PGPMFLEX-admission-eligible-card theme-orange">
                            <div className="PGPMFLEX-card-body">
                                <span className="PGPMFLEX-admission-eligible-label">Experience</span>
                                <p className="PGPMFLEX-card-desc">
                                    Typically 2+ years work experience. Exceptional students with 18+ months by Sept 30th may be considered.
                                </p>
                                <div className="PGPMFLEX-tags-container">
                                    <span className="PGPMFLEX-tag-pill">2+ Years</span>
                                    <span className="PGPMFLEX-tag-pill">18+ Months</span>
                                </div>
                            </div>
                            <div className="PGPMFLEX-card-footer">
                                <span>Requirements</span>
                                <div className="PGPMFLEX-footer-icon">
                                    <Briefcase size={20} />
                                </div>
                            </div>
                        </div>
                    </Col>

                    {/* Card 3: Scores (Purple) */}
                    <Col md={6} lg={3}>
                        <div className="PGPMFLEX-admission-eligible-card theme-purple">
                            <div className="PGPMFLEX-card-body">
                                <span className="PGPMFLEX-admission-eligible-label">Scores</span>
                                <p className="PGPMFLEX-card-desc">
                                    CAT*, XAT+, GMAT, MAT, CMAT, or Great Lakes Aptitude Test (if required).
                                </p>
                                <div className="PGPMFLEX-tags-container">
                                    <span className="PGPMFLEX-tag-pill">CAT</span>
                                    <span className="PGPMFLEX-tag-pill">XAT</span>
                                    <span className="PGPMFLEX-tag-pill">GMAT</span>
                                </div>
                            </div>
                            <div className="PGPMFLEX-card-footer">
                                <span>View Tests</span>
                                <div className="PGPMFLEX-footer-icon">
                                    <FileCheck size={20} />
                                </div>
                            </div>
                        </div>
                    </Col>

                    {/* Card 4: Other (Green) */}
                    <Col md={6} lg={3}>
                        <div className="PGPMFLEX-admission-eligible-card theme-green">
                            <div className="PGPMFLEX-card-body">
                                <span className="PGPMFLEX-admission-eligible-label">Others</span>
                                <div className="PGPMFLEX-card-desc">
                                    <ul className="ps-3 mb-0" style={{ fontSize: '0.9em' }}>
                                        <li>Employer Agreement (Self-sponsored)</li>
                                        <li>Two Recommendations</li>
                                    </ul>
                                </div>
                                <div className="PGPMFLEX-tags-container mt-2">
                                    <span className="PGPMFLEX-tag-pill">Agreement</span>
                                    <span className="PGPMFLEX-tag-pill">Recommenders</span>
                                </div>
                            </div>
                            <div className="PGPMFLEX-card-footer">
                                <span>Details</span>
                                <div className="PGPMFLEX-footer-icon">
                                    <CheckCircle2 size={20} />
                                </div>
                            </div>
                        </div>
                    </Col>

                </Row>

            </Container>
        </section>
    );
};

export default PGXPMAddEle;