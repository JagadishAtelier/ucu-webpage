import React, { useState } from 'react';
import { Form, Row, Col, Button, Modal } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function OfferingsPlacement({ getKeyValue }) {
    const navigate = useNavigate();
    const [showForm, setShowForm] = useState(false);

    const handleExploreClick = () => setShowForm(true);
    const handleClose = () => setShowForm(false);

    const kv = (key, fallback) => (getKeyValue ? getKeyValue("OfferingsPlacement", key, fallback) : fallback);

    const mainTitle = kv("mainTitle", "Placement Academy for Career Enhancement (PACE)");
    const subTitle = kv("subTitle", "Career Transformation Module (CTM)");
    const description = kv("description", "Accelerate your placement readiness from Day One through our curated, company-aligned and industry-specific career modules.");
    const bullet1 = kv("bullet1", "Join the UCU Placement Academy for Career Enhancement (PACE) to unlock structured pathways to job readiness and career success");
    const bullet2 = kv("bullet2", "Begin with our diagnostic module to assess your current capabilities (“As-Is”) against industry expectations (“To-Be”) for your aspired role");
    const bullet3 = kv("bullet3", "Access curated, outcome-driven courses designed to bridge skill gaps and build industry-aligned competencies");
    const bullet4 = kv("bullet4", "Validate your readiness through mock GDPI simulations conducted by seasoned industry professionals and subject matter experts");

    const launchpadTitle = kv("launchpadTitle", "Career Launchpad Program (CLP)");
    const launchpadDesc = kv("launchpadDesc", "Get access to top job opportunities and internships via our curated listings for freshers");
    const exploreBtnText = kv("exploreBtnText", "Explore");
    const contactBtnText = kv("contactBtnText", "Contact us");

    return (
        <div className='captital-campus-content-sec mt-5'>
            <h1>{mainTitle}</h1>
            <h5 className='my-3'>{subTitle}</h5>

            <div className='d-flex flex-lg-row flex-column align-items-center gap-3'>
                <img
                    src='https://www.simplilearn.com/ice9/free_resources_article_thumb/Career_Transformation.jpeg'
                    className='op-image'
                    alt="placement prep"
                />
                <div className='op-blue-box'>
                    <p>{description}</p>
                    <ul>
                        <li>{bullet1}</li>
                        <li>{bullet2}</li>
                        <li>{bullet3}</li>
                        <li>{bullet4}</li>
                    </ul>
                </div>
            </div>

            <div className='mt-5'>
                <div className='d-flex flex-lg-row flex-column-reverse align-items-start gap-3'>
                    <div className='op-blue-box'>
                        <h5 className='mt-3'>{launchpadTitle}</h5>
                        <p>{launchpadDesc}</p>
                        <div className='d-flex gap-3'>
                            <Button
                                className='col-4'
                                onClick={handleExploreClick}
                                style={{ backgroundColor: "#5ac501", border: "none" }}
                            >
                                {exploreBtnText}
                            </Button>
                            <Button
                                className='col-4'
                                onClick={()=>navigate('/contact-us')}
                                style={{ backgroundColor: "#5ac501", border: "none" }}
                            >
                                {contactBtnText}
                            </Button>
                        </div>
                    </div>
                    <img
                        src='https://www.anderson.ucla.edu/sites/default/files/styles/max_1300x1300/public/image/2022-01/MBA-campaign-consortium-banner2.jpg?itok=7syfM7Cj'
                        className='op-image'
                        alt="Launchpad banner"
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
