import React, { useState, useRef, useEffect } from "react";
import "../responsive-programs.css";
import AboutPageHero from "../AboutPage/AboutPageHero/AboutPageHero";
import "./PGPMFlexPage.css";
import PGPMFlexOverview from "./PGPMFlexOverview";
import PgApplications from "../PgprogramPage/PgApplications";
import PGPMFLEXFeesTab from "./PGPMFLEXFeesTab";
import PGPMFlexAdmission from "./PGPMFlexAdmission";

const TAB_LIST = ["Overview", "Fees", "Admissions"];

export default function PGPMFlexTabs() {
  const [active, setActive] = useState(TAB_LIST[0]);
  const navRef = useRef(null);
  const btnRefs = useRef({});

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

  const renderContent = (tab) => {
    switch (tab) {
      case "Overview":
        return <PGPMFlexOverview />;
      case "Fees":
        return <PGPMFLEXFeesTab />;
      case "Admissions":
        return <PGPMFlexAdmission />;
      default:
        return null;
    }
  };

  return (
    <div className="pg-tabs-root">

      {/* MOBILE STICKY + SCROLLABLE TABS */}
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
            aria-selected={active === tab}
            className={`pg-tab-btn ${
              active === tab ? "pg-tab-btn--active" : ""
            }`}
            onClick={() => setActive(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* BANNER */}
      <AboutPageHero
        title="PGPM Flex"
        breadcrumb={["Home", "PGPM Flex"]}
        bgImage="https://img.freepik.com/premium-photo/diverse-group-students-holding-books-front-globe-symbolizing-global-education_638974-7905.jpg"
      />

      {/* UNDER BANNER CONTENT */}
      <PgApplications className="under-banner" />

      {/* TAB CONTENT */}
      <div className="pg-tabs-panel">{renderContent(active)}</div>
    </div>
  );
}
