import React, { useState } from 'react';
import { Form, Row, Col, Button, Modal } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
function OfferingsPlacement() {
    const navigate = useNavigate()
    const [showForm, setShowForm] = useState(false);

    const handleExploreClick = () => setShowForm(true);
    const handleClose = () => setShowForm(false);

    return (
        <div className='captital-campus-content-sec mt-5'>
            <h1>Placement Academy for Career Enhancement (PACE)</h1>
            <h5 className='my-3'>Career Transformation Module (CTM)</h5>

            <div className='d-flex flex-lg-row flex-column align-items-center gap-3'>
                <img
                    src='https://www.simplilearn.com/ice9/free_resources_article_thumb/Career_Transformation.jpeg'
                    className='op-image'
                />
                <div className='op-blue-box'>
                    <p>
                        Accelerate your placement readiness from Day One through our curated, company-aligned and industry-specific career modules.
                    </p>
                    <ul>
                        <li>Join the UCU Placement Academy for Career Enhancement (PACE) to unlock structured pathways to job readiness and career success</li>
                        <li>Begin with our diagnostic module to assess your current capabilities (“As-Is”) against industry expectations (“To-Be”) for your aspired role</li>
                        <li>Access curated, outcome-driven courses designed to bridge skill gaps and build industry-aligned competencies</li>
                        <li>Validate your readiness through mock GDPI simulations conducted by seasoned industry professionals and subject matter experts</li>
                    </ul>
                </div>
            </div>

            <div className='mt-5'>
                <div className='d-flex flex-lg-row flex-column-reverse align-items-start gap-3'>
                    <div className='op-blue-box'>
                        <h5 className='mt-3'>Career Launchpad Program (CLP)</h5>
                        <p>Get access to top job opportunities and internships via our curated listings for freshers</p>
                        <div className='d-flex gap-3'>
                            <Button
                                className='col-4'
                                onClick={handleExploreClick}
                                style={{ backgroundColor: "#5ac501", border: "none" }}
                            >
                                Explore
                            </Button>
                            <Button
                                className='col-4'
                                onClick={()=>navigate('contact-us')}
                                style={{ backgroundColor: "#5ac501", border: "none" }}
                            >
                                Contact us
                            </Button>
                        </div>
                    </div>
                    <img
                        src='https://www.anderson.ucla.edu/sites/default/files/styles/max_1300x1300/public/image/2022-01/MBA-campaign-consortium-banner2.jpg?itok=7syfM7Cj'
                        className='op-image'
                    />
                </div>
            </div>

            {/* 🔹 Modal Section */}
            <Modal show={showForm} onHide={handleClose} centered size="lg" className="custom-modal">
                <Modal.Header closeButton className="custom-modal-header">
                    <Modal.Title>Career Launchpad Program Registration</Modal.Title>
                </Modal.Header>

                <Modal.Body className="custom-modal-body">
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="formFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your first name" />
                            </Form.Group>

                            <Form.Group as={Col} md="6" controlId="formContact">
                                <Form.Label>Contact</Form.Label>
                                <Form.Control type="text" placeholder="Enter contact number" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="formEmail">
                                <Form.Label>Email ID</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>

                            <Form.Group as={Col} md="6" controlId="formInstitute">
                                <Form.Label>Institute</Form.Label>
                                <Form.Control type="text" placeholder="Enter your institute name" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="formLevel">
                                <Form.Label>Level</Form.Label>
                                <Form.Select>
                                    <option value="">Select level</option>
                                    <option value="UG">Undergraduate</option>
                                    <option value="PG">Postgraduate</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} md="6" controlId="formCourse">
                                <Form.Label>Course Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your course name" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="formYear">
                                <Form.Label>Year</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>

                            <Form.Group as={Col} md="6" controlId="formCompany">
                                <Form.Label>Target Job Company</Form.Label>
                                <Form.Control type="text" placeholder="Enter your dream company" />
                            </Form.Group>
                        </Row>

                        <Form.Group controlId="formIndustry">
                            <Form.Label>Target Job Industry</Form.Label>
                            <Form.Control type="text" placeholder="Enter preferred job industry" />
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer className="custom-modal-footer">
                    <Button variant="outline-secondary" onClick={handleClose} className="cancelop-btn">
                        Cancel
                    </Button>
                    <Button className="submit-btn">
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default OfferingsPlacement;
