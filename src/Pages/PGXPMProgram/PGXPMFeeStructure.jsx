import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../Pages/PGPMFlexPage/PGPMFlexPage.css"; // Reuse PGPM Flex CSS

const PGXPMFeeStructure = () => {
    return (
        <section className="QWERT-fees-wrapper">
            <Container>
                <Row className="align-items-start g-5">

                    {/* LEFT – STICKY */}
                    <Col lg={5} className="QWERT-sticky-wrap-col">
                        <div className="QWERT-sticky-wrap">
                            <div className="QWERT-fees-intro">
                                <h1>
                                    Program <span>Fees</span>
                                </h1>

                                <p className="QWERT-fees-tagline">
                                    Flexible payment options designed for executive professionals
                                </p>

                                <div className="QWERT-main-price">
                                    <small className="text-white">Total Fee</small>
                                    <h2>₹ 10,00,000</h2>
                                    <span>* excluding taxes</span>
                                </div>
                            </div>
                        </div>
                    </Col>

                    {/* RIGHT – SCROLL CONTENT */}
                    <Col lg={7} className="QWERT-fees-panels-col">
                        <div className="QWERT-fees-panels">

                            {/* PLAN 1 */}
                            <div className="QWERT-fees-panel QWERT-one-time">
                                <div className="QWERT-panel-header">
                                    <span>Standard Plan</span>
                                    <h3>Program Fee Structure</h3>
                                </div>

                                <div className="QWERT-panel-price">
                                    ₹ 9,00,000
                                    <span style={{ fontSize: '0.5em', marginLeft: '5px' }}>+ Tax</span>
                                </div>
                                <p className="QWERT-panel-note">
                                    Base Program Fee
                                </p>
                            </div>

                            {/* PLAN 2 */}
                            <div className="QWERT-fees-panel QWERT-installment">
                                <div className="QWERT-panel-header">
                                    <span>Installment Plan</span>
                                    <h3>Pay in 2 Installments</h3>
                                </div>

                                <ul className="QWERT-installment-breakup">
                                    <li><span>Installment 1</span><strong>₹ 5,00,000 + Tax</strong></li>
                                    <li><span>Installment 2</span><strong>₹ 5,00,000 + Tax</strong></li>
                                </ul>

                                <div className="QWERT-installment-footer">
                                    <strong>Total: ₹ 10,00,000 + Tax</strong>
                                    <span>Distributed over the program duration</span>
                                </div>
                                <p className="mt-3">* Accommodation during campus immersion modules will be charged separately.</p>
                            </div>

                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default PGXPMFeeStructure;
