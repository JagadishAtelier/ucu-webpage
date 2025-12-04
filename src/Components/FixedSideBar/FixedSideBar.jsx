import React, { useState, useEffect } from "react";
import "./FixedSideBar.css";
import { useLocation } from "react-router-dom";
import {
  FiPhoneCall,
  FiDownloadCloud,
  FiHelpCircle,
  FiMail,
  FiMessageCircle
} from "react-icons/fi";
import { ChevronLeft, ChevronRight } from "lucide-react";

function FixedSideBar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const realMobile = window.innerWidth < 768;

  // FORCE MOBILE BEHAVIOR ON HOME PAGE (desktop also)
  const isMobile = realMobile || isHomePage;

  // AUTO CLOSE SIDEBAR BY DEFAULT ONLY ON HOME PAGE DESKTOP
  useEffect(() => {
    if (isHomePage && !realMobile) {
      setIsOpen(false);
    }
  }, [isHomePage, realMobile]);

  const items = [
    ...(isMobile
      ? [
          {
            icon: <ChevronRight />,
            action: () => setIsOpen(false),
          },
        ]
      : []),

    { label: "Make an Enquiry", icon: <FiPhoneCall />, action: () => setShowModal(true) },
    { label: "Get Brochure", icon: <FiDownloadCloud />, link: "#" },
    { label: "Attend A Session", icon: <FiHelpCircle />, link: "#" },
    { label: "Apply Now", icon: <FiMail />, link: "#" },
    {
      label: "Chat",
      icon: <FiMessageCircle />,
      link: "https://wa.me/919876543210"
    },
  ];

  return (
    <>
      {/* SIDEBAR (hidden by default on homepage desktop) */}
      <div
        className={`fixedSidebar ${isOpen ? "openSidebar" : ""}`}
        style={{
          display: isHomePage && !realMobile && !isOpen ? "none" : "block",
        }}
      >
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

      {/* SHOW ARROW ON MOBILE + HOME PAGE DESKTOP */}
{(isMobile || (isHomePage && !realMobile)) && (
  <button
    className="sidebarArrowBtn"
    onClick={() => setIsOpen(!isOpen)}
    style={{
  display: isHomePage && !realMobile && !isOpen ? "block" : "none",
}}

  >
    {isOpen ? <ChevronRight /> : <ChevronLeft />}
  </button>
)}


      {/* MODAL */}
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
