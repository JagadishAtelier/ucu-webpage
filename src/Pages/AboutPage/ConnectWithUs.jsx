import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./ConnectWithUs.css";


const ConnectWithUs = () => {
  return (
    <section
      className="connect-section text-center"
      style={{ backgroundImage: `url("./contactusbg.png")` }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <h2 className="connect-title">Connect With Us</h2>
            <p className="connect-description">
              Whether you're a student, corporate partner, or industry leader—UCU welcomes meaningful conversations. 
              Reach out to explore programs, partnerships, or opportunities to shape the future of business education.
            </p>
            <h5 className="connect-subtitle">Let’s build the future together</h5>
            <Button className="connect-btn" size="lg">
              Get in Touch
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ConnectWithUs;
