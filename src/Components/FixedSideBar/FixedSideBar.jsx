import React, { useState } from "react";
import "./FixedSideBar.css";
import {
  FiPhoneCall,
  FiDownloadCloud,
  FiHelpCircle,
  FiMail,
  FiMessageCircle,
} from "react-icons/fi";
import { ChevronLeft, ChevronRight } from "lucide-react";

function FixedSideBar() {
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const isMobile = window.innerWidth < 768;

  const items = [
    { label: "Make an Enquiry", icon: <FiPhoneCall />, action: () => setShowModal(true) },
    { label: "Get Brochure", icon: <FiDownloadCloud />, link: "#" },
    { label: "Attend A Session", icon: <FiHelpCircle />, link: "#" },
    { label: "Apply Now", icon: <FiMail />, link: "#" },
    {
      label: "Chat",
      icon: <FiMessageCircle />,
      link: "https://wa.me/919876543210",
    },
  ];

  return (
    <>
      {/* ================= SIDEBAR ================= */}
      <div className={`fixedSidebar ${isOpen ? "openSidebar" : ""}`}>

        {/* 🔼 TOP CLOSE ARROW */}
        {isOpen && (
          <button
            className="sidebarTopCloseBtn"
            onClick={() => setIsOpen(false)}
          >
            <ChevronRight />
          </button>
        )}

        {items.map((item, index) => (
          <a
            key={index}
            href={item.link || undefined}
            target={item.link ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="sidebarItem"
            onClick={item.action}
          >
            <span className="sidebarIcon animatedIcon">{item.icon}</span>
            <span className="sidebarLabel">{item.label}</span>
          </a>
        ))}
      </div>

      {/* ▶ SIDE OPEN ARROW */}
      {!isOpen && (
        <button
          className="sidebarArrowBtn"
          onClick={() => setIsOpen(true)}
        >
          <ChevronLeft />
        </button>
      )}

      {/* ================= MODAL ================= */}
      {showModal && (
        <div className="proModalOverlay" onClick={() => setShowModal(false)}>
          <div className="proModalCard" onClick={(e) => e.stopPropagation()}>
            <div className="proModalTopBar"></div>

            <div className="proModalContent">
              <h2 className="proModalTitle">Make an Enquiry</h2>
              <p className="proModalSubtitle">
                Our team will get back to you shortly.
              </p>

              <div className="proInputGroup">
                <label>Name</label>
                <input type="text" />
              </div>

              <div className="proInputGroup">
                <label>Email</label>
                <input type="email" />
              </div>

              <div className="proInputGroup">
                <label>Phone</label>
                <input type="tel" />
              </div>

              <div className="proInputGroup">
                <label>Message</label>
                <textarea />
              </div>

              <button className="proSubmitBtn">Submit Enquiry</button>
            </div>

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
