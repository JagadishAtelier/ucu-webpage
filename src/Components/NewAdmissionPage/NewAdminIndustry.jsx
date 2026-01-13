import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {
    FaHandshake,
    FaUsers,
    FaRocket,
    FaBuilding,
    FaTrophy,
} from "react-icons/fa";
function NewAdminIndustry() {
    return (
        <div className="NEWADMIND-section py-5">
            <Container>
                <Row className="align-items-center g-5">
                    {/* LEFT CONTENT */}
                    <Col lg={6}>
                        <span className="NEWADMIND-badge mb-4 d-inline-block" data-aos="fade-down" data-aos-delay="100">
                            Industry & Professional Connect
                        </span>

                        <h3 className="NEWADMIND-title mb-4" data-aos="fade-down" data-aos-delay="100">
                            Strong Industry Connections That Enhance Your Learning
                        </h3>

                        <p className="NEWADMIND-description mb-5" data-aos="fade-down" data-aos-delay="100">
                            UCU University builds strong relationships with leading organizations to ensure students gain practical exposure alongside academic learning. Our programs are designed to bridge classroom concepts with real-world business practices, helping students develop industry-relevant skills from the very beginning of their academic journey.
                        </p>

                        {/* FEATURES */}
                        <div className="NEWADMIND-features mb-5">
                            <div className="NEWADMIND-feature" data-aos="fade-right" data-aos-delay="100">
                                <div className="NEWADMIND-feature-icon">
                                    <FaHandshake />
                                </div>
                                <div>
                                    <h5>Industry Collaborations & Academic Alliances</h5>
                                    <p>
                                        Engage with organizations through guest lectures, industry-led workshops, live case discussions, and applied projects that enhance experiential learning.
                                    </p>
                                </div>
                            </div>

                            <div className="NEWADMIND-feature" data-aos="fade-right" data-aos-delay="100">
                                <div className="NEWADMIND-feature-icon">
                                    <FaUsers />
                                </div>
                                <div>
                                    <h5>Guidance from Industry Experts</h5>
                                    <p>
                                        Students benefit from mentoring sessions, career talks, and interactions with experienced professionals, entrepreneurs, and corporate leaders across sectors.
                                    </p>
                                </div>
                            </div>

                            <div className="NEWADMIND-feature" data-aos="fade-right" data-aos-delay="100">
                                <div className="NEWADMIND-feature-icon">
                                    <FaRocket />
                                </div>
                                <div>
                                    <h5>Startup & Innovation Support</h5>
                                    <p>
                                        UCU University encourages innovation through entrepreneurship cells, incubation guidance, startup mentoring, and opportunities to develop business ideas within a supportive academic ecosystem.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RECRUITERS */}
                        <div className="NEWADMIND-recruiters" data-aos="fade-right" data-aos-delay="100">
                            <div className="d-flex align-items-center gap-3 mb-2">
                                <FaBuilding className="NEWADMIND-recruiter-icon" />
                                <div className="NEWADMIND-recruiter-title">
                                    Industry Engagement Network
                                </div>
                            </div>
                            <p className="mb-0">
                                UCU University maintains academic and professional engagement with organizations across consulting, technology, finance, manufacturing, and service sectors, providing students exposure to diverse career pathways.
                            </p>
                        </div>
                    </Col>

                    {/* RIGHT IMAGE */}
                    <Col lg={6}>
                        <div className="NEWADMIND-image-wrapper position-relative" data-aos="fade-left" data-aos-delay="100">
                            <img
                                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
                                alt="Business professionals collaborating in a corporate boardroom"
                                className="img-fluid NEWADMIND-image"
                                loading="lazy"
                            />

                            <div className="NEWADMIND-rank-card d-none  d-lg-block">
                                <div className="d-flex align-items-center gap-3 mb-2">
                                    <FaTrophy className="NEWADMIND-trophy" />
                                    <div className="NEWADMIND-rank">Ranked #3</div>
                                </div>
                                <p>
                                    As featured in Business Today Rankings 2025
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default NewAdminIndustry