import React, { useState } from "react";
import "./FixedSideBar.css";

import {
  FiPhoneCall,
  FiDownloadCloud,
  FiHelpCircle,
  FiMail,
  FiMessageCircle
} from "react-icons/fi";

function FixedSideBar() {
  const [showModal, setShowModal] = useState(false);

  const items = [
    { label: "Make an Enquiry", icon: <FiPhoneCall />, action: () => setShowModal(true) },
    { label: "Get Brochure", icon: <FiDownloadCloud />, link: "#" },
    { label: "Attend A Session", icon: <FiHelpCircle />, link: "#" },
    { label: "Apply Now", icon: <FiMail />, link: "#" },

    // WhatsApp Chat
    {
      label: "Chat",
      icon: <FiMessageCircle />,
      link: "https://wa.me/919876543210"
    },
  ];

  return (
    <>
      <div className="fixedSidebar">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.link ? item.link : undefined}
            target={item.link ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="sidebarItem"
            onClick={item.action ? item.action : undefined}
          >
            <span className="sidebarIcon animatedIcon">{item.icon}</span>
            <span className="sidebarLabel">{item.label}</span>
          </a>
        ))}
      </div>

      {/* 🌟 NEW ENQUIRY MODAL */}
{showModal && (
  <div className="proModalOverlay" onClick={() => setShowModal(false)}>
    <div className="proModalCard" onClick={(e) => e.stopPropagation()}>

      {/* HEADER BAR */}
      <div className="proModalTopBar"></div>

      {/* CONTENT */}
      <div className="proModalContent">
        <h2 className="proModalTitle">Make an Enquiry</h2>
        <p className="proModalSubtitle">
          Our team will get back to you shortly.
        </p>

        <div className="proInputGroup">
          <label>Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>

        <div className="proInputGroup">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="proInputGroup">
          <label>Phone Number</label>
          <input type="tel" placeholder="Enter your phone" />
        </div>

        <div className="proInputGroup">
          <label>Message</label>
          <textarea placeholder="Write your message..."></textarea>
        </div>

        <button className="proSubmitBtn">Submit Enquiry</button>
      </div>

      {/* CLOSE BUTTON */}
      <button className="proCloseBtn" onClick={() => setShowModal(false)}>
        ✕
      </button>
    </div>
  </div>
)}

    </>
  );
}

export default FixedSideBar;
