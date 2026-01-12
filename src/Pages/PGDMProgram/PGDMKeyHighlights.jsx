import React, { useState } from "react";
import { FiMapPin, FiUsers, FiBriefcase, FiAward } from "react-icons/fi";
import { BaggageClaim, Book, ChevronDown, Lightbulb, Sun } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaFly } from "react-icons/fa";
import { BsSuitcase } from "react-icons/bs";

const ITEMS = [
    {
        id: "programhighlights",
        label: "About Program",
        icon: <Lightbulb size={20} />,
        title: "About Program",
        text: `
      <ul class="clear-div">
        <li>Two Year fully residential program</li>
        <li>Rigorous 12 week summer internship</li>
        <li>Delivered by the best faculty and industry leaders from across the globe</li>
        <li>
          New Age specializations like GCC, Product Management, Fin-Tech and many more to enable future readiness
        </li>
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
          One on One Industry enabled mentorship
        </li>
        <li>CXOs in classroom to impart board wisdom in classroom interactions</li>
        <li>
          Technology driven virtual classrooms with global connectivity
        </li>
        <li>
          Exposure to latest curriculum with faculty from across the globe
        </li>
      </ul>
    `,
        action: "",
        link: "",
    },
    {
        id: "summerinternship",
        label: "Summer Internship",
        icon: <BsSuitcase size={20} />,
        title: "Summer Internship",
        text: `
      <ul class="clear-div">
        <li>
          An on-site summer internship ranging 2-3 months 
        </li>
        <li>
          Premium Indian corporates providing early hands-on experience to UCU students
        </li>
        <li>
          Opportunity to secure a performance driven PPO
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
            <div className="col-12 col-lg-12">
                <div className="left-nav d-flex flex-row gap-3">
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

                                    {/* <button
                                        className="btn-cta"
                                        onClick={() => navigate(item.link)}
                                    >
                                        {item.action} <span className="chev">›</span>
                                    </button> */}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* RIGHT CONTENT */}
            {/* RIGHT CONTENT – DESKTOP */}
            <div className="col-12 col-lg-12 d-none d-lg-block PGDMHL-right">
                <div className="PGDMHL-card p-5 position-relative">
                    <div className="PGDMHL-accent"></div>

                    <div className="PGDMHL-header d-flex align-items-center gap-3 mb-4">
                        <div className="PGDMHL-icon">
                            {activeItem.icon}
                        </div>
                        <h3 className="PGDMHL-title m-0">{activeItem.title}</h3>
                    </div>

                    <div
                        className="PGDMHL-text"
                        dangerouslySetInnerHTML={{ __html: activeItem.text }}
                    />
                </div>
            </div>

        </div>
    );
}
