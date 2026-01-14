import React, { useState, useRef, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import "../responsive-programs.css";
import PGPMCurricullam from "../PgprogramPage/pgTabs/PGPMCurricullam/PGPMCurricullam";
import FeeStructure from "../../Components/PGDM-program/FeeStructure/FeeStructure";
import PGPMAdmission from "../PgprogramPage/pgTabs/PGPMAdmission/PGPMAdmission";
import PlacementTab from "../PgprogramPage/pgTabs/PlacementTab/PlacementTab";
import PGPMOverViewTab from "./PGPMOverViewTab";
import AboutPageHero from "../AboutPage/AboutPageHero/AboutPageHero";
import PgApplications from "../PgprogramPage/PgApplications";
import PGPMFeeStructure from "./PGPMFeeStructure";
const TAB_LIST = [
  "Overview",
  "Curriculum",
  "Fees",
  "Admissions",
  // "International Immersion",
  "Placements",
];

export default function PGPMTabs() {
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
          <div aria-labelledby="overview-heading py-0">
            <PGPMOverViewTab />
          </div>
        );

      case "Curriculum":
        return <PGPMCurricullam />;

      case "Fees":
        return <PGPMFeeStructure />;

      case "Admissions":
        return <PGPMAdmission />;

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

  const getHeroData = (tab) => {
    switch (tab) {
      case "Fees":
        return {
          breadcrumb: ["Home", "PGPM ELITE", "Fees"],
          bgImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop"
        };
      case "Admissions":
        return {
          breadcrumb: ["Home", "PGPM ELITE", "Admissions"],
          bgImage: "https://kahedu.edu.in/n/wp-content/uploads/2021/09/9-Important-Tips-to-Increase-College-Admission-Chances.jpg"
        };
      case "Overview":
      default:
        // Use default/overview image for other tabs like Curriculum, Placements
        return {
          breadcrumb: ["Home", "PGPM ELITE", tab === "Overview" ? "Overview" : tab],
          bgImage: "https://img.freepik.com/premium-photo/diverse-group-students-holding-books-front-globe-symbolizing-global-education_638974-7905.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80"
        };
    }
  };

  const heroData = getHeroData(active);

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
            className={`pg-tab-btn ${active === tab ? "pg-tab-btn--active" : ""
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
        title="PGPM ELITE"
        sub="Post Graduate Program in Management"
        breadcrumb={heroData.breadcrumb}
        bgImage={heroData.bgImage}
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
