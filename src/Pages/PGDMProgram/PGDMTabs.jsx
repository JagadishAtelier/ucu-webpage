import React, { useState, useRef, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import "../responsive-programs.css";
import PGDMCurricullam from "./PGDMCurricullam";
import AdmissionsTabRedesigned from "../../Components/PGDM-program/AdmissionsTab/AdmissionsTabRedesigned";
import PlacementTab from "../PgprogramPage/pgTabs/PlacementTab/PlacementTab";
import PGDMOverViewTab from "./PGDMOverViewTab";
import AboutPageHero from "../AboutPage/AboutPageHero/AboutPageHero";
import PgApplications from "../PgprogramPage/PgApplications";
import PGDMFeeStructure from "./PGDMFeeStructure";
import "./PGDMProgram.css";


const TAB_LIST = [
    "Overview",
    "Curriculum",
    "Fees",
    "Admissions",
    "Placements",
];

export default function PGDMTabs() {
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
                        <PGDMOverViewTab />
                    </section>
                );

            case "Curriculum":
                return <PGDMCurricullam />;

            case "Fees":
                return <PGDMFeeStructure />;

            case "Admissions":
                return <AdmissionsTabRedesigned />;

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
                title="PGDM"
                sub="Post Graduate Diploma in Management"
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
