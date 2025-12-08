import React, { useState } from "react";
import { FiMapPin, FiUsers, FiBriefcase, FiAward } from "react-icons/fi";
import "./OverviewKeyhighlights.css";
import { ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const ITEMS = [
  {
    id: "location",
    label: "Location",
    icon: <FiMapPin size={20} />,
    title: "Location",
    text: `<p>Coming Soon</p>`,
    action: "Know more",
    link: "/campus-ambience"
  },
  {
    id: "pedagogy",
    label: "Innovative pedagogy",
    icon: <FiUsers size={20} />,
    title: "Innovative pedagogy",
    text: `
      <ol>
        <li class='fw-bold'>Industry-First Program Design</li>
        <h6 class='fw-light mt-2'>Co-created and continuously driven by 500+ CXOs, SMEs, and domain leaders </h6>

        <li class='fw-bold'>Personalized Career Navigation</li>
        <h6 class='fw-light mt-2'> Every student receives tailored guidance through our 1:1 industry mentorship framework </h6>

        <li class='fw-bold'>Learning by Solving</li>
        <h6 class='fw-light mt-2'> Curriculum anchored in live projects, problem-based coursework, and immersive hands-on experiences  </h6>

        <li class='fw-bold'>World-Class Learning Infrastructure</li>
        <h6 class='fw-light mt-2'> State-of-the-art facilities designed to elevate engagement, collaboration, and applied learning </h6>
      </ol>
    `,
    action: "Find out how",
    link: "/industry-approach"
  },
  {
    id: "placements",
    label: "Our Recruiters",
    icon: <FiBriefcase size={20} />,
    title: "Our Recruiters",
    text: `<p>UCU connects students to cutting-edge career opportunities across emerging and high-growth sectors. Through strategic partnerships and deep industry integration, we enable graduates to fast-track their careers and step confidently onto the path of business leadership</p>`,
    action: "View placements",
    link: "/placements/recruiters"
  },
];

export default function OverviewKeyhighlights() {
  const { pathname } = useLocation();
  const isPGDM = pathname.includes("pgdm");
  const isPGPM = pathname.includes("pgpm");
  const navigate = useNavigate();

  const [active, setActive] = useState("location");
  const [mobileOpen, setMobileOpen] = useState("location");

  // Create a copy of ITEMS and add PGDM-specific tab if needed
  const tabs = [...ITEMS];
  if (isPGDM) {
    tabs.push({
      id: "ucudetails",
      label: "Why is PGDM",
      icon: <FiAward size={20} />,
      title: "PGDM Exclusive Highlights",
      text: `
    <p>The extensive research, discussions and feedback from CXOs, senior alumni and corporate recruiters across various sectors and cities revealed a demand for professionals who are good at:</p>
      <ol>
        <li>Demonstrating structured problem-solving and strong decision-making skills grounded in data-driven insights.</li>
        <li>Utilizing and implementing disruptive tools like Generative AI andstaying ahead of Industry 4.0 trends.</li>
        <li>Being able to articulate ideas, problems, and solutions effectively,and leverage storytelling</li>
        <li>Integrating environmental and social considerations into strategicbusiness decisions.</li>
      </ol>
    `,
      action: "Learn More",
      link: "/pgdm/special"
    });
    tabs.push({
      id: "uculearning",
      label: "Learning Through Labs",
      icon: <FiAward size={20} />,
      title: "Learning Through Labs",
      text: `
    <p>Labs focus on honing real-world skills across domains, including soft and hard skills. These labs ensure that you are not just learning theory but are equipped to apply your knowledge in practical, impactful ways and are business ready from Day 1.</p>
    `,
      action: "Learn More",
      // link: "/pgdm/special"
    });
  }
  if (isPGPM) {
    tabs.push({
      id: "ucudetails",
      label: "Why is PGPM",
      icon: <FiAward size={20} />,
      title: "PGDM Exclusive Highlights",
      text: `
    <p>The extensive research, discussions and feedback from CXOs, senior alumni and corporate recruiters across various sectors and cities revealed a demand for professionals who are good at:</p>
      <ol>
        <li>Demonstrating structured problem-solving and strong decision-making skills grounded in data-driven insights.</li>
        <li>Utilizing and implementing disruptive tools like Generative AI andstaying ahead of Industry 4.0 trends.</li>
        <li>Being able to articulate ideas, problems, and solutions effectively,and leverage storytelling</li>
        <li>Integrating environmental and social considerations into strategicbusiness decisions.</li>
      </ol>
    `,
      action: "Learn More",
      // link: "/pgdm/special"
    });
    tabs.push({
      id: "uculearning",
      label: "Learning Through Labs",
      icon: <FiAward size={20} />,
      title: "Learning Through Labs",
      text: `
    <p>Labs focus on honing real-world skills across domains, including soft and hard skills. These labs ensure that you are not just learning theory but are equipped to apply your knowledge in practical, impactful ways and are business ready from Day 1.</p>
    `,
      action: "Learn More",
      // link: "/pgdm/special"
    });
  }

  const activeItem = tabs.find((i) => i.id === active) || tabs[0];

  const handleMobileToggle = (id) => {
    setMobileOpen((prev) => (prev === id ? null : id));
  };

  return (
    <div className="overview-keyhighlights row gx-4 mt-4">
      <h1 className="display-4 fw-bold col-12 col-lg-12 my-4">
        <span style={{ color: "#5ac501" }}>Key </span>Highlights
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
                  className={`nav-pill d-lg-flex d-none align-items-center mb-3 p-3 ${isActive ? "active" : ""}`}
                  onClick={() => setActive(item.id)}
                  aria-pressed={isActive}
                >
                  <div className="icon me-3">{item.icon}</div>
                  <div className="label">{item.label}</div>
                </button>

                <button
                  className={`nav-pill mob-nav-pill d-flex d-lg-none align-items-center justify-content-between w-100 p-3 ${isOpen ? "show" : ""}`}
                  onClick={() => handleMobileToggle(item.id)}
                >
                  <div className="d-flex align-items-center">
                    <div className="icon me-3">{item.icon}</div>
                    <div className="label">{item.label}</div>
                  </div>
                  <ChevronDown className={`transition ${isOpen ? "rotate-180" : ""}`} />
                </button>

                <div className={`mobile-content bg-light p-3 mt-2 rounded shadow-sm d-lg-none ${isOpen ? "show" : ""}`}>
                  <h5>{item.title}</h5>
                  <div className="content-text" dangerouslySetInnerHTML={{ __html: item.text }} />
                  <button className="btn-cta" onClick={() => navigate(item.link)}>
                    {item.action} <span className="chev">›</span>
                  </button>
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
          <div className="content-text" dangerouslySetInnerHTML={{ __html: activeItem.text }} />
          <button onClick={() => navigate(activeItem.link)} className="btn-cta">
            {activeItem.action} <span className="chev">›</span>
          </button>
        </div>
      </div>
    </div>
  );
}
