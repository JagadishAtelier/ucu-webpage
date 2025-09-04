import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./WhyUCU.css";

const WhyUCU = () => {
  return (
    <div className="why-UCU-section py-5">
      <div className="container-fluid px-5">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Why Pursue Your Master’s Degree at UCU</h2>
          <p className="lead sub-head text-muted">
            Embark on a transformative journey with the master’s degree courses of UCU in the India, 
            where quality education meets unparalleled professional growth opportunities.
          </p>
        </div>

        {/* 3 Columns */}
        <Row>
          <Col md={4} className="mb-4 why-card">
            <h5 className="fw-semibold mb-3">Globally Recognized Excellence</h5>
            <p>
              As the first school in Southeast Asia accredited by the AACSB, you can guarantee that 
              the postgraduate programs at UCU meet rigorous international standards and are recognized worldwide.
            </p>
          </Col>
          <Col md={4} className="mb-4 why-card">
            <h5 className="fw-semibold mb-3">Diverse and International Network</h5>
            <p>
              Connect with a global community and adopt a multicultural perspective, enhancing your ability 
              to navigate and lead in complex, diverse business environments.
            </p>
          </Col>
          <Col md={4} className="mb-4 why-card">
            <h5 className="fw-semibold mb-3">Practical and Experiential Learning</h5>
            <p>
              The UCU postgraduate course curriculum emphasizes real-world application, blending academic rigor 
              with practical insight to bridge theory and practice—ensuring graduates can confidently apply 
              knowledge in dynamic business scenarios.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default WhyUCU;
