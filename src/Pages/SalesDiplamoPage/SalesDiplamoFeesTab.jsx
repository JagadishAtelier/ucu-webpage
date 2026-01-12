import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";

const SalesDiplamoFeesTab = () => {
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
                  Flexible payment options designed for working professionals
                </p>

                <div className="QWERT-main-price">
                  <small className="text-white">Starting from</small>
                  <h2>₹ 75,000 + tax</h2>
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
                  <span>Plan 1</span>
                  <h3>Amount should be</h3>
                </div>

                <div className="QWERT-panel-price">
                  ₹ 75,000 + tax
                </div>

                <p className="QWERT-panel-note">
                  Best value with maximum savings
                </p>
              </div>

              {/* PLAN 2 */}
              <div className="QWERT-fees-panel QWERT-installment">
                <div className="QWERT-panel-header">
                  <span>Plan 2 · Popular</span>
                  <h3>Installment Plan</h3>
                </div>

                <ul className="QWERT-installment-breakup">
                  <li><span>Installment 1</span><strong>₹ 45,000 + tax</strong></li>
                  <li><span>Installment 2</span><strong>₹ 40,000 + tax</strong></li>
                </ul>

                <div className="QWERT-installment-footer">
                  <strong>Total: ₹ 85,000 + tax</strong>
                  {/* <span>Distributed over 18 months</span> */}
                </div>
                <p className="mt-3">* All fees mentioned above are excluding taxes.</p>
              </div>

            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default SalesDiplamoFeesTab;
