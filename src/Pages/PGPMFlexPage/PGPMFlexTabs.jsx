import React, { useState, useRef, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import "../responsive-programs.css";
import AboutPageHero from "../AboutPage/AboutPageHero/AboutPageHero";
import "./PGPMFlexPage.css"; // Reuse tabs styling
import PGPMFlexOverview from "./PGPMFlexOverview";
import PgApplications from "../PgprogramPage/PgApplications";
import PGPMFLEXFeesTab from "./PGPMFLEXFeesTab";
import PGPMFlexAdmission from "./PGPMFlexAdmission";

const TAB_LIST = [
    "Overview",
    "Fees",
    "Admissions",
];

export default function PGPMFlexTabs() {
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
                return <PGPMFlexOverview />;
            case "Fees":
                return <PGPMFLEXFeesTab />;
            case "Admissions":
                return <PGPMFlexAdmission />;
            default:
                return <div>Content not found</div>;
        }
    };

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
                className="pg-tabs-nav justify-content-center "
                role="tablist"
                aria-label="Page sections"
                ref={navRef}
                style={{ marginTop: '0px' }} // Spacer for fixed navbar if needed
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
                title="PGPM Flex"
                // sub="Post Graduate Program for Executives"
                breadcrumb={["Home", "PGPM Flex"]}
                bgImage="https://img.freepik.com/premium-photo/diverse-group-students-holding-books-front-globe-symbolizing-global-education_638974-7905.jpg"
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
