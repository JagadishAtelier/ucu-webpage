import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

function NewAdminLearn() {
  /* =======================
     FACULTY DATA
  ======================= */
  const facultyData = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Strategy & Leadership",
      image:
        "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg",
      quote:
        "At UCU University, we focus on experiential learning that helps students think strategically and lead with confidence in complex business environments.",
      credMain: "PhD in Management",
      credSub: "20+ years of academic & industry experience",
    },
    {
      name: "Dr. Priya Menon",
      role: "Finance & Business Analytics",
      image:
        "https://img.freepik.com/free-photo/picture-dissatisfied-grumpy-young-afro-american-woman-with-long-straight-hair-expressing-her-disagreement-keeping-arms-folded-looking-with-serious-skeptical-facial-expression_344912-1026.jpg",
      quote:
        "Our approach blends strong analytical foundations with practical financial insights to prepare students for data-driven decision making.",
      credMain: "PhD in Finance",
      credSub: "Researcher & industry consultant",
    },
    {
      name: "Prof. Arjun Mehta",
      role: "Marketing & Digital Strategy",
      image:
        "https://img.freepik.com/free-photo/worldface-pakistani-guy-white-background_53876-146312.jpg",
      quote:
        "UCU University emphasizes applied learning, enabling students to understand consumer behavior and modern digital business models.",
      credMain: "MBA & Advanced Marketing Certifications",
      credSub: "Academic mentor with industry exposure",
    },
  ];

  /* =======================
     STATS DATA
  ======================= */
  const statsData = [
    { value: "25+", label: "Experienced Faculty Members" },
    { value: "Majority", label: "Doctorates & Research Scholars" },
    { value: "15+", label: "Industry-Experienced Mentors" },
    { value: "100+", label: "Research Papers & Case Studies" },
  ];

  return (
    <div id="placements" className="NEWADMLEARN-section">
      <Container>
        {/* Header */}
        <div className="text-center NEWADMLEARN-header">
          <h3 className="NEWADMLEARN-title">
            Learn from the Best at UCU University
          </h3>
          <p className="NEWADMLEARN-subtitle">
            UCU University’s faculty combines academic excellence, research
            depth, and real-world industry exposure to deliver a future-focused
            learning experience.
          </p>
        </div>

        {/* Faculty Slider */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={24}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {facultyData.map((faculty, index) => (
            <SwiperSlide key={index}>
              <div className="NEWADMLEARN-card">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="NEWADMLEARN-avatar"
                  />
                  <div>
                    <div className="NEWADMLEARN-name">{faculty.name}</div>
                    <div className="NEWADMLEARN-role">{faculty.role}</div>
                  </div>
                </div>

                <p className="NEWADMLEARN-quote">"{faculty.quote}"</p>

                <div className="NEWADMLEARN-divider">
                  <div className="NEWADMLEARN-cred-label">Credentials</div>
                  <div className="NEWADMLEARN-cred-main">
                    {faculty.credMain}
                  </div>
                  <div className="NEWADMLEARN-cred-sub">
                    {faculty.credSub}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Stats */}
        <Row className="NEWADMLEARN-stats g-4">
          {statsData.map((stat, index) => (
            <Col xs={6} lg={3} className="text-center" key={index}>
              <div className="NEWADMLEARN-stat-number">{stat.value}</div>
              <div className="NEWADMLEARN-stat-text">{stat.label}</div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default NewAdminLearn;
