import React, { useState } from "react";

export default function InternationalChapters() {

    const regions = {

        /* ---------------- USA ---------------- */
        USA: {
            isGroup: false,
            data: {
                name: "USA",
                chapterName: "USA_UCU_Chapter",
                flag: "https://flagcdn.com/us.svg",
                description: "The USA UCU chapter supports activities across North America.",
                email: "usachapter@ucu.org",
                contact: "+1 987 654 3210"
            }
        },

        /* ---------------- Canada ---------------- */
        Canada: {
            isGroup: false,
            data: {
                name: "Canada",
                chapterName: "Canada_UCU_Chapter",
                flag: "https://flagcdn.com/ca.svg",
                description: "Canadian UCU chapter manages student and alumni programs.",
                email: "canadachapter@ucu.org",
                contact: "+1 555 234 7890"
            }
        },

        /* ---------------- UK ---------------- */
        UK: {
            isGroup: false,
            data: {
                name: "UK",
                chapterName: "UK_UCU_Chapter",
                flag: "https://flagcdn.com/gb.svg",
                description: "The UK chapter leads European collaboration and events.",
                email: "ukchapter@ucu.org",
                contact: "+44 1234 567890"
            }
        },

        /* ---------------- European Union ---------------- */
        "European Union": {
            isGroup: true,
            countries: [
                { name: "Germany", chapterName: "Germany_UCU_Chapter", flag: "https://flagcdn.com/de.svg", description: "Germany chapter organizes EU regional events.", email: "germanychapter@ucu.org", contact: "+49 444 555 666" },
                { name: "France", chapterName: "France_UCU_Chapter", flag: "https://flagcdn.com/fr.svg", description: "French chapter handles cultural projects.", email: "francechapter@ucu.org", contact: "+33 111 222 333" },
                { name: "Italy", chapterName: "Italy_UCU_Chapter", flag: "https://flagcdn.com/it.svg", description: "Italy chapter promotes art & history programs.", email: "italychapter@ucu.org", contact: "+39 987 654 321" },
                { name: "Netherlands", chapterName: "Netherlands_UCU_Chapter", flag: "https://flagcdn.com/nl.svg", description: "Netherlands chapter handles student outreach.", email: "nlschapter@ucu.org", contact: "+31 222 333 444" },
                { name: "Denmark", chapterName: "Denmark_UCU_Chapter", flag: "https://flagcdn.com/dk.svg", description: "Denmark chapter manages innovation events.", email: "denmarkchapter@ucu.org", contact: "+45 888 777 222" },
                { name: "Finland", chapterName: "Finland_UCU_Chapter", flag: "https://flagcdn.com/fi.svg", description: "Finland chapter coordinates academic programs.", email: "finlandchapter@ucu.org", contact: "+358 777 666 555" },
                { name: "Spain", chapterName: "Spain_UCU_Chapter", flag: "https://flagcdn.com/es.svg", description: "Spain chapter works on cultural exchange.", email: "spainchapter@ucu.org", contact: "+34 654 321 987" },
                { name: "Sweden", chapterName: "Sweden_UCU_Chapter", flag: "https://flagcdn.com/se.svg", description: "Sweden chapter supports student networking.", email: "swedenchapter@ucu.org", contact: "+46 111 999 888" }
            ]
        },

        /* ---------------- APAC ---------------- */
        APAC: {
            isGroup: true,
            countries: [
                { name: "Australia", chapterName: "Australia_UCU_Chapter", flag: "https://flagcdn.com/au.svg", description: "Australia chapter leads APAC region events.", email: "australiachapter@ucu.org", contact: "+61 123 987 555" },
                { name: "Japan", chapterName: "Japan_UCU_Chapter", flag: "https://flagcdn.com/jp.svg", description: "Japan chapter works on research collaborations.", email: "japanchapter@ucu.org", contact: "+81 321 654 987" },
                { name: "Philippines", chapterName: "Philippines_UCU_Chapter", flag: "https://flagcdn.com/ph.svg", description: "Philippines chapter leads student engagement.", email: "philippineschapter@ucu.org", contact: "+63 333 555 666" },
                { name: "Singapore", chapterName: "Singapore_UCU_Chapter", flag: "https://flagcdn.com/sg.svg", description: "Singapore chapter supports global programs.", email: "singaporechapter@ucu.org", contact: "+65 987 222 444" },
                { name: "South Korea", chapterName: "Korea_UCU_Chapter", flag: "https://flagcdn.com/kr.svg", description: "Korea chapter organizes academic seminars.", email: "koreachapter@ucu.org", contact: "+82 333 444 555" },
                { name: "Hong Kong", chapterName: "HongKong_UCU_Chapter", flag: "https://flagcdn.com/hk.svg", description: "Hong Kong chapter manages international events.", email: "hkchapter@ucu.org", contact: "+852 222 333 444" },
                { name: "China", chapterName: "China_UCU_Chapter", flag: "https://flagcdn.com/cn.svg", description: "China chapter organizes collaborative programs.", email: "chinachapter@ucu.org", contact: "+86 666 555 444" }
            ]
        },

        /* ---------------- Middle East ---------------- */
        "Middle East": {
            isGroup: true,
            countries: [
                { name: "UAE", chapterName: "UAE_UCU_Chapter", flag: "https://flagcdn.com/ae.svg", description: "UAE chapter leads Middle East initiatives.", email: "uaechapter@ucu.org", contact: "+971 444 555 666" },
                { name: "Bahrain", chapterName: "Bahrain_UCU_Chapter", flag: "https://flagcdn.com/bh.svg", description: "Bahrain chapter handles youth programs.", email: "bahrainchapter@ucu.org", contact: "+973 222 444 111" },
                { name: "Muscat", chapterName: "Muscat_UCU_Chapter", flag: "https://flagcdn.com/om.svg", description: "Muscat chapter coordinates alumni meetups.", email: "muscatchapter@ucu.org", contact: "+968 777 999 222" },
                { name: "Saudi Arabia", chapterName: "Saudi_UCU_Chapter", flag: "https://flagcdn.com/sa.svg", description: "Saudi chapter manages educational projects.", email: "saudichapter@ucu.org", contact: "+966 321 555 777" },
                { name: "Qatar", chapterName: "Qatar_UCU_Chapter", flag: "https://flagcdn.com/qa.svg", description: "Qatar chapter focuses on cultural activities.", email: "qatarchapter@ucu.org", contact: "+974 222 111 333" },
                { name: "Israel", chapterName: "Israel_UCU_Chapter", flag: "https://flagcdn.com/il.svg", description: "Israel chapter runs startup & tech programs.", email: "israelchapter@ucu.org", contact: "+972 444 222 555" }
            ]
        },

        /* ---------------- South Africa ---------------- */
        "South Africa": {
            isGroup: false,
            data: {
                name: "South Africa",
                chapterName: "SouthAfrica_UCU_Chapter",
                flag: "https://flagcdn.com/za.svg",
                description: "The South Africa chapter manages African region outreach.",
                email: "southafricachapter@ucu.org",
                contact: "+27 987 654 321"
            }
        }
    };

    const [activeTab, setActiveTab] = useState("USA");

    return (
        <div className="captital-campus-content-sec mt-5">
            <h1 className="mb-4 text-center">International Chapters</h1>
            {/* Tabs */}
            <div className="InternationalChapters__tabs">
                {Object.keys(regions).map((region) => (
                    <button
                        key={region}
                        className={`InternationalChapters__tabButton ${activeTab === region ? "InternationalChapters__tabActive" : ""
                            }`}
                        onClick={() => setActiveTab(region)}
                    >
                        {region}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="InternationalChapters__contentArea">
                <div className="InternationalChapters__single-card-div">
                    {/* SINGLE COUNTRY CARD */}
                    {!regions[activeTab].isGroup && (
                        <div className="InternationalChapters__singleCard">
                            <div className="InternationalChapters__left"
                                style={{ backgroundImage: `url(${regions[activeTab].data.flag})` }}>
                                <h2>{regions[activeTab].data.chapterName}</h2>
                                <p>{regions[activeTab].data.description}</p>

                                <div className="InternationalChapters__info">
                                    <p><strong>Email:</strong> {regions[activeTab].data.email}</p>
                                    <p><strong>Contact:</strong> {regions[activeTab].data.contact}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* MULTIPLE COUNTRY CARDS */}
                {regions[activeTab].isGroup && (
                    <div className="InternationalChapters__cardGrid">
                        {regions[activeTab].countries.map((country) => (
                            <div className="InternationalChapters__left" key={country.name}
                            style={{ backgroundImage: `url(${country.flag})` }}>
                                {/* <img src={country.flag} className="InternationalChapters__flag" alt="flag" /> */}
                                <h3>{country.chapterName}</h3>
                                <p>{country.description}</p>

                                <div className="InternationalChapters__info">
                                    <p><strong>Email:</strong> {country.email}</p>
                                    <p><strong>Contact:</strong> {country.contact}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
}
