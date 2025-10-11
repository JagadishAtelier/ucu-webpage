import React, { useState } from "react";
import { FiMapPin, FiUsers, FiBriefcase, FiAward } from "react-icons/fi";
import "./OverviewKeyhighlights.css";
import { ArrowDown, ChevronDown } from "lucide-react";

const ITEMS = [
  {
    id: "location",
    label: "Location",
    icon: <FiMapPin size={20} />,
    title: "Location",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    action: "Know more",
  },
  {
    id: "pedagogy",
    label: "Innovative pedagogy",
    icon: <FiUsers size={20} />,
    title: "Innovative pedagogy",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    action: "Find out how",
  },
  {
    id: "placements",
    label: "Placements",
    icon: <FiBriefcase size={20} />,
    title: "Placements",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    action: "View placements",
  },
  {
    id: "rankings",
    label: "Rankings",
    icon: <FiAward size={20} />,
    title: "Rankings",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    action: "See rankings",
  },
];

export default function OverviewKeyhighlights() {
  const [active, setActive] = useState("location");
  const [mobileOpen, setMobileOpen] = useState("location");

  const activeItem = ITEMS.find((i) => i.id === active) || ITEMS[0];

    const handleMobileToggle = (id) => {
    setMobileOpen((prev) => (prev === id ? null : id));
  };

  return (
    <div className="overview-keyhighlights row gx-4 mt-4">
    <h1 className="display-4 fw-bold col-12 col-lg-12 my-4"><span style={{color:"#5ac501"}}>Key </span>Highlights</h1>
      <div className="col-12 col-lg-3">
        <div className="left-nav d-flex flex-column">
          {ITEMS.map((item) => {
            const isActive = item.id === active;
            const isOpen = mobileOpen === item.id;
            return (
              <div>
              <button
                key={item.id}
                className={` nav-pill d-lg-flex d-none align-items-center mb-3 p-3 ${isActive ? "active" : ""}`}
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
                <div
                  className={`mobile-content bg-light p-3 mt-2 rounded shadow-sm d-lg-none ${
                    isOpen ? "show" : ""
                  }`}
                >
                    <h5>{item.title}</h5>
                    <p>{item.text}</p>
                    <button className="btn-cta">
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
          <p className="content-text">{activeItem.text}</p>
          <button className="btn-cta">{activeItem.action} <span className="chev">›</span></button>
        </div>
      </div>
    </div>
  );
}
