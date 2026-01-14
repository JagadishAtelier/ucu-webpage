import React from "react";
import { Building2, CalendarClock, MapPin, Clock } from "lucide-react";
// CSS is imported in parent or globally: ../../Pages/PGPMFlexPage/PGPMFlexPage.css

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

export default function CourseStructure() {
  return (
    <section className="course-structure p-sm-0">
      <div className="cs-container px-sm-0">

        {/* HEADER */}
        <h2 className="cs-title"><span className="brand-text">Course</span> Overview</h2>
        <p className="text-justify mb-5">
          The PGXPM course structure has been designed keeping in mind your professional commitments, providing flexibility to pursue the in-class component of the program without having to take long breaks from your job. The program will consist of 1 residency in each of the 7 terms, with the first, fourth and final residencies of 9 days each and the intermediate residencies of 5 days each. The program will commence during winter 2025 and conclude by summer 2026.
        </p>

        {/* STATS */}
        <div className="PGPMFLEX-vibrant-stats-grid">
          {[
            { value: "7", label: "On-campus Modules", icon: <Building2 size={32} />, color: "#0d6efd" },
            { value: "20", label: "Months Duration", icon: <CalendarClock size={32} />, color: "#5ac501" },
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
        <h3 className="cs-subtitle mt-5">Term-wise On-Campus Modules</h3>
        <div className="cs-terms pgxpm-terms-grid">
          {[
            { term: "Term 1", days: 9, gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)" }, // green → aqua
            { term: "Term 2", days: 9, gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" }, // blue → cyan
            { term: "Term 3", days: 5, gradient: "linear-gradient(135deg, #00c9a7 0%, #92fe9d 100%)" }, // teal → light green
            { term: "Term 4", days: 5, gradient: "linear-gradient(135deg, #36d1dc 0%, #5b86e5 100%)" }, // aqua → blue
            { term: "Term 5", days: 5, gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)" }, // dark teal → green
            { term: "Term 6", days: 5, gradient: "linear-gradient(135deg, #56ccf2 0%, #2f80ed 100%)" }, // sky → deep blue
            { term: "Term 7", days: 9, gradient: "linear-gradient(135deg, #1d976c 0%, #93f9b9 100%)" }, // emerald → mint
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

        <div className="pgxpm-download-actions d-flex flex-column flex-md-row gap-4 mt-5 justify-content-center">
          <button className="btn pgxpm-download-btn d-flex align-items-center justify-content-center gap-3">
            <div className="icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
            </div>
            <span>Download Curriculum</span>
          </button>

          <button className="btn pgxpm-download-btn d-flex align-items-center justify-content-center gap-3">
            <div className="icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
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
