import React, { useState } from "react";
import "./PGPMAdmission.css";

function PGPMAdmissionKeyDates() {
  const [activeTab, setActiveTab] = useState("cycle1");

  const data = {
    cycle1: {
      eligibility: [
        "GMAT 2023 | GMAT 2024 | GMAT 2025 (before 1 Dec 2025)",
        "CAT 2024 takers",
        "XAT 2025 takers",
        "NMAT 2024 & 2025 takers",
        "CAT 2025 | XAT 2026 (scores pending allowed)",
      ],
      deadline: "4th December, 2025",
      interview: "To be Announced",
      pi: "Delhi, Chennai, Bangalore, Hyderabad, Kolkata, Mumbai",
    },
    cycle2: {
      eligibility: [
        "GMAT 2023–2026 (before 31 Jan 2026)",
        "CAT 2024 & 2025 takers",
        "XAT 2025 & 2026 takers",
        "NMAT 2024 & 2025 takers",
      ],
      deadline: "To be announced",
      interview: "To be announced",
      pi: "Delhi, Mumbai, Chennai, Bangalore, Hyderabad, Kolkata",
    },
    cycle3: {
      eligibility: [
        "GMAT 2023–2026 (before 10 Feb 2026)",
        "CAT 2024 & 2025 takers",
        "XAT 2025 & 2026 takers",
        "NMAT 2024 & 2025 takers",
      ],
      deadline: "To be announced",
      interview: "To be announced",
      pi: "Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Kolkata",
    },
    cycle4: {
      eligibility: [
        "GMAT 2023–2026 (before 10 Mar 2026)",
        "CAT 2024 & 2025 takers",
        "XAT 2025 & 2026 takers",
        "NMAT 2024 & 2025 takers",
      ],
      deadline: "To be announced",
      interview: "To be announced",
      pi: "Delhi, Chennai, Bangalore, Hyderabad, Kolkata, Mumbai",
    },
  };

  const content = data[activeTab];

  return (
    <section className="pgpm-new-section">
      <div className="custom-container-inner">

        <h2 className="pgpm-new-title">Key Dates</h2>

        {/* New Top Selector Bar */}
        <div className="pgpm-selector-bar">
          {Object.keys(data).map((key) => (
            <button
              key={key}
              className={`pgpm-selector-btn ${
                activeTab === key ? "active" : ""
              }`}
              onClick={() => setActiveTab(key)}
            >
              {key.replace("cycle", "Cycle ")}
            </button>
          ))}
        </div>

        {/* Three Card Layout */}
        <div className="pgpm-grid">
          <Card title="Eligibility Criteria">
            <ul>
              {content.eligibility.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Card>

          <Card title="Important Dates">
            <p><span>Application Deadline:</span> {content.deadline}</p>
            <p><span>AI Proctored Interview: </span>{content.interview}</p>
          </Card>

          <Card title="Personal Interview Locations">
            <p><strong>{content.pi}</strong></p>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default PGPMAdmissionKeyDates;

function Card({ title, children }) {
  return (
    <div className="pgpm-card shadow">
      <h4>{title}</h4>
      {children}
    </div>
  );
}
