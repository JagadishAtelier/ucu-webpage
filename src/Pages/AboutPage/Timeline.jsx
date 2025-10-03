import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./timeline.css";

const TimelineRow = ({ title, description, image, reverse }) => {
  return (
    <Row className={`timeline-row ${reverse ? "reverse" : ""} active`}>
      <Col md={6} className="image">
        {image && (
          <div className="image-auto">
            <img src={image} alt={title} />
          </div>
        )}
      </Col>
      <Col md={6} className="content">
        <h3>{title}</h3>
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </Col>
    </Row>
  );
};

const Timeline = () => {
  const data = [
    {
      title: "1919 Innovating from the start",
      description:
        "UNC President Edward Kidder Graham recognizes North Carolina’s need to develop business leaders to build its business and industrial sectors.",
      image:
        "/wp-content/uploads/nmc-images/2019/03/dudley_carroll-width465height290quality80.jpg",
      reverse: true,
    },
    {
      title: "1921 Graduating our first class",
      description:
        "UNC awarded the ﬁrst degrees of Bachelor of Science in Commerce to 12 students.",
      image: "",
      reverse: false,
    },
    // ... Add more items
  ];

  return (
    <section className="timeline">
      <Container>
        {data.map((item, idx) => (
          <TimelineRow key={idx} {...item} />
        ))}
      </Container>
    </section>
  );
};

export default Timeline;
