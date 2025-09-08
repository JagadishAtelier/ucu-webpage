// src/components/NavbarNew.jsx

import React, { useState } from "react";
import {
  Menu,
  X,
  Search,
  User,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
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
  const visibleItemsCount = 6;
  const visibleDesktopItems = menuData.slice(0, visibleItemsCount);
  const hiddenItems = menuData.slice(visibleItemsCount);

  // 2. Create the "More" menu item specifically for the desktop hamburger
  const moreMenuItem = hiddenItems
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
      <div className="nav-center desktop-menu">
        <ul className="menu depth-0">
          {visibleDesktopItems.map((item, idx) => (
            <li key={idx} className="menu-item">
              {item.submenu ? (
                <>
                  <button
                    className="menu-btn"
                    onClick={() => toggleSubmenu(item.label)}
                  >
                    {item.label}
                    <ChevronDown size={16} />
                  </button>
                  {openMenus[item.label] && renderMenuItems(item.submenu, 1)}
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

      {/* Mobile/Hamburger Drawer */}
      {mobileOpen && (
        <div className="mobile-menu">
          {/* Render different menus based on device */}
          {window.innerWidth > 991 ? (
            // On desktop, show only the "More" items inside the hamburger
            renderMenuItems(moreMenuItem, 0)
          ) : (
            // On mobile, show all the original items
            renderMenuItems(mobileMenuData, 0)
          )}
        </div>
      )}
    </nav>
  );
};

export default NavbarNew;