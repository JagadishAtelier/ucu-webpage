import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { menuData } from "./menuData";
import "./Navbar.css";
import { ChevronDown, ChevronRight, Menu, Search, User, X } from "lucide-react";
import logoImg from '../../Assets/LogoRar/UCU logo Center.jpg'
const Navbar = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  // Using an object to keep track of which menus are open, by their label
  const [openMenus, setOpenMenus] = useState({});

  const toggleMobile = () => setMobileOpen(!mobileOpen);

  // Separating top-level menu items for desktop vs mobile drawer display
  // For the drawer, it's better to render all in one go with proper nesting
  // so we can combine them later.
  // For now, let's just make sure menuData is used correctly for the drawer.

  const toggleSubmenu = (label) => {
    setOpenMenus((prev) => ({
      ...prev,
      [label]: !prev[label], // Toggle the state for the clicked menu item's label
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
                  className={`menu-btn depth-${depth} ${openMenus[item.label] ? 'open' : ''}`}
                  onClick={() => toggleSubmenu(item.label)}
                >
                  {item.label}
                  {depth === 0 ? (
                    <ChevronDown size={16} className={`chevron ${openMenus[item.label] ? 'rotated' : ''}`} />
                  ) : (
                    <ChevronRight size={16} className={`chevron ${openMenus[item.label] ? 'rotated' : ''}`} />
                  )}
                </button>
                {/* Only render submenu if it's open */}
                {openMenus[item.label] && item.submenu.length > 0 && (
                  renderMenuItems(item.submenu, depth + 1)
                )}
              </>
            ) : (
              <a href={item.link} className={`menu-link depth-${depth}`} onClick={toggleMobile}>
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
          <Link className="navbar-brand logo-box m-lg-0" to="/">
              <img
                src={logoImg}
                alt="Universal Corporate University Logo"
                className="logo-img"
              />
              {/* <p className="logo-text">Business School</p> */}
          </Link>

          <Link className="navbar-brand mobile-only" to="/">
            <img
                src={logoImg}
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
              <div className="Business-school">{/* <p className="logo-text">Chennai</p> */}</div>
              <ul className="list-inline mb-0">
                {menuData.filter((menu) => !menu.submenu).map((menu) => ( // Use menuData directly for top-level non-submenu items
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

            {/* Bottom menus with dropdowns (Desktop Mega Menu) */}
            <ul className="navbar-nav navbar-main d-flex justify-content-end align-items-center">
              {menuData.filter((menu) => menu.submenu).map((menu) => ( // Use menuData directly for top-level submenu items
                <li
                  key={menu.label}
                  className={`nav-item dropdown ${menu.submenu ? "has-mega" : ""}`}
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
                          {/* Render sub-submenus recursively */}
                          {col.submenu && col.submenu.length > 0 && (
                            <ul className="third-level-menu">
                              {col.submenu.map((subItem) => (
                                <li key={subItem.label}>
                                  {subItem.submenu ? (
                                    <>
                                      <div className="fourth-level-parent">
                                        <Link to={subItem.link || "#"} className="third-level-link">
                                          {subItem.label}
                                        </Link>
                                        <ChevronRight size={14} className="right-arrow-icon" />
                                      </div>
                                      {subItem.submenu.length > 0 && (
                                        <ul className="fourth-level-menu">
                                          {subItem.submenu.map((fourthItem) => (
                                            <li key={fourthItem.label}>
                                              <Link to={fourthItem.link || "#"} className="fourth-level-link">
                                                {fourthItem.label}
                                              </Link>
                                            </li>
                                          ))}
                                        </ul>
                                      )}
                                    </>
                                  ) : (
                                    <Link to={subItem.link || "#"}>
                                      {subItem.label}
                                    </Link>
                                  )}
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
                {/* Render all menu data for the mobile drawer */}
                {renderMenuItems(menuData)} 
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;