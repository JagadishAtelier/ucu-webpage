import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
    Globe,
    CreditCard,
    FileText,
    Mail,
    PhoneCall
} from 'lucide-react';
import "../../Pages/PGPMFlexPage/PGPMFlexPage.css"; // Reuse PGPM Flex CSS

const PGXPMApp = () => {
    const steps = [
        {
            id: 1,
            title: 'You can register at www.ucu.edu.in',
            icon: <Globe size={34} />
        },
        {
            id: 2,
            title: 'Make a payment of INR 1,500 at www.ucu.edu.in',
            icon: <CreditCard size={34} />
        },
        {
            id: 3,
            title: 'Fill the online application',
            icon: <FileText size={34} />
        },
        {
            id: 4,
            title: 'Provide the official email-id of the recommenders',
            icon: <Mail size={34} />
        },
        {
            id: 5,
            title:
                'Candidates shortlisted for the interview will be intimated about the venue and the time slot through E-mail / telephone',
            icon: <PhoneCall size={34} />
        }
    ];

    return (
        <Container fluid className="py-5 bg-white">
            <div className="PGPMFLEX-admission-app-proc-stepper-container container">
                {/* Timeline */}
                <h3 className="cs-subtitle mb-lg-4 mb-0" style={{ color: "#0a089b" }}>Application Process</h3>
                <div className="PGPMFLEX-admission-app-proc-line-container">
                    <div className="PGPMFLEX-admission-app-proc-progress-line"></div>
                    <div className="PGPMFLEX-admission-app-proc-dots-row">
                        {steps.map((step) => (
                            <div
                                key={step.id}
                                className="PGPMFLEX-admission-app-proc-dot"
                            >
                                <span style={{ lineHeight: '1' }}>0{step.id}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Cards */}
                <Row className="gy-4 gx-2 mt-lg-3 mt-0">
                    {steps.map((step) => (
                        <Col
                            key={step.id}
                            xs={12}
                            md={6}
                            lg
                            className="PGPMFLEX-admission-app-proc-col"
                        >
                            <Card className="PGPMFLEX-admission-app-proc-card h-100">
                                <Card.Body>
                                    <div className="PGPMFLEX-admission-app-proc-icon">
                                        {step.icon}
                                    </div>

                                    <div className="PGPMFLEX-admission-app-proc-step-label">
                                        STEP {step.id}
                                    </div>

                                    <Card.Title className="PGPMFLEX-admission-app-proc-card-title">
                                        {step.title}
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
    );
};

export default PGXPMApp;
