import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../Pages/PGPMFlexPage/PGPMFlexPage.css"; // Reuse vibrant styles

const CareerRobatFees = () => {
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
                                    Invest in your restart with our flexible fee structure
                                </p>

                                <div className="QWERT-main-price">
                                    <small className="text-white">Starting from</small>
                                    <h2>₹ 75,000</h2>
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
                                    <span>Standard · Savings Plan</span>
                                    <h3>One-time Payment</h3>
                                </div>

                                <div className="QWERT-panel-price">
                                    ₹ 75,000
                                </div>

                                <p className="QWERT-panel-note">
                                    Pay the full amount upfront and save.
                                </p>
                            </div>

                            {/* PLAN 2 */}
                            <div className="QWERT-fees-panel QWERT-installment">
                                <div className="QWERT-panel-header">
                                    <span>Plan 2 · Flexible</span>
                                    <h3>Installment Plan</h3>
                                </div>

                                <ul className="QWERT-installment-breakup">
                                    <li><span>Installment 1</span><strong>₹ 45,000</strong></li>
                                    <li><span>Installment 2</span><strong>₹ 40,000</strong></li>
                                </ul>

                                <div className="QWERT-installment-footer">
                                    <strong>Total: ₹ 85,000</strong>
                                    <span>Distributed over 2 installments</span>
                                </div>
                                <p className="mt-3 text-muted small">* All fees mentioned above are excluding taxes.</p>
                                <p className="text-muted small">* Accommodation during campus immersion modules will be charged separately.</p>
                            </div>

                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default CareerRobatFees;
