import React from "react";
import "./CourseStructure.css";

export default function CourseStructure() {
  return (
    <section className="course-structure">
      <div className="cs-container">

        {/* HEADER */}
        <h2 className="cs-title"><span className="brand-text">Course</span> Structure</h2>
        <p className="cs-description">
          The PGXPM course structure has been designed keeping in mind your
          professional commitments, providing flexibility to pursue the
          on-campus component of the program without having to take long breaks
          from your job. The program consists of 7 residencies across 20 months.
        </p>

        {/* STATS */}
        <div className="cs-stats">
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
        </div>

        {/* TERMS */}
        <h3 className="cs-subtitle">Term-wise On-Campus Modules</h3>
        <div className="cs-terms">
          {[
            { term: "Term 1", days: 9 },
            { term: "Term 2", days: 9 },
            { term: "Term 3", days: 5 },
            { term: "Term 4", days: 5 },
            { term: "Term 5", days: 5 },
            { term: "Term 6", days: 5 },
            { term: "Term 7", days: 9 },
          ].map((t, i) => (
            <div key={i} className="cs-term-card">
              <h4>{t.term}</h4>
              <span>{t.days} Days</span>
              <small>On Campus</small>
            </div>
          ))}
        </div>

        {/* TABLE */}
        <h3 className="cs-subtitle">Residency Days Overview</h3>
        <div className="cs-table-wrapper">
          <table className="cs-table">
            <thead>
              <tr>
                <th>Year</th>
                <th>Residency Days</th>
                <th>Expected Leaves from Work</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2025</td>
                <td>9</td>
                <td>5</td>
              </tr>
              <tr>
                <td>2026</td>
                <td>24</td>
                <td>14</td>
              </tr>
              <tr>
                <td>2027</td>
                <td>14</td>
                <td>8</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
