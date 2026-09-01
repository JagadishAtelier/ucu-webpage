import { ChevronRight } from "lucide-react";
import React, { useState } from "react";

function CareersWork({ getKeyValue, getArray, getImage }) {
  const [open, setOpen] = useState("");

  const kv = (key, fallback) => (getKeyValue ? getKeyValue("CareersWork", key, fallback) : fallback);
  const arr = (key, fallback) => (getArray ? getArray("CareersWork", key, fallback) : fallback);
  const img = (index, fallback) => (getImage ? getImage("CareersWork", index, fallback) : fallback);

  const headingStart = kv("headingStart", "Why Work");
  const headingSpan = kv("headingSpan", "with Us?");
  const description = kv("description", "At UCU, we offer competitive benefits, a culture of integrity, innovation, and collaboration.");
  const sideImage = img(0, "https://www.isb.edu/_next/image?url=https%3A%2F%2Fprodcd.isb.edu%2Fmedia%2Fomdphpkc%2Fisb-why-work-with-us.webp%3Fwidth%3D1920%26format%3Dwebp%26quality%3D100&w=3840&q=75");

  const defaultAccordionData = [
    { key: "benefits", title: "Benefits", content: "We provide health insurance, paid leave, wellness programs, and growth opportunities." },
    { key: "values", title: "Values", content: "Our values include integrity, teamwork, diversity, and a commitment to excellence." },
    { key: "culture", title: "Culture", content: "We promote an inclusive, innovative, and collaborative work environment." }
  ];
  const accordionData = arr("accordionData", defaultAccordionData);

  const toggle = (key) => {
    setOpen(open === key ? "" : key);
  };

  return (
    <div className="captital-campus-content-sec contact-cpo-container">
      <h1 className="display-5 fw-bold">
        {headingStart} <span style={{ color: "#5ac501" }}>{headingSpan}</span>
      </h1>

      <p className="pt">
        {description}
      </p>

      <div className="d-flex justify-content-between flex-lg-row flex-md-row flex-column">
        <img
          src={sideImage}
          className="cw-right-image rounded"
          alt="Why work with us"
        />

        <div className="d-flex flex-column col-lg-5 col-md-5 col-12">
          {accordionData.map((item) => (
            <div key={item.key} className="w-100">
              <div
                className="d-flex justify-content-between cw-action-btn-div align-items-center"
                onClick={() => toggle(item.key)}
                style={{ cursor: "pointer" }}
              >
                <p className="m-0 fw-bold fs-5">{item.title}</p>
                <ChevronRight className={open === item.key ? "rotate-90 transition-transform" : "transition-transform"} />
              </div>

              {open === item.key && (
                <p className="mt-2 text-secondary">
                  {item.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CareersWork;
