import React from "react";
import { Row, Col, Carousel } from "react-bootstrap";

const TimelineRow = ({ title, description, images = [], reverse }) => {
  return (
    <Row className={`timeline-row ${reverse ? "reverse" : ""} active`}>
      <div className="timeline-point"></div>

      <Col md={6} className="image">
        {images.length > 0 && (
          <Carousel
            indicators={false}
            controls={false}
            interval={3000}
            pause={false}
            className="timeline-carousel"
          >
            {images.map((imgSrc, idx) => (
              <Carousel.Item key={idx}>
                <div className="image-auto">
                  <img src={imgSrc} alt={`${title} ${idx + 1}`} />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </Col>

      <Col md={6} className="content">
        <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </Col>
    </Row>
  );
};

export default TimelineRow;
