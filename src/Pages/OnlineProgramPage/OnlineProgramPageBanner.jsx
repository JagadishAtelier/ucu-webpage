import React from "react";
import "./OnlineProgramPage.css";
import { Search } from "lucide-react";

function OnlineProgramPageBanner() {
  return (
    <section className="ONLINEPAG-header d-none d-xl-flex">
      <div className="container-fluid d-flex align-items-center">

        {/* Logo */}
        <div className="ONLINEPAG-logo px-3">
          <p className="mb-0 ">
          <span style={{color:"#5ac501"}} className="fw-bold fs-4"> UCU </span>  Centre for Online Learning
          </p>
        </div>

        {/* Menu */}
        <div className="ONLINEPAG-menu flex-grow-1">
          <ul className="ONLINEPAG-menu-list">
            <li><a href="#">Programs</a></li>
            <li><a href="#">Executive Education</a></li>
            <li><a href="#">Apply Now</a></li>
          </ul>
        </div>

        {/* Right Actions */}
        <div className="ONLINEPAG-actions d-flex align-items-center gap-3">
          <a href="/login-portals" className="ONLINEPAG-login">Login</a>
          <span className="ONLINEPAG-search">
            <Search color="white"/>
          </span>
        </div>

      </div>
    </section>
  );
}

export default OnlineProgramPageBanner;
