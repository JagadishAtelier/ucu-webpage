import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";

function NewAdminWhy({ data }) {
    const title = data?.title || "Why Choose UCU University";
    const subtitle = data?.subtitle || "UCU University offers a future-ready admission pathway designed to shape global professionals through academic excellence, industry exposure, and holistic development.";

    const defaultCards = [
        {
            title: "Experienced Academic Mentors",
            description: "Learn under highly qualified faculty and industry practitioners who guide students with strong academic foundations, practical insights, and career-focused mentoring throughout the program.",
            icon: "FaGraduationCap"
        },
        {
            title: "Industry-Aligned Curriculum",
            description: "Our programs are designed in collaboration with industry experts, ensuring students gain relevant skills through case studies, simulations, internships, and applied learning modules.",
            icon: "FaBriefcase"
        },
        {
            title: "International Learning Environment",
            description: "UCU University provides global exposure through international collaborations, multicultural classrooms, and opportunities for exchange programs and global certifications.",
            icon: "FaGlobe"
        },
        {
            title: "Career-Focused Admissions",
            description: "From admission to graduation, UCU supports students with career counseling, skill development workshops, internships, and employability training to help them transition confidently into professional roles.",
            icon: "FaChartLine"
        }
    ];

    const cards = data?.cards && data.cards.length > 0 ? data.cards : defaultCards;

    return (
        <div id="programs" className="NEWADMWHY-section py-5">
            <Container>
                {/* Heading */}
                <div className="text-center mb-5">
                    <h3 className="NEWADMWHY-title" data-aos="fade-down" data-aos-delay="100">
                        {title}
                    </h3>
                    <p className="NEWADMWHY-subtitle mx-auto" data-aos="fade-down" data-aos-delay="100">
                        {subtitle}
                    </p>
                </div>

                {/* Cards */}
                <Row className="g-4">
                    {cards.map((card, index) => {
                        const IconComponent = FaIcons[card.icon] || FaIcons.FaGraduationCap;
                        return (
                            <Col md={6} lg={3} key={index}>
                                <div className="NEWADMWHY-card h-100" data-aos="fade-up" data-aos-delay="100">
                                    <div className="NEWADMWHY-icon">
                                        <IconComponent />
                                    </div>
                                    <h4>{card.title}</h4>
                                    <p>{card.description}</p>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default NewAdminWhy