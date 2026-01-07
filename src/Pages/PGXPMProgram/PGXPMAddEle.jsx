import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const PGXPMAddEle = () => {
    return (
        <section className="PGPMFLEX-admission-eligible-section">
            <Container>

                <header className="PGPMFLEX-admission-eligible-header">
                    <h1 className="display-5 my-4 fw-bold col-12 col-lg-12">
                        PGXPM <span style={{ color: "#5ac501" }}> Eligibility</span>
                    </h1>
                </header>

                <Row className="g-4 PGPMFLEX-admission-eligible-grid">

                    <Col md={6}>
                        <div className="PGPMFLEX-admission-eligible-card">
                            <span className="PGPMFLEX-admission-eligible-label">Education</span>
                            <div className="PGPMFLEX-admission-eligible-metric">50%</div>
                            <p>
                                Bachelor’s degree or equivalent in any discipline, with an 
                                academic track record of 50% throughout.
                            </p>
                        </div>
                    </Col>

                    <Col md={6}>
                        <div className="PGPMFLEX-admission-eligible-card">
                            <span className="PGPMFLEX-admission-eligible-label">
                                Work-Experience
                            </span>
                            <div className="PGPMFLEX-admission-eligible-metric">
                                2+ <small>years</small>
                            </div>
                            <p>
                                Typically candidates with more than 2+ years of work experience are considered. 
                                However, exceptional students with <strong>18+ months</strong> of experience 
                                by Sept 30th, 2023, may be considered.
                            </p>
                        </div>
                    </Col>

                    <Col md={6}>
                        <div className="PGPMFLEX-admission-eligible-card">
                            <span className="PGPMFLEX-admission-eligible-label">
                                Scores Accepted
                            </span>
                            <div className="PGPMFLEX-admission-eligible-subtext">
                                CAT*, XAT+, GMAT, MAT, CMAT
                            </div>
                            <p>
                                Equivalent aptitude tests or Great Lakes Aptitude Test 
                                (if required).
                            </p>
                        </div>
                    </Col>

                    <Col md={6}>
                        <div className="PGPMFLEX-admission-eligible-card">
                            <span className="PGPMFLEX-admission-eligible-label">
                                Other Application Requirements
                            </span>
                            <ul>
                                <li>An in-principle agreement with the employer for self-sponsored candidates</li>
                                <li>Two Recommendations (provide email-ids of the recommenders, the recommenders would be contacted at a later date)</li>
                            </ul>
                        </div>
                    </Col>

                </Row>

            </Container>
        </section>
    );
};

export default PGXPMAddEle;