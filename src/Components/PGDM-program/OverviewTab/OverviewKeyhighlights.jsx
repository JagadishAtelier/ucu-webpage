import React, { useState } from "react";
import { FiMapPin, FiUsers, FiBriefcase, FiAward } from "react-icons/fi";
import "./OverviewKeyhighlights.css";
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
    text: `<ul class="clear-div bottom10">
	<li>Two year Fully Residential program</li>
	<li>Emerging economy centric curriculum</li>
	<li>Delivered by the best faculty and industry leaders from across the globe</li>
	<li>Optional semester abroad program [SAP]</li>
	<li>Short term international immersions</li>
	<li>Entrepreneurial Incubation</li>
	<li>Empirical study under Great Lakes Research Centre</li>
	<li>Rigorous 12 week <a href="https://www.greatlakes.edu.in/chennai/pgdm/summer-internship-report">summer internship</a></li>
	<li>AICTE approved</li>
</ul>`,
    action: "Know more",
    link: "/campus-ambience",
  },
  {
    id: "learningexperience",
    label: "Learning Experience",
    icon: <Book size={20} />,
    title: "Learning Experience",
    text: `
    <h4 class="fs-5" style="color:#5ac501">Value-adds Inside Classrooms</h4>
      <ul class="clear-div ms-3">
	<li>Emerging economy centric curriculum</li>
	<li>Foreign language learning [Mandarin &amp; Spanish]</li>
	<li>Horizontal function + Vertical domain focus</li>
	<li>Study of PEST environment of specific emerging economy clusters</li>
	<li>Experiential learning through simulations</li>
	<li>Technology driven virtual classrooms with global connectivity</li>
	<li>Emotional and ethical quotient building</li>
	<li>Exposure to latest curriculum with faculty from across the globe</li>
</ul>
    <h4 class="mt-4 fs-5" style="color:#5ac501">Value-adds Outside Classrooms</h4>
    <ul class="clear-div ms-3">
	<li>Entrepreneurial incubation</li>
	<li>Technopreneurship with focus on emerging markets</li>
	<li>Emerging economy centric empirical study</li>
	<li>Internship with Indian companies having operations abroad</li>
	<li>Karma Yoga - A Leadership Experiential Program</li>
</ul>
    `,
    action: "Find out how",
    link: "/industry-approach",
  },
  {
    id: "internationaltieups",
    label: "International <br/> Tie-ups",
    icon: <BsSuitcase size={20} />,
    title: "International  Tie-ups",
    text: `<ul class="clear-div">
	<li>Tie ups with Schools in Emerging Economies, Europe &amp; USA</li>
	<li>Faculty &amp; student exchange programs across the globe</li>
	<li>MOUs for consulting, knowledge exchange with leading global schools</li>
	<li>Short term international immersions</li>
	<li>SAP [Semester Abroad Program]</li>
	<li>Term structure in sync with international schools</li>
	<li>Sharing of online resources with global schools</li>
	<li>Free boarding / lodging on reciprocal basis for students during exchange</li>
	<li>Joint global summers [8-12 weeks]</li>
</ul>`,
    action: "View placements",
    link: "/placements/recruiters",
  },
];

export default function OverviewKeyhighlights() {
  const { pathname } = useLocation();
  const isPGDM = pathname.includes("pgdm");
  const navigate = useNavigate();

  const [active, setActive] = useState("programhighlights");
  const [mobileOpen, setMobileOpen] = useState("programhighlights");

  // Create a copy of ITEMS and add PGDM-specific tab if needed
  const tabs = [...ITEMS];
  if (isPGDM) {
    tabs.push({
      id: "summerinternship",
      label: "Summer Internship",
      icon: <Sun size={20} />,
      title: "Summer Internship",
      text: `
    <p>The summer internship of Great Lakes is structured more in tune with the traditional summer internships offered across B-schools. It involves rigorous hands on, on-site industry exposure spread over a duration of 8- 10 weeks. If empirical study takes on a theoretical flavor in terms of problem analysis, the summer internship takes on a hands-on applications flavor.</p>
    <h4 class="fs-5" style="color:#5ac501">Some of the salient features of the summer internship are:</h4>
      <ul class="clear-div">
	<li>Runs through the months of April-May-June at the end of the first year.</li>
	<li>Students will be required to put in not less than 120 hours of input.</li>
	<li>This study is done either individually or by groups of two or three students jointly.</li>
	<li>The internship would be mentored by a Great Lakes faculty as well as by an industry mentor.</li>
</ul>
 <h4 class="fs-5" style="color:#5ac501">The benefits that are common to both summer internship and empirical study are:</h4>
 <ul class="clear-div">
	<li>Global academic exposure</li>
	<li>Working with globally connected student teams</li>
	<li>On-field, real time experience</li>
	<li>Building live business solving capabilities</li>
</ul>
    `,
    })
  }

  const activeItem = tabs.find((i) => i.id === active) || tabs[0];

  const handleMobileToggle = (id) => {
    setMobileOpen((prev) => (prev === id ? null : id));
  };

  return (
    <div className="overview-keyhighlights row gx-4 mt-4">
      <h1 className="display-4 fw-bold col-12 col-lg-12 my-4">
        <span style={{ color: "#5ac501" }}>PGDM Program </span>Highlights
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
{/* 
                  <button
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
        <div className="content-card p-4 shadow-sm">
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
