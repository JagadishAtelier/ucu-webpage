import React, { useState, useRef, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import "../responsive-programs.css";
import AboutPageHero from "../AboutPage/AboutPageHero/AboutPageHero";
import PGXPMOverview from "./PGXPMOverview";
import PGXPMFeeStructure from "./PGXPMFeeStructure";
import PGXPMAdmission from "./PGXPMAdmission";
import "../PGDMProgram/PGDMProgram.css"; // Reuse tabs styling
import PgApplications from "../PgprogramPage/PgApplications";

const TAB_LIST = [
    "Overview",
    "Fees",
    "Admissions",
];

export default function PGXPMTabs() {
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
                return <PGXPMOverview />;
            case "Fees":
                return <PGXPMFeeStructure />;
            case "Admissions":
                return <PGXPMAdmission />;
            default:
                return <div>Content not found</div>;
        }
    };

    const getHeroData = (tab) => {
        switch (tab) {
            case "Fees":
                return {
                    breadcrumb: ["Home", "PGXPM", "Fees"],
                    bgImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop"
                };
            case "Admissions":
                return {
                    breadcrumb: ["Home", "PGXPM", "Admissions"],
                    bgImage: "https://kahedu.edu.in/n/wp-content/uploads/2021/09/9-Important-Tips-to-Increase-College-Admission-Chances.jpg"
                };
            case "Overview":
            default:
                return {
                    breadcrumb: ["Home", "PGXPM", "Overview"],
                    bgImage: "https://img.freepik.com/premium-photo/diverse-group-students-holding-books-front-globe-symbolizing-global-education_638974-7905.jpg"
                };
        }
    }

    const heroData = getHeroData(active);

    return (
        <div className="pg-tabs-root">
            {/* User said 'Three tabs above the banner'. 
           Usually Navbar is top. 
           In PGDM implementation: Navbar -> Hero -> TabsNav (Sticky) -> Content.
           But 'Tabs above the banner'? 
           Maybe Nav -> Tabs -> Banner -> Content?
           Let's stick to the PGDM layout (Nav -> Banner -> Tabs -> Content) unless strictly interpreted.
           Wait, 'Three tabs above the banner' likely means:
           NAVBAR
           TABS (Overview, Fees, Admissions)
           BANNER (Hero)
           CONTENT
       */}

            {/* Let's try the request literally: Tabs above banner. */}

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
                title="PGXPM"
                sub="Post Graduate Program for Executives"
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
