import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar-container">
      <a href="/">
        <img src="/logo.png" alt="logo" className="logo" />
      </a>

      <p className="logo-txt">Universal Corporate University </p>

      {/* Hamburger button (only visible on mobile) */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i className="bi bi-list"></i>
      </button>

      {/* Menu links */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="/">Home</a>
        <div className="subPages-head">
          <a href="/">About UCU</a>
          <i className="bi bi-chevron-down"></i>
        </div>
        <div className="subPages-head">
          <a href="/">Programs</a>
          <i className="bi bi-chevron-down"></i>
        </div>
        <div className="subPages-head">
          <a href="/">Corporate connect</a>
          <i className="bi bi-chevron-down"></i>
        </div>
        <div className="subPages-head">
          <a href="/">Insights</a>
          <i className="bi bi-chevron-down"></i>
        </div>
        <div className="subPages-head">
          <a href="/">Admissions</a>
          <i className="bi bi-chevron-down"></i>
        </div>
        <a href="/">Contact Us</a>
        <i className="bi bi-search"></i>
      </div>
    </div>
  );
}

export default Navbar;
