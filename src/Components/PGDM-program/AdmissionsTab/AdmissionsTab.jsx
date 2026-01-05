import React from "react";
import "./AdmissionsTab.css";
import { useLocation } from "react-router-dom";
import PGPMAdmission from "../../../Pages/PgprogramPage/pgTabs/PGPMAdmission/PGPMAdmission";
import PGPMBottomBanner from "../../../Pages/PGPMProgram/PGPMBottomBanner";

export default function AdmissionsTab() {
  return (
        <section className="admissions-tab container p-3 mx-auto  my-1">
          {/* Title */}
          <h3 className="display-6 fw-bold col-12 col-lg-12"><span className="program">PGDM</span> Admission Process</h3>

          {/* Intro paragraph */}
          <p className="pg-panel-body">
            UCU is keen to engage with the finest from the vast talent pool
            available to further its mission: to influence managerial practice and
            promote value-based growth by advancing wise innovations. Its admissions
            and selection process is a well-developed process customised suitably
            for Indian and International applicants.
          </p>

          <p className="pg-panel-body">
            In the context of international applicants, the Government of India
            through AICTE has allocated PGDM an additional 36 seats to be filled
            exclusively by international students, including Persons of Indian
            Origin (PIOs) and Overseas Citizens of India (OCIs), children of Indian
            workers in the Gulf countries and foreign nationals.
          </p>

          {/* Important Timelines */}
          <div className="admissions-section timelines">
            <h4 className="admissions-subtitle">
              Important Timelines (Admissions for 2026–2028)
            </h4>
            <ul className="admissions-list">
              <li>
                <strong>Application opens:</strong> September 16, 2025
              </li>
              <li>
                <strong>Application closes:</strong> November 28, 2025
              </li>
            </ul>
          </div>

          {/* Two-column section */}
          <div className="admissions-columns">
            <div className="admissions-background">
              <div className="admissions-overlay">
                <div className="admissions-buttons">
                  <div className="applicant-box indian">
                    <h5>Indian applicants</h5>
                  </div>
                  <div className="applicant-box international">
                    <h5>International applicants</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Eligibility */}
          <div className="admissions-section">
            <h4 className="admissions-subtitle">Eligibility</h4>
            <p>
              Bachelor’s degree with at least 50% marks or equivalent CGPA in any
              discipline from a recognised university. CAT and GMAT entrance scores
              are accepted. Both fresh graduates and candidates with up to five
              years of work experience can apply for the programme.
            </p>
          </div>

          {/* Application Process */}
          <div className="admissions-section">
            <h4 className="admissions-subtitle">Application Process</h4>
            <p>
              To apply for PGDM, aspirants must fill out the{" "}
              <a href="#" className="highlight-link">
                online application form
              </a>{" "}
              available from September every year. The application processing fee is
              ₹2000.
            </p>
          </div>

          {/* Selection Process */}
          <div className="admissions-section">
            <h4 className="admissions-subtitle">Selection Process</h4>
            <p>
              Applicants are shortlisted based on their profiles. They must also
              meet the qualifying scores in at least one of the entrance exams.
              Shortlisted candidates are invited for interviews, and the final
              selection is based on the applicant’s overall profile and the
              following factors:
            </p>
            <ul className="admissions-list">
              <li>Academic record</li>
              <li>Entrance test performance (CAT/GMAT)</li>
              <li>Work experience (if any)</li>
              <li>Achievements and leadership potential</li>
              <li>Interview performance</li>
            </ul>
          </div>

          {/* Apply Button */}
          <div className="apply-button-wrapper">
            <button
              className="apply-button"
              onClick={() => window.open("/apply", "_blank")}
            >
              Apply Now
            </button>
          </div>
                {/* <div className="mt-5">
      <PGPMBottomBanner/>
      </div> */}
        </section>
  );
}
