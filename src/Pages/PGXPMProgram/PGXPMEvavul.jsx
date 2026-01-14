import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ClipboardList, GraduationCap, FileText, UserCheck } from 'lucide-react';
import "../../Pages/PGPMFlexPage/PGPMFlexPage.css"; // Reuse PGPM Flex CSS

const PGXPMEvavul = () => {
  const steps = [
    {
      id: "01",
      title: "Application Review",
      desc: "Preliminary shortlisting based on your application details.",
      color: "#0a089b",
      icon: <ClipboardList size={28} />
    },
    {
      id: "02",
      title: "Credentials Evaluation",
      desc: "Assessment of academic records and professional experience.",
      color: "#5ac501",
      icon: <GraduationCap size={28} />
    },
    {
      id: "03",
      title: "Assessment & Interview",
      desc: "Written test and personal interview if applicable.",
      color: "#0a089b",
      icon: <FileText size={28} />
    },
    {
      id: "04",
      title: "Final Selection",
      desc: "Overall profile assessment and final offer rollout.",
      color: "#5ac501",
      icon: <UserCheck size={28} />
    },
  ];

  return (
    <section className="PGPMFLEX-admission-evavul-zig-section">
      <Container>
        <div className="mb-5">
          <h3 className="cs-subtitle d-inline-block" style={{ color: "#0a089b", }}>
            Evaluation Process
          </h3>
        </div>

        <div className="PGPMFLEX-admission-evavul-zig-container">
          {/* Background Line */}
          <div className="PGPMFLEX-connector-wave"></div>

          <Row className="g-0 justify-content-center position-relative" style={{ zIndex: 2 }}>
            {steps.map((step, index) => (
              <Col lg={3} md={6} key={index} className="d-flex justify-content-center px-2">
                <div className={`PGPMFLEX-eval-card-wrapper ${index % 2 === 0 ? 'card-up' : 'card-down'}`}>

                  {/* The Card */}
                  <div className="PGPMFLEX-eval-card" style={{
                    background: index % 2 === 0
                      ? 'linear-gradient(145deg, #0a089b, #050468)'
                      : 'linear-gradient(145deg, #5ac501, #429601)',
                    boxShadow: index % 2 === 0
                      ? '0 10px 25px rgba(10, 8, 155, 0.3)'
                      : '0 10px 25px rgba(90, 197, 1, 0.3)'
                  }}>
                    <div className="PGPMFLEX-eval-icon-circle">
                      {step.icon}
                    </div>
                    <h5 className="text-white fw-bold mb-2">{step.title}</h5>
                    <p className="text-white-50 small mb-0">{step.desc}</p>
                    <div className="PGPMFLEX-eval-number">{step.id}</div>
                  </div>

                  {/* Connector Node */}
                  <div className="PGPMFLEX-eval-node"></div>

                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default PGXPMEvavul;