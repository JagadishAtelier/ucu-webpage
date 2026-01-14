import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { DoorOpen, Search, Briefcase, Award } from 'lucide-react';
import "../../Pages/PGPMFlexPage/PGPMFlexPage.css"; // Reuse vibrant styles

const SalesDiplamoRoadMap = () => {
  const steps = [
    {
      id: "01",
      month: "Month 0",
      title: "The Gateway",
      desc: "Admission & Onboarding",
      tasks: ["Admission: Apply for the Diploma Program.", "Interview and Results"],
      color: "#0a089b",
      icon: <DoorOpen size={28} />
    },
    {
      id: "02",
      month: "Month 1-3",
      title: "The Deep Dive",
      desc: "Classroom & Field Exposure",
      tasks: ["Classroom Programs", "Field Visits", "Interim Assessments"],
      color: "#5ac501",
      icon: <Search size={28} />
    },
    {
      id: "03",
      month: "Month 4-5",
      title: "The Bridge",
      desc: "Career & Placements",
      tasks: ["Career Grooming", "Campus Placements", "Mentorship Sessions"],
      color: "#0a089b",
      icon: <Briefcase size={28} />
    },
    {
      id: "04",
      month: "Month 6",
      title: "The Milestone",
      desc: "Certification & Beyond",
      tasks: ["Final Assessments", "Convocation"],
      color: "#5ac501",
      icon: <Award size={28} />
    },
  ];

  return (
    <section className="PGPMFLEX-admission-evavul-zig-section pt-5 pb-5">
      <Container>
        <div className="text-center mb-5">
          <h3 className="section-heading display-6 fw-bold">
            Program <span style={{ color: "#5ac501ff" }}>Roadmap</span>
          </h3>
          <p className="text-secondary mt-2">Your journey from admission to certification</p>
        </div>

        <div className="PGPMFLEX-admission-evavul-zig-container">
          {/* Background Line */}
          <div className="PGPMFLEX-connector-wave"></div>

          <Row className="g-0 justify-content-center position-relative" style={{ zIndex: 2 }}>
            {steps.map((step, index) => (
              <Col lg={3} md={6} key={index} className="d-flex justify-content-center px-2">
                <div className={`PGPMFLEX-eval-card-wrapper w-100 ${index % 2 === 0 ? 'card-up' : 'card-down'}`}>

                  {/* The Card */}
                  <div className="PGPMFLEX-eval-card" style={{
                    background: index % 2 === 0
                      ? 'linear-gradient(145deg, #0a089b, #050468)'
                      : 'linear-gradient(145deg, #5ac501, #429601)',
                    boxShadow: index % 2 === 0
                      ? '0 10px 25px rgba(10, 8, 155, 0.3)'
                      : '0 10px 25px rgba(90, 197, 1, 0.3)',
                    minHeight: '320px'
                  }}>
                    <div className="PGPMFLEX-eval-icon-circle">
                      {step.icon}
                    </div>

                    <div className="mt-4 text-white">
                      <span className="badge bg-white bg-opacity-25 mb-2">{step.month}</span>
                      <h5 className="text-white fw-bold mb-1">{step.title}</h5>
                      <p className="text-light small mb-3">{step.desc}</p>

                      <ul className="list-unstyled text-start small text-light border-top border-white border-opacity-50 pt-3">
                        {step.tasks.map((t, i) => (
                          <li key={i} className="d-flex align-items-start mb-1">
                            <span className="me-2 text-white">•</span> {t}
                          </li>
                        ))}
                      </ul>
                    </div>

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

export default SalesDiplamoRoadMap;
