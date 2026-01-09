import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";

const PGPMFLEXFeesTab = () => {
  return (
    <section className=" container pt-0">
      <Container>
        <h1 className="display-5 my-4 fw-bold col-12 col-lg-12 text-center">
          Program  <span style={{ color: "#5ac501" }}> Fees</span>
        </h1>

        <Row className="g-4 justify-content-center">
          {/* PLAN 1 */}
          <Col lg={5} md={6}>
            <Card className="PGPMFLEX-fees-tab-card">
              <Card.Body>
                <Badge className="PGPMFLEX-fees-tab-badge PGPMFLEX-fees-tab-plan-one">
                  Plan 1
                </Badge>

                <h4 className="PGPMFLEX-fees-tab-title">
                  The total for UCU is
                </h4>

                <div className="PGPMFLEX-fees-tab-price-box">
                  <span className="PGPMFLEX-fees-tab-currency">₹</span>
                  <span className="PGPMFLEX-fees-tab-price">5,00,000</span>
                </div>

                {/* <p className="PGPMFLEX-fees-tab-desc">
                  Complete program fee for UCU including tuition, study
                  material, academic resources, and alumni services.
                </p> */}
              </Card.Body>
            </Card>
          </Col>

          {/* PLAN 2 */}
          <Col lg={5} md={6}>
            <Card className="PGPMFLEX-fees-tab-card PGPMFLEX-fees-tab-highlighted">
              <Card.Body>
                <Badge className="PGPMFLEX-fees-tab-badge PGPMFLEX-fees-tab-plan-two">
                  Plan 2
                </Badge>

                <h4 className="PGPMFLEX-fees-tab-title">
                  Installment Plan
                </h4>

                <ul className="PGPMFLEX-fees-tab-installment-list">
                  <li>
                    <span>Installment 1</span>
                    <strong>₹ 1,50,000</strong>
                  </li>
                  <li>
                    <span>Installment 2</span>
                    <strong>₹ 1,50,000</strong>
                  </li>
                  <li>
                    <span>Installment 3</span>
                    <strong>₹ 1,50,000</strong>
                  </li>
                  <li>
                    <span>Installment 4</span>
                    <strong>₹ 1,50,000</strong>
                  </li>
                  <li>
                    <span>Total</span>
                    <strong>₹ 6,00,000</strong>
                  </li>
                </ul>

                <div className="PGPMFLEX-fees-tab-distribution">
                  distributed over <strong>18 months</strong>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="PGPMFLEX-fees-tab-footer text-center">
          <p>* All fees mentioned above are excluding taxes.</p>
        </div>
      </Container>
    </section>
  );
};

export default PGPMFLEXFeesTab;
