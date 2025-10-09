import React, { useState } from "react";
import { FiMapPin, FiUsers, FiBriefcase, FiAward } from "react-icons/fi";
import "./OverviewKeyhighlights.css";

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

  const activeItem = ITEMS.find((i) => i.id === active) || ITEMS[0];

  return (
    <div className="overview-keyhighlights row gx-4 mt-4">
    <h1 className="display-4 fw-bold col-12 col-lg-12 my-4"><span style={{color:"#5ac501"}}>Key </span>Highlights</h1>
      <div className="col-12 col-lg-3">
        <div className="left-nav d-flex flex-column">
          {ITEMS.map((item) => {
            const isActive = item.id === active;
            return (
              <button
                key={item.id}
                className={`nav-pill d-flex align-items-center mb-3 p-3 ${isActive ? "active" : ""}`}
                onClick={() => setActive(item.id)}
                aria-pressed={isActive}
              >
                <div className="icon me-3">{item.icon}</div>
                <div className="label">{item.label}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="col-12 col-lg-9">
        <div className="content-card p-4 shadow-sm">
          <h3 className="content-title">{activeItem.title}</h3>
          <p className="content-text">{activeItem.text}</p>
          <button className="btn-cta">{activeItem.action} <span className="chev">›</span></button>
        </div>
      </div>
    </div>
  );
}
