import React from 'react';
import { Container } from "react-bootstrap";
import DynamicIcon from '../DynamicIcon';
import "../../Pages/PGPMFlexPage/PGPMFlexPage.css";

const defaultEligibilityData = [
  {
    label: "Career Break",
    desc: "Women having a career break of a minimum of 2 and a maximum of 8 years.",
    icon: "Clock",
    theme: "theme-orange",
    tags: ["2-8 Years Break"]
  },
  {
    label: "Experience",
    desc: "Have at least 2 years of work experience before the break.",
    icon: "Briefcase",
    theme: "theme-blue",
    tags: ["2+ Years Work Exp"]
  },
  {
    label: "Education",
    desc: "Bachelor’s degree with at least 50% marks or equivalent CGPA from a recognised university.",
    icon: "GraduationCap",
    theme: "theme-purple",
    tags: ["50% Aggregate", "Degree"]
  },
  {
    label: "Scores",
    desc: "Valid GMAT/CAT/NMAT score or any other entrance exam. Admissions based on profile, work ex, essay & score.",
    icon: "FileCheck",
    theme: "theme-green",
    tags: ["GMAT/CAT/NMAT"]
  },
  {
    label: "Aspiration",
    desc: "Interested in pursuing a high impact career in FinTech, Product Management, Consulting, Sales & Marketing, etc.",
    icon: "Target",
    theme: "theme-blue",
    tags: ["High Impact Career"]
  },
];

function CareerRobatApply({ getKeyValue, getArray }) {
  const kv = (key, fallback) => (getKeyValue ? getKeyValue("CareerRobatApply", key, fallback) : fallback);
  const arr = (key, fallback) => (getArray ? getArray("CareerRobatApply", key, fallback) : fallback);

  const titleStart = kv("titleStart", "Who Can");
  const titleSpan = kv("titleSpan", "Apply?");
  const eligibilityData = arr("eligibilityDataList", defaultEligibilityData);

  return (
    <section className="PGPMFLEX-admission-eligible-section py-5">
      <Container>
        <div className="row mb-5">
          <div className="col-12 text-left">
            <h2 className="display-5 fw-bold mb-3">
              {titleStart} <span style={{ color: "#5ac501" }}>{titleSpan}</span>
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
                    <DynamicIcon name={item.icon || "HelpCircle"} size={20} />
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