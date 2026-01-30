
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";

function NewAdminWho({ data }) {
    /* =======================
       DATA CONFIG (Fallbacks)
    ======================= */

    const defaultStats = [
        { value: "180", label: "Total Intake" },
        { value: "Entrance Test", label: "Score Considered" },
        { value: "Up to 40%", label: "Women Representation" },
        { value: "Merit-Based", label: "Scholarships Available" },
    ];

    const defaultTitle = "Who Should Apply to UCU University";
    const defaultSubtitle = "UCU University invites motivated learners to be part of its founding cohort and contribute to a forward-looking academic and professional ecosystem.";
    const defaultBadge = "Founding Batch 2026–28";

    const defaultCards = [
        {
            title: "Ideal Candidate Profile",
            icon: "FaLightbulb",
            listClass: "NEWADMWHO-list",
            iconClass: "FaCheckCircle",
            listItems: [
                "Curious & Innovative Thinkers",
                "Strong Academic Foundation",
                "Leadership & Initiative"
            ],
        },
        {
            title: "Diverse Academic Backgrounds",
            icon: "FaUsers",
            listClass: "NEWADMWHO-list",
            iconClass: "FaCheckCircle",
            listItems: [
                "All Disciplines Welcome",
                "Fresh Graduates",
                "Working Professionals"
            ],
        },
        {
            title: "Founding Batch Benefits",
            icon: "FaTrophy",
            listClass: "NEWADMWHO-list NEWADMWHO-list-star",
            iconClass: "FaStar",
            listItems: [
                "Inaugural Cohort Recognition",
                "Influence Academic Culture",
                "Close Faculty Interaction"
            ],
        },
    ];

    const title = data?.title || defaultTitle;
    const subtitle = data?.description || defaultSubtitle; // Note: backend schema calls it description, frontend prop was subtitle
    const badge = data?.badge || defaultBadge;
    const cards = data?.cards && data.cards.length > 0 ? data.cards : defaultCards;
    // Stats are not in CMS yet, using default
    const statsData = defaultStats;

    return (
        <div className="NEWADMWHO-section py-5 bg-white">
            <Container>
                {/* Header */}
                <div className="text-center mb-4">
                    <span className="NEWADMWHO-badge d-inline-block mb-3" data-aos="fade-down" data-aos-delay="100">
                        <i className="fas fa-star me-2"></i>
                        {badge}
                    </span>

                    <h3 className="NEWADMWHO-title mb-3" data-aos="fade-down" data-aos-delay="100">{title}</h3>

                    <p className="NEWADMWHO-subtitle mx-auto" data-aos="fade-down" data-aos-delay="100">
                        {subtitle}
                    </p>
                </div>

                {/* Stats */}
                <Row className="g-4 mb-5" >
                    {statsData.map((item, index) => (
                        <Col sm={6} lg={3} key={index}>
                            <div className="NEWADMWHO-stat-card h-100" data-aos="fade-up" data-aos-delay="100">
                                <div className="NEWADMWHO-stat-value">{item.value}</div>
                                <div className="NEWADMWHO-stat-label">{item.label}</div>
                            </div>
                        </Col>
                    ))}
                </Row>

                {/* Info Cards */}
                <Row className="g-4">
                    {cards.map((card, index) => {
                        // Dynamic Icons
                        const IconComponent = FaIcons[card.icon] || FaIcons.FaRegLightbulb;
                        const ListIcon = index === 2 ? FaIcons.FaStar : FaIcons.FaCheckCircle; // Logic for specific icon style or just generic

                        return (
                            <Col lg={4} key={index}>
                                <Card className="NEWADMWHO-info-card h-100" data-aos="fade-up" data-aos-delay="100">
                                    <Card.Body>
                                        <h4 className="NEWADMWHO-card-title">
                                            <IconComponent className="me-2" />
                                            {card.title}
                                        </h4>

                                        <ul className={index === 2 ? "NEWADMWHO-list NEWADMWHO-list-star" : "NEWADMWHO-list"}>
                                            {card.listItems && card.listItems.map((item, idx) => (
                                                <li key={idx}>
                                                    <ListIcon className="NEWADMWHO-list-icon" />
                                                    <div>
                                                        <strong>{item}</strong>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default NewAdminWho;
