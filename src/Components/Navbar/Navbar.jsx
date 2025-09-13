import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { menuData } from "./menuData";
import "./Navbar.css";
import { ChevronDown, ChevronRight, Menu, Search, User, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({});
  const toggleMobile = () => setMobileOpen(!mobileOpen);
  const topMenus = menuData.filter((menu) => !menu.submenu);
  const bottomMenus = menuData.filter((menu) => menu.submenu);
  const toggleSubmenu = (label) => {
    setOpenMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const renderMenuItems = (items, depth = 0) => {
    return (
      <ul className={`menu depth-${depth}`}>
        {items.map((item, idx) => (
          <li key={idx} className="menu-item">
            {item.submenu ? (
              <>
                <button
                  className="menu-btn"
                  onClick={() => toggleSubmenu(item.label)}
                >
                  {item.label}
                  {depth === 0 ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </button>
                {openMenus[item.label] &&
                  renderMenuItems(item.submenu, depth + 1)}
              </>
            ) : (
              <a href={item.link} className="menu-link">
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <header className="position-relative">
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md py-0 navbar-main-container ">
        <div className="container-fluid">
          {/* Logo */}
          <Link className="navbar-brand logo-box" to="/">
            <img
              src="/logo1.svg"
              alt="Universal Corporate University Logo"
              className="logo-img"
            />
          </Link>

          <Link className="navbar-brand mobile-only" to="/">
            <img
              src="/logo.svg"
              alt="Universal Corporate University Logo"
              className="logo-img"
            />
          </Link>

          {/* Collapse wrapper */}
          <div
            className="collapse navbar-collapse justify-content-end flex-column align-items-end"
            id="mainNavbar"
          >
            {/* Top bar */}
            <div className="top-bar d-flex justify-content-end align-items-center pt-3 bg-white">
              <ul className="list-inline mb-0">
                {topMenus.map((menu) => (
                  <li key={menu.label} className="list-inline-item">
                    <Link to={menu.link}>{menu.label.toLocaleUpperCase()}</Link>
                  </li>
                ))}
              </ul>
              <div className="search-box ms-3">
                <input type="text" placeholder="Search" />
                <button type="button">
                  <i className="bi bi-search"></i>
                </button>
              </div>
              <div className="d-flex gap-2">
                <User
                  onClick={() => navigate("/auth/login")}
                  className="icons ms-2"
                  size={18}
                  color="#333"
                />
              </div>
            </div>

            {/* Bottom menus with dropdowns */}
            <ul className="navbar-nav navbar-main d-flex justify-content-end align-items-center">
              {bottomMenus.map((menu) => (
                <li
                  key={menu.label}
                  className={`nav-item dropdown ${
                    menu.submenu ? "has-mega" : ""
                  }`}
                >
                  <a
                    href="#!"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    role="button"
                    aria-expanded="false"
                  >
                    {menu.label}
                  </a>

                  {/* Mega menu */}
                  <div
                    className={`dropdown-menu ${menu.label
                      ?.replace(/\s+/g, "-")
                      .toLowerCase()}`}
                  >
                    <div className="row dropdown-menu-container">
                      {menu.submenu.map((col) => (
                        <div className="dropdown-menu-col" key={col.label}>
                          <p className="top-head">
                            <Link to={col.link || "#"}>{col.label}</Link>
                          </p>
                          {col.submenu?.length > 0 && (
                            <ul>
                              {col.submenu.map((item) => (
                                <li key={item.label}>
                                  <Link to={item.link || "#"}>
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="d-flex gap-2 mobile-right">
            <Search className="icon d-lg-none" size={24} color="#333" />
            <User
              className="icon "
              size={24}
              color="#333"
              onClick={() => navigate("/auth/login")}
            />

            <button className="mobile-toggle" onClick={toggleMobile}>
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <>
            {/* Overlay background */}
            <div className="drawer-overlay" onClick={toggleMobile}></div>

            {/* Drawer itself */}
            <div className="drawer">
              <div className="drawer-header">
                <img
                  src="/logo.svg"
                  alt="Logo"
                  className={window.innerWidth > 991 ? "d-none" : "drawer-logo"}
                />
                <button className="close-btn" onClick={toggleMobile}>
                  <X size={28} />
                </button>
              </div>

              <div className="drawer-content">
                {renderMenuItems([...topMenus, ...bottomMenus])}
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
