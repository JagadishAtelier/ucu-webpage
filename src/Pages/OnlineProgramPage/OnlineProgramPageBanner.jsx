import React from "react";
import "./OnlineProgramPage.css";
import { Search } from "lucide-react";

function OnlineProgramPageBanner() {
  return (
    <div className="ONLINEPAG-header d-none d-xl-flex">
      <div className="container-fluid d-flex align-items-center px-0 px-lg-3">

        {/* Logo */}
        <div className="ONLINEPAG-logo px-3 d-lg-flex d-none align-items-center gap-2">
          <img className="ONLINEPAG-logo" src="/logo2.svg"/>
          <p className="mb-0 ">
          Centre for Online Learning
          </p>
        </div>

        {/* Menu */}
        <div className="ONLINEPAG-menu flex-grow-1">
          <ul className="ONLINEPAG-menu-list">
            <li><a href="#">Programs</a></li>
            <li><a href="#">Executive Education</a></li>
            <li><a href="/online-program-form">Apply Now</a></li>
            <li className="d-lg-none d-block"><a href="#">Login</a></li>
          </ul>
        </div>

        {/* Right Actions */}
        <div className="ONLINEPAG-actions d-lg-flex d-none align-items-center gap-3">
          <a href="/login-portals" className="ONLINEPAG-login">Login</a>
          <span className="ONLINEPAG-search">
            <Search color="white"/>
          </span>
        </div>

      </div>
    </div>
  );
}

export default OnlineProgramPageBanner;
