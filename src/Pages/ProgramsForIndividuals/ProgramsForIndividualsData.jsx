import { Facebook, MailCheck } from 'lucide-react'
import React, { useState } from 'react'
import { BsFacebook, BsLinkedin, BsShare, BsTwitter } from 'react-icons/bs'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Plus } from "lucide-react";
import "swiper/css";
import { Button, Form } from 'react-bootstrap';
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import MultiSelectDropdown from './MultiSelectDropdown';
const rightData = [
    {
        image: "https://www.spjimr.org/wp-content/uploads/2025/11/learning-to-stand-out-insights-from-the-linkedin-masterclass-at-spimr.webp",
        para: "Learning to stand out: Insights from the LinkedIn masterclass at UCU"
    },
    {
        image: "https://www.spjimr.org/wp-content/uploads/2025/10/unlocking-creativity-a-storytelling-masterclass-with-author-sanjena-sathian.webp",
        para: "Learning to stand out: Insights from the LinkedIn masterclass at UCU"
    },
    {
        image: "https://www.spjimr.org/wp-content/uploads/2025/10/unlocking-creativity-a-storytelling-masterclass-with-author-sanjena-sathian.webp",
        para: "Learning to stand out: Insights from the LinkedIn masterclass at UCU"
    },
]
const data = [
    {
        image: "https://images.isb.edu/is/image/isbprod/individuals-ALP-thumb?fmt=webp&qlt=100,0&resMode=sharp2&op_usm=1.75,0.3,2,0&version=1763965652086&version=1763965652080",
        head: "Advanced Leadership Programmes",
        para: "Specialised programmes designed to elevate the domain mastery of CXOs and accelerate their leadership pathways."
    },
    {
        image: "http://s7ap1.scene7.com/is/image/isbprod/Individual%20Page_CLP%20card?fmt=webp&qlt=100,0&resMode=sharp2&op_usm=1.75,0.3,2,0&version=1763965652104&version=1763965652098",
        head: "Advanced Leadership Programmes",
        para: "Specialised programmes designed to elevate the domain mastery of CXOs and accelerate their leadership pathways."
    },
    {
        image: "http://s7ap1.scene7.com/is/image/isbprod/Individual%20page_TFP%20card.png?fmt=webp&qlt=100,0&resMode=sharp2&op_usm=1.75,0.3,2,0&version=1763965652093&version=1763965652087",
        head: "Advanced Leadership Programmes",
        para: "Specialised programmes designed to elevate the domain mastery of CXOs and accelerate their leadership pathways."
    },
]


function ProgramsForIndividualsData() {
    const navigate = useNavigate()
    return (
        <div className='captital-campus-content-sec my-4'>
            <div className='d-flex flex-lg-row flex-column gap-5'>
                <div className='col-lg-8'>
                    <h3 className='mb-3'>Choose from a diverse range of programmes that strengthen your management and leadership acumen and map your career to future success.</h3>
                    <p>Whatever your distinctive learning goal, be it improving your Leadership and Management skills or preparing for a new role or learning about industry innovations, ISB Executive Education has a learning solution for you.</p>
                    <p>Explore our swathe of offerings from long-duration advanced and comprehensive leadership development programmes to shorter-term, topic-focused learning experiences. Our world-class learning journeys offer research-backed curricula and diverse industry perspectives delivered through a wide range of pedagogies, opportunities for collaborative learning with a diverse and vibrant group of peers, and practical solutions for your pressing business challenges.</p>
                    <p>Experience accelerated personal and professional growth to create a significant impact in your world.</p>
                    <div className='PFI-grid'>
                        {data.map((item, index) => (
                            <div className='d-flex flex-column gap-3 justify-content-between p-0 rounded
                                ' style={{ border: "1px solid #cdcdcd" }}>
                                <img src={item.image} className='rounded PFI-page-grid-image' />
                                <div className='p-3'>
                                    <h4>{item.head}</h4>
                                    <p>{item.para}</p>
                                    <Button className='mt-auto'>Knoe more</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                {/* <div className='vertical-line-blog-page'></div> */}
                <div>
                    <div
                    >
                        <div className="" data-aos="fade-right">
                            <h3 className="fw-bold fs-2 fs-lg-1">How can we help you?</h3>

                            {/* Course Dropdown */}
                            <div className="course-select-container mb-3 position-relative">
                                <Form.Control
                                    type="text"
                                    placeholder="Organisation"
                                    className="course-input"
                                />
                            </div>
                            <div className="course-select-container mb-3 position-relative">
                                <Form.Control
                                    type="text"
                                    placeholder="First Name"
                                    className="course-input"
                                />
                            </div>
                            <div className="course-select-container mb-3 position-relative">
                                <Form.Control
                                    type="text"
                                    placeholder="Last Name"
                                    className="course-input"
                                />
                            </div>
                            <div className="course-select-container mb-3 position-relative">
                                <Form.Control
                                    type="text"
                                    placeholder="Office Email"
                                    className="course-input"
                                />
                            </div>
                            <div className="course-select-container mb-3 position-relative">
                                <Form.Control
                                    type="text"
                                    placeholder="Mobile Number"
                                    className="course-input"
                                />
                            </div>
                            <div className="course-select-container mb-3 position-relative">
                                <Form.Control
                                    type="text"
                                    placeholder="Department"
                                    className="course-input"
                                />
                            </div>
                            <div className="course-select-container mb-3 position-relative">
                                <Form.Select>
                                    <option value="">Select Industry</option>
                                    <option>Information Technology</option>
                                    <option>Healthcare</option>
                                    <option>Finance & Banking</option>
                                    <option>Manufacturing</option>
                                    <option>Retail & E-Commerce</option>
                                    <option>Education</option>
                                    <option>Telecommunication</option>
                                    <option>Automotive</option>
                                    <option>Hospitality</option>
                                    <option>Logistics & Supply Chain</option>
                                </Form.Select>
                            </div>
                            <div className="course-select-container mb-3 position-relative">
                                <Form.Control
                                    type="text"
                                    placeholder="Designation"
                                    className="course-input"
                                />
                            </div>
                            <div className="course-select-container mb-3 position-relative">
                                <Form.Select>
                                    <option value="">I am interested in</option>
                                    <option>Leadership Development</option>
                                    <option>Corporate Training Programs</option>
                                    <option>Executive Education</option>
                                    <option>Custom Learning Solutions</option>
                                    <option>Workshops & Short Courses</option>
                                    <option>Consulting Services</option>
                                    <option>Online Learning Programs</option>
                                    <option>Employee Skill Development</option>
                                </Form.Select>
                            </div>
                            <div className="course-select-container mb-3 position-relative">
                                <Form.Select>
                                    <option value="">Select Location</option>
                                    <option>Chennai</option>
                                    <option>Bangalore</option>
                                    <option>Hyderabad</option>
                                    <option>Mumbai</option>
                                    <option>Pune</option>
                                    <option>Delhi</option>
                                    <option>Kolkata</option>
                                    <option>Coimbatore</option>
                                    <option>Ahmedabad</option>
                                    <option>International</option>
                                </Form.Select>
                            </div>
                            <div className="course-select-container mb-3 position-relative">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Please describe program objectives"
                                    className="course-input"
                                    rows={3}   // optional height
                                />
                            </div>
                            <Button style={{ backgroundColor: "#5ac501", border: "none" }} className='col-12'>Submit</Button>
                        </div>
                    </div>
                    <p className='fs-4 fw-bold mt-4'>Write to Us</p>
                    <p>Our advisors can help you navigate through the programme portfolio and help you identify the right learning intervention - for you or your teams.</p>
                    <p className='mb-0'>Write to us at:</p>
                    <p style={{ color: "#0d89de" }} className='text-decoration-underline'>execed@ucu.edu</p>
                </div>
            </div>
            <div className='mt-5 mb-3'>
                <h1>Register Your Interest</h1>
            </div>
            <Container>

                <div className="contact-form-card mx-auto p-4 p-md-5">
                    <Form>
                        <Row className="mb-4">
                            <Col lg={12}>
                                <Form.Group className="d-flex flex-lg-row flex-column">
                                    <Form.Label className="PFID-form-label">Salutation*</Form.Label>

                                    <Form.Select required className="PFID-form-input">
                                        <option value="">--None--</option>
                                        <option value="Mr">Mr</option>
                                        <option value="Ms">Ms</option>
                                        <option value="Mrs">Mrs</option>
                                        <option value="Dr">Dr</option>
                                        <option value="Prof">Prof</option>
                                    </Form.Select>

                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className=" mb-4">
                            <Col lg={12}>
                                <Form.Group className="d-flex flex-lg-row flex-column">
                                    <Form.Label className="PFID-form-label">First Name*</Form.Label>
                                    <Form.Control type="text" required />

                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className=" mb-4">
                            <Col lg={12}>
                                <Form.Group className="d-flex flex-lg-row flex-column">
                                    <Form.Label className="PFID-form-label">Last  Name*</Form.Label>
                                    <Form.Control type="text" required />

                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-4">

                            <Col lg={12}>
                                <Form.Group className="d-flex flex-lg-row flex-column">
                                    <Form.Label className="PFID-form-label">Email*</Form.Label>
                                    <Form.Control type="email" required />

                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-4">
                            <Col lg={12}>
                                <Form.Group className="d-flex flex-lg-row flex-column">
                                    <Form.Label className="PFID-form-label">Phone*</Form.Label>
                                    <Form.Control type="text" required />

                                </Form.Group>
                            </Col>

                        </Row>
                        <Row className="mb-4">
                            <Col lg={12}>
                                <Form.Group className="d-flex flex-lg-row flex-column">
                                    <Form.Label className="PFID-form-label">Company*</Form.Label>
                                    <Form.Control type="text" required />

                                </Form.Group>
                            </Col>

                        </Row>
                        <Row className="mb-4">
                            <Col lg={12}>
                                <Form.Group className="d-flex flex-lg-row flex-column">
                                    <Form.Label className="PFID-form-label">City*</Form.Label>
                                    <Form.Control type="text" required />

                                </Form.Group>
                            </Col>

                        </Row>

                        <Row className="mb-4">
                            <Col lg={12}>
                                <MultiSelectDropdown label="Programs Interested In" />
                            </Col>
                        </Row>


                        <div className="mb-4">
                            <Form.Group className="d-flex flex-lg-row flex-column">
                                <Form.Label className="PFID-form-label">Description*</Form.Label>
                                <Form.Control as="textarea" rows={4} placeholder="Write your Description..." />
                            </Form.Group>
                        </div>

                        <div className="text-center">
                            <button className="submit-btn-uni px-5 py-2">Submit</button>
                        </div>

                        <p className='mt-5 text-center'>Partner with UCU to design leadership journeys that transform your organization. Should you wish to speak to our Customer Success Specialist, please follow the link below</p>
                        <div onClick={() => navigate("/contact-us")} className='d-flex gap-3 align-items-center mt-3 col-lg-2 text-white justify-content-center py-2 rounded mx-auto' style={{ backgroundColor: "#5ac501", cursor: "pointer" }}>
                            <MailCheck />
                            <p className='mb-0'>Reach out to Us</p>
                        </div>
                    </Form>
                </div>
            </Container>
        </div>
    )
}

export default ProgramsForIndividualsData