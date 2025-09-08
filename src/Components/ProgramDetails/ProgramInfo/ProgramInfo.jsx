import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ProgramInfo.css";

function ProgramInfo({ title, description }) {
  return (
    <div className="program-info-section">
      <div className="Container-fluid px-5">
        <Row className="align-items-center">
          {/* Left Column - Title */}
          <Col md={6}>
            <h2 className="program-title">{title}</h2>
          </Col>

          {/* Right Column - Description */}
          <Col md={6}>
            <p className="program-description">{description}</p>
          </Col>
        </Row>
        <hr className="divider" />
      </div >
    </div>
  );
}

export default ProgramInfo;
