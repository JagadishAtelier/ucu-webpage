import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  PersonFill,
  Globe,
  PeopleFill,
  ClockFill,
  GraphUp
} from "react-bootstrap-icons";

const CRPFWFlow = () => {
const steps = [
  {
    id: "01",
    title: "Student-Centric Learning",
    text:
      "UCU University follows a student-first academic model with personalized mentoring, outcome-driven curriculum design, and continuous academic support.",
    icon: <PersonFill />
  },
  {
    id: "02",
    title: "Global Academic Exposure",
    text:
      "The university offers globally aligned programs, international collaborations, and curriculum standards benchmarked against leading universities worldwide.",
    icon: <Globe />
  },
  {
    id: "03",
    title: "Industry & Faculty Expertise",
    text:
      "Programs are delivered by experienced academicians and industry professionals, ensuring practical knowledge alongside strong theoretical foundations.",
    icon: <PeopleFill />
  },
  {
    id: "04",
    title: "Flexible Learning Structure",
    text:
      "UCU provides flexible learning pathways with structured timelines, blended learning models, and continuous evaluation for consistent academic progress.",
    icon: <ClockFill />
  },
  {
    id: "05",
    title: "Career & Growth Focus",
    text:
      "With a strong focus on employability, UCU integrates skill development, internships, and career guidance to support long-term professional growth.",
    icon: <GraphUp />
  }
];


  return (
    <section className="CRPFWFlowSection pb-5">
      <Container>
        <h3 className="CRPFeatures-title mb-4">
          Process Flow
        </h3>

        <Row className="g-4">
          {steps.map((step) => (
            <Col lg={6} md={6} sm={12} key={step.id}>
              <div className="CRPFWFlowCardCompact">
                {/* <div className="CRPFWFlowBadge">
                  {step.id}
                </div> */}

                <div className="CRPFWFlowIconCompact">
                  {step.icon}
                </div>

                <div className="CRPFWFlowContent">
                  <h5>{step.title}</h5>
                  <p>{step.text}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CRPFWFlow;
