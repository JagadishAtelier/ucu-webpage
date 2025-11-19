import React from 'react'
import { Col, Container, Form, Row, Button } from "react-bootstrap";
function ExpressInterestForm() {
    return (
        <div className="captital-campus-content-sec mt-4">
            <Container>

                <Form>
                    <div>
                        <h1 className='mb-4'>Expression of Interest</h1>
                    </div>
                    <Row className="mb-4">
                        <Col lg={6}>
                            <Form.Group className="floating-box">
                                <Form.Label className="form-label-uni"> Name*</Form.Label>
                                <Form.Control type="text" required />

                            </Form.Group>
                        </Col>

                        <Col lg={6}>
                            <Form.Group className="floating-box">
                                <Form.Label className="form-label-uni">Email*</Form.Label>
                                <Form.Control type="email" required />

                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mb-4">
                        <Col lg={6}>
                            <Form.Group className="floating-box">
                                <Form.Label className="form-label-uni">Mobile Number*</Form.Label>
                                <Form.Control type="text" required />

                            </Form.Group>
                        </Col>

                        <Col lg={6}>
                            <Form.Group className="floating-box">
                                <Form.Label className="form-label-uni">Organisation*</Form.Label>
                                <Form.Control type="email" required />

                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mb-4">
                        <Col lg={6}>
                            <Form.Group className="floating-box">
                                <Form.Label className="form-label-uni">Desigination*</Form.Label>
                                <Form.Control type="text" required />

                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="floating-box">
                                <Form.Label className="form-label-uni">Address*</Form.Label>
                                <Form.Control type="text" required />

                            </Form.Group>
                        </Col>
                    </Row>


                    <Row className="mb-4">
                        <Col lg={6}>
                            <Form.Group className="floating-box">
                                <Form.Label className="form-label-uni">City*</Form.Label>
                                <Form.Control type="text" required />

                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="floating-box">
                                <Form.Label className="form-label-uni">Pincode*</Form.Label>
                                <Form.Control type="text" required />

                            </Form.Group>
                        </Col>
                    </Row>

                    <div>
                        <h3 className="mb-4">Interest in Collaborating</h3>

                        <Row className="mb-4">
                            <Col lg={6}>
                                <Form.Group>
                                    <Form.Check type="checkbox" label="Career Acceleration Series" className='mb-2 fw-bold' />
                                    <Form.Check type="checkbox" label="Annual Event"className='mb-2 fw-bold'  />
                                    <Form.Check type="checkbox" label="Industry Visit" className='mb-2 fw-bold' />
                                    <Form.Check type="checkbox" label="Corporate Day"className='mb-2 fw-bold'  />
                                    <Form.Check type="checkbox" label="Summer Internship Hiring"className='mb-2 fw-bold'  />
                                </Form.Group>

                                {/* reCAPTCHA box placeholder */}
                                <div className="mt-4">
                                    <div
                                        style={{
                                            width: "50%",
                                            height: "78px",
                                            border: "1px solid #ccc",
                                            borderRadius: "4px",
                                            display: "flex",
                                            alignItems: "center",
                                            paddingLeft: "15px"
                                        }}
                                    >
                                        <input type="checkbox" style={{ width: "20px", height: "20px" }} />
                                        <span className="ms-2">I'm not a robot</span>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={6}>
                                <Form.Group>
                                    <Form.Check type="checkbox" label="Career Transformation to Career Acceleration"className='mb-2 fw-bold'  />
                                    <Form.Check type="checkbox" label="Corporate Competition"className='mb-2 fw-bold'  />
                                    <Form.Check type="checkbox" label="Co-branded Curriculum" className='mb-2 fw-bold' />
                                    <Form.Check type="checkbox" label="Live Project" className='mb-2 fw-bold' />
                                    <Form.Check type="checkbox" label="Full-time Hiring" className='mb-2 fw-bold' />
                                </Form.Group>
                            </Col>
                        </Row>
                    </div>


                    <div className="text-center">
                        <button className="submit-btn-uni px-5 py-2">Submit The EOI Form</button>
                    </div>
                </Form>
            </Container>
        </div>
    )
}

export default ExpressInterestForm