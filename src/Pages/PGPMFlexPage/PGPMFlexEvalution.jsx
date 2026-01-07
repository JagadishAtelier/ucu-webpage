import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const PGPMFlexEvalution = () => {
const steps = [
  { 
    id: "01", 
    title: "Application Review & Preliminary Shortlisting", 
    color: "#00a0dc" 
  },
  { 
    id: "02", 
    title: "Academic Credentials & Professional Experience Evaluation", 
    color: "#76bc43" 
  },
  { 
    id: "03", 
    title: "Written Assessment & Personal Interview (If Applicable)", 
    color: "#00a0dc" 
  },
  { 
    id: "04", 
    title: "Final Evaluation: Purpose, Performance & Overall Profile Assessment", 
    color: "#76bc43" 
  },
];


  return (
    <section className="PGPMFLEX-admission-evavul-zig-section">
      <Container>
                <h3 className="cs-subtitle mb-5">Evalution Process</h3>

        <div className="PGPMFLEX-admission-evavul-zig-container">
          {/* The Background Connector Line */}
          <div className="PGPMFLEX-admission-evavul-connector-line"></div>

          <Row className="g-0 justify-content-center">
            {steps.map((step, index) => (
              <Col lg={3} md={6} key={index} className="d-flex justify-content-center">
                <div className={`PGPMFLEX-admission-evavul-zig-card ${index % 2 === 0 ? 'move-up' : 'move-down'}`}>
                  <div className="card-top-accent" style={{ backgroundColor: step.color }}></div>
                  <div className="card-inner">
                    <div className="step-badge" style={{ background: step.color }}>{step.id}</div>
                    <p className="mt-3">{step.title}</p>
                    {/* <p className="text-muted small">{step.text}</p> */}
                  </div>
                  {/* Visual Node on the line */}
                  <div className="line-node" style={{ borderColor: step.color }}></div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default PGPMFlexEvalution;