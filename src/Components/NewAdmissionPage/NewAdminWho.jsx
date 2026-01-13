import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function NewAdminWho() {
  /* =======================
     DATA CONFIG
  ======================= */

const statsData = [
  { value: "180", label: "Total Intake" },
  { value: "Entrance Test", label: "Score Considered" },
  { value: "Up to 40%", label: "Women Representation" },
  { value: "Merit-Based", label: "Scholarships Available" },
];


  const cardData = [
    {
      title: "Ideal Candidate Profile",
      icon: "fas fa-lightbulb",
      listClass: "NEWADMWHO-list",
      iconClass: "fas fa-check-circle",
      items: [
        {
          title: "Curious & Innovative Thinkers",
          desc: "Individuals who are eager to learn, question ideas, and adapt to evolving business environments.",
        },
        {
          title: "Strong Academic Foundation",
          desc: "Graduates with consistent academic performance and a commitment to continuous learning.",
        },
        {
          title: "Leadership & Initiative",
          desc: "Demonstrated leadership through academics, work experience, sports, or community engagement.",
        },
      ],
    },
    {
      title: "Diverse Academic Backgrounds",
      icon: "fas fa-users",
      listClass: "NEWADMWHO-list",
      iconClass: "fas fa-check-circle",
      items: [
        {
          title: "All Disciplines Welcome",
          desc: "Engineering, Commerce, Science, Arts, Humanities, and interdisciplinary backgrounds.",
        },
        {
          title: "Fresh Graduates",
          desc: "Students ready to build strong fundamentals and begin their professional journey.",
        },
        {
          title: "Working Professionals",
          desc: "Individuals seeking career growth, role transition, or leadership development.",
        },
      ],
    },
    {
      title: "Founding Batch Benefits",
      icon: "fas fa-trophy",
      listClass: "NEWADMWHO-list NEWADMWHO-list-star",
      iconClass: "fas fa-star",
      items: [
        {
          title: "Inaugural Cohort Recognition",
          desc: "Be part of UCU University’s first academic legacy.",
        },
        {
          title: "Influence Academic Culture",
          desc: "Actively contribute to shaping traditions, student initiatives, and academic practices.",
        },
        {
          title: "Close Faculty Interaction",
          desc: "Enhanced mentorship and direct engagement with core academic and program leadership teams.",
        },
      ],
    },
  ];

  /* =======================
     UI
  ======================= */

  return (
    <div className="NEWADMWHO-section py-5 bg-white">
      <Container>
        {/* Header */}
        <div className="text-center mb-4">
          <span className="NEWADMWHO-badge d-inline-block mb-3">
            <i className="fas fa-star me-2"></i>
            Founding Batch 2026–28
          </span>

          <h3 className="NEWADMWHO-title mb-3">Who Should Apply to UCU University</h3>

          <p className="NEWADMWHO-subtitle mx-auto">
UCU University invites motivated learners to be part of its founding cohort and contribute to a forward-looking academic and professional ecosystem.
          </p>
        </div>

        {/* Stats */}
        <Row className="g-4 mb-5">
          {statsData.map((item, index) => (
            <Col sm={6} lg={3} key={index}>
              <div className="NEWADMWHO-stat-card h-100">
                <div className="NEWADMWHO-stat-value">{item.value}</div>
                <div className="NEWADMWHO-stat-label">{item.label}</div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Info Cards */}
        <Row className="g-4">
          {cardData.map((card, index) => (
            <Col md={4} key={index}>
              <Card className="NEWADMWHO-info-card h-100">
                <Card.Body>
                  <h4 className="NEWADMWHO-card-title">
                    <i className={`${card.icon} me-2`}></i>
                    {card.title}
                  </h4>

                  <ul className={card.listClass}>
                    {card.items.map((item, idx) => (
                      <li key={idx}>
                        <i className={`${card.iconClass} NEWADMWHO-list-icon`}></i>
                        <div>
                          <strong>{item.title}</strong>
                          <span>{item.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default NewAdminWho;
