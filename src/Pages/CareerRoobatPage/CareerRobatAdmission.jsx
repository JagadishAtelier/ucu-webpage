import React from "react";
import CarresRobatKeyDates from "./CarresRobatKeyDates";
import CareerRobatInterviewProcess from "./CareerRobatInterviewProcess";
import CareerRobatAcademicAbilities from "./CareerRobatAcademicAbilities";
import CareerRobatApplicationGuidelines from "./CareerRobatApplicationGuidelines";
import CareerRobatEssay from "./CareerRobatEssay";
import CareerRobatEvaluationProcess from "./CareerRobatEvaluationProcess";

function CareerRobatAdmission({ getKeyValue, getArray }) {
  const kv = (key, fallback) => (getKeyValue ? getKeyValue("CareerRobatAdmission", key, fallback) : fallback);

  const titleStart = kv("titleStart", "Admission");
  const titleSpan = kv("titleSpan", "Process");
  const desc1 = kv("desc1", "Admissions to the Career Reboot Program for Women follow a rolling interview process, with exceptional candidates receiving early offers even before the official closing date. This system ensures a seamless transition from full-time employment to full-time management education");
  const desc2 = kv("desc2", "The program looks for individuals with strong academic records, relevant professional experience, diverse achievements, and wide-ranging interests—professionals committed to driving meaningful progress in their careers.");

  return (
    <section className="pgdm-section">
      <div className="container my-4 text-justifys">
        <h1 className="display-5 fw-bold">
          <span style={{ color: "#5ac501" }}>{titleStart}</span> {titleSpan}
        </h1>
        <p className="text-justifys">
          {desc1}
        </p>
        <p>
          {desc2}
        </p>
        <CarresRobatKeyDates getKeyValue={getKeyValue} getArray={getArray} />
        <CareerRobatInterviewProcess getKeyValue={getKeyValue} getArray={getArray} />
        <CareerRobatAcademicAbilities getKeyValue={getKeyValue} getArray={getArray} />
        <CareerRobatApplicationGuidelines getKeyValue={getKeyValue} getArray={getArray} />
        <CareerRobatEssay getKeyValue={getKeyValue} getArray={getArray} />
        <CareerRobatEvaluationProcess getKeyValue={getKeyValue} getArray={getArray} />
      </div>
    </section>
  );
}

export default CareerRobatAdmission;
