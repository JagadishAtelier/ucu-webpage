import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null); // State to manage which submenu is open

  const handleSubMenuToggle = (menuName) => {
    setActiveSubMenu(activeSubMenu === menuName ? null : menuName);
  };

  return (
    <div className="navbar-container">
      <a href="/">
        <img src="/logo.png" alt="logo" className="logo" />
      </a>

      <p className="logo-txt">Universal Corporate University </p>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <i className="bi bi-list"></i>
      </button>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="/">Home</a>

        {/* About UCU Submenu */}
        <div
          className="nav-item has-submenu"
          onMouseEnter={() => !menuOpen && setActiveSubMenu("about")}
          onMouseLeave={() => !menuOpen && setActiveSubMenu(null)}
          onClick={() => menuOpen && handleSubMenuToggle("about")}
        >
          <a href="#" onClick={(e) => e.preventDefault()}>
            About UCU <i className="bi bi-chevron-down"></i>
          </a>
          {(activeSubMenu === "about" || !menuOpen) && (
            <ul className="submenu" style={{ display: activeSubMenu === "about" || !menuOpen ? 'block' : 'none' }}>
              <li>
                <a href="/about-us">About Us</a>
              </li>
              <li>
                <a href="/advisory-council">Advisory Council</a>
              </li>
              <li>
                <a href="/faculty">Faculty</a>
              </li>
              <li>
                <a href="/committees-clubs">Committees & Clubs</a>
              </li>
            </ul>
          )}
        </div>

        {/* Programs Submenu */}
        <div
          className="nav-item has-submenu"
          onMouseEnter={() => !menuOpen && setActiveSubMenu("programs")}
          onMouseLeave={() => !menuOpen && setActiveSubMenu(null)}
          onClick={() => menuOpen && handleSubMenuToggle("programs")}
        >
          <a href="#" onClick={(e) => e.preventDefault()}>
            Programs <i className="bi bi-chevron-down"></i>
          </a>
          {(activeSubMenu === "programs" || !menuOpen) && (
            <ul className="submenu" style={{ display: activeSubMenu === "programs" || !menuOpen ? 'block' : 'none' }}>
              <li>
                <a href="/full-time">Full-Time</a>
              </li>
              <li>
                <a href="/diploma">Diploma</a>
              </li>
              <li>
                <a href="/executive-education">Executive Education</a>
              </li>
              <li>
                <a href="/e-learning">E-Learning</a>
              </li>
            </ul>
          )}
        </div>

        {/* Corporate Connect Submenu */}
        <div
          className="nav-item has-submenu"
          onMouseEnter={() => !menuOpen && setActiveSubMenu("corporate")}
          onMouseLeave={() => !menuOpen && setActiveSubMenu(null)}
          onClick={() => menuOpen && handleSubMenuToggle("corporate")}
        >
          <a href="#" onClick={(e) => e.preventDefault()}>
            Corporate connect <i className="bi bi-chevron-down"></i>
          </a>
          {(activeSubMenu === "corporate" || !menuOpen) && (
            <ul className="submenu" style={{ display: activeSubMenu === "corporate" || !menuOpen ? 'block' : 'none' }}>
              <li>
                <a href="/placements">Placements</a>
              </li>
              <li>
                <a href="/corporate-lecture-series">Corporate Lecture Series</a>
              </li>
              <li>
                <a href="/partnerships">Partnerships</a>
              </li>
            </ul>
          )}
        </div>

        {/* Insights Submenu */}
        <div
          className="nav-item has-submenu"
          onMouseEnter={() => !menuOpen && setActiveSubMenu("insights")}
          onMouseLeave={() => !menuOpen && setActiveSubMenu(null)}
          onClick={() => menuOpen && handleSubMenuToggle("insights")}
        >
          <a href="#" onClick={(e) => e.preventDefault()}>
            Insights <i className="bi bi-chevron-down"></i>
          </a>
          {(activeSubMenu === "insights" || !menuOpen) && (
            <ul className="submenu" style={{ display: activeSubMenu === "insights" || !menuOpen ? 'block' : 'none' }}>
              <li>
                <a href="/news-blogs">News & Blogs</a>
              </li>
              <li>
                <a href="/events">Events</a>
              </li>
            </ul>
          )}
        </div>

        {/* Admissions Submenu */}
        <div
          className="nav-item has-submenu"
          onMouseEnter={() => !menuOpen && setActiveSubMenu("admissions")}
          onMouseLeave={() => !menuOpen && setActiveSubMenu(null)}
          onClick={() => menuOpen && handleSubMenuToggle("admissions")}
        >
          <a href="#" onClick={(e) => e.preventDefault()}>
            Admissions <i className="bi bi-chevron-down"></i>
          </a>
          {(activeSubMenu === "admissions" || !menuOpen) && (
            <ul className="submenu" style={{ display: activeSubMenu === "admissions" || !menuOpen ? 'block' : 'none' }}>
              <li>
                <a href="/admission-process">Admission Process</a>
              </li>
              <li>
                <a href="/scholarships">Scholarships</a>
              </li>
              <li>
                <a href="/apply-now">Apply Now</a>
              </li>
            </ul>
          )}
        </div>

        <a href="/contact-us">Contact Us</a>
        <i className="bi bi-search"></i>
      </div>
    </div>
  );
}

export default Navbar;