import React, { useState, useRef, useEffect } from "react";
import OverviewTab from "./pgTabs/OverviewTab";
import FeesTab from "./pgTabs/FeesTab";
import "./pgtab.css";
import Curriculum from "./pgTabs/Curriculum/Curriculum";

const TAB_LIST = [
  "Overview",
  "Curriculum",
  "Fees and Scholarships",
  "Admissions",
  "International Immersion",
  "Placements",
];

export default function PgTabs() {
  const [active, setActive] = useState(TAB_LIST[0]);
  const navRef = useRef(null);
  const btnRefs = useRef({});

  // keep the active tab visible (center if possible)
  useEffect(() => {
    const btn = btnRefs.current[active];
    if (btn?.scrollIntoView) {
      btn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, [active]);

  // returns different JSX per tab
  const renderContent = (tab) => {
    switch (tab) {
      case "Overview":
        return (
          <section aria-labelledby="overview-heading">
            <OverviewTab />
          </section>
        );

      case "Curriculum":
        return (
          <Curriculum/>
        );

      case "Fees and Scholarships":
        return (
          <section aria-labelledby="fees-heading">
            <FeesTab />
          </section>
        );

      case "Admissions":
        return (
          <section aria-labelledby="admissions-heading">
            <h3 id="admissions-heading" className="pg-panel-title">Admissions Process</h3>

            <ol style={{ paddingLeft: "1.1rem", marginTop: ".5rem" }}>
              <li>Complete the online application form</li>
              <li>Submit transcripts, resume, and one recommendation</li>
              <li>Shortlisted candidates receive an interview invite</li>
              <li>Final decision communicated via email</li>
            </ol>

            <p style={{ marginTop: ".6rem" }} className="pg-panel-body">
              Tip: Apply early to be considered for scholarships. For application assistance, contact admissions@ucu.edu.
            </p>

            <div style={{ marginTop: ".6rem" }}>
              <button
                onClick={() => window.location.href = "/apply"}
                style={{
                  padding: ".5rem .75rem",
                  borderRadius: 6,
                  border: "none",
                  background: "#16a34a",
                  color: "#fff",
                  cursor: "pointer"
                }}
              >
                Apply Now
              </button>
            </div>
          </section>
        );

      case "International Immersion":
        return (
          <section aria-labelledby="immersion-heading">
            <h3 id="immersion-heading" className="pg-panel-title">International Immersion</h3>

            <p className="pg-panel-body" style={{ marginTop: ".4rem" }}>
              Selected students participate in a 2-week immersion at a partner university overseas.
              The program includes corporate visits, workshops and a short consultancy project.
            </p>

            <h4 style={{ marginTop: ".6rem", marginBottom: ".2rem" }}>Recent partner universities</h4>
            <ul style={{ paddingLeft: "1.1rem" }}>
              <li>University of Melbourne — Business Analytics</li>
              <li>National University of Singapore — Strategy Lab</li>
              <li>Rotterdam School of Management — Corporate Visits</li>
            </ul>
          </section>
        );

      case "Placements":
        return (
          <section aria-labelledby="placements-heading">
            <h3 id="placements-heading" className="pg-panel-title">Placements & Careers</h3>

            <div style={{ display: "flex", gap: "1.5rem", marginTop: ".5rem", flexWrap: "wrap" }}>
              <div style={{ minWidth: 220 }}>
                <p style={{ margin: 0, fontWeight: 700, fontSize: "1.25rem" }}>92%</p>
                <p style={{ margin: 0, color: "#555" }}>placement rate (last cohort)</p>
              </div>

              <div style={{ minWidth: 220 }}>
                <p style={{ margin: 0, fontWeight: 700, fontSize: "1.25rem" }}>₹ 12.5 LPA</p>
                <p style={{ margin: 0, color: "#555" }}>average CTC</p>
              </div>
            </div>

            <div style={{ marginTop: ".6rem" }}>
              <h4 style={{ margin: 0, fontSize: ".95rem" }}>Top recruiters</h4>
              <ul style={{ paddingLeft: "1.1rem", marginTop: ".3rem" }}>
                <li>Accenture</li>
                <li>HSBC</li>
                <li>Amazon</li>
                <li>Deloitte</li>
                <li>Flipkart</li>
              </ul>
            </div>
          </section>
        );

      default:
        return (
          <div>
            <h3 className="pg-panel-title">Section</h3>
            <p className="pg-panel-body">Content not available.</p>
          </div>
        );
    }
  };

  return (
    <div className="pg-tabs-root">
      <nav className="pg-tabs-nav" role="tablist" aria-label="Page sections" ref={navRef}>
        {TAB_LIST.map((tab) => (
          <button
            key={tab}
            ref={(el) => (btnRefs.current[tab] = el)}
            role="tab"
            aria-selected={active === tab}
            aria-controls={`panel-${tab.replace(/\s+/g, "-").toLowerCase()}`}
            className={`pg-tab-btn ${active === tab ? "pg-tab-btn--active" : ""}`}
            onClick={() => setActive(tab)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActive(tab);
              }
            }}
          >
            {tab}
          </button>
        ))}
      </nav>

      <div
        className="pg-tabs-panel"
        id={`panel-${active.replace(/\s+/g, "-").toLowerCase()}`}
        role="tabpanel"
        aria-labelledby={`tab-${active.replace(/\s+/g, "-").toLowerCase()}`}
      >
        {renderContent(active)}
      </div>
    </div>
  );
}
