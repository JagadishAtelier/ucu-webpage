import React from "react";
import { Button } from "react-bootstrap";


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
                {/* <div className="cs-stats">
          <div className="cs-stat-box">
            <h3>7</h3>
            <p>On-campus Modules</p>
          </div>
          <div className="cs-stat-box">
            <h3>20</h3>
            <p>Months Duration</p>
          </div>
          <div className="cs-stat-box">
            <h3>47</h3>
            <p>Days on Campus</p>
          </div>
          <div className="cs-stat-box">
            <h3>450+</h3>
            <p>Contact Hours</p>
          </div>
        </div> */}

                {/* TERMS */}
                <h3 className="cs-subtitle">3 Months each / 660 classroom hours</h3>
                <div className="cs-terms pgpm-flex-terms">
                    {[
                        { term: "Term 1", days: 9 },
                        { term: "Term 2", days: 9 },
                        { term: "Term 3", days: 5 },
                        { term: "Term 4", days: 5 },
                        { term: "Term 5", days: 5 },
                        { term: "Term 6", days: 5 },
                    ].map((t, i) => (
                        <div key={i} className="cs-term-card py-4 pgpm-cs-stat-box">
                            <h4 className="m-0">{t.term}</h4>
                            {/* <span>{t.days} Days</span>
              <small>On Campus</small> */}
                        </div>
                    ))}
                </div>

                {/* TABLE */}
                <h3 className="cs-subtitle">Each Term</h3>
                <div className="cs-stats pgpm-flex-stats">
                    <div className="cs-stat-box">
                        <p>LEARN </p>
                        <h3>Classes on Sundays </h3>
                    </div>
                    <div className="cs-stat-box">
                        <p>Apply/Develop</p>
                        <h3>Post Classes 6 days</h3>
                    </div>
                </div>


<div className="PGPMFLEX-learning-container">
      <h3 className="cs-subtitle"> Blended Learning </h3>
      
      <div className="PGPMFLEX-custom-progress-wrapper d-flex">
        {/* 80% In-class Section */}
        <div className="PGPMFLEX-progress-section PGPMFLEX-in-class" style={{ width: '80%' }}>
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


                <div class="PGPXM-download-btnds d-flex flex-column flex-lg-row gap-3 mt-5">
                    <button class="btn custom-download-btn d-flex align-items-center">
                        <i class="fas fa-book-open me-3"></i>
                        <span>Download Curriculum</span>
                    </button>

                    <button class="btn custom-download-btn d-flex align-items-center">
                        <i class="fas fa-users-cog me-3"></i>
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
