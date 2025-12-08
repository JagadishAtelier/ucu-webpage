import React from "react";

function PGPMInterviewProcess() {
  return (
    <section className="InterviewProcess">
      <div className="container">
        
        <h2 className="ip-title">Profile-based Early Interview Process:</h2>

        <div className="row align-items-start">

          {/* Left Content */}
          <div className="col-md-7">
            <p>
              UCU will conduct early interviews for{" "}
              <a
                href="https://www.greatlakes.edu.in/chennai/pgpm/"
                className="ip-link"
              >
                PGPM
              </a>{" "}
              Admission Process 2026 wherein applicants who have registered for MBA entrance
              exams - GMAT/CAT/XAT/NMAT but are yet to get the results would be shortlisted
              and interviewed along with candidates with scores basis the strength of their
              profiles. These profile based early interview candidates would be considered
              for final offer post submissions of scores once the test results are declared.
            </p>

            <p>
              The process has been introduced to help strong profile candidates apply early
              and receive results earlier. As the one-year PGPM program begins early, the
              early interview gives students more preparation time.
            </p>

            <p>
              Example: Students taking CAT 2025 and shortlisted for early interview are likely
              to get their CAT score in the 1<sup>st</sup>/<sup>2nd</sup> week of January
              and can get the final result by the end of January. They receive results almost
              3 months before program start.
            </p>

            <p>Following factors are evaluated in the Profile-based Early Interview:</p>

            <ul className="ip-list">
              <li>Academics</li>
              <li>Work Experience</li>
              <li>Awards & Achievements</li>
            </ul>

            <p className="mb-0">
              Final offer will also consider Interview Evaluation, Essays, Diversity, and overall merit.
            </p>
          </div>

          {/* Right Image */}
          <div className="col-md-5 text-center">
            <img
              src="https://www.greatlakes.edu.in/chennai/assets/greatlakes/images/eligibility-pic.webp"
              alt="Eligibility"
              className="img-fluid ip-image"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default PGPMInterviewProcess;
