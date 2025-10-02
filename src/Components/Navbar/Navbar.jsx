import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { menuData } from "./menuData";
import "./Navbar.css";
import { ChevronDown, ChevronRight, Menu, Search, User, X } from "lucide-react";
import logoImg from "../../Assets/aac/Copy of Webpage_20250924_151944_0001.png";
const Navbar = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  // Using an object to keep track of which menus are open, by their label
  const [openMenus, setOpenMenus] = useState({});
  const [hoverMenus, setHoverMenus] = useState({});
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

  const handleHover = (label) => {
    setHoverMenus((prev) => ({ ...prev, [label]: true }));
  };
  
  const handleLeave = (label) => {
    setTimeout(() => {
      setHoverMenus((prev) => ({ ...prev, [label]: false }));
    }, 5000); // keeps dropdown open for 5 sec
  };

  const renderMenuItems = (items, depth = 0) => {
    return (
      <ul className={`menu depth-${depth}`}>
        {items.map((item, idx) => (
          <li key={idx} className="menu-item">
            {item.submenu ? (
              <>
                <button
                  className={`menu-btn depth-${depth} ${
                    openMenus[item.label] ? "open" : ""
                  }`}
                  onClick={() => toggleSubmenu(item.label)}
                >
                  {item.label}
                  {item.submenu && item.submenu.length > 0 && (
  depth === 0 ? (
    <ChevronDown
      size={16}
      className={`chevron ${openMenus[item.label] ? "rotated" : ""}`}
    />
  ) : (
    <ChevronRight
      size={16}
      className={`chevron ${openMenus[item.label] ? "rotated" : ""}`}
    />
  )
)}


                </button>
                {/* Only render submenu if it's open */}
                {openMenus[item.label] &&
                  item.submenu.length > 0 &&
                  renderMenuItems(item.submenu, depth + 1)}
              </>
            ) : (
              <a
                href={item.link}
                className={`menu-link depth-${depth}`}
                onClick={toggleMobile}
              >
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
          <Link
            className="navbar-brand d-flex align-items-center logo-box m-lg-0"
            to="/"
          >
            <img
              src={logoImg}
              alt="Universal Corporate University Logo"
              className="logo"
            />
            <div className="border-l">
              <p className="logo-text" style={{ color: "#1703a9" }}>
                <span style={{ color: "#1703a9" }}>U</span>niversal
              </p>
              <p className="logo-text" style={{ color: "#5bc500" }}>
                <span style={{ color: "#5bc500" }}>C</span>orporate
              </p>
              <p className="logo-text" style={{ color: "#07baf3" }}>
                <span style={{ color: "#07baf3" }}>U</span>niversity
              </p>
            </div>
          </Link>

          {/* <Link className="navbar-brand mobile-only" to="/">
            <img
                src={"/logo2.svg"}
              alt="Universal Corporate University Logo"
              className="logo my-auto"
            />
          </Link> */}

          {/* Collapse wrapper */}
          <div
            className="collapse navbar-collapse justify-content-end flex-column align-items-end"
            id="mainNavbar"
          >
            {/* Top bar */}
            <div className="top-bar d-flex justify-content-end align-items-center pt-3 bg-white">
              <div className="Business-school">
                {/* <p className="logo-text">Chennai</p> */}
              </div>
              <ul className="list-inline mb-0">
              {menuData
  .filter((menu) => menu.placement === "top")
  .map((menu) => (
    <li
      key={menu.label}
      className={`list-inline-item nav-item dropdown ${menu.submenu ? "has-mega" : ""}`}
      onMouseEnter={() => handleHover(menu.label)}
      onMouseLeave={() => handleLeave(menu.label)}
    >
      {menu.submenu && menu.submenu.length > 0 ? (
        <>
          <a
            href="#!"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            role="button"
            aria-expanded="false"
          >
            {menu.label.toUpperCase()}
          </a>

          <div
            className={`dropdown-menu top-dropdown  ${menu.label
              ?.replace(/\s+/g, "-")
              .toLowerCase()}`}
            style={{ display: hoverMenus[menu.label] ? "block" : "none" }}
          >
            <div className="row dropdown-menu-container">
              {menu.submenu.map((col) => (
                <div className="dropdown-menu-col" key={col.label}>
                  <p className="top-head">
                    <Link to={col.link || "#"}>{col.label}</Link>
                  </p>
                  {col.submenu && (
                    <ul className="third-level-menu">
                      {col.submenu.map((subItem) => (
                        <li key={subItem.label}>
                          <Link
                            to={subItem.link || "#"}
                            className="third-level-link"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <Link to={menu.link}>{menu.label.toUpperCase()}</Link>
      )}
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
{/* Bottom menus with dropdowns */}
<ul className="navbar-nav navbar-main d-flex justify-content-end align-items-center">
  {menuData
    .filter((menu) => menu.placement === "bottom")
    .map((menu) => (
      <li
        key={menu.label}
        className={`nav-item dropdown ${menu.submenu ? "has-mega" : ""}`}
      >
{menu.submenu && menu.submenu.length > 0 ? (
  <a
    href="#!"
    className="nav-link dropdown-toggle"
    data-bs-toggle="dropdown"
    role="button"
    aria-expanded="false"
  >
    {menu.label}
  </a>
) : (
  <Link to={menu.link} className="nav-link" style={{width:"max-content"}}>
    {menu.label}
  </Link>
)}



        {menu.submenu && menu.submenu.length > 0 && (
          <div className={`dropdown-menu ${menu.label?.replace(/\s+/g, "-").toLowerCase()}`}>
            <div className="row dropdown-menu-container">
              {menu.submenu.map((col) => (
                <div className="dropdown-menu-col" key={col.label}>
                  <p className="top-head">
                    <Link to={col.link || "#"}>{col.label}</Link>
                  </p>
                  {col.submenu && (
                    <ul className="third-level-menu">
                      {col.submenu.map((subItem) => (
                        <li key={subItem.label}>
                          <Link to={subItem.link || "#"} className="third-level-link">
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
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
                <Link
                  className="navbar-brand d-flex align-items-center logo-box m-lg-0"
                  to="/"
                >
                  {/* <img
                src={"/logo2.svg"}
                alt="Universal Corporate University Logo"
                className="logo"
              /> */}
                  <div className="border-l border-white">
                    <p className="logo-text" style={{ color: "#1703a9" }}>
                      <span style={{ color: "#1703a9" }}>U</span>niversal
                    </p>
                    <p className="logo-text" style={{ color: "#5bc500" }}>
                      <span style={{ color: "#5bc500" }}>C</span>orporate
                    </p>
                    <p className="logo-text" style={{ color: "#07baf3" }}>
                      <span style={{ color: "#07baf3" }}>U</span>niversity
                    </p>
                  </div>
                </Link>
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
