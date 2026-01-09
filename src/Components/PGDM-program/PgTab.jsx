import React, { useState, useRef, useEffect } from "react";
import OverviewTab from "./OverviewTab";
import FeesTab from "./FeesTab";
import "./pgtab.css";
import Curriculum from "./Curriculum/Curriculum";
import FeeStructure from "./FeeStructure/FeeStructure";
import AdmissionsTab from "./AdmissionsTab/AdmissionsTab";
import PlacementTab from "../../Pages/PgprogramPage/pgTabs/PlacementTab/PlacementTab";
import { ArrowUp } from "lucide-react";
import { useLocation } from "react-router-dom";
import AboutPageHero from "../../Pages/AboutPage/AboutPageHero/AboutPageHero";
import PgApplications from "../../Pages/PgprogramPage/PgApplications";
import AdmissionsTabRedesigned from "./AdmissionsTab/AdmissionsTabRedesigned";
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
      btn.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
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
        return <Curriculum />;

      case "Fees and Scholarships":
        return <FeeStructure />;

      case "Admissions":
        return <AdmissionsTabRedesigned />;

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
        return <PlacementTab />;

      default:
        return (
          <div>
            <h3 className="pg-panel-title">Section</h3>
            <p className="pg-panel-body">Content not available.</p>
          </div>
        );
    }
  };
  const { pathname } = useLocation();

  const pathSegments = pathname.split("/").filter(Boolean); // split and remove empty segments
  const lastSegment = pathSegments[pathSegments.length - 1]; // get only the last segment
  const heading = lastSegment
    ? lastSegment.replace(/-/g, " ").toUpperCase()
    : "HOME";
  const subText =
    heading === "PGPM ELITE"
      ? "Post Graduate Program in Management" // when PGPM Elite
      : "UCU Post Graduate Program in Management"; // default

  return (
    <div className="pg-tabs-root">
      <button
        className="fixed-left-arrow-btn"
        onClick={() => scrollTo("overview-section")}
      >
        <ArrowUp />
      </button>
      <nav
        ref={navRef}
        className="pg-tabs-nav mobile-sticky-tabs"
        role="tablist"
        aria-label="Page sections"
      >
        {TAB_LIST.map((tab) => (
          <button
            key={tab}
            ref={(el) => (btnRefs.current[tab] = el)}
            role="tab"
            id="overview-section"
            aria-selected={active === tab}
            aria-controls={`panel-${tab.replace(/\s+/g, "-").toLowerCase()}`}
            className={`pg-tab-btn ${
              active === tab ? "pg-tab-btn--active" : ""
            }`}
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
      <AboutPageHero
        title={heading}
        sub={subText}
        breadcrumb={["Home", "PGDM Programs"]}
        bgImage="https://img.freepik.com/premium-photo/diverse-group-students-holding-books-front-globe-symbolizing-global-education_638974-7905.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80"
      />
      <div>
        <PgApplications className="under-banner" />
      </div>
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
