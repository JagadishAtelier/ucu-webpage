import React, { useState, useEffect } from "react";
import { FiMapPin, FiUsers, FiBriefcase, FiAward } from "react-icons/fi";
import "./OverviewKeyhighlights.css";
import { BaggageClaim, Book, ChevronDown, Lightbulb, Sun, Award } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaFly } from "react-icons/fa";
import { BsSuitcase } from "react-icons/bs";
import axios from "axios";

const ITEMS = [
  {
    id: "programhighlights",
    label: "Program Overview",
    icon: <Lightbulb size={20} />,
    title: "Program Overview",
    text: `<ul class="clear-div bottom10">
	<li>Two year Fully Residential program</li>
	<li>Emerging economy centric curriculum</li>
	<li>Delivered by the best faculty and industry leaders from across the globe</li>
	<li>Optional semester abroad program [SAP]</li>
	<li>Short term international immersions</li>
	<li>Entrepreneurial Incubation</li>
	<li>Empirical study under Great Lakes Research Centre</li>
	<li>Rigorous 12 week summer internship</li>
	<li>AICTE approved</li>
</ul>`,
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
  },
  {
    id: "internationaltieups",
    label: "International Tie-ups",
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
  },
];

export default function OverviewKeyhighlights() {
  const { pathname } = useLocation();
  const isPGDM = pathname.includes("pgdm");
  const navigate = useNavigate();

  const [active, setActive] = useState("programhighlights");
  const [mobileOpen, setMobileOpen] = useState("programhighlights");
  const [dynamicHighlights, setDynamicHighlights] = useState(null);

  useEffect(() => {
    const fetchHighlights = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/fulltimeprograms`);
        const match = res.data.find((prog) => {
          const titleLower = prog.programTitle?.toLowerCase() || "";
          const idLower = prog._id?.toLowerCase() || "";
          return (
            pathname.toLowerCase().includes(idLower) ||
            pathname.toLowerCase().includes(titleLower.replace(/\s+/g, "-"))
          );
        });
        if (match && match.highlights && match.highlights.length > 0) {
          setDynamicHighlights(match.highlights);
          const firstId = match.highlights[0].id || match.highlights[0].label?.toLowerCase().replace(/\s+/g, "-");
          setActive(firstId);
          setMobileOpen(firstId);
        }
      } catch (err) {
        console.error("Error fetching program highlights:", err);
      }
    };
    fetchHighlights();
  }, [pathname]);

  const getIcon = (name) => {
    switch (name) {
      case "Lightbulb":
        return <Lightbulb size={20} />;
      case "Book":
        return <Book size={20} />;
      case "Suitcase":
        return <BsSuitcase size={20} />;
      case "Sun":
        return <Sun size={20} />;
      case "Award":
        return <Award size={20} />;
      case "Briefcase":
        return <FiBriefcase size={20} />;
      case "Users":
        return <FiUsers size={20} />;
      case "MapPin":
        return <FiMapPin size={20} />;
      default:
        return <Lightbulb size={20} />;
    }
  };

  // Create a copy of ITEMS and add PGDM-specific tab if needed
  let tabs = dynamicHighlights
    ? dynamicHighlights.map((h) => ({
        id: h.id || h.label?.toLowerCase().replace(/\s+/g, "-"),
        label: h.label,
        icon: getIcon(h.iconName),
        title: h.title,
        text: h.text,
      }))
    : [...ITEMS];

  if (!dynamicHighlights && isPGDM) {
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
    });
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
      <div className="col-12 col-lg-12">
        <div className="left-nav d-flex flex-column flex-lg-row gap-lg-3">
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
                  <div className="icon">{item.icon}</div>
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
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* RIGHT CONTENT */}
            <div className="col-12 col-lg-12 d-none d-lg-block PGDMHL-right">
                <div className="PGDMHL-card p-5 position-relative">
                    <div className="PGDMHL-accent"></div>

                    <div className="PGDMHL-header d-flex align-items-center gap-3 mb-4">
                        <div className="PGDMHL-icon">
                            {activeItem.icon}
                        </div>
                        <h3 className="PGDMHL-title m-0">{activeItem.title}</h3>
                    </div>

                    <div
                        className="PGDMHL-text"
                        dangerouslySetInnerHTML={{ __html: activeItem.text }}
                    />
                </div>
            </div>
    </div>
  );
}
