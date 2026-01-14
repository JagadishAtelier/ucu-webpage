import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
    FileSignature,
    Users,
    ClipboardCheck,
    CreditCard,
    GraduationCap,
    ArrowRight,
    Headphones
} from 'lucide-react';
import "../../Pages/PGPMFlexPage/PGPMFlexPage.css"; // Reuse vibrant styles
import { Link } from 'react-router-dom';

const SalesDiplamoAdmission = () => {
    const steps = [
        {
            id: 1,
            title: 'Fill out the admission form on UCU Website',
            icon: <FileSignature size={34} />
        },
        {
            id: 2,
            title: 'Attend the Interview by our panel of SMEs',
            // desc: "Submit academic profiles, work experience, achievements, and an essay suggesting why you want your Sales Diploma and why UCU?",
            icon: <Users size={34} />
        },
        {
            id: 3,
            title: 'Evaluation of profile and composite score result',
            icon: <ClipboardCheck size={34} />
        },
        {
            id: 4,
            title: 'Complete admission formalities and fee submission',
            icon: <CreditCard size={34} />
        },
        {
            id: 5,
            title: 'Course begins',
            icon: <GraduationCap size={34} />
        }
    ];

    return (
        <Container fluid className="py-5 bg-white">
            <div className="PGPMFLEX-admission-app-proc-stepper-container container">

                <h1 className="display-5 mb-5 fw-bold text-center">
                    Admission <span style={{ color: "#5ac501" }}>Process</span>
                </h1>

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

                                    <Card.Title className="PGPMFLEX-admission-app-proc-card-title mb-2">
                                        {step.title}
                                    </Card.Title>

                                    {step.desc && (
                                        <Card.Text className="small text-muted mt-2">
                                            {step.desc}
                                        </Card.Text>
                                    )}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

            {/* Premium Buttons */}
            <div className="pgxpm-download-actions d-flex flex-column flex-md-row gap-4 mt-5 justify-content-center">
                <Link to={"/admissions"} className="btn pgxpm-download-btn d-flex align-items-center justify-content-center gap-3">
                    <div className="icon-box">
                        <ArrowRight size={20} />
                    </div>
                    <span>Apply Now</span>
                </Link>

                <button className="btn pgxpm-download-btn d-flex align-items-center justify-content-center gap-3">
                    <div className="icon-box">
                        <Headphones size={20} />
                    </div>
                    <span>Contact Counsellor</span>
                </button>
            </div>
        </Container>
    );
};

export default SalesDiplamoAdmission;
