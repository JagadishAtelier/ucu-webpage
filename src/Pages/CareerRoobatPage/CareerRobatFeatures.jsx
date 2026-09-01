import React from "react";

const defaultFeatures = [
  "Hybrid program with 50% of the courses delivered on campus and the remaining 50% online",
  "One-on-one mentorship available through SMEs and industry experts from leading corporates",
  "75% of the course delivered via industry practitioners and professors of practice to ensure industry relevance",
  "Course co-created with leading corporations",
  "Hands-on learning with case studies",
  "Optional opportunities to undertake live project with industry",
  "Dedicated Career Grooming & Placement Support via UCU facilitated job opportunities"
];

function CareerRobatFeatures({ getKeyValue, getArray }) {
  const kv = (key, fallback) => (getKeyValue ? getKeyValue("CareerRobatFeatures", key, fallback) : fallback);
  const arr = (key, fallback) => (getArray ? getArray("CareerRobatFeatures", key, fallback) : fallback);

  const titleSpan = kv("titleSpan", "Key features");
  const titleText = kv("titleText", "about the program");
  const features = arr("featuresList", defaultFeatures);

  return (
    <section className="CRPFeatures py-lg-5 pb-0">
      <div className="container">
        <h3 className="CRPFeatures-title mb-4">
          <span style={{ color: "#5ac501" }}>{titleSpan} </span> {titleText}
        </h3>

        <div className="CRPFeatures-panel">
          {features.map((item, index) => (
            <div className="CRPFeatures-point" key={index}>
              <span className="CRPFeatures-dot"></span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CareerRobatFeatures;
