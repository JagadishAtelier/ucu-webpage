import React from "react";
import "./OnlineProgramPage.css";
import { Search } from "lucide-react";

function OnlineProgramPageBanner() {
  return (
    <div className="ONLINEPAG-header d-none d-lg-flex">
      <div className="container-fluid d-flex align-items-center px-0 px-lg-3">

        {/* Logo */}
        <div className="ONLINEPAG-logo px-3 d-lg-flex d-none align-items-center gap-2">
          <img className="ONLINEPAG-logo" src="/logo2.svg" />
          <p className="mb-0 ">
            Centre for Online Learning
          </p>
        </div>

        {/* Menu */}
        <div className="ONLINEPAG-menu flex-grow-1">
          <ul className="ONLINEPAG-menu-list">
            <li className="ONLINEPAG-dropdown">
              <a href="#">Programs</a>

              <ul className="ONLINEPAG-dropdown-menu">
                <li><a href="/Career-Reboot-Program-for-Women">Career Reboot Program for Women</a></li>
                <li><a className="ONLINEPAG-has-submenu">Executive Post Graduate Certificate Programmes</a>
                  <ul className="ONLINEPAG-sub-dropdown-menu-middle">
                    <li><a href="#">Domain Specialization</a>
                      <ul className="ONLINEPAG-sub-dropdown-menu">
                        <li><a href="/SalesDiplamo">Sales</a></li>
                        <li><a href="/program/product">Product</a></li>
                        <li><a href="/program/consulting">Consulting</a></li>
                        <li><a href="/program/cybersecurity">Cybersecurity</a></li>
                        <li><a href="/program/Digital-Marketing-&-AI">Digital Marketing & AI</a></li>
                        <li><a href="/program/banking-finance">Banking & Finance</a></li>
                        <li><a href="/program/international-business">International Business</a></li>
                      </ul>
                    </li>
                    <li><a>Career Lane Specialization</a>
                      <ul className="ONLINEPAG-sub-dropdown-menu">
                        <li><a href="/program/fintech">FinTech Genesis</a></li>
                        <li><a href="/program/GCC-Launchpad">GCC Launchpad</a></li>
                        <li><a href="/program/HealthTech-Ignition">HealthTech Ignition</a></li>
                        <li><a href="/program/Advanced-Manufacturing">Advanced Manufacturing</a></li>
                      </ul>
                    </li>
                  </ul>

                </li>
              </ul>

            </li>

            <li className="ONLINEPAG-dropdown">
              <a href="#">Executive Education</a>

              <ul className="ONLINEPAG-dropdown-menu">
                <li><a href="/executive-edu?tab=0">Individuals Professional</a></li>
                <li><a href="/executive-edu?tab=2">CXO Academy</a></li>
                <li><a href="/executive-edu?tab=4">Academic Accelerator</a></li>
                <li><a href="/executive-edu?tab=6">MDPs</a></li>
                <li><a href="/executive-edu?tab=5">Leadership Coach Academy</a></li>
                <li><a href="/contact-us">XEL Contact</a></li>
                <li className="ONLINEPAG-sub-dropdown">
                  <a
                    href="/executive/leadership"
                    className="ONLINEPAG-has-submenu"
                  >
                    Executive & Advanced Executive PG Certificate Programs
                  </a>

                  <ul className="ONLINEPAG-sub-dropdown-menu">
                    <li><a href="/program/FinTech-Ascend">FinTech Ascend</a></li>
                    <li><a href="/program/FinTech-Vanguard">FinTech Vanguard</a></li>
                    <li><a href="/program/GCC-Catalyst">GCC Catalyst</a></li>
                    <li><a href="/program/GCC-Elevate">GCC Elevate</a></li>
                    <li><a href="/program/HealthTech-Navigate">HealthTech Navigate</a></li>
                    <li><a href="/program/HealthTech-Pinnacle">HealthTech Pinnacle</a></li>
                  </ul>
                </li>

              </ul>
            </li>

            <li><a href="/online-program-form">Apply Now</a></li>
            <li className="d-lg-none d-block"><a href="/auth/login">Login</a></li>
          </ul>

        </div>

        {/* Right Actions */}
        <div className="ONLINEPAG-actions d-lg-flex d-none align-items-center gap-3">
          <a href="/auth/login" className="ONLINEPAG-login">Login</a>
          {/* <span className="ONLINEPAG-search">
            <Search color="white"/>
          </span> */}
        </div>

      </div>
    </div>
  );
}

export default OnlineProgramPageBanner;
