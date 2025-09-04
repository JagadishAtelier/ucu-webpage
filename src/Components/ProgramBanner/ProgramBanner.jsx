import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ProgramBanner.css";

const ProgramBanner = () => {
  return (
    <div className="leadership-banner">
      <Container fluid>
        <Row className="align-items-center">
          {/* Text Section */}
          <Col md={6} className="text-section">
            <h1>
              Transformative, <br />
              <span className="highlight">Leadership-Focused</span> <br />
              Master’s Degree Courses in Asia
            </h1>
            <p>
              Whether you are studying, just entering the workforce, managing
              full-time, or simply enjoy the pursuit of learning, the Asian
              Institute of Management (AIM) offers a wide range of professional
              postgraduate programs and courses explicitly crafted to transform
              you into a leader.
            </p>
          </Col>

          {/* Image Section */}
          <Col md={6} className="image-section">
            <img
              src="program_bg.png"
              alt="Leadership Student"
              className="banner-img"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProgramBanner;
