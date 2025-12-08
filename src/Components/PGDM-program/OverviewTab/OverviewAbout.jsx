import React from "react";
import { useLocation } from "react-router-dom";

function OverviewAbout() {
  const { pathname } = useLocation();
  const isPGDM = pathname.includes("pgdm");
  const isPGPM = pathname.includes("pgpm");
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
      {/* PGDM CONTENT */}
      {isPGPM && (
        <>
          <p style={{ textAlign: "justify" }}>
The UCU Post Graduate Program in Management (PGPM) is a premier full-time MBA program, offered in an intensive 1-year format, designed for ambitious professionals aiming to accelerate their managerial careers. The PGPM is an AICTE-approved post graduate certificate in management, featuring a modern curriculum, experiential learning pedagogy, and a diverse cohort to ensure enriched peer interactions and practical insights.
          </p>

          <p style={{ textAlign: "justify" }}>
The program emphasizes industry-relevant skills, leadership development, and strategic thinking, preparing students to tackle real-world business challenges. With a combination of case studies, live projects, and mentorship from experienced faculty and industry leaders, UCU PGPM equips professionals with the confidence and competence to thrive in dynamic global business environments.
          </p>
        </>
      )}
      { !isPGPM && !isPGDM &&(
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
