import React from 'react'
import { ChevronRight } from 'lucide-react'
import Navbar from '../../Components/Navbar/Navbar'
import NewFooter from '../../Components/NewFooter/NewFooter'
import './CampusPlacementsPage.css'
import { useState, useRef, useEffect } from "react";
import PlacementTab from '../PgprogramPage/pgTabs/PlacementTab/PlacementTab'
import AdmissionsTab from '../../Components/PGDM-program/AdmissionsTab/AdmissionsTab'
import FeeStructure from '../../Components/PGDM-program/FeeStructure/FeeStructure'
import Curriculum from '../../Components/PGDM-program/Curriculum/Curriculum'
import OverviewTab from '../../Components/PGDM-program/OverviewTab'
import CPPRequirements from './CPPRequirements'
import CPPFullTimeProgram from './CPPFullTimeProgram'
import CPPIntroduction from './CPPIntroduction'


const TAB_LIST = [
    "Introduction",
    "Batch Profiles",
    "Placement Reports",
];
function CampusPlacementsPage() {
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



    // returns different JSX per tab
    const renderContent = (tab) => {
        switch (tab) {
            case "Introduction":
                return (
                    <section aria-labelledby="overview-heading">
                        <CPPIntroduction />
                    </section>
                );

            case "Batch Profiles":
                return (
                    <CPPRequirements />
                );

            case "Fees and Scholarships":
                return (
                    <FeeStructure />
                );

            case "Admissions":
                return (
                    <AdmissionsTab />
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
                    <PlacementTab />
                );

            default:
                return (
                    <div className='mx-auto text-center my-5'>
                        <h1 className="display-4 fw-bold" style={{color:'#5ac501'}}>Coming Soon</h1>
                        <p className="p">We are Cooking something Better.</p>
                    </div>
                );
        }
    };
    return (
        <div>
            <Navbar />
            <div
                data-aos="fade-down"
                className="fac-hero-section d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start text-white text-center text-md-start text-lg-start p-3 p-lg-5 p-lg-7"
                style={{
                    backgroundImage: `url(https://img.freepik.com/premium-photo/happy-graduate-giving-thumbs-up_1152821-13729.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    minHeight: "60vh",
                }}
            >
                <div
                    className="w-100 w-lg-75 w-lg-50 ms-lg-5"
                    data-aos="fade-right"
                >
                    {/* Dynamic Title */}
                    <h1 className="fw-bold fs-1 fs-lg-1">Campus Placements</h1>
                    <p>Explore talent from our pathbreaking industry aligned programs</p>
                </div>

                <div className='position-absolute bottom-0 left-0 d-flex align-items-center campus-route-bg py-3'>
                    <p className='m-0'>UCU</p>
                    <ChevronRight />
                    <p className='m-0'>Campus Placements</p>
                </div>

            </div>
            <div className="pg-tabs-root">
                <nav className="pg-tabs-nav " role="tablist" aria-label="Page sections" ref={navRef}>
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
            <NewFooter />
        </div>
    )
}

export default CampusPlacementsPage