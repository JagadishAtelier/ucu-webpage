import React, { useState, useRef, useEffect } from "react";
import OverviewTab from "./pgTabs/OverviewTab";
import FeesTab from "./pgTabs/FeesTab";
import "./pgtab.css";
import Curriculum from "./pgTabs/Curriculum/Curriculum";
import FeeStructure from "./pgTabs/FeeStructure/FeeStructure";
import AdmissionsTab from "./pgTabs/AdmissionsTab/AdmissionsTab";
import PlacementTab from "./pgTabs/PlacementTab/PlacementTab";
import { ArrowUp } from "lucide-react";
const TAB_LIST = [
  "Overview",
  "Curriculum",
  "Fees and Scholarships",
  "Admissions",
  // "International Immersion",
  "Placements",
];

export default function PgTabs() {
  const [active, setActive] = useState(TAB_LIST[0]);
  const [selectedBtn, setSelectedBtn] = useState("intern");
  const navRef = useRef(null);
  const btnRefs = useRef({});


    const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  // keep the active tab visible (center if possible)
  useEffect(() => {
    const btn = btnRefs.current[active];
    if (btn?.scrollIntoView) {
      btn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, [active]);

  // 👇 Mobile auto-scroll nudge (runs once)
useEffect(() => {
  const nav = navRef.current;

  if (window.innerWidth <= 768 && nav) {
    const interval = setInterval(() => {
      nav.scrollTo({ left: 60, behavior: "smooth" });
      setTimeout(() => nav.scrollTo({ left: 0, behavior: "smooth" }), 1500);
    }, 3000); // every 3 seconds
    return () => clearInterval(interval);
  }
}, []);

// Auto-open tab based on hash navigation
useEffect(() => {
  const hash = window.location.hash;

  if (hash === "#PlacementCalendar") {
    setActive("Placements"); // open the Placements main tab
  }
}, []);

  // Handle scrolling when navigating with hash
  useEffect(() => {
    const hash = window.location.hash;

    if (hash === "#PlacementCalendar") {
      // ensure "Internship Placement Process" is open
      setSelectedBtn("intern");

      // Delay required because content renders after state update
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  }, []);

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
          <FeeStructure/>
        );

      case "Admissions":
        return (
          <AdmissionsTab/>
        );

      // case "International Immersion":
      //   return (
      //     <section aria-labelledby="immersion-heading">
      //       <h3 id="immersion-heading" className="pg-panel-title">International Immersion</h3>

      //       <p className="pg-panel-body" style={{ marginTop: ".4rem" }}>
      //         Selected students participate in a 2-week immersion at a partner university overseas.
      //         The program includes corporate visits, workshops and a short consultancy project.
      //       </p>

      //       <h4 style={{ marginTop: ".6rem", marginBottom: ".2rem" }}>Recent partner universities</h4>
      //       <ul style={{ paddingLeft: "1.1rem" }}>
      //         <li>University of Melbourne — Business Analytics</li>
      //         <li>National University of Singapore — Strategy Lab</li>
      //         <li>Rotterdam School of Management — Corporate Visits</li>
      //       </ul>
      //     </section>
      //   );

      case "Placements":
        return (
          <PlacementTab/>
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
            <button
        className="fixed-left-arrow-btn"
        onClick={() => scrollTo("overview-section")}
      >
        <ArrowUp/>
      </button>
      <nav className="pg-tabs-nav " role="tablist" aria-label="Page sections" ref={navRef}>
        {TAB_LIST.map((tab) => (
          <button
            key={tab}
            ref={(el) => (btnRefs.current[tab] = el)}
            role="tab"
            id="overview-section"
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
