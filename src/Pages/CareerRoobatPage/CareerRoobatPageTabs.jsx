import React, { useState, useRef, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import "../responsive-programs.css";
import AboutPageHero from "../AboutPage/AboutPageHero/AboutPageHero";
import PGXPMFeeStructure from "../PGXPMProgram/PGXPMFeeStructure";
import PGXPMAdmission from "../PGXPMProgram/PGXPMAdmission";
import "./CareerRoobatPage.css"; // Reuse tabs styling
import CareerRobatOverview from "./CareerRobatOverview";
import CareerRobatFees from "./CareerRobatFees";
import CareerRobatAdmission from "./CareerRobatAdmission";
import PgApplications from "../PgprogramPage/PgApplications";

const TAB_LIST = [
    "Overview",
    "Fees",
    "Admissions",
];

export default function CareerRoobatPageTabs() {
    const [active, setActive] = useState(TAB_LIST[0]);
    const navRef = useRef(null);
    const btnRefs = useRef({});

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

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
                return <CareerRobatOverview />;
            case "Fees":
                return <CareerRobatFees />;
            case "Admissions":
                return <CareerRobatAdmission />;
            default:
                return <div>Content not found</div>;
        }
    };

    const getHeroData = (tab) => {
        switch (tab) {
            case "Fees":
                return {
                    breadcrumb: ["Home", "Career Reboot Program for Women", "Fees"],
                    bgImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop"
                };
            case "Admissions":
                return {
                    breadcrumb: ["Home", "Career Reboot Program for Women", "Admissions"],
                    bgImage: "https://kahedu.edu.in/n/wp-content/uploads/2021/09/9-Important-Tips-to-Increase-College-Admission-Chances.jpg"
                };
            case "Overview":
            default:
                return {
                    breadcrumb: ["Home", "Career Reboot Program for Women", "Overview"],
                    bgImage: "https://img.freepik.com/premium-photo/diverse-group-students-holding-books-front-globe-symbolizing-global-education_638974-7905.jpg"
                };
        }
    };

    const heroData = getHeroData(active);

    return (
        <div className="pg-tabs-root">
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
                        className={`pg-tab-btn ${active === tab ? "pg-tab-btn--active" : ""
                            }`}
                        onClick={() => setActive(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </nav>

            <AboutPageHero
                title="Career Reboot Program for Women"
                breadcrumb={heroData.breadcrumb}
                bgImage={heroData.bgImage}
            />
            <div>
                <PgApplications className="under-banner" />
            </div>
            <div className="pg-tabs-panel">
                {renderContent(active)}
            </div>
        </div>
    );
}
