import React, { useState } from "react";
import "./ProgramsTab.css";

const programs = [
  {
    id: "imba",
    title: "International Master in Business Administration (iMBA)",
    description:
      "Forge a global path to success, becoming a well-rounded leader through diverse insights. Join a worldwide cohort of career-oriented individuals who want to develop their skills and competencies to become successful business leaders.",
    details: ["Full-Time", "12 Months or Four Terms", "Onsite"],
    who: "Forward-thinking professionals seeking to break through globally, and experience rapid career growth.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "omba",
    title: "Online Master in Business Administration (OMBA)",
    description:
      "Flexible and fully online MBA program for professionals who want to advance their career while balancing work and life.",
    details: ["Part-Time", "Flexible Duration", "Online"],
    who: "Working professionals who prefer a fully online learning experience.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "emba",
    title: "Executive Master in Business Administration (EMBA)",
    description:
      "Designed for experienced managers and executives who want to enhance leadership skills and business expertise.",
    details: ["Part-Time", "18 Months", "Hybrid"],
    who: "Mid-career executives with leadership experience.",
    image:
      "https://images.unsplash.com/photo-1637589316488-6d4c41b335cd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "msc-fintech",
    title: "Master of Science in Financial Technology (MSc FinTech)",
    description:
      "A program that combines finance, technology, and innovation to prepare professionals for the rapidly evolving digital finance industry.",
    details: ["Full-Time", "24 Months", "Onsite/Online"],
    who: "Professionals interested in finance, data, and emerging technologies.",
    image:
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "cybersecurity",
    title: "Master in Cybersecurity (MCS)",
    description:
      "Train to become an expert in information security and learn to protect organizations against cyber threats and attacks.",
    details: ["Full-Time", "18 Months", "Onsite"],
    who: "Tech enthusiasts and IT professionals aiming for a career in cybersecurity.",
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c44367d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mibl",
    title: "Master in International Business Law (MIBL)",
    description:
      "Gain expertise in international business law to navigate global legal systems and corporate frameworks.",
    details: ["Full-Time", "12–18 Months", "Onsite"],
    who: "Law graduates and business professionals pursuing an international career.",
    image:
      "https://images.unsplash.com/photo-1581091215367-59ab6b83dffe?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "msds",
    title: "Master of Science in Data Science (MSDS)",
    description:
      "Develop advanced analytical skills, machine learning expertise, and the ability to extract valuable insights from data.",
    details: ["Full-Time", "24 Months", "Onsite/Online"],
    who: "Graduates with a background in math, engineering, or computer science who want to enter the data field.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mda",
    title: "Master in Data Analytics (MDA)",
    description:
      "Focus on applied analytics and real-world problem solving with tools like Python, R, and advanced visualization methods.",
    details: ["Full-Time", "18 Months", "Onsite"],
    who: "Professionals aiming to specialize in practical data analysis and reporting.",
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function ProgramsTab() {
  const [selectedProgram, setSelectedProgram] = useState(programs[0]);

  return (
    <div className="container-fluid px-5 py-5 masters-programs">
      {/* Mobile Dropdown */}
      <div className="d-md-none mb-4">
        <select
          className="form-select"
          value={selectedProgram.id}
          onChange={(e) =>
            setSelectedProgram(
              programs.find((p) => p.id === e.target.value) || programs[0]
            )
          }
        >
          {programs.map((program) => (
            <option key={program.id} value={program.id}>
              {program.title}
            </option>
          ))}
        </select>
      </div>

        <div className="row">
          {/* Left Side List (sticky on desktop) */}
          <div className="col-md-4 d-none d-md-block">
            <div className="sticky-sidebar">
              <h2 className="mb-4 fw-bold">Master’s Degree Programs</h2>
              <ul className="program-list list-unstyled">
                {programs.map((program) => (
                  <li
                    key={program.id}
                    className={`program-item ${
                      selectedProgram.id === program.id ? "active" : ""
                    }`}
                    onClick={() => setSelectedProgram(program)}
                  >
                    {program.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="col-md-8">
            <div
              key={selectedProgram.id}
              className="fade-slide program-card shadow-lg rounded overflow-hidden"
            >
              <div className="program-card-image">
                <img
                  src={selectedProgram.image}
                  alt={selectedProgram.title}
                  className="img-fluid w-100"
                />
              </div>

              <div className="program-card-body p-4">
                <h3 className="fw-bold mb-3">{selectedProgram.title}</h3>
                <p className="">{selectedProgram.description}</p>

                <div className="program-meta mt-3">
                  <h6 className="fw-semibold mb-2">Program Details</h6>
                  <ul className="list-unstyled">
                    {selectedProgram.details.map((item, i) => (
                      <li key={i} className="d-flex align-items-center mb-1">
                        <i className="bi bi-check-circle-fill text-light me-2"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="program-who mt-4">
                  <h6 className="fw-semibold">Who it is for:</h6>
                  <p>{selectedProgram.who}</p>
                </div>

                <a href="#" className="btn btn-outline-light mt-3 px-4">
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
