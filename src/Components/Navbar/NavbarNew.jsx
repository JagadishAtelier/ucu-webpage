import React, { useState } from "react";
import { menuData } from "./menuData";
import {
  Menu,
  X,
  Search,
  User,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import "./NavbarNew.css";

const NavbarNew = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({});

  const toggleMobile = () => setMobileOpen(!mobileOpen);

  const toggleSubmenu = (label) => {
    setOpenMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  // recursive renderer for nested menus
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
                {openMenus[item.label] && renderMenuItems(item.submenu, depth + 1)}
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
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-left">
        <a href="/">
          <img src="/logo.png" alt="Logo" className="logo" />
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="nav-center desktop-menu">
        {renderMenuItems(menuData)}
      </div>

      {/* Right side icons */}
      <div className="nav-right">
        <Search className="icon" />
        <User className="icon" />
        <button className="mobile-toggle" onClick={toggleMobile}>
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="mobile-menu">
          {renderMenuItems(menuData)}
        </div>
      )}
    </nav>
  );
};

export default NavbarNew;
