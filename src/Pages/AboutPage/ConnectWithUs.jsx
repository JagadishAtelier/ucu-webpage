import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./ConnectWithUs.css";


const ConnectWithUs = () => {
  return (
    <section
      className="connect-section text-center"
      style={{ backgroundImage: `url("https://img.freepik.com/free-photo/hercules-hall-surrounded-by-greenery-sunlight-daytime-munich-germany_181624-17876.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80")` }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <h2 className="connect-title fs-1 fw-bold">Connect With Us</h2>
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
