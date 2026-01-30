import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import {
    FaBuilding,
    FaTrophy,
} from "react-icons/fa";

function NewAdminIndustry({ data }) {
    const title = data?.title || "Strong Industry Connections That Enhance Your Learning";
    const description = data?.description || "UCU University builds strong relationships with leading organizations to ensure students gain practical exposure alongside academic learning. Our programs are designed to bridge classroom concepts with real-world business practices, helping students develop industry-relevant skills from the very beginning of their academic journey.";
    const badge = data?.badge || "Industry & Professional Connect";

    // Default features if no data
    const defaultCards = [
        {
            title: "Industry Collaborations & Academic Alliances",
            description: "Engage with organizations through guest lectures, industry-led workshops, live case discussions, and applied projects that enhance experiential learning.",
            icon: "FaHandshake"
        },
        {
            title: "Guidance from Industry Experts",
            description: "Students benefit from mentoring sessions, career talks, and interactions with experienced professionals, entrepreneurs, and corporate leaders across sectors.",
            icon: "FaUsers"
        },
        {
            title: "Startup & Innovation Support",
            description: "UCU University encourages innovation through entrepreneurship cells, incubation guidance, startup mentoring, and opportunities to develop business ideas within a supportive academic ecosystem.",
            icon: "FaRocket"
        }
    ];

    const cards = data?.cards && data.cards.length > 0 ? data.cards : defaultCards;

    return (
        <div className="NEWADMIND-section py-5">
            <Container>
                <Row className="align-items-center g-5">
                    {/* LEFT CONTENT */}
                    <Col lg={6}>
                        <span className="NEWADMIND-badge mb-4 d-inline-block" data-aos="fade-down" data-aos-delay="100">
                            {badge}
                        </span>

                        <h3 className="NEWADMIND-title mb-4" data-aos="fade-down" data-aos-delay="100">
                            {title}
                        </h3>

                        <p className="NEWADMIND-description mb-5" data-aos="fade-down" data-aos-delay="100">
                            {description}
                        </p>

                        {/* FEATURES */}
                        <div className="NEWADMIND-features mb-5">
                            {cards.map((card, index) => {
                                const IconComponent = FaIcons[card.icon] || FaIcons.FaHandshake;
                                return (
                                    <div key={index} className="NEWADMIND-feature" data-aos="fade-right" data-aos-delay="100">
                                        <div className="NEWADMIND-feature-icon">
                                            <IconComponent />
                                        </div>
                                        <div>
                                            <h5>{card.title}</h5>
                                            <p>{card.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
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
                                src={data?.images?.[0] || "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"}
                                alt="Business professionals"
                                className="img-fluid NEWADMIND-image"
                                loading="lazy"
                            />

                            <div className="NEWADMIND-rank-card d-none  d-lg-block">
                                <div className="d-flex align-items-center gap-3 mb-2">
                                    <FaTrophy className="NEWADMIND-trophy" />
                                    <div className="NEWADMIND-rank">Top Industries</div>
                                </div>
                                <p>
                                    Partnering with leading organizations across diverse sectors to ensure global career readiness.
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