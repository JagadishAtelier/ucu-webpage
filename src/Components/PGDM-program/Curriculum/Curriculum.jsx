import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Accordion,
  Button,
  Tabs,
  Tab,
  Nav,
} from "react-bootstrap";
import "./Curriculum.css";
// import pgdmImage from "../../../Assets/aboutPageImage/vision_image.jpg"; 
import CurriculumTable from "./CurriculumTable";
import SummerInternship from "./SummerInternship";
import Electives from "./Electives";
import OerationTable from "./OerationTable";
import AimlaTable from "./AimlaTable";


const Curriculum = () => {
  // const [key, setKey] = useState("marketing");

  return (
    <section className="pgdm-section">
      <div className="container my-4">
        {/* Header */}
        <div className="text-left mb-5">
          <h2 className="display-6 fw-bold col-12 col-lg-12">
            <span className="program">PGDM</span> Curriculum and Programme
            Structure
          </h2>
          <p className="pgdm-intro">
A new-age curriculum co-created with the Industry, keeping corporate needs and employability at the forefront
          </p>
        </div>

        {/* Programme Structure */}
           <CurriculumTable/>
           <div className="my-4">
              <p className="Summer-Internship-head text-center">Summer Internship</p>
            {/* <SummerInternship/> */}
          </div>
          <SummerInternship/>
        {/* <Accordion className="mb-5">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Year 1</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Core management foundation courses</li>
                <li>Experiential learning: ADMAP, Abhyudaya, DoCC, SOS</li>
                <li>Corporate internship preparation</li>
                
              </ul>
              <CurriculumTable/>
            </Accordion.Body>
          </Accordion.Item>
          
          

          <Accordion.Item eventKey="1">
            <Accordion.Header>Year 2</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Major and minor specializations</li>
                <li>Corporate internships and electives</li>
                <li>Global Fast Track (GFT) immersion module</li>
              </ul>
              <CurriculumTable/>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion> */}

        {/* Majors */}
        <section className="majors mb-5">
          {/* <h3 className="majors-section-title mb-4 text-left">Functional Major</h3>
          <p className="pgdm-description text-left mb-5">
            PGDM is the only programme that offers the participants the
            flexibility to change their major specialisation and also choose a
            minor specialisation. Major specialisations include:
          </p> */}

          {/* Image on top */}
          {/* <div className="text-center Students mb-5">
            <img src={pgdmImage} alt="Students" className="img-fluid" />
          </div> */}

          {/* Tabs layout: 3 + 9 columns */}
          {/* <Row className="align-items-start majors-tab-layout">
            <Col md={3} className="mb-4 mb-md-0">
              <Nav
                variant="pills"
                className="flex-column custom-vertical-tabs"
                activeKey={key}
                onSelect={(k) => setKey(k)}
              >
                <Nav.Item>
                  <Nav.Link eventKey="operations">
                    Operations & Supply Chain
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="info">Information Management</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="marketing">Marketing</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="finance">Finance</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="hr-ob">HR & OB</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="bussiness">Business Analytics & AI</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col md={9}>
              <Tab.Content>
                <Tab.Pane eventKey="operations" active={key === "operations"}>
                  <div className="tab-content-box shadow-sm p-4">
                    <h5 className="text-dark1">
                      Operations and Supply Chain
                    </h5>
                    <p>
                      This specialisation provides integrated knowledge to
                      manage processes across supply chains — including sourcing,
                      procurement, manufacturing, and logistics.
                    </p>
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="info" active={key === "info"}>
                  <div className="tab-content-box shadow-sm p-4">
                    <h5 className="text-dark1">Information Management</h5>
                    <p>
                      Focuses on technology-driven strategies, data analytics,
                      and digital transformation to enable business growth.
                    </p>
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="marketing" active={key === "marketing"}>
                  <div className="tab-content-box shadow-sm p-4">
                    <h5 className="text-dark1">Marketing</h5>
                    <p>
                      PGDM’s Marketing specialisation ranks amongst the top 5 in
                      India and the top 50 in the world by QS Global rankings. It
                      develops in participants a deep understanding of customers
                      and the requisite skills to influence cross-functional
                      decision-making.
                    </p>
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="finance" active={key === "finance"}>
                  <div className="tab-content-box shadow-sm p-4">
                    <h5 className="text-dark1">Finance</h5>
                    <p>
                      This specialisation builds expertise in financial analysis,
                      investments, corporate finance, and risk management.
                    </p>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="finance" active={key === "hr-ob"}>
                  <div className="tab-content-box shadow-sm p-4">
                    <h5 className="text-dark1">HR & OB</h5>
                    <p>
Focus on Talent Management in New Age Industries with AI applications
                    </p>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="finance" active={key === "bussiness"}>
                  <div className="tab-content-box shadow-sm p-4">
                    <h5 className="text-dark1">Business Analytics & AI </h5>
                    <p>
A program with cutting-edge analytics, industry co-creation, and global relevance
                    </p>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row> */}
        </section>

        {/* Minors */}
        <section className="minors">
          <h3 className="majors-section-title mb-4">Minors</h3>
          <Row>
            <Col md={3}>
              <Button className="minor-btn">Fin-Tech</Button>
            </Col>
            <Col md={3}>
              <Button className="minor-btn">GCC</Button>
            </Col>
            <Col md={3}>
              <Button className="minor-btn">Consulting</Button>
            </Col>
            <Col md={3}>
              <Button className="minor-btn">Manufacturing</Button>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <Button className="minor-btn">Semiconductor</Button>
            </Col>
          </Row>
        </section>

        <div>
          <Electives/>
        </div>
        <div className="mt-4">
          <OerationTable/>
        </div>
        <div className="mt-4">
          <AimlaTable/>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
