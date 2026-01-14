import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Building2, Globe2, HeartHandshake, Lightbulb, Users, Target, BookOpen, Handshake, CheckCircle } from "lucide-react";
import "../../Pages/PGPMFlexPage/PGPMFlexPage.css";

function COEAbout() {
  return (
    <section className=" py-5">
      <Container>
        {/* Intro */}
        <div className="row mb-5 text-center">
          <div className="col-lg-12 mx-auto">
            <h1 className="display-4 fw-bold mb-4">
              Centre of <span style={{ color: "#5ac501" }}>Excellence</span>
            </h1>
            <p className="lead text-dark" style={{ lineHeight: '1.8' }}>
              To be a leader in India and beyond in cutting-edge retail and retail-related knowledge creation, dissemination, and industry application. We provide thought leadership and educate the next generation of retailers with a perfect blend of business relevance and academic elegance.
            </p>
          </div>
        </div>

        {/* Importance of Retailing */}
        <div className="row mb-5 justify-content-center">
          <div className="col-lg-12">
            <h3 className="fw-bold mb-3" style={{ color: "#000" }}>Importance of Retailing in India</h3>
            <p className="text-secondary" style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>
              Retailing plays a crucial role in the Indian economy. India has one of the highest numbers of retail outlets in the world, accounting for over US$ 500 billion in spend. With rapid changes in consumer buying behavior, the rise of organized retailing, and the arrival of foreign retailers, the sector is undergoing profound changes.
            </p>
            <p className="text-secondary" style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>
              As the pace of change intensifies, senior leaders must adapt. To be a world-class retailer, it is not enough to only adopt change; one must pre-empt, shape, and leverage it to their advantage.
            </p>
          </div>
        </div>

        {/* About the Center */}
        <div className="row mb-5 g-5 align-items-center">
          <div className="col-lg-6">
            <div className="p-4 rounded-4" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)', border: '1px solid #bbf7d0' }}>
              <h4 className="fw-bold mb-3" style={{ color: "#166534" }}>About the Center</h4>
              <p className="text-secondary mb-3">
                Guided by Dr. Bala V. Balachandran, UCU has created this Center to be a hub for world-class research and industry engagement. Led by foremost retail academics and practitioners from India, Asia, Europe, and the USA.
              </p>
              <p className="text-secondary mb-0">
                The objective is to provide best-in-class practices, facilitate research, exchange ideas, and offer guidance to leaders and policy makers to leverage the changing dynamics of Indian retailing.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="px-3 py-3 rounded-4" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)', border: '1px solid #bbf7d0' }}>
            <h4 className="fw-bold mb-3">Global Collaborations</h4>
            <p className="text-secondary">UCU has formed collaborations with some of the finest international institutions, and the Center builds on these links:</p>
            <div className="d-flex flex-wrap gap-2 mt-3">
              {["Yale University (USA)", "Bauer College of Business (USA)", "University of Bordeaux (France)", "CUOA (Italy)", "IIT Stuart School of Business (Chicago)", "Nanyang Technology University (Singapore)"].map((uni, i) => (
                <span key={i} className="badge rounded-pill bg-light text-dark border p-2 px-3 fw-normal" style={{ fontSize: '0.9rem' }}>
                  <Globe2 size={14} className="me-2 text-primary" /> {uni}
                </span>
              ))}
            </div>
            </div>
          </div>
        </div>

        {/* What is Different about Us? - Cards */}
        <div className="row mb-5">
          <div className="col-12 text-center mb-4">
            <h2 className="fw-bold">What is Different About Us?</h2>
          </div>

          {[
            { title: "Customized Programs", text: "Outstanding ability to develop company-specific and open programs for Board, Senior, and Middle Managers.", icon: <Users size={24} />, theme: "theme-blue" },
            { title: "World-Renowned Experts", text: "Width, depth, and the range of subjects covered in these programs with world-renowned experts.", icon: <Lightbulb size={24} />, theme: "theme-orange" },
            { title: "Global Scholarship", text: "Pursue research engagement and scholarship at an international level of excellence.", icon: <BookOpen size={24} />, theme: "theme-purple" },
            { title: "Thought Leadership", text: "Proven thought leader in providing cutting-edge information on opportunities and challenges.", icon: <Target size={24} />, theme: "theme-green" },
            { title: "Rigor & Relevance", text: "Unique ability to combine rigor and relevance tailored to the needs of the organization.", icon: <CheckCircle size={24} />, theme: "theme-red" }, // Fallback to blue/orange if red not defined clearly, but user asked for colorful.
            { title: "Symbiotic Relationship", text: "Developing long-term, mutually beneficial relationships with clients.", icon: <Handshake size={24} />, theme: "theme-blue" }
          ].map((item, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <div className={`PGPMFLEX-admission-eligible-card ${item.theme} h-100`}>
                <div className="PGPMFLEX-card-body d-flex flex-column h-100">
                  <span className="PGPMFLEX-admission-eligible-label">{item.title}</span>
                  <p className="PGPMFLEX-card-desc flex-grow-1">{item.text}</p>
                </div>
                <div className="PGPMFLEX-card-footer mt-auto">
                  <span>Key Feature</span>
                  <div className="PGPMFLEX-footer-icon">{item.icon}</div>
                </div>
              </div>
            </Col>
          ))}
        </div>

        {/* What Can We Do For You? */}
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="bg-white p-5 rounded-4 shadow-sm border">
              <h3 className="fw-bold text-center mb-4">What Can <span style={{ color: "#5ac501" }}>We Do For You?</span></h3>
              <Row className="g-4 mt-3">
                {[
                  "Help understand and adopt global best practices",
                  "Co-create relevant research to deliver compelling competitive advantage",
                  "Provide actionable knowledge to key managers to successfully deliver business objectives",
                  "Create a framework for nurturing and developing high potential talent for business leadership"
                ].map((text, idx) => (
                  <Col md={6} key={idx}>
                    <div className="d-flex align-items-start gap-3">
                      <div className="mt-1 text-success"><CheckCircle size={20} /></div>
                      <p className="mb-0 text-secondary" style={{ fontSize: '1.05rem' }}>{text}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </div>

      </Container>
    </section>
  )
}

export default COEAbout