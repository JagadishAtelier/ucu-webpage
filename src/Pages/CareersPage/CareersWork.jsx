import { ChevronRight } from "lucide-react";
import React, { useState } from "react";

function CareersWork() {
  const [open, setOpen] = useState(""); // "benefits" | "values" | "culture" | ""

  const toggle = (key) => {
    setOpen(open === key ? "" : key);
  };

  return (
    <div className="captital-campus-content-sec contact-cpo-container">
      <h1 className="display-5 fw-bold">
        Why Work <span style={{ color: "#5ac501" }}>with Us?</span>
      </h1>

      <p className="pt">
        At UCU, we offer competitive benefits, a culture of integrity, innovation, and collaboration.
      </p>

      <div className="d-flex justify-content-between flex-lg-row flex-md-row flex-column">
        <img
          src="https://www.isb.edu/_next/image?url=https%3A%2F%2Fprodcd.isb.edu%2Fmedia%2Fomdphpkc%2Fisb-why-work-with-us.webp%3Fwidth%3D1920%26format%3Dwebp%26quality%3D100&w=3840&q=75"
          className="cw-right-image rounded"
        />

        <div className="d-flex flex-column col-lg-5 col-md-5 col-12">

          {/* BENEFITS */}
          <div
            className="d-flex justify-content-between cw-action-btn-div align-items-center"
            onClick={() => toggle("benefits")}
            style={{ cursor: "pointer" }}
          >
            <p className="m-0 fw-bold fs-5">Benefits</p>
            <ChevronRight />
          </div>

          {open === "benefits" && (
            <p className="mt-2">
              We provide health insurance, paid leave, wellness programs, and growth opportunities.
            </p>
          )}

          {/* VALUES */}
          <div
            className="d-flex justify-content-between cw-action-btn-div align-items-center"
            onClick={() => toggle("values")}
            style={{ cursor: "pointer" }}
          >
            <p className="m-0 fw-bold fs-5">Values</p>
            <ChevronRight />
          </div>

          {open === "values" && (
            <p className="mt-2">
              Our values include integrity, teamwork, diversity, and a commitment to excellence.
            </p>
          )}

          {/* CULTURE */}
          <div
            className="d-flex justify-content-between cw-action-btn-div align-items-center"
            onClick={() => toggle("culture")}
            style={{ cursor: "pointer" }}
          >
            <p className="m-0 fw-bold fs-5">Culture</p>
            <ChevronRight />
          </div>

          {open === "culture" && (
            <p className="mt-2">
              We promote an inclusive, innovative, and collaborative work environment.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CareersWork;
