import React, { useState } from "react";
import ProgramsForIndividualsBanner from "../ProgramsForIndividuals/ProgramsForIndividualsBanner";
import { Calendar1, ChevronLeft, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Button } from "react-bootstrap";
import XELEnterprise from "./XELEnterprise";
import EEPCxo from "./EEPCxo";
import EEPPhd from "./EEPPhd";
import EEPMdps from "./EEPMdps";
import { useNavigate } from "react-router-dom";
import EEPAcademy from "./EEPAcademy";
import LCPBanner from "../LeaderShipCoachPage/LCPBanner";
const bannerImages = [
    'https://img.freepik.com/premium-photo/corporate-business-people-working-busy-marketing-office-space-planning-strategy-books-reading-email-laptop-work_146105-104477.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80',
    'https://img.freepik.com/premium-photo/young-indian-businesswoman-blue-suit-giving-thumbs-up-with-one-hand-holding-documents-standing-office-other-people-background_872074-31460.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80',
    'https://img.freepik.com/premium-photo/woman-board-room-smile-with-tablet-research-teamwork-collaboration-portrait-diversity-happy-with-people-candidates-assessment-job-interview-with-manager-boss_590464-344010.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80'
]

const TAB_LIST = [
    "Individuals Professional",
    "XEL Enterprise Program",
    "CXO Academy",
    "Executive phD",
    "Academic Accelerator",
    "Leadership Coach Academy",
    // "Executive pg Certificate",
    "MDPs",
    "XEL Contact"
];

const TAB_COMPONENTS = [
    <ProgramsForIndividualsBanner />, // Individuals Professional
    <XELEnterprise />,
    <EEPCxo />,
    <EEPPhd />, // Executive phD
    <EEPAcademy />, // Academic Accelerator
    <LCPBanner />, // Leadership Coach Academy
    <div>Executive PG Certificate Content</div>, // Executive pg Certificate
    <EEPMdps />, // MDPs
    <div>XEL Contact Content</div>, // XEL Contact
];

const BANNER_HEADINGS = [
    "Individuals Professional",
    "XEL Enterprise Program",
    " UCU CXO Leadership Academy",
    "UCU Executive PhD in Management (EFPM)",
    "Faculty Development Program",
    "Leadership Coaching Program",
    "Executive pg Certificate",
    "Management Development Programs",
    "XEL Contact"
];
const BANNER_DESCRIPTIONS = [
    "",
    "",
    "Where Leaders Become Visionaries",
    "Where Practice Meets Research, and Leaders Become Scholars.",
    "Empowering Educators, Elevating Institutions",
    "Turning Experience into Executive Excellence",
    "",
    " For Individual Professionals",
    "",
];

function ExecutiveEducationTabs() {
    const [activeTab, setActiveTab] = useState(0);
    const navigate = useNavigate()
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const handleTabClick = (index) => {
        // If XEL Contact tab (last one) clicked → navigate
        if (index === 8) {
            navigate("/contact-us");
            return;
        }

        setActiveTab(index);
    };
    const scrollTabs = (direction) => {
        const box = document.getElementById("tabsScrollBox");
        const scrollAmount = 200;

        if (!box) return;

        if (direction === "right") {
            box.scrollLeft += scrollAmount;
        } else {
            box.scrollLeft -= scrollAmount;
        }

        setTimeout(() => handleScroll(), 100); // update arrow visibility
    };

    const handleScroll = () => {
        const box = document.getElementById("tabsScrollBox");

        if (!box) return;

        const maxScroll = box.scrollWidth - box.clientWidth;

        setShowLeftArrow(box.scrollLeft > 0);
        setShowRightArrow(box.scrollLeft < maxScroll);
    };


    return (
        <div>
            <div className="eep-tabs-wrapper">
                {/* Left Arrow */}
                {showLeftArrow && (
                    <button
                        className="eep-tab-arrow left"
                        onClick={() => scrollTabs("left")}
                    >
                        <ChevronLeft />
                    </button>
                )}

                {/* Scrollable Tabs */}
                <div className="eep-tabs-scroll" id="tabsScrollBox" onScroll={handleScroll}>
                    {TAB_LIST.map((tab, index) => (
                        <div
                            key={index}
                            className={`eep-tab-item ${activeTab === index ? "active" : ""}`}
                            onClick={() => handleTabClick(index)}
                        >
                            {tab}
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                {showRightArrow && (
                    <button
                        className="eep-tab-arrow right"
                        onClick={() => scrollTabs("right")}
                    >
                        <ChevronRight />
                    </button>
                )}
            </div>

            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                speed={1000} // controls smooth slide speed (in ms)
                className="hero-swiper"
            >
                {bannerImages.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="fac-hero-section d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start text-white text-center text-md-start text-lg-start p-3 p-lg-5 p-lg-7 position-relative"
                            style={{
                                backgroundImage: `url(${image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                minHeight: "60vh",
                                transition: "all 1s ease-in-out",
                            }}
                        >
                            <div className="w-100 w-lg-75 w-lg-50 ms-lg-5">
                                <h1 className="fw-bold fs-1 fs-lg-1">
                                    {BANNER_HEADINGS[activeTab]}
                                </h1>
                                {BANNER_DESCRIPTIONS[activeTab] && (
                                    <p className="mt-2 mb-3 fs-5">
                                        {BANNER_DESCRIPTIONS[activeTab]}
                                    </p>
                                )}


                                <div className='d-flex gap-2'>
                                    <Calendar1 />
                                    <p>Nov 10,2025</p>
                                </div>
                                <Button className='text-white' style={{ backgroundColor: "#5ac501", border: "none" }}>Know more</Button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="eep-tab-content">
                {TAB_COMPONENTS[activeTab]}
            </div>
        </div>
    );
}

export default ExecutiveEducationTabs;
