import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../responsive-programs.css";
import AboutPageHero from "../AboutPage/AboutPageHero/AboutPageHero";
import "./CareerRoobatPage.css";
import CareerRobatOverview from "./CareerRobatOverview";
import CareerRobatFees from "./CareerRobatFees";
import CareerRobatAdmission from "./CareerRobatAdmission";
import PgApplications from "../PgprogramPage/PgApplications";

const TAB_LIST = [
    "Overview",
    "Fees",
    "Admissions",
];

export default function CareerRoobatPageTabs({ getKeyValue, getImage, getArray }) {
    const location = useLocation();
    const [active, setActive] = useState(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const tabParam = queryParams.get("tab");
        if (tabParam) {
            const found = TAB_LIST.find(t => t.toLowerCase() === tabParam.toLowerCase());
            if (found) return found;
        }
        return TAB_LIST[0];
    });

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const tabParam = queryParams.get("tab");
        if (tabParam) {
            const found = TAB_LIST.find(t => t.toLowerCase() === tabParam.toLowerCase());
            if (found) {
                setActive(found);
            }
        }
    }, [location.search]);
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
                return <CareerRobatOverview getKeyValue={getKeyValue} getArray={getArray} getImage={getImage} />;
            case "Fees":
                return <CareerRobatFees getKeyValue={getKeyValue} getArray={getArray} />;
            case "Admissions":
                return <CareerRobatAdmission getKeyValue={getKeyValue} getArray={getArray} />;
            default:
                return <div>Content not found</div>;
        }
    };

    const kv = (key, fallback) => (getKeyValue ? getKeyValue("CareerRoobatPageTabs", key, fallback) : fallback);
    const img = (index, fallback) => (getImage ? getImage("CareerRoobatPageTabs", index, fallback) : fallback);

    const title = kv("title", "Career Reboot Program for Women");

    const getHeroData = (tab) => {
        switch (tab) {
            case "Fees":
                return {
                    breadcrumb: ["Home", title, "Fees"],
                    bgImage: img(1, "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop")
                };
            case "Admissions":
                return {
                    breadcrumb: ["Home", title, "Admissions"],
                    bgImage: img(2, "https://kahedu.edu.in/n/wp-content/uploads/2021/09/9-Important-Tips-to-Increase-College-Admission-Chances.jpg")
                };
            case "Overview":
            default:
                return {
                    breadcrumb: ["Home", title, "Overview"],
                    bgImage: img(0, "https://img.freepik.com/premium-photo/diverse-group-students-holding-books-front-globe-symbolizing-global-education_638974-7905.jpg")
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
                title={title}
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
