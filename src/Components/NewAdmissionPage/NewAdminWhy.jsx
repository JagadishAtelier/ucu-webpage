import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { FaGraduationCap, FaBriefcase, FaGlobe, FaChartLine } from "react-icons/fa";
function NewAdminWhy() {
    return (
        <div id="programs" className="NEWADMWHY-section py-5">
            <Container>
                {/* Heading */}
                <div className="text-center mb-5">
                    <h3 className="NEWADMWHY-title" data-aos="fade-down" data-aos-delay="100">
                        Why Choose UCU University
                    </h3>
                    <p className="NEWADMWHY-subtitle mx-auto" data-aos="fade-down" data-aos-delay="100">
                        UCU University offers a future-ready admission pathway designed to shape global professionals through academic excellence, industry exposure, and holistic development.
                    </p>
                </div>

                {/* Cards */}
                <Row className="g-4">
                    <Col md={6} lg={3}>
                        <div className="NEWADMWHY-card h-100" data-aos="fade-up" data-aos-delay="100">
                            <div className="NEWADMWHY-icon">
                                <FaGraduationCap />
                            </div>
                            <h4>Experienced Academic Mentors</h4>
                            <p>
                                Learn under highly qualified faculty and industry practitioners who guide students with strong academic foundations, practical insights, and career-focused mentoring throughout the program.
                            </p>
                        </div>
                    </Col>

                    <Col md={6} lg={3}>
                        <div className="NEWADMWHY-card h-100" data-aos="fade-up" data-aos-delay="100">
                            <div className="NEWADMWHY-icon">
                                <FaBriefcase />
                            </div>
                            <h4>Industry-Aligned Curriculum</h4>
                            <p>
                                Our programs are designed in collaboration with industry experts, ensuring students gain relevant skills through case studies, simulations, internships, and applied learning modules.
                            </p>
                        </div>
                    </Col>

                    <Col md={6} lg={3}>
                        <div className="NEWADMWHY-card h-100" data-aos="fade-up" data-aos-delay="100">
                            <div className="NEWADMWHY-icon">
                                <FaGlobe />
                            </div>
                            <h4>International Learning Environment</h4>
                            <p>
                                UCU University provides global exposure through international collaborations, multicultural classrooms, and opportunities for exchange programs and global certifications.
                            </p>
                        </div>
                    </Col>

                    <Col md={6} lg={3}>
                        <div className="NEWADMWHY-card h-100" data-aos="fade-up" data-aos-delay="100">
                            <div className="NEWADMWHY-icon">
                                <FaChartLine />
                            </div>
                            <h4>Career-Focused Admissions</h4>
                            <p>
                                From admission to graduation, UCU supports students with career counseling, skill development workshops, internships, and employability training to help them transition confidently into professional roles.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default NewAdminWhy