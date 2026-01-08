import React, { useState } from "react";
import { FiMapPin, FiUsers, FiBriefcase, FiAward } from "react-icons/fi";
import { BaggageClaim, Book, ChevronDown, Lightbulb, Sun } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaFly } from "react-icons/fa";
import { BsSuitcase } from "react-icons/bs";

const ITEMS = [
  {
    id: "programhighlights",
    label: "Program Highlights",
    icon: <Lightbulb size={20} />,
    title: "Program Highlights",
    text: `
      <ul class="clear-div">
        <li>1 year residential program</li>
        <li>Diverse cohort with professionals in the work experience range of 3–5 years</li>
        <li>Delivered by the best faculty and industry leaders from across the globe</li>
        <li>
          Curriculum co-created and co-delivered by CXOs and professionals to maximise
          corporate relevance and post-program outcomes
        </li>
        <li>
          Early networking opportunities with CXOs and BU leaders of leading corporates
        </li>
        <li>Access to premium live projects</li>
      </ul>
    `,
    action: "",
    link: "",
  },
  {
    id: "learningexperience",
    label: "Learning Experience",
    icon: <Book size={20} />,
    title: "Learning Experience",
    text: `
      <ul class="clear-div">
        <li>
          Learn by leveraging the knowledge of CXOs and business leaders via courses
          delivered by Professors of Practice & industry professionals
        </li>
        <li>Case-based learning to maximise hands-on experience</li>
        <li>
          Specialise with two majors – a functional major and an industry sector major
        </li>
      </ul>
    `,
    action: "",
    link: "",
  },
  {
    id: "liveprojects",
    label: "Live Projects",
    icon: <BsSuitcase size={20} />,
    title: "Live Projects",
    text: `
      <ul class="clear-div">
        <li>
          Apply your learning via optional live projects with leading corporations in
          consulting, sales, marketing, finance, technology, and many more
        </li>
        <li>
          Get one-on-one mentorship from managers, leaders, and experts to hone your skills
        </li>
      </ul>
    `,
    action: "",
    link: "",
  },
  {
    id: "whyucu",
    label: "Why UCU PGPM ELITE?",
    icon: <FiAward size={20} />,
    title: "Why UCU PGPM ELITE?",
    text: `
      <ul class="clear-div">
        <li>
          Access CXO-level leaders and learn through their vast experience within classrooms
        </li>
        <li>Leverage opportunities for live projects</li>
        <li>
          Specialise in new-age MBA domains like Fin-Tech, Consulting, Product Management,
          Data Science and AI
        </li>
        <li>
          Complement your industry sector major with conventional functional majors from
          Finance, Marketing, Operations, Sales, etc.
        </li>
      </ul>
    `,
    action: "",
    link: "",
  },
];


export default function PGPMKeyHighlights() {
  const navigate = useNavigate();

  const [active, setActive] = useState("programhighlights");
  const [mobileOpen, setMobileOpen] = useState("programhighlights");

  // Create a copy of ITEMS and add PGDM-specific tab if needed
  const tabs = [...ITEMS];
//     tabs.push({
//       id: "summerinternship",
//       label: "Summer Internship",
//       icon: <Sun size={20} />,
//       title: "Summer Internship",
//       text: `
//     <p>The summer internship of Great Lakes is structured more in tune with the traditional summer internships offered across B-schools. It involves rigorous hands on, on-site industry exposure spread over a duration of 8- 10 weeks. If empirical study takes on a theoretical flavor in terms of problem analysis, the summer internship takes on a hands-on applications flavor.</p>
//     <h4 class="fs-5" style="color:#5ac501">Some of the salient features of the summer internship are:</h4>
//       <ul class="clear-div">
// 	<li>Runs through the months of April-May-June at the end of the first year.</li>
// 	<li>Students will be required to put in not less than 120 hours of input.</li>
// 	<li>This study is done either individually or by groups of two or three students jointly.</li>
// 	<li>The internship would be mentored by a Great Lakes faculty as well as by an industry mentor.</li>
// </ul>
//  <h4 class="fs-5" style="color:#5ac501">The benefits that are common to both summer internship and empirical study are:</h4>
//  <ul class="clear-div">
// 	<li>Global academic exposure</li>
// 	<li>Working with globally connected student teams</li>
// 	<li>On-field, real time experience</li>
// 	<li>Building live business solving capabilities</li>
// </ul>
//     `,
//     })
//     tabs.push({
//       id: "ucudetails",
//       label: "Why is PGPM",
//       icon: <FiAward size={20} />,
//       title: "PGDM Exclusive Highlights",
//       text: `
//     <p>The extensive research, discussions and feedback from CXOs, senior alumni and corporate recruiters across various sectors and cities revealed a demand for professionals who are good at:</p>
//       <ol>
//         <li>Demonstrating structured problem-solving and strong decision-making skills grounded in data-driven insights.</li>
//         <li>Utilizing and implementing disruptive tools like Generative AI andstaying ahead of Industry 4.0 trends.</li>
//         <li>Being able to articulate ideas, problems, and solutions effectively,and leverage storytelling</li>
//         <li>Integrating environmental and social considerations into strategicbusiness decisions.</li>
//       </ol>
//     `,
//     });
//     tabs.push({
//       id: "uculearning",
//       label: "Learning Through Labs",
//       icon: <FiAward size={20} />,
//       title: "Learning Through Labs",
//       text: `
// <ul>
//   <li><p class="mb-1">Impact Skill Labs</p></li>
//   <li><p class="mb-1">Analytics</p></li>
//   <li><p class="mb-1">Marketing</p></li>
//   <li><p class="mb-1">Product Management</p></li>
//   <li><p class="mb-1">Finance</p></li>
//   <li><p class="mb-1">Consulting</p></li>
//   <li><p class="mb-1">Operation</p></li>
//   <li><p class="mb-1">Data Science</p></li>
// </ul>
//     `,
//     });


  const activeItem = tabs.find((i) => i.id === active) || tabs[0];

  const handleMobileToggle = (id) => {
    setMobileOpen((prev) => (prev === id ? null : id));
  };

  return (
    <div className="items-start row gx-4 mt-0">
      <h1 className="display-4 fw-bold col-12 col-lg-12 my-4">
        <span style={{ color: "#5ac501" }}>PGPM Program </span>Highlights
      </h1>

      {/* LEFT NAV */}
      <div className="col-12 col-lg-3">
        <div className="left-nav d-flex flex-column">
          {tabs.map((item) => {
            const isActive = item.id === active;
            const isOpen = mobileOpen === item.id;
            return (
              <div key={item.id}>
                <button
                  className={`nav-pill d-lg-flex d-none align-items-center mb-3 p-3 ${
                    isActive ? "active" : ""
                  }`}
                  onClick={() => setActive(item.id)}
                  aria-pressed={isActive}
                >
                  <div className="icon me-3">{item.icon}</div>
                  <div
                    className="label"
                    dangerouslySetInnerHTML={{ __html: item.label }}
                  ></div>
                </button>

                <button
                  className={`nav-pill mob-nav-pill d-flex d-lg-none align-items-center justify-content-between w-100 p-3 ${
                    isOpen ? "show" : ""
                  }`}
                  onClick={() => handleMobileToggle(item.id)}
                >
                  <div className="d-flex align-items-center">
                    <div className="icon me-3">{item.icon}</div>
                    <div
                      className="label"
                      dangerouslySetInnerHTML={{ __html: item.label }}
                    ></div>
                  </div>
                  <ChevronDown
                    className={`transition ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  className={`mobile-content bg-light p-3 mt-2 rounded shadow-sm d-lg-none ${
                    isOpen ? "show" : ""
                  }`}
                >
                  <h5>{item.title}</h5>
                  <div
                    className="content-text"
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />

                  {/* <button
                    className="btn-cta"
                    onClick={() => navigate(item.link)}
                  >
                    {item.action} <span className="chev">›</span>
                  </button> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="col-12 col-lg-9 d-none d-lg-block">
        <div className="content-card p-4">
          <h3 className="content-title">{activeItem.title}</h3>
          <div
            className="content-text"
            dangerouslySetInnerHTML={{ __html: activeItem.text }}
          />
          {/* {activeItem.action && (
            <button
              onClick={() => navigate(activeItem.link)}
              className="btn-cta"
            >
              {activeItem.action} <span className="chev">›</span>
            </button>
          )} */}
        </div>
      </div>
    </div>
  );
}
