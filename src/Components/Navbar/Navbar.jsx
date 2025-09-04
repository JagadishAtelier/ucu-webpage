import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const handleSubMenuToggle = (menuName) => {
    setActiveSubMenu(activeSubMenu === menuName ? null : menuName);
  };

  return (
    <>
    <div className="top-nav">
    <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="/">Home</a>

        {/* About UCU Submenu */}
        <div
          className={`nav-item has-submenu ${
            activeSubMenu === "about" ? "active" : ""
          }`}
          onMouseEnter={() => !menuOpen && setActiveSubMenu("about")}
          onMouseLeave={() => !menuOpen && setActiveSubMenu(null)}
          onClick={() => menuOpen && handleSubMenuToggle("about")}
        >
          <a href="#" onClick={(e) => e.preventDefault()}>
            About UCU <i className="bi bi-chevron-down"></i>
          </a>
          <ul className="submenu">
            <li>
              <a href="/about-us">Vision & Mission</a>
            </li>
            <li
  className="nav-subitem has-submenu"
>
  <a href="#" onClick={(e) => e.preventDefault()}>
  Founder's Message
  </a>

  {/* <ul className="submenu nested-submenu">
    <li><a href="/advisory-council/members">Business Advisory Council (BAC)</a></li>
    <li><a href="/advisory-council/roles">Academic Advisory Council (AAC)</a></li>
    <li><a href="/advisory-council/reports">CHRO Advisory Council (CHRAC)</a></li>
    <li><a href="/advisory-council/reports">Talent Advisory Council (TAC)</a></li>
    <li><a href="/advisory-council/reports">L&D Advisory Council (L&DAC)</a></li>
    <li><a href="/advisory-council/reports">Young CXO Council (YCxC)</a></li>
    <li><a href="/advisory-council/reports">Rising Leaders' Council (RLC)</a></li>
    <li><a href="/advisory-council/reports">Our Brand Ambassadors</a></li>
    <li><a href="/advisory-council/reports">SME Program Advisory Council</a></li>
  </ul> */}
</li>

            <li>
              <a href="/faculty">Industry First Approach</a>
            </li>
            <li>
              <a href="/committees-clubs">Campus</a>
            </li>
          </ul>
        </div>

        {/* Advisory Councils Submenu */}
        <div
          className={`nav-item has-submenu ${
            activeSubMenu === "programs" ? "active" : ""
          }`}
          onMouseEnter={() => !menuOpen && setActiveSubMenu("programs")}
          onMouseLeave={() => !menuOpen && setActiveSubMenu(null)}
          onClick={() => menuOpen && handleSubMenuToggle("programs")}
        >
          <a href="#" onClick={(e) => e.preventDefault()}>
          Advisory Councils <i className="bi bi-chevron-down"></i>
          </a>
  <ul className="submenu">
    <li><a href="/advisory-council/members">Business Advisory Council (BAC)</a></li>
    <li><a href="/advisory-council/roles">Academic Advisory Council (AAC)</a></li>
    <li><a href="/advisory-council/reports">CHRO Advisory Council (CHRAC)</a></li>
    <li><a href="/advisory-council/reports">Talent Advisory Council (TAC)</a></li>
    <li><a href="/advisory-council/reports">L&D Advisory Council (L&DAC)</a></li>
    <li><a href="/advisory-council/reports">Young CXO Council (YCxC)</a></li>
    <li><a href="/advisory-council/reports">Rising Leaders' Council (RLC)</a></li>
    <li><a href="/advisory-council/reports">Our Brand Ambassadors</a></li>
    <li
  className={`nav-subitem has-submenu ${
    activeSubMenu === "SME" ? "active" : ""
  }`}
  onMouseEnter={() => !menuOpen && setActiveSubMenu("SME")}
  onMouseLeave={() => !menuOpen && setActiveSubMenu(null)}
  onClick={() => menuOpen && handleSubMenuToggle("SME")}
>
  <a href="#" onClick={(e) => e.preventDefault()}>
  SME Program Advisory Council <i className="bi bi-chevron-right"></i>
  </a>

  <ul className="submenu nested-submenu">
    <li>
      <a href="/advisory-council/members">Sales Advisory Council (SAC)</a>
    </li>
    <li>
      <a href="/advisory-council/roles">Product Management Advisory Council (PMAC)</a>
    </li>
    <li>
      <a href="/advisory-council/reports">Cybersecurity Advisory Council (CAC)</a>
    </li>
    <li>
      <a href="/advisory-council/reports">FinTech Advisory Council (FTAC)</a>
    </li>
    <li>
      <a href="/advisory-council/reports">GCC Advisory Council (GCCAC)</a>
    </li>
    <li>
      <a href="/advisory-council/reports">Mobility & Sustainability Advisory Council (MSAC)</a>
    </li>
    <li>
      <a href="/advisory-council/reports">Consulting Advisory Council (ConAC)</a>
    </li>
  </ul>
</li>

  </ul>
        </div>

        {/* Programs Submenu */}
        <div
          className={`nav-item has-submenu ${
            activeSubMenu === "programs" ? "active" : ""
          }`}
          onMouseEnter={() => !menuOpen && setActiveSubMenu("programs")}
          onMouseLeave={() => !menuOpen && setActiveSubMenu(null)}
          onClick={() => menuOpen && handleSubMenuToggle("programs")}
        >
          <a href="#" onClick={(e) => e.preventDefault()}>
            Programs <i className="bi bi-chevron-down"></i>
          </a>
          <ul className="submenu">
          <li
  className={`nav-subitem has-submenu ${
    activeSubMenu === "SME" ? "active" : ""
  }`}
  onMouseEnter={() => !menuOpen && setActiveSubMenu("SME")}
  onMouseLeave={() => !menuOpen && setActiveSubMenu(null)}
  onClick={() => menuOpen && handleSubMenuToggle("SME")}
>
  <a href="#" onClick={(e) => e.preventDefault()}>
  Full Time Programs <i className="bi bi-chevron-right"></i>
  </a>

  <ul className="submenu nested-submenu">
    <li>
      <a href="/advisory-council/members">PGPM-ELITE</a>
    </li>
    <li>
      <a href="/advisory-council/members">PGDM</a>
    </li>
    </ul>
    </li>
            <li>
              <a href="/diploma">Post Graduate Diplomas</a>
            </li>
            <li
  className={`nav-subitem has-submenu ${
    activeSubMenu === "Functional" ? "active" : ""
  }`}
  onMouseEnter={() => !menuOpen && setActiveSubMenu("Functional")}
  onMouseLeave={() => !menuOpen && setActiveSubMenu(null)}
  onClick={() => menuOpen && handleSubMenuToggle("Functional")}
>
  <a href="#" onClick={(e) => e.preventDefault()}>
  Functional (off-line) <i className="bi bi-chevron-right"></i>
  </a>

  <ul className="submenu nested-submenu">
    <li>
      <a href="/advisory-council/members">Sales</a>
    </li>
    <li>
      <a href="/advisory-council/members">Product Management</a>
    </li>
    <li>
      <a href="/advisory-council/members">Cybersecurity</a>
    </li>
    <li>
      <a href="/advisory-council/members">Digital Marketing</a>
    </li>
    <li>
      <a href="/advisory-council/members">Mobilty & Sustainability</a>
    </li>
    <li>
      <a href="/advisory-council/members">Consulting</a>
    </li>
    <li>
      <a href="/advisory-council/members">Banking & Finance</a>
    </li>
    <li>
      <a href="/advisory-council/members">Business Analytics</a>
    </li>
    <li>
      <a href="/advisory-council/members">Data Science</a>
    </li>
    </ul>
    </li>
    <li
  className={`nav-subitem has-submenu ${
    activeSubMenu === "Industry" ? "active" : ""
  }`}
  onMouseEnter={() => !menuOpen && setActiveSubMenu("Industry")}
  onMouseLeave={() => !menuOpen && setActiveSubMenu(null)}
  onClick={() => menuOpen && handleSubMenuToggle("Industry")}
>
  <a href="#" onClick={(e) => e.preventDefault()}>
  Industry-Sector Specific Offerings <i className="bi bi-chevron-right"></i>
  </a>

  <ul className="submenu nested-submenu">
    <li>
      <a href="/advisory-council/members">FinTech</a>
    </li>
    <li>
      <a href="/advisory-council/members">Global Capability Centers (GCC)</a>
    </li>
    </ul>
    </li>
            <li>
              <a href="/e-learning">Career Reboot Program for Women</a>
            </li>
            <li
  className={`nav-subitem has-submenu ${
    activeSubMenu === "Industry" ? "active" : ""
  }`}
  onMouseEnter={() => !menuOpen && setActiveSubMenu("Industry")}
  onMouseLeave={() => !menuOpen && setActiveSubMenu(null)}
  onClick={() => menuOpen && handleSubMenuToggle("Industry")}
>
  <a href="#" onClick={(e) => e.preventDefault()}>
  Executive Education <i className="bi bi-chevron-right"></i>
  </a>

  <ul className="submenu nested-submenu">
    <li>
      <a href="/advisory-council/members">Customised Learning Programs for Corporate Professionals</a>
    </li>
    <li>
      <a href="/advisory-council/members">Management Development Programs (MDPs)</a>
    </li>
    <li
  className={`nav-subitem has-submenu ${
    activeSubMenu === "CXO" ? "active" : ""
  }`}
  onMouseEnter={() => !menuOpen && setActiveSubMenu("CXO")}
  onMouseLeave={() => !menuOpen && setActiveSubMenu(null)}
  onClick={() => menuOpen && handleSubMenuToggle("CXO")}
>
  <a href="#" onClick={(e) => e.preventDefault()}>
  1 Year CXO Accelerator Program with Campus Immersion <i className="bi bi-chevron-right"></i>
  </a>

  <ul className="submenu nested-submenu">
    <li>
      <a href="/advisory-council/members">CXO </a>
    </li>
    <li>
      <a href="/advisory-council/roles">CIO </a>
    </li>
    <li>
      <a href="/advisory-council/reports">CTO </a>
    </li>
    <li>
      <a href="/advisory-council/reports">CMO </a>
    </li>
    <li>
      <a href="/advisory-council/reports">CHRO </a>
    </li>
    <li>
      <a href="/advisory-council/reports">CFO </a>
    </li>
    <li>
      <a href="/advisory-council/reports">CPO </a>
    </li>
  </ul>
</li>
    </ul>
    </li>
    <li
  className={`nav-subitem has-submenu ${
    activeSubMenu === "Online" ? "active" : ""
  }`}
  onMouseEnter={() => !menuOpen && setActiveSubMenu("Online")}
  onMouseLeave={() => !menuOpen && setActiveSubMenu(null)}
  onClick={() => menuOpen && handleSubMenuToggle("Online")}
>
  <a href="#" onClick={(e) => e.preventDefault()}>
  Online Programs (E-Learning) <i className="bi bi-chevron-right"></i>
  </a>

  <ul className="submenu nested-submenu">
    <li>
      <a href="/advisory-council/members">Sales</a>
    </li>
    <li>
      <a href="/advisory-council/members">Product Management</a>
    </li>
    <li>
      <a href="/advisory-council/members">Cybersecurity</a>
    </li>
    <li>
      <a href="/advisory-council/members">Digital Marketing</a>
    </li>
    <li>
      <a href="/advisory-council/members">Mobilty & Sustainability</a>
    </li>
    <li>
      <a href="/advisory-council/members">Consulting</a>
    </li>
    <li>
      <a href="/advisory-council/members">Banking & Finance</a>
    </li>
    <li>
      <a href="/advisory-council/members">Business Analytics</a>
    </li>
    <li>
      <a href="/advisory-council/members">Data Science</a>
    </li>
    </ul>
    </li>
            {/* <li>
              <a href="/e-learning">Industry-Sector Specific Offerings</a>
            </li> */}
          </ul>
        </div>

        {/* Corporate Connect Submenu */}
        <div
          className={`nav-item has-submenu ${
            activeSubMenu === "corporate" ? "active" : ""
          }`}
          onMouseEnter={() => !menuOpen && setActiveSubMenu("corporate")}
          onMouseLeave={() => !menuOpen && setActiveSubMenu(null)}
          onClick={() => menuOpen && handleSubMenuToggle("corporate")}
        >
          <a href="#" onClick={(e) => e.preventDefault()}>
          Faculty <i className="bi bi-chevron-down"></i>
          </a>
          <ul className="submenu">
          <li
  className={`nav-subitem has-submenu ${
    activeSubMenu === "Area" ? "active" : ""
  }`}
  onMouseEnter={() => !menuOpen && setActiveSubMenu("Area")}
  onMouseLeave={() => !menuOpen && setActiveSubMenu(null)}
  onClick={() => menuOpen && handleSubMenuToggle("Area")}
>
  <a href="#" onClick={(e) => e.preventDefault()}>
  Area Chairs <i className="bi bi-chevron-right"></i>
  </a>

  <ul className="submenu nested-submenu">
    <li>
      <a href="/advisory-council/members">Marketing</a>
    </li>
    <li>
      <a href="/advisory-council/members">Finance</a>
    </li>
    <li>
      <a href="/advisory-council/members">Operations & Supply Chain</a>
    </li>
    <li>
      <a href="/advisory-council/members">Analytics & AI</a>
    </li>
    <li>
      <a href="/advisory-council/members">Consulting</a>
    </li>
    <li>
      <a href="/advisory-council/members">Product</a>
    </li>
    </ul>
    </li>
            <li>
              <a href="/corporate-lecture-series">Full Time </a>
            </li>
            <li>
              <a href="/partnerships">Visiting Faculty</a>
            </li>
            <li>
              <a href="/partnerships">Adjunct Faculty</a>
            </li>
            <li>
              <a href="/partnerships">Professors of Practice (PoP)</a>
            </li>
            <li>
              <a href="/partnerships">Associate & Assistant Faculty</a>
            </li>
            <li>
              <a href="/partnerships">Research</a>
            </li>
          </ul>
        </div>

        {/* Insights Submenu */}
        <div
          className={`nav-item has-submenu ${
            activeSubMenu === "insights" ? "active" : ""
          }`}
          onMouseEnter={() => !menuOpen && setActiveSubMenu("insights")}
          onMouseLeave={() => !menuOpen && setActiveSubMenu(null)}
          onClick={() => menuOpen && handleSubMenuToggle("insights")}
        >
          <a href="#" onClick={(e) => e.preventDefault()}>
          Campus Placements <i className="bi bi-chevron-down"></i>
          </a>
          <ul className="submenu">
            <li>
              <a href="/news-blogs">Recruiting Partners</a>
            </li>
            <li>
              <a href="/events">Placement Reports</a>
            </li>
            <li>
              <a href="/events">Corporate Testimonials</a>
            </li>
            <li>
              <a href="/events">Summer Internships</a>
            </li>
            <li>
              <a href="/events">Live Projects</a>
            </li>
          </ul>
        </div>

        {/* Admissions Submenu */}
        <div
          className={`nav-item has-submenu ${
            activeSubMenu === "admissions" ? "active" : ""
          }`}
          onMouseEnter={() => !menuOpen && setActiveSubMenu("admissions")}
          onMouseLeave={() => !menuOpen && setActiveSubMenu(null)}
          onClick={() => menuOpen && handleSubMenuToggle("admissions")}
        >
          <a href="#" onClick={(e) => e.preventDefault()}>
          Industry-Academia Engagement on Campus <i className="bi bi-chevron-down"></i>
          </a>
          <ul className="submenu">
            <li>
              <a href="/admission-process">CXO Series</a>
            </li>
            <li>
              <a href="/scholarships">CIO Series</a>
            </li>
            <li>
              <a href="/apply-now">CTO Series</a>
            </li>
            <li>
              <a href="/apply-now">CMO Series</a>
            </li>
            <li>
              <a href="/apply-now">CHRO Series</a>
            </li>
            <li>
              <a href="/apply-now">CFO Series</a>
            </li>
            <li>
              <a href="/apply-now">CPO Series</a>
            </li>
            <li>
              <a href="/apply-now">Career Accelerator Program (CAP)</a>
            </li>
            <li>
              <a href="/apply-now">Career Transformation to Career Acceleration (CT to CA)</a>
            </li>
          </ul>
        </div>

        <div
          className={`nav-item has-submenu ${
            activeSubMenu === "admissions" ? "active" : ""
          }`}
          onMouseEnter={() => !menuOpen && setActiveSubMenu("admissions")}
          onMouseLeave={() => !menuOpen && setActiveSubMenu(null)}
          onClick={() => menuOpen && handleSubMenuToggle("admissions")}
        >
          <a href="#" onClick={(e) => e.preventDefault()}>
          Consortium
          </a>
          </div>
          <a href="/">PACE</a>

{/* About UCU Submenu */}
<div
  className={`nav-item has-submenu ${
    activeSubMenu === "about" ? "active" : ""
  }`}
  onMouseEnter={() => !menuOpen && setActiveSubMenu("about")}
  onMouseLeave={() => !menuOpen && setActiveSubMenu(null)}
  onClick={() => menuOpen && handleSubMenuToggle("about")}
>
  <a href="#" onClick={(e) => e.preventDefault()}>
  News & Blogs
  </a>
</div>
      </div>
    </div>
    <div className="navbar-container">
      <a href="/">
        <img src="/logo.png" alt="logo" className="logo" />
      </a>

      <p className="logo-txt">Universal Corporate University </p>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <i className="bi bi-list"></i>
      </button>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>

        <div
          className={`nav-item has-submenu ${
            activeSubMenu === "admissions" ? "active" : ""
          }`}
          onMouseEnter={() => !menuOpen && setActiveSubMenu("admissions")}
          onMouseLeave={() => !menuOpen && setActiveSubMenu(null)}
          onClick={() => menuOpen && handleSubMenuToggle("admissions")}
        >
          <a href="#" onClick={(e) => e.preventDefault()}>
          Strategic Collaborations <i className="bi bi-chevron-down"></i>
          </a>
          <ul className="submenu">
          <li
  className={`nav-subitem has-submenu ${
    activeSubMenu === "Centers" ? "active" : ""
  }`}
  onMouseEnter={() => !menuOpen && setActiveSubMenu("Centers")}
  onMouseLeave={() => !menuOpen && setActiveSubMenu(null)}
  onClick={() => menuOpen && handleSubMenuToggle("Centers")}
>
  <a href="#" onClick={(e) => e.preventDefault()}>
  Centers of Excellence (CoEs) <i className="bi bi-chevron-right"></i>
  </a>

  <ul className="submenu nested-submenu">
    <li>
      <a href="/advisory-council/members">Center of Excellence in Marketing</a>
    </li>
    <li>
      <a href="/advisory-council/members">Center of Excellence in Finance</a>
    </li>
    <li>
      <a href="/advisory-council/members">Center of Excellence in Operations</a>
    </li>
    <li>
      <a href="/advisory-council/members">Center of Excellence in Analytics, Data & AI</a>
    </li>
    <li>
      <a href="/advisory-council/members">Center of Excellence in Consulting</a>
    </li>
    <li>
      <a href="/advisory-council/members">Center of Excellence in Entrepreneurship</a>
    </li>
    </ul>
    </li>
            <li>
              <a href="/scholarships">Strategic Partners</a>
            </li>
            <li>
              <a href="/apply-now">International Collaborations</a>
            </li>
            <li>
              <a href="/apply-now">Industry Partners</a>
            </li>
          </ul>
        </div>

        {/* Programs Submenu */}
        <div
          className={`nav-item has-submenu ${
            activeSubMenu === "programs" ? "active" : ""
          }`}
          onMouseEnter={() => !menuOpen && setActiveSubMenu("programs")}
          onMouseLeave={() => !menuOpen && setActiveSubMenu(null)}
          onClick={() => menuOpen && handleSubMenuToggle("programs")}
        >
          <a href="#" onClick={(e) => e.preventDefault()}>
          Annual Events
          </a>
        </div>

        {/* Corporate Connect Submenu */}
        <div
          className={`nav-item has-submenu ${
            activeSubMenu === "corporate" ? "active" : ""
          }`}
          onMouseEnter={() => !menuOpen && setActiveSubMenu("corporate")}
          onMouseLeave={() => !menuOpen && setActiveSubMenu(null)}
          onClick={() => menuOpen && handleSubMenuToggle("corporate")}
        >
          <a href="#" onClick={(e) => e.preventDefault()}>
          Admissions
          </a>
        </div>

        {/* Insights Submenu */}
        <div
          className={`nav-item has-submenu ${
            activeSubMenu === "insights" ? "active" : ""
          }`}
          onMouseEnter={() => !menuOpen && setActiveSubMenu("insights")}
          onMouseLeave={() => !menuOpen && setActiveSubMenu(null)}
          onClick={() => menuOpen && handleSubMenuToggle("insights")}
        >
          <a href="#" onClick={(e) => e.preventDefault()}>
          Campus Ambience
          </a>
        </div>

        {/* Admissions Submenu */}
        <div
          className={`nav-item has-submenu ${
            activeSubMenu === "admissions" ? "active" : ""
          }`}
          onMouseEnter={() => !menuOpen && setActiveSubMenu("admissions")}
          onMouseLeave={() => !menuOpen && setActiveSubMenu(null)}
          onClick={() => menuOpen && handleSubMenuToggle("admissions")}
        >
          <a href="#" onClick={(e) => e.preventDefault()}>
          Corporate Social Responsibility (CSR)
          </a>
        </div>

        <div
          className={`nav-item has-submenu ${
            activeSubMenu === "admissions" ? "active" : ""
          }`}
          onMouseEnter={() => !menuOpen && setActiveSubMenu("admissions")}
          onMouseLeave={() => !menuOpen && setActiveSubMenu(null)}
          onClick={() => menuOpen && handleSubMenuToggle("admissions")}
        >
          <a href="#" onClick={(e) => e.preventDefault()}>
          Careers
          </a>
          </div>
        <div
          className={`nav-item has-submenu ${
            activeSubMenu === "admissions" ? "active" : ""
          }`}
          onMouseEnter={() => !menuOpen && setActiveSubMenu("admissions")}
          onMouseLeave={() => !menuOpen && setActiveSubMenu(null)}
          onClick={() => menuOpen && handleSubMenuToggle("admissions")}
        >
          <a href="#" onClick={(e) => e.preventDefault()}>
          Budding Talent Programs
          </a>
          </div>

        <a href="/contact-us">Contact Us</a>
        <i className="bi bi-search"></i>
      </div>
    </div>
    </>
  );
}

export default Navbar;