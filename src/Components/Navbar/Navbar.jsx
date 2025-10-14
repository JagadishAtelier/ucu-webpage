import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { menuData } from "./menuData";
import "./Navbar.css";
import { ChevronDown, ChevronRight, Menu, Search, User, X } from "lucide-react";
import logoImg from "../../Assets/aac/Copy of Webpage_20250924_151944_0001.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({});
  const [hoverMenus, setHoverMenus] = useState({});
  const [searchDrodow , setSearchDropdown] = useState(false)

  const toggleMobile = () => setMobileOpen(!mobileOpen);

  const toggleSearch = () => setSearchDropdown(!searchDrodow)

  const toggleSubmenu = (label) => {
    setOpenMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleScrollNavigation = (scrollId) => {
    setMobileOpen(false); // close mobile drawer if open
    const section = document.getElementById(scrollId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/about-ucu", { state: { section: scrollId } });
    }
  };

  const handleHover = (label) => {
    setHoverMenus((prev) => ({ ...prev, [label]: true }));
  };

  const handleLeave = (label) => {
    setTimeout(() => {
      setHoverMenus((prev) => ({ ...prev, [label]: false }));
    }, 300); // quick hover delay
  };

  // ✅ Recursive submenu renderer
const renderNestedMenu = (submenu, depth = 1) => {
  if (!submenu || !submenu.length) return null;
const hasCustomLink = submenu.some(sub => sub.className === "sublink-custom");
  return (
    <ul className={`submenu depth-${depth} ${hasCustomLink ? "no-border" : ""}`}>
      {submenu.map((sub) => (
        <li key={sub.label} className={`submenu-item ${sub.className === "sublink-custom" ? "no-padding" : ""}`}>
          {sub.submenu && sub.submenu.length > 0 ? (
            <div className="submenu-parent">
              <Link
                to={sub.link || "#"}
                className={`submenu-link ${sub.className || ""}`}
              >
                {sub.label}
              </Link>
              <ChevronRight size={12} className="submenu-arrow" />
              {renderNestedMenu(sub.submenu, depth + 1)}
            </div>
          ) : (
            <Link
              to={sub.link || "#"}
              className={`submenu-link ${sub.className || ""}`}
            >
              {sub.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};


  // ✅ Render menu recursively (for mobile)
  const renderMenuItems = (items, depth = 0) => {
    return (
      <ul className={`menu depth-${depth}`}>
        {items.map((item) => (
          <li key={item.label} className="menu-item">
            {item.submenu && item.submenu.length > 0 ? (
              <>
                <button
                  className={`menu-btn depth-${depth} ${
                    openMenus[item.label] ? "open" : ""
                  }`}
                  onClick={() => toggleSubmenu(item.label)}
                >
                  {item.label}
                  {depth === 0 ? (
                    <ChevronDown
                      size={16}
                      className={`chevron ${
                        openMenus[item.label] ? "rotated" : ""
                      }`}
                    />
                  ) : (
                    <ChevronRight
                      size={16}
                      className={`chevron ${
                        openMenus[item.label] ? "rotated" : ""
                      }`}
                    />
                  )}
                </button>
                {openMenus[item.label] &&
                  renderMenuItems(item.submenu, depth + 1)}
              </>
            ) : (
              <>
                {item.scrollId ? (
                  <button
                    className={`menu-link depth-${depth}`}
                    onClick={() => handleScrollNavigation(item.scrollId)}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    to={item.link || "#"}
                    className={`menu-link depth-${depth}`}
                    onClick={toggleMobile}
                  >
                    {item.label}
                  </Link>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <header className="position-relative">
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md py-0 navbar-main-container">
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

          {/* Top Menu */}
          <div
            className="collapse navbar-collapse justify-content-end flex-column align-items-end"
            id="mainNavbar"
          >
            <div className="top-bar d-flex justify-content-end align-items-center pt-3 bg-white">
              <ul className="list-inline mb-0">
                {menuData
                  .filter((menu) => menu.placement === "top")
                  .map((menu) => (
                    <li
                      key={menu.label}
                      className={`list-inline-item nav-item dropdown ${
                        menu.submenu ? "has-mega" : ""
                      }`}
                      onMouseEnter={() => handleHover(menu.label)}
                      onMouseLeave={() => handleLeave(menu.label)}
                    >
                      {menu.submenu && menu.submenu.length > 0 ? (
                        <>
                          {menu.scrollId ? (
                            <button
                              className="nav-link dropdown-toggle bg-transparent border-0"
                              onClick={() =>
                                handleScrollNavigation(menu.scrollId)
                              }
                            >
                              {menu.label.toUpperCase()}
                            </button>
                          ) : (
<Link
  to={menu.link || "#"}
  className={`nav-link dropdown-toggle ${menu.label === "Online Programs" ? "online-program-link" : ""}`}
>
  {menu.label.toUpperCase()}
</Link>

                          )}

                          <div
                            className={`dropdown-menu top-dropdown ${menu.label
                              ?.replace(/\s+/g, "-")
                              .toLowerCase()}`}
                            style={{
                              display: hoverMenus[menu.label]
                                ? "block"
                                : "none",
                            }}
                          >
                            <div className="row dropdown-menu-container">
                              {menu.submenu.map((col) => (
                                <div
                                  className="dropdown-menu-col"
                                  key={col.label}
                                >
                                  <div className="top-head">
                                    {col.scrollId ? (
                                      <button
                                        className="submenu-link bg-transparent border-0 p-0"
                                        onClick={() =>
                                          handleScrollNavigation(col.scrollId)
                                        }
                                      >
                                        {col.label}
                                      </button>
                                    ) : (
                                      <Link
                                        to={col.link || "#"}
                                        className="submenu-link"
                                      >
                                        {col.label}
                                      </Link>
                                    )}
                                  </div>

                                  {col.submenu &&
                                    renderNestedMenu(col.submenu, 2)}
                                </div>
                              ))}
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          {menu.scrollId ? (
                            <button
                              className="nav-link bg-transparent border-0"
                              onClick={() =>
                                handleScrollNavigation(menu.scrollId)
                              }
                            >
                              {menu.label.toUpperCase()}
                            </button>
                          ) : (
                            <Link to={menu.link}>
                              {menu.label.toUpperCase()}
                            </Link>
                          )}
                        </>
                      )}
                    </li>
                  ))}
              </ul>

              {/* Search & Login */}
              {/* <div className="search-box ms-3"> */}
                {/* <input type="text" placeholder="Search" /> */}
                <div className="ms-3 search-icon-nab-bg" onClick={toggleSearch}>
                  <Search size={17} />
                </div>
                {searchDrodow && (
                  <div className="search-dropdown-box-div">
                     <input type="text" className="search-dropdown-box" placeholder="Search ...." />
                <div className="dropdown-search-icon">
                  <Search size={20} />
                </div>
                  </div>
                )}
              {/* </div> */}
              <div className="d-flex gap-2 ms-3 profile-icon-nab-bg">
                <User
                  onClick={() => navigate("/auth/login")}
                  className=""
                  size={18}
                />
              </div>
            </div>

            {/* Bottom/Main Menu */}
            <ul className="navbar-nav navbar-main d-flex justify-content-end align-items-center">
              {menuData
                .filter((menu) => menu.placement === "bottom")
                .map((menu) => (
                  <li
                    key={menu.label}
                    className={`nav-item dropdown ${
                      menu.submenu ? "has-mega" : ""
                    }`}
                    onMouseEnter={() => handleHover(menu.label)}
                    onMouseLeave={() => handleLeave(menu.label)}
                  >
                    {menu.submenu && menu.submenu.length > 0 ? (
                      <a href={menu.link} className="nav-link dropdown-toggle">
                        {menu.label}
                      </a>
                    ) : (
                      <Link to={menu.link} className="nav-link">
                        {menu.label}
                      </Link>
                    )}
                    {menu.submenu && (
                      <div
                        className={`dropdown-menu ${menu.label
                          ?.replace(/\s+/g, "-")
                          .toLowerCase()}`}
                        style={{
                          display: hoverMenus[menu.label] ? "block" : "none",
                        }}
                      >
                        <div className="row dropdown-menu-container">
                          {menu.submenu.map((col) => (
                            <div className="dropdown-menu-col" key={col.label}>
                              <div className="top-head">
                                {col.scrollId ? (
                                  <button
                                    className="submenu-link bg-transparent border-0 p-0"
                                    onClick={() =>
                                      handleScrollNavigation(col.scrollId)
                                    }
                                  >
                                    {col.label}
                                  </button>
                                ) : (
                                  <Link
                                    to={col.link || "#"}
                                    className="submenu-link"
                                  >
                                    {col.label}
                                  </Link>
                                )}
                              </div>

                              {col.submenu && renderNestedMenu(col.submenu, 2)}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
            </ul>
          </div>

          {/* Mobile Buttons */}
          <div className="d-flex gap-2 mobile-right">
            <Search className="icon d-lg-none" size={24} color="#333" />
            <User
              className="icon"
              size={24}
              color="#333"
              onClick={() => navigate("/auth/login")}
            />
            <button className="mobile-toggle" onClick={toggleMobile}>
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <>
            <div className="drawer-overlay" onClick={toggleMobile}></div>
            <div className="drawer">
              <div className="drawer-header">
                <Link
                  className="navbar-brand d-flex align-items-center logo-box m-lg-0"
                  to="/"
                >
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
              <div className="drawer-content">{renderMenuItems(menuData)}</div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
