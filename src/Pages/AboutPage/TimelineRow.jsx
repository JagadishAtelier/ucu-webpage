import React, { useRef, useEffect, useState } from "react";
import { Row, Col, Carousel } from "react-bootstrap";

const TimelineRow = ({ title, description, images = [], reverse }) => {
  const rowRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 } // 20% visible triggers animation
    );

    if (rowRef.current) observer.observe(rowRef.current);

    return () => {
      if (rowRef.current) observer.unobserve(rowRef.current);
    };
  }, []);

  return (
    <Row
      ref={rowRef}
      className={`timeline-row ${reverse ? "reverse" : ""} active`}
    >
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
        <h3>{title}</h3>
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </Col>

      {/* Mobile progress line */}
      <div
        className="timeline-progress-line"
        style={{
          transform: isVisible ? "scaleY(1)" : "scaleY(0)"
        }}
      ></div>
    </Row>
  );
};

export default TimelineRow;
