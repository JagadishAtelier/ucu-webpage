import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const tabData = {
    fulltime: [
        {
            head: "PGPM ELITE | Career Accelerator Program",
            listHead: "Talent Offerings",
            list: ["Hybrid Live Projects", "PGPM ELITE Internships", "Final Placements"]
        },
        {
            head: "PGDM | Young Leaders' Program",
            listHead: "Talent Offerings",
            list: [
                "Hybrid Live Projects",
                "PGDM Internships",
                "Final Placements",
            ]
        }
    ],
    flexi: [
        {
            head: "PGPM Flex",
            listHead: "Talent Offerings",
            list: ["Hybrid Live Projects", "Flexi Internships", "Final Placements"]
        },
        {
            head: "PGXPM",
            listHead: "Talent Offerings",
            list: ["Industry Based Capstone Projects", "Final Placements"]
        }
    ],
    executive: {
        functional: [
            {
                head: "Sales",
                listHead: "Talent Offerings",
                list: ["Hybrid Live Projects", "Flexi Internships", "Final Placements"]
            },
            {
                head: "Product",
                listHead: "Talent Offerings",
                list: ["Industry Based Capstone Projects", "Final Placements"]
            },
            {
                head: "Consulting",
                listHead: "Talent Offerings",
                list: ["Industry Based Capstone Projects", "Final Placements"]
            },
            {
                head: "Digital Marketing & AI",
                listHead: "Talent Offerings",
                list: ["Industry Based Capstone Projects", "Final Placements"]
            },
            {
                head: "Banking & Finance",
                listHead: "Talent Offerings",
                list: ["Industry Based Capstone Projects", "Final Placements"]
            }
        ],

        industrySector: [
            {
                head: "FinTech Genesis",
                listHead: "Talent Offerings",
                list: ["Industry Based Capstone Projects", "Final Placements"]
            },
            {
                head: "GCC Launchpad",
                listHead: "Talent Offerings",
                list: ["Industry Based Capstone Projects", "Final Placements"]
            },
            {
                head: "HealthTech Ignition",
                listHead: "Talent Offerings",
                list: ["Industry Based Capstone Projects", "Final Placements"]
            },
            {
                head: "Advanced Manufacturing",
                listHead: "Talent Offerings",
                list: ["Industry Based Capstone Projects", "Final Placements"]
            },
        ]
    },
    career: [
        {
            head: "Career Reboot Program for Women",
            listHead: "Talent Offerings",
            list: ["Hybrid Live Projects", "Flexi Internships", "Final Placements"]
        },
    ],
};

// ✅ TITLE FOR EACH TAB
const tabTitles = {
    fulltime: "Full-Time Programs",
    flexi: "Flexi Programs",
    executive: "Functional Specialization",
    career: "Career Reboot Program for Women",
};

function TalentFullTime() {
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState("fulltime");

    return (
        <div className="container talent-container py-5">

            {/* ------------------ CUSTOM TABS ------------------ */}
            <div className="TP-custom-tabs mb-4">
                <button
                    className={`TP-custom-tab-btn ${activeTab === "fulltime" ? "active" : ""
                        }`}
                    onClick={() => setActiveTab("fulltime")}
                >
                    Full-Time Programs
                </button>

                <button
                    className={`TP-custom-tab-btn ${activeTab === "flexi" ? "active" : ""
                        }`}
                    onClick={() => setActiveTab("flexi")}
                >
                    Flexi Programs
                </button>
                <button
                    className={`TP-custom-tab-btn ${activeTab === "executive" ? "active" : ""
                        }`}
                    onClick={() => setActiveTab("executive")}
                >
                    Executive Programs
                </button>
                <button
                    className={`TP-custom-tab-btn ${activeTab === "career" ? "active" : ""
                        }`}
                    onClick={() => setActiveTab("career")}
                >
                    Career Reboot Programs
                </button>
            </div>

            {/* ------------------ TAB TITLE ------------------ */}
            <h1 className="mb-4 text-center">{tabTitles[activeTab]}</h1>

            {/* ------------------ TAB CONTENT ------------------ */}
            <div className="row g-4 justify-content-center">

                {/* Executive — Functional & Industry Section */}
                {activeTab === "executive" ? (
                    <>
                        {/* Functional Title */}
                        {tabData.executive.functional.map((item, index) => (
                            <div onClick={() => navigate("/talent-details", { state: { head: item.head } })}
                                className="col-lg-4 col-md-6 cursor-pointer" key={index}>
                                <div className="talent-card p-4 shadow">
                                    <h3 className="talent-head">{item.head}</h3>
                                    <p className="talent-subhead">{item.listHead}</p>

                                    <ul className="talent-list m-0">
                                        {item.list.map((li, idx) => (
                                            <li key={idx}>
                                                <i className="bi bi-check-circle-fill talent-icon"></i>
                                                {li}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="text-center mt-lg-auto mt-md-auto mt-4">
                                        <button className="btn talent-btn w-100">
                                            View Class Profile
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Industry Sector Title */}
                        <h1 className="text-center my-4">Industry Sector Specialization</h1>
                        {tabData.executive.industrySector.map((item, index) => (
                            <div onClick={() => navigate("/talent-details", { state: { head: item.head } })}
                                className="col-lg-4 col-md-6" key={index}>
                                <div className="talent-card p-4 shadow">
                                    <h3 className="talent-head">{item.head}</h3>
                                    <p className="talent-subhead">{item.listHead}</p>

                                    <ul className="talent-list m-0">
                                        {item.list.map((li, idx) => (
                                            <li key={idx}>
                                                <i className="bi bi-check-circle-fill talent-icon"></i>
                                                {li}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="text-center mt-lg-auto mt-md-auto mt-4">
                                        <button className="btn talent-btn w-100">
                                            View Class Profile
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    /* Default Fulltime & Flexi render */
                    tabData[activeTab].map((item, index) => (
                        <div onClick={() => navigate("/talent-details", { state: { head: item.head } })}
                            className="col-lg-4 col-md-6" key={index}>
                            <div className="talent-card p-4 shadow">
                                <h3 className="talent-head">{item.head}</h3>
                                <p className="talent-subhead">{item.listHead}</p>

                                <ul className="talent-list m-0">
                                    {item.list.map((li, idx) => (
                                        <li key={idx}>
                                            <i className="bi bi-check-circle-fill talent-icon"></i>
                                            {li}
                                        </li>
                                    ))}
                                </ul>

                                <div className="text-center mt-lg-auto mt-md-auto mt-4">
                                    <button className="btn talent-btn w-100">
                                        View Class Profile
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

        </div>
    );
}

export default TalentFullTime;
