import React from "react";
import { Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const TimelineRow = ({ title, description, images = [], images1 = [], reverse }) => {
  return (
    <Row className={`timeline-row ${reverse ? "reverse" : ""} active`}>
      <div className="timeline-point"></div>

      <Col md={6} className="image">

        {/* MAIN SLIDER */}
        {images.length > 0 && (
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            allowTouchMove={false}
            speed={1200}  
            className="timeline-carousel mb-3"
          >
            {images.map((imgSrc, idx) => (
              <SwiperSlide key={idx}>
                <div className="image-auto">
                  <img className="time-line-slider-image-tag" src={imgSrc} alt={`${title} ${idx + 1}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* SECOND SLIDER — reverse direction */}
        {images1.length > 0 && (
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, reverseDirection: true, disableOnInteraction: false }}
            loop={true}
            allowTouchMove={false}
            speed={1200}  
            className="timeline-carousel"
          >
            {images1.map((imgSrc, idx) => (
              <SwiperSlide key={idx}>
                <div className="image-auto">
                  <img src={imgSrc} alt={`${title} extra ${idx + 1}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

      </Col>

      <Col md={6} className="content">
        <h3 dangerouslySetInnerHTML={{ __html: title }} />
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </Col>
    </Row>
  );
};

export default TimelineRow;
