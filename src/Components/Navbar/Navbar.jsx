import React from "react";
import { Link } from "react-router-dom";
import { menuData } from "./menuData";
import "./Navbar.css";
import { Search, User } from "lucide-react";

const Navbar = () => {
  const topMenus = menuData.filter((menu) => !menu.submenu);
  const bottomMenus = menuData.filter((menu) => menu.submenu);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-0 navbar-main-container">
        <div className="container-fluid">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img src="/logo.png" alt="Logo" height="85" />
          </Link>

          {/* Collapse wrapper */}
          <div
            className="collapse navbar-collapse justify-content-end flex-column align-items-end"
            id="mainNavbar"
          >
            {/* Top bar */}
            <div className="top-bar d-flex justify-content-end align-items-center pt-4 bg-white">
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
                  <div className={`dropdown-menu ${menu.label?.replace(/\s+/g, "-").toLowerCase()}`}>
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
              <div className="d-flex gap-2">
                <Search className="icon" size={18} color="#333" />
                <User className="icon" size={18} color="#333" />
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
