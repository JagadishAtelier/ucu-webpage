import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import {
  Briefcase,
  GraduationCap,
  FileCheck,
  Target,
  Clock
} from "lucide-react";
import "../../Pages/PGPMFlexPage/PGPMFlexPage.css"; // Reuse vibrant styles

function CareerRobatApply() {
  const eligibilityData = [
    {
      label: "Career Break",
      desc: "Women having a career break of a minimum of 2 and a maximum of 8 years.",
      icon: <Clock size={20} />,
      theme: "theme-orange",
      tags: ["2-8 Years Break"]
    },
    {
      label: "Experience",
      desc: "Have at least 2 years of work experience before the break.",
      icon: <Briefcase size={20} />,
      theme: "theme-blue",
      tags: ["2+ Years Work Exp"]
    },
    {
      label: "Education",
      desc: "Bachelor’s degree with at least 50% marks or equivalent CGPA from a recognised university.",
      icon: <GraduationCap size={20} />,
      theme: "theme-purple",
      tags: ["50% Aggregate", "Degree"]
    },
    {
      label: "Scores",
      desc: "Valid GMAT/CAT/NMAT score or any other entrance exam. Admissions based on profile, work ex, essay & score.",
      icon: <FileCheck size={20} />,
      theme: "theme-green",
      tags: ["GMAT/CAT/NMAT"]
    },
    {
      label: "Aspiration",
      desc: "Interested in pursuing a high impact career in FinTech, Product Management, Consulting, Sales & Marketing, etc.",
      icon: <Target size={20} />,
      theme: "theme-red", // If theme-red doesn't exist in CSS, it might default or fallback. I should check CSS or stick to existing themes. Let's reuse theme-blue or similar if unsure, but I'll try to vary. Actually, I saw blue, orange, purple, green. Let's use theme-blue again or rotate. Let's use 'theme-orange' again for variety or just define styles if needed. Let's Stick to available themes: Blue, Orange, Purple, Green. I will reuse Blue for the 5th one.
      theme: "theme-blue",
      tags: ["High Impact Career"]
    },
  ];

  return (
    <section className="PGPMFLEX-admission-eligible-section py-5">
      <Container>
        <div className="row mb-5">
          <div className="col-12 text-left">
            <h2 className="display-5 fw-bold mb-3">
              Who Can <span style={{ color: "#5ac501" }}>Apply?</span>
            </h2>
            </div>
        </div>

        <div className="row g-4 justify-content-center">
          {eligibilityData.map((item, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className={`PGPMFLEX-admission-eligible-card ${item.theme} h-100`}>
                <div className="PGPMFLEX-card-body d-flex flex-column h-100">
                  <span className="PGPMFLEX-admission-eligible-label mb-2">{item.label}</span>
                  <p className="PGPMFLEX-card-desc flex-grow-1">
                    {item.desc}
                  </p>

                  {item.tags && (
                    <div className="PGPMFLEX-tags-container mt-3">
                      {item.tags.map((tag, i) => (
                        <span key={i} className="PGPMFLEX-tag-pill">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="PGPMFLEX-card-footer mt-auto">
                  <span>Details</span>
                  <div className="PGPMFLEX-footer-icon">
                    {item.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default CareerRobatApply;