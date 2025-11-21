import React, { useState } from 'react'
import { Col, Container, Form, Row, Button } from "react-bootstrap";
function ExpressInterestForm() {

    const [openForm, setOpenForm] = useState(false)
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
                                    <Form.Check type="checkbox" label="Annual Event" className='mb-2 fw-bold' />
                                    <Form.Check type="checkbox" label="Industry Visit" className='mb-2 fw-bold' />
                                    <Form.Check type="checkbox" label="Corporate Day" className='mb-2 fw-bold' />
                                    <Form.Check onClick={() => setOpenForm(!openForm)} type="checkbox" label="Full Time Hiring & Summer Internship" className='mb-2 fw-bold' />
                                </Form.Group>
                            </Col>

                            <Col lg={6}>
                                <Form.Group>
                                    <Form.Check type="checkbox" label="Career Transformation to Career Acceleration" className='mb-2 fw-bold' />
                                    <Form.Check type="checkbox" label="Corporate Competition" className='mb-2 fw-bold' />
                                    <Form.Check type="checkbox" label="Co-branded Curriculum" className='mb-2 fw-bold' />
                                    <Form.Check type="checkbox" label="Live Project" className='mb-2 fw-bold' />
                                </Form.Group>
                            </Col>
                        </Row>
                        {openForm && (
                            <div className='my-4'>
                                <Button className='col-12'>EXPRESSION OF INTEREST (EOI) </Button>
                                <div className='d-flex align-items-center justify-content-center my-4 gap-5'>
                                    {/* <img src='/logo.svg' className='EOI-logo'/> */}
                                    <h3 className='text-center'>Corporate & Career Services- Chennai </h3>
                                </div>
                                <Form>
                                    <Row>
                                        <Form.Group className='d-flex align-items-end flex-wrap mb-3 gap-lg-4 gap-0'>
                                            <p className='col-fit mb-0'>UCU Recruiter’s Expression of Interest in Class of</p>
                                            <Form.Control className='input-EOI-drop' type="text" required />
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Form.Group className='d-flex align-items-end flex-wrap mb-3 gap-lg-4 gap-0'>
                                            <p className='col-fit mb-0'>We understand that 2024-25 batch of Great Lakers will be ready to join us by</p>
                                            <Form.Control className='input-EOI-drop' type="text" required />
                                            <p className='mb-0 mt-lg-0 mt-4'>and we are interested in recruiting from UCU Chennai campus.</p>
                                        </Form.Group>
                                    </Row>
                                </Form>
                                <div className="contact-form-card mx-auto p-4 p-md-5">
                                    <p className='fw-bold'>Our contact information for campus recruitment: </p>
                                    <Form>
                                        <Row className="mb-4">
                                            <Col lg={6}>
                                                <Form.Group className="floating-box">
                                                    <Form.Label className="form-label-uni">Company Name:*</Form.Label>
                                                    <Form.Control type="text" required />

                                                </Form.Group>
                                            </Col>

                                            <Col lg={6}>
                                                <Form.Group className="floating-box">
                                                    <Form.Label className="form-label-uni">Company Address:*</Form.Label>
                                                    <Form.Control type="text" required />

                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row className="mb-4">
                                            <Col lg={6}>
                                                <Form.Group className="floating-box">
                                                    <Form.Label className="form-label-uni">Contact Person (1)</Form.Label>
                                                    <Form.Control type="text" required />

                                                </Form.Group>
                                            </Col>

                                            <Col lg={6}>
                                                <Form.Group className="floating-box">
                                                    <Form.Label className="form-label-uni">Contact Person (2)</Form.Label>
                                                    <Form.Control type="email" required />

                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row className="mb-4">
                                            <Col lg={6}>
                                                <Form.Group className="floating-box">
                                                    <Form.Label className="form-label-uni">Designation (1)</Form.Label>
                                                    <Form.Control type="text" required />

                                                </Form.Group>
                                            </Col>
                                            <Col lg={6}>
                                                <Form.Group className="floating-box">
                                                    <Form.Label className="form-label-uni">Designation (2)</Form.Label>
                                                    <Form.Control type="text" required />

                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className="mb-4">
                                            <Col lg={6}>
                                                <Form.Group className="floating-box">
                                                    <Form.Label className="form-label-uni">Telephone Number</Form.Label>
                                                    <Form.Control type="text" required />

                                                </Form.Group>
                                            </Col>
                                            <Col lg={6}>
                                                <Form.Group className="floating-box">
                                                    <Form.Label className="form-label-uni">Mobile Number(s)</Form.Label>
                                                    <Form.Control type="text" required />

                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className="mb-4">
                                            <Col lg={12}>
                                                <Form.Group className="floating-box">
                                                    <Form.Label className="form-label-uni"> Email ID(s)</Form.Label>
                                                    <Form.Control type="text" required />

                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>

                                <p className='fs-5 fw-bold mt-4'>Our recruitment process for management graduates/lateral hires/Summer Internship: </p>
                                <div className='d-flex gap-4'>
                                    <p className='mb-0'>Is a centralised process ?</p>
                                    <Form>
                                        <Form.Group className='d-flex gap-4'>
                                            <Form.Check type="checkbox" label="Yes" className='mb-2 fw-bold' />
                                            <Form.Check type="checkbox" label="No" className='mb-2 fw-bold' />
                                        </Form.Group>
                                    </Form>
                                </div>
                                <p>If No, please fill the following contact details: </p>
                                <div className='EOI-table-div'>
                                    <table className="placement-table placement-table-EOI col-12">
                                        <tbody>
                                            <tr>
                                                <td className='col-6'>Region/Location centric</td>
                                                <td contentEditable="true"></td>
                                            </tr>
                                            <tr>
                                                <td>Business/Project centric</td>
                                                <td contentEditable="true"></td>
                                            </tr>
                                            <tr>
                                                <td>Domain/Function centric </td>
                                                <td contentEditable="true"></td>
                                            </tr>
                                            <tr>
                                                <td>Level centric</td>
                                                <td contentEditable="true"></td>
                                            </tr>
                                            <tr>
                                                <td>Other</td>
                                                <td contentEditable="true"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className='fs-5 fw-bold mt-4'>Scope of hiring in UCU Chennai (Please fill in the following):</p>
                                <div className='EOI-table-div'>
                                    <table className="placement-table placement-table-EOI">

                                        <thead>
                                            <tr>
                                                <th>Business Units</th>
                                                <th>Function/Domain </th>
                                                <th>Level/Designation </th>
                                                <th>Roles</th>
                                                <th>C range (Salary/Stipend)</th>
                                                <th>Probable Number</th>
                                                <th>Locations</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td contentEditable="true"></td>
                                                <td contentEditable="true"></td>
                                                <td contentEditable="true"></td>
                                                <td contentEditable="true"></td>
                                                <td contentEditable="true"></td>
                                                <td contentEditable="true"></td>
                                                <td contentEditable="true"></td>
                                            </tr>
                                            <tr>
                                                <td contentEditable="true"></td>
                                                <td contentEditable="true"></td>
                                                <td contentEditable="true"></td>
                                                <td contentEditable="true"></td>
                                                <td contentEditable="true"></td>
                                                <td contentEditable="true"></td>
                                                <td contentEditable="true"></td>
                                            </tr>
                                            <tr>
                                                <td contentEditable="true"></td>
                                                <td contentEditable="true"></td>
                                                <td contentEditable="true"></td>
                                                <td contentEditable="true"></td>
                                                <td contentEditable="true"></td>
                                                <td contentEditable="true"></td>
                                                <td contentEditable="true"></td>
                                            </tr>
                                            <tr>
                                                <td contentEditable="true"></td>
                                                <td contentEditable="true"></td>
                                                <td contentEditable="true"></td>
                                                <td contentEditable="true"></td>
                                                <td contentEditable="true"></td>
                                                <td contentEditable="true"></td>
                                                <td contentEditable="true"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className='fs-5 fw-bold mt-4'>Scope of hiring in UCU Chennai (Please fill in the following):</p>
                                <div className='EOI-table-div'>
                                    <table className="placement-table placement-table-EOI col-12">
                                        <thead>
                                            <tr>
                                                <th>Criteria</th>
                                                <th>Expected requirement</th>
                                                <th>Preferable additions</th>
                                                <th>Exceptions allowed</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className='col-6'>Graduation-degree,
                                                    specialization, score, years. </td>
                                                <td contentEditable="true"></td>
                                                <td contentEditable="true"></td>
                                                <td contentEditable="true"></td>
                                            </tr>
                                            <tr>
                                                <td>Experience-industry,
                                                    domain, skill, level, years.</td>
                                                <td contentEditable="true"></td>
                                                <td contentEditable="true"></td>
                                                <td contentEditable="true"></td>
                                            </tr>
                                            <tr>
                                                <td>Specialisation, score,
                                                    expertise for Final
                                                    Placement </td>
                                                <td contentEditable="true"></td>
                                                <td contentEditable="true"></td>
                                                <td contentEditable="true"></td>
                                            </tr>
                                            <tr>
                                                <td>Pre requisite for Summer
                                                    Internship </td>
                                                <td contentEditable="true"></td>
                                                <td contentEditable="true"></td>
                                                <td contentEditable="true"></td>
                                            </tr>
                                            <tr>
                                                <td>Other requirements (if any)</td>
                                                <td contentEditable="true"></td>
                                                <td contentEditable="true"></td>
                                                <td contentEditable="true"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className='fs-5 fw-bold mt-4'>Suggestions & Recommendations: </p>
                                <Form>
                                    <div className="mb-4">
                                        <Form.Group>
                                            <Form.Control as="textarea" rows={4} placeholder="Write your message..." />
                                        </Form.Group>
                                    </div>
                                </Form>
                            </div>
                        )}

                        {/* reCAPTCHA box placeholder */}
                        {/* <div className="mt-4">
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
                        </div> */}
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