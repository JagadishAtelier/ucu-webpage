// src/components/NavbarNew.jsx

import React, { useState } from "react";
import { Menu, X, Search, User, ChevronDown, ChevronRight } from "lucide-react";
import { menuData } from "./menuData";
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

  // 1. Define the number of items to show on the main desktop nav
  const visibleItemsCount = 5;
  const visibleDesktopItems = menuData.slice(0, visibleItemsCount);
  const hiddenItems = menuData.slice(visibleItemsCount);

  // 2. Create the "More" menu item specifically for the desktop hamburger
  const moreMenuItem = hiddenItems;
  // 3. Create a mobile-specific menu data array that includes ALL items
  const mobileMenuData = menuData;

  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="/">
          <img src="/logo1.png" alt="Logo" className="logo" />
        </a>
      </div>

      {/* Desktop Menu */}
      {/* Desktop Menu */}
      <div className="nav-center desktop-menu">
        <ul className="menu depth-0">
          {visibleDesktopItems.map((item, idx) => (
            <li key={idx} className="menu-item has-submenu">
              {item.submenu ? (
                <>
                  <a href={item.link || "#"} className="menu-link">
                    {item.label}
                    <ChevronDown size={14} />
                  </a>
                  <ul className="submenu depth-1">
                    {item.submenu.map((sub, subIdx) => (
                      <li key={subIdx} className="menu-item">
                        {sub.submenu ? (
                          <>
                            <a href={sub.link || "#"} className="menu-link">
                              {sub.label}
                              <ChevronRight size={12} />
                            </a>
                            <ul className="submenu depth-2">
                              {sub.submenu.map((child, cIdx) => (
                                <li key={cIdx} className="menu-item">
                                  <a href={child.link} className="menu-link">
                                    {child.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <a href={sub.link} className="menu-link">
                            {sub.label}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <a href={item.link} className="menu-link">
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Right side icons and toggle */}
      <div className="nav-right">
        <Search className="icon desktop-only" />
        <User className="icon desktop-only" />
        <button className="mobile-toggle" onClick={toggleMobile}>
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Drawer Menu (works for both desktop & mobile) */}
      {mobileOpen && (
        <>
          {/* Overlay background */}
          <div className="drawer-overlay" onClick={toggleMobile}></div>

          {/* Drawer itself */}
          <div className="drawer">
            <div className="drawer-header">
              <img
                src="/logo1.png"
                alt="Logo"
                className={window.innerWidth > 991 ? "d-none" : "drawer-logo"}
              />
              <button className="close-btn" onClick={toggleMobile}>
                <X size={28} />
              </button>
            </div>

            <div className="drawer-content">
              {renderMenuItems(
                window.innerWidth > 991 ? moreMenuItem : mobileMenuData
              )}
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default NavbarNew;
