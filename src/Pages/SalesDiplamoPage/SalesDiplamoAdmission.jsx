import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
    FileSignature,
    Users,
    ClipboardCheck,
    CreditCard,
    GraduationCap
} from 'lucide-react';

const SalesDiplamoAdmission = () => {
    const steps = [
        {
            id: 1,
            title: 'Fill out the admission form on the UCU website',
            icon: <FileSignature size={24} />
        },
        {
            id: 2,
            title: 'Attend the interview conducted by our panel of SMEs',
            list: [
                "Submit relevant documents such as academic profile, work experience, and achievements",
                "Submit an essay explaining why you wish to pursue the Sales Diploma at UCU"
            ],
            icon: <Users size={24} />
        },
        {
            id: 3,
            title: 'Holistic evaluation and announcement of composite score & results',
            icon: <ClipboardCheck size={24} />
        },
        {
            id: 4,
            title: 'Complete admission formalities and fee submission',
            icon: <CreditCard size={24} />
        },
        {
            id: 5,
            title: 'Course begins',
            icon: <GraduationCap size={24} />
        }
    ];

    return (
        <Container fluid className="py-5 bg-white">
            <div className="PGPMFLEX-admission-app-proc-stepper-container container">

                <h1 className="display-5 mb-4 fw-bold">
                    Admission <span style={{ color: "#5ac501" }}>Roadmap</span>
                </h1>

                {/* Timeline */}
                <div className="PGPMFLEX-admission-app-proc-line-container">
                    <div className="PGPMFLEX-admission-app-proc-progress-line"></div>
                    <div className="PGPMFLEX-admission-app-proc-dots-row">
                        {steps.map(step => (
                            <div
                                key={step.id}
                                className="PGPMFLEX-admission-app-proc-dot"
                            >
                                <span>0{step.id}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Cards */}
                <Row className="g-4 mt-4">
                    {steps.map(step => (
                        <Col key={step.id} xs={12} md={6} lg className="PGPMFLEX-admission-app-proc-col">
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

                                    {step.list && (
                                        <ul className="PGPMFLEX-admission-app-proc-list ps-2">
                                            {step.list.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    )}

                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

            <div class="PGPXM-download-btnds d-flex flex-column flex-lg-row gap-3 container mt-5">
                <button class="btn custom-download-btn d-flex align-items-center">
                    <span>Apply Now</span>
                </button>

                <button class="btn custom-download-btn d-flex align-items-center">
                    <span>Contact Admission Counsellor</span>
                </button>
            </div>
        </Container>
    );
};

export default SalesDiplamoAdmission;
