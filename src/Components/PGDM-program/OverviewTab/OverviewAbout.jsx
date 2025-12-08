import React from "react";
import { useLocation } from "react-router-dom";

function OverviewAbout() {
  const { pathname } = useLocation();
  const isPGDM = pathname.includes("pgdm");
  return (
    <div>
      <h1 className="display-4 fw-bold col-12 col-lg-12">
        <span style={{ color: "#5ac501" }}>About </span>Programs
      </h1>

      {/* PGDM CONTENT */}
      {isPGDM && (
        <>
          <p style={{ textAlign: "justify" }}>
            The PGDM focuses on developing management skills and business acumen
            though an extensive case-study based pedagogy simulating real-life
            decision-making. Apart from developing a strong appreciation of
            functional areas like Finance, Marketing, Operations, Human
            Resources, Organizational Behavior and Strategy, the program also
            focuses on developing soft skills, emotional intelligence and
            leadership potential. 
          </p>

          <p style={{ textAlign: "justify" }}>
            The students can opt for functional
            specializations in Finance, Marketing, Operations and Analytics.
            Students can opt for a Major and a Minor in two functions, or a
            Double-Major in them, or even a General Management specialization
            with a mix of subjects from each function.
          </p>
        </>
      )}
    </div>
  );
}

export default OverviewAbout;
