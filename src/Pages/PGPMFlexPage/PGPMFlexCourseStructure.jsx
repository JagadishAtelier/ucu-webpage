import React from "react";
import { Button } from "react-bootstrap";
import { Building2, CalendarClock, MapPin, Clock, BookOpen, Users } from "lucide-react";


const brands = [
    { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/8/85/Intel_logo_2023.svg" },
    { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/archive/6/61/20210930181848%21Samsung_old_logo_before_year_2015.svg" },
    { name: "Sony", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/960px-Sony_logo.svg.png" },
    { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" },
    { name: "Facebook", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" },
    { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
    { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg" },
];
export default function PGPMFlexCourseStructure() {
    return (
        <section className="course-structure p-sm-0">
            <div className="cs-container px-sm-0">

                {/* HEADER */}
                <h2 className="cs-title"><span className="brand-text">Course</span> Overview</h2>

                {/* STATS */}
                <div className="PGPMFLEX-vibrant-stats-grid">
                    {[
                        { value: "7", label: "On-campus Modules", icon: <Building2 size={32} />, color: "#0d6efd" },
                        { value: "21", label: "Months Duration", icon: <CalendarClock size={32} />, color: "#5ac501" },
                        { value: "47", label: "Days on Campus", icon: <MapPin size={32} />, color: "#e11d48" },
                        { value: "450+", label: "Contact Hours", icon: <Clock size={32} />, color: "#9333ea" }
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="PGPMFLEX-vibrant-stat-card"
                            style={{ '--stat-color': stat.color }}
                        >
                            <div className="PGPMFLEX-stat-icon-wrapper">
                                {stat.icon}
                            </div>
                            <div className="PGPMFLEX-vibrant-stat-value">{stat.value}</div>
                            <div className="PGPMFLEX-vibrant-stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* TERMS */}
                <h3 className="cs-subtitle">3 Months each / 660 classroom hours</h3>
                <div className="pgpm-flex-6-grid mb-4">
                    {[
                        { term: "Term 1", days: 9, gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)" },
                        { term: "Term 2", days: 9, gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" },
                        { term: "Term 3", days: 5, gradient: "linear-gradient(135deg, #00c9a7 0%, #92fe9d 100%)" },
                        { term: "Term 4", days: 5, gradient: "linear-gradient(135deg, #36d1dc 0%, #5b86e5 100%)" },
                        { term: "Term 5", days: 5, gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)" },
                        { term: "Term 6", days: 5, gradient: "linear-gradient(135deg, #56ccf2 0%, #2f80ed 100%)" },
                    ].map((t, i) => (
                        <div
                            key={i}
                            className="cs-term-card pgxpm-term-card"
                            style={{ background: t.gradient }}
                        >
                            <h4 className="m-0 text-white">{t.term}</h4>
                            <span className="d-block mt-2 fw-bold text-white fs-4">{t.days} Days</span>
                            <small className="text-white-50">On Campus</small>
                        </div>
                    ))}
                </div>

                {/* TABLE */}
                {/* TABLE */}
                <h3 className="cs-subtitle">Each Term</h3>
                <div className="row g-4 mb-5">
                    <div className="col-md-6">
                        <div className="cs-stat-box h-100 p-4 rounded-4 text-center learn-box d-flex flex-column justify-content-center">
                            <h6 className="text-uppercase fw-bold opacity-75 mb-2 ls-wider">Learn</h6>
                            <h3 className="fw-bolder mb-0 display-6">Classes on Sundays</h3>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="cs-stat-box h-100 p-4 rounded-4 text-center apply-box d-flex flex-column justify-content-center">
                            <h6 className="text-uppercase fw-bold opacity-75 mb-2 ls-wider">Apply / Develop</h6>
                            <h3 className="fw-bolder mb-0 display-6">Post Classes 6 Days</h3>
                        </div>
                    </div>
                </div>


                <div className="PGPMFLEX-learning-container">
                    <h3 className="cs-subtitle"> Blended Learning </h3>

                    <div className="PGPMFLEX-custom-progress-wrapper d-flex">
                        {/* 80% In-class Section */}
                        <div className="PGPMFLEX-progress-section PGPMFLEX-in-class" style={{ width: '80%',color:'#fff' }}>
                            <span className="PGPMFLEX-percent">80%</span>
                            <span className="PGPMFLEX-label">In-class</span>
                        </div>

                        {/* 20% Digital Section */}
                        <div className="PGPMFLEX-progress-section PGPMFLEX-digital" style={{ width: '20%' }}>
                            <span className="PGPMFLEX-percent">20%</span>
                            <span className="PGPMFLEX-label">Digital</span>
                        </div>
                    </div>
                </div>


                <div className="pgxpm-download-actions d-flex flex-column flex-md-row gap-4 mt-5 justify-content-center">
                    <button className="btn pgxpm-download-btn d-flex align-items-center justify-content-center gap-3">
                        <div className="icon-box">
                            <BookOpen size={24} />
                        </div>
                        <span>Download Curriculum</span>
                    </button>

                    <button className="btn pgxpm-download-btn d-flex align-items-center justify-content-center gap-3">
                        <div className="icon-box">
                            <Users size={24} />
                        </div>
                        <span>Download Class Profile</span>
                    </button>
                </div>
                <h3 className="cs-subtitle mt-5">Participant’s Organisations</h3>
                <div className="marquee mt-3">
                    <div className="marquee-content">
                        {brands.concat(brands).map((brand, index) => ( // duplicate for smooth loop
                            <div key={index} className="brand-card">
                                <img src={brand.logo} alt={brand.name} className="brand-logo" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
