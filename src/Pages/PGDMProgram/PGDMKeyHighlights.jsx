import React, { useState } from "react";
import { FiMapPin, FiUsers, FiBriefcase, FiAward } from "react-icons/fi";
import { BaggageClaim, Book, ChevronDown, Lightbulb, Sun } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaFly } from "react-icons/fa";
import { BsSuitcase } from "react-icons/bs";

const ITEMS = [
    {
        id: "programhighlights",
        label: "Program Highlights",
        icon: <Lightbulb size={20} />,
        title: "Program Highlights",
        text: `
      <ul class="clear-div">
        <li>2 year residential program</li>
        <li>Diverse cohort with professionals</li>
        <li>Delivered by the best faculty and industry leaders from across the globe</li>
        <li>
          Curriculum co-created and co-delivered by CXOs and professionals to maximise
          corporate relevance and post-program outcomes
        </li>
        <li>
          Early networking opportunities with CXOs and BU leaders of leading corporates
        </li>
        <li>Access to premium live projects</li>
      </ul>
    `,
        action: "",
        link: "",
    },
    {
        id: "learningexperience",
        label: "Learning Experience",
        icon: <Book size={20} />,
        title: "Learning Experience",
        text: `
      <ul class="clear-div">
        <li>
          Learn by leveraging the knowledge of CXOs and business leaders via courses
          delivered by Professors of Practice & industry professionals
        </li>
        <li>Case-based learning to maximise hands-on experience</li>
        <li>
          Specialise with two majors – a functional major and an industry sector major
        </li>
      </ul>
    `,
        action: "",
        link: "",
    },
    {
        id: "liveprojects",
        label: "Live Projects",
        icon: <BsSuitcase size={20} />,
        title: "Live Projects",
        text: `
      <ul class="clear-div">
        <li>
          Apply your learning via optional live projects with leading corporations in
          consulting, sales, marketing, finance, technology, and many more
        </li>
        <li>
          Get one-on-one mentorship from managers, leaders, and experts to hone your skills
        </li>
      </ul>
    `,
        action: "",
        link: "",
    },
    {
        id: "whyucu",
        label: "Why UCU PGDM?",
        icon: <FiAward size={20} />,
        title: "Why UCU PGDM?",
        text: `
      <ul class="clear-div">
        <li>
          Access CXO-level leaders and learn through their vast experience within classrooms
        </li>
        <li>Leverage opportunities for live projects</li>
        <li>
          Specialise in new-age MBA domains like Fin-Tech, Consulting, Product Management,
          Data Science and AI
        </li>
        <li>
          Complement your industry sector major with conventional functional majors from
          Finance, Marketing, Operations, Sales, etc.
        </li>
      </ul>
    `,
        action: "",
        link: "",
    },
];


export default function PGDMKeyHighlights() {
    const navigate = useNavigate();

    const [active, setActive] = useState("programhighlights");
    const [mobileOpen, setMobileOpen] = useState("programhighlights");

    // Create a copy of ITEMS and add PGDM-specific tab if needed
    const tabs = [...ITEMS];

    const activeItem = tabs.find((i) => i.id === active) || tabs[0];

    const handleMobileToggle = (id) => {
        setMobileOpen((prev) => (prev === id ? null : id));
    };

    return (
        <div className="items-start row gx-4 mt-0">
            <h1 className="display-4 fw-bold col-12 col-lg-12 my-4">
                <span style={{ color: "#5ac501" }}>PGDM Program </span>Highlights
            </h1>

            {/* LEFT NAV */}
            <div className="col-12 col-lg-3">
                <div className="left-nav d-flex flex-column">
                    {tabs.map((item) => {
                        const isActive = item.id === active;
                        const isOpen = mobileOpen === item.id;
                        return (
                            <div key={item.id}>
                                <button
                                    className={`nav-pill d-lg-flex d-none align-items-center mb-3 p-3 ${isActive ? "active" : ""
                                        }`}
                                    onClick={() => setActive(item.id)}
                                    aria-pressed={isActive}
                                >
                                    <div className="icon me-3">{item.icon}</div>
                                    <div
                                        className="label"
                                        dangerouslySetInnerHTML={{ __html: item.label }}
                                    ></div>
                                </button>

                                <button
                                    className={`nav-pill mob-nav-pill d-flex d-lg-none align-items-center justify-content-between w-100 p-3 ${isOpen ? "show" : ""
                                        }`}
                                    onClick={() => handleMobileToggle(item.id)}
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="icon me-3">{item.icon}</div>
                                        <div
                                            className="label"
                                            dangerouslySetInnerHTML={{ __html: item.label }}
                                        ></div>
                                    </div>
                                    <ChevronDown
                                        className={`transition ${isOpen ? "rotate-180" : ""}`}
                                    />
                                </button>

                                <div
                                    className={`mobile-content bg-light p-3 mt-2 rounded shadow-sm d-lg-none ${isOpen ? "show" : ""
                                        }`}
                                >
                                    <h5>{item.title}</h5>
                                    <div
                                        className="content-text"
                                        dangerouslySetInnerHTML={{ __html: item.text }}
                                    />

                                    <button
                                        className="btn-cta"
                                        onClick={() => navigate(item.link)}
                                    >
                                        {item.action} <span className="chev">›</span>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="col-12 col-lg-9 d-none d-lg-block">
                <div className="content-card p-4 shadow-sm">
                    <h3 className="content-title">{activeItem.title}</h3>
                    <div
                        className="content-text"
                        dangerouslySetInnerHTML={{ __html: activeItem.text }}
                    />
                    {activeItem.action && (
                        <button
                            onClick={() => navigate(activeItem.link)}
                            className="btn-cta"
                        >
                            {activeItem.action} <span className="chev">›</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
