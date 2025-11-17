import { MailOpen, PhoneCall } from 'lucide-react';
import React from 'react'
import { Accordion } from "react-bootstrap";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
function ContactAccordion() {
    return (
        <div className="captital-campus-content-sec mt-5">
            <Accordion defaultActiveKey="0" className="mt-4">
                {/* DropDown 1 */}
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Placements</Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <h3>Bhishm Chugani </h3>
                            <p className='fs-5'>Director – Career Services</p>
                            <div className='d-flex gap-3'>
                                <PhoneCall style={{ color: "#5ac501" }} size={22} />
                                <p className='mb-0 fw-bold'>9876543210</p>
                            </div>
                            <div className='d-flex gap-3 mt-3'>
                                <MailOpen style={{ color: "#5ac501" }} size={22} />
                                <p className='mb-0 fw-bold'>ucu@gmail.com</p>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <h3>Hema Sisodia  </h3>
                            <p className='fs-5'>Deputy Director – External Relations & Career Services</p>
                            <div className='d-flex gap-3'>
                                <PhoneCall style={{ color: "#5ac501" }} size={22} />
                                <p className='mb-0 fw-bold'>9876543210</p>
                            </div>
                            <div className='d-flex gap-3 mt-3'>
                                <MailOpen style={{ color: "#5ac501" }} size={22} />
                                <p className='mb-0 fw-bold'>ucu@gmail.com</p>
                            </div>
                        </div>

                        {/* <div className="contact-form-card mx-auto p-4 p-md-5">
                            <Form>
                                <Row className="mb-4">
                                    <Col lg={6}>
                                        <Form.Group className="floating-box">
                                            <Form.Label className="form-label-uni">First Name*</Form.Label>
                                            <Form.Control type="text" required />

                                        </Form.Group>
                                    </Col>

                                    <Col lg={6}>
                                        <Form.Group className="floating-box">
                                            <Form.Label className="form-label-uni">Last Name*</Form.Label>
                                            <Form.Control type="text" required />

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
                                            <Form.Label className="form-label-uni">Email*</Form.Label>
                                            <Form.Control type="email" required />

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
                                </Row>

                                <div className="mb-4">
                                    <Form.Group>
                                        <Form.Label className="form-label-uni">Your Message*</Form.Label>
                                        <Form.Control as="textarea" rows={4} placeholder="Write your message..." />
                                    </Form.Group>
                                </div>

                                <div className="text-center">
                                    <button className="submit-btn-uni px-5 py-2">Submit</button>
                                </div>
                            </Form>
                        </div> */}
                    </Accordion.Body>
                </Accordion.Item>


                {/* DropDown 2 */}
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Founder’s Office</Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <h3>Bhishm Chugani </h3>
                            <p className='fs-5'>Director – Career Services</p>
                            <div className='d-flex gap-3'>
                                <PhoneCall style={{ color: "#5ac501" }} size={22} />
                                <p className='mb-0 fw-bold'>9876543210</p>
                            </div>
                            <div className='d-flex gap-3 mt-3'>
                                <MailOpen style={{ color: "#5ac501" }} size={22} />
                                <p className='mb-0 fw-bold'>ucu@gmail.com</p>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <h3>Hema Sisodia  </h3>
                            <p className='fs-5'>Deputy Director – External Relations & Career Services</p>
                            <div className='d-flex gap-3'>
                                <PhoneCall style={{ color: "#5ac501" }} size={22} />
                                <p className='mb-0 fw-bold'>9876543210</p>
                            </div>
                            <div className='d-flex gap-3 mt-3'>
                                <MailOpen style={{ color: "#5ac501" }} size={22} />
                                <p className='mb-0 fw-bold'>ucu@gmail.com</p>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>


                {/* DropDown 3 */}
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Admissions</Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <h3>Bhishm Chugani </h3>
                            <p className='fs-5'>Director – Career Services</p>
                            <div className='d-flex gap-3'>
                                <PhoneCall style={{ color: "#5ac501" }} size={22} />
                                <p className='mb-0 fw-bold'>9876543210</p>
                            </div>
                            <div className='d-flex gap-3 mt-3'>
                                <MailOpen style={{ color: "#5ac501" }} size={22} />
                                <p className='mb-0 fw-bold'>ucu@gmail.com</p>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <h3>Hema Sisodia  </h3>
                            <p className='fs-5'>Deputy Director – External Relations & Career Services</p>
                            <div className='d-flex gap-3'>
                                <PhoneCall style={{ color: "#5ac501" }} size={22} />
                                <p className='mb-0 fw-bold'>9876543210</p>
                            </div>
                            <div className='d-flex gap-3 mt-3'>
                                <MailOpen style={{ color: "#5ac501" }} size={22} />
                                <p className='mb-0 fw-bold'>ucu@gmail.com</p>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>



                {/* DropDown 4 */}
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Campus Placements</Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <h3>Bhishm Chugani </h3>
                            <p className='fs-5'>Director – Career Services</p>
                            <div className='d-flex gap-3'>
                                <PhoneCall style={{ color: "#5ac501" }} size={22} />
                                <p className='mb-0 fw-bold'>9876543210</p>
                            </div>
                            <div className='d-flex gap-3 mt-3'>
                                <MailOpen style={{ color: "#5ac501" }} size={22} />
                                <p className='mb-0 fw-bold'>ucu@gmail.com</p>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <h3>Hema Sisodia  </h3>
                            <p className='fs-5'>Deputy Director – External Relations & Career Services</p>
                            <div className='d-flex gap-3'>
                                <PhoneCall style={{ color: "#5ac501" }} size={22} />
                                <p className='mb-0 fw-bold'>9876543210</p>
                            </div>
                            <div className='d-flex gap-3 mt-3'>
                                <MailOpen style={{ color: "#5ac501" }} size={22} />
                                <p className='mb-0 fw-bold'>ucu@gmail.com</p>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>



                {/* DropDown 5 */}
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Executive Education</Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <h3>Bhishm Chugani </h3>
                            <p className='fs-5'>Director – Career Services</p>
                            <div className='d-flex gap-3'>
                                <PhoneCall style={{ color: "#5ac501" }} size={22} />
                                <p className='mb-0 fw-bold'>9876543210</p>
                            </div>
                            <div className='d-flex gap-3 mt-3'>
                                <MailOpen style={{ color: "#5ac501" }} size={22} />
                                <p className='mb-0 fw-bold'>ucu@gmail.com</p>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <h3>Hema Sisodia  </h3>
                            <p className='fs-5'>Deputy Director – External Relations & Career Services</p>
                            <div className='d-flex gap-3'>
                                <PhoneCall style={{ color: "#5ac501" }} size={22} />
                                <p className='mb-0 fw-bold'>9876543210</p>
                            </div>
                            <div className='d-flex gap-3 mt-3'>
                                <MailOpen style={{ color: "#5ac501" }} size={22} />
                                <p className='mb-0 fw-bold'>ucu@gmail.com</p>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>


                {/* DropDown 6 */}
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Online Programs</Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <h3>Bhishm Chugani </h3>
                            <p className='fs-5'>Director – Career Services</p>
                            <div className='d-flex gap-3'>
                                <PhoneCall style={{ color: "#5ac501" }} size={22} />
                                <p className='mb-0 fw-bold'>9876543210</p>
                            </div>
                            <div className='d-flex gap-3 mt-3'>
                                <MailOpen style={{ color: "#5ac501" }} size={22} />
                                <p className='mb-0 fw-bold'>ucu@gmail.com</p>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <h3>Hema Sisodia  </h3>
                            <p className='fs-5'>Deputy Director – External Relations & Career Services</p>
                            <div className='d-flex gap-3'>
                                <PhoneCall style={{ color: "#5ac501" }} size={22} />
                                <p className='mb-0 fw-bold'>9876543210</p>
                            </div>
                            <div className='d-flex gap-3 mt-3'>
                                <MailOpen style={{ color: "#5ac501" }} size={22} />
                                <p className='mb-0 fw-bold'>ucu@gmail.com</p>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>


                {/* DropDown 7 */}
                <Accordion.Item eventKey="6">
                    <Accordion.Header>Alumni Relations</Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <h3>Bhishm Chugani </h3>
                            <p className='fs-5'>Director – Career Services</p>
                            <div className='d-flex gap-3'>
                                <PhoneCall style={{ color: "#5ac501" }} size={22} />
                                <p className='mb-0 fw-bold'>9876543210</p>
                            </div>
                            <div className='d-flex gap-3 mt-3'>
                                <MailOpen style={{ color: "#5ac501" }} size={22} />
                                <p className='mb-0 fw-bold'>ucu@gmail.com</p>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <h3>Hema Sisodia  </h3>
                            <p className='fs-5'>Deputy Director – External Relations & Career Services</p>
                            <div className='d-flex gap-3'>
                                <PhoneCall style={{ color: "#5ac501" }} size={22} />
                                <p className='mb-0 fw-bold'>9876543210</p>
                            </div>
                            <div className='d-flex gap-3 mt-3'>
                                <MailOpen style={{ color: "#5ac501" }} size={22} />
                                <p className='mb-0 fw-bold'>ucu@gmail.com</p>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default ContactAccordion