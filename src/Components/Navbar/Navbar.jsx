import { useState } from "react";
import { menuData as menuItems } from "./menuData";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

   const handleSubMenuToggle = (key) => {
    setActiveSubMenu((prev) => (prev === key ? null : key));
  };

  const renderMenu = (items, level = 0, parentLabel = "") => (
    <ul className={`submenu level-${level}`}>
      {items.map((item) => {
        const key = `${parentLabel}-${item.label}`;

        return (
          <li
            key={key}
            className={item.submenu ? "nav-item has-submenu" : "nav-item"}
            onMouseEnter={() => !menuOpen && setActiveSubMenu(key)}
            onMouseLeave={() => !menuOpen && setActiveSubMenu(null)}
            onClick={() => menuOpen && handleSubMenuToggle(key)}
          >
            {item.submenu ? (
              <>
                <a
                  href={item.link || "#"}
                  onClick={(e) => e.preventDefault()}
                >
                  {item.label} <i className="bi bi-chevron-down"></i>
                </a>
                {/* ✅ Show only when active */}
                {activeSubMenu === key && renderMenu(item.submenu, level + 1, key)}
              </>
            ) : (
              <a href={item.link}>{item.label}</a>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className="navbar-container">
      <a href="/">
        <img src="/logo.png" alt="logo" className="logo" />
      </a>
      <p className="logo-txt">Universal Corporate University</p>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        {menuItems.map((menu) => (
          <div
            key={menu.label}
            className={`nav-item ${menu.submenu ? "has-submenu" : ""}`}
            onMouseEnter={() => !menuOpen && setActiveSubMenu(menu.label)}
            onMouseLeave={() => !menuOpen && setActiveSubMenu(null)}
            onClick={() => menuOpen && handleSubMenuToggle(menu.label)}
          >
            {menu.submenu ? (
              <>
                <a href={menu.link || "#"} onClick={(e) => e.preventDefault()}>
                  {menu.label} <i className="bi bi-chevron-down"></i>
                </a>
                {/* ✅ Show only active submenu */}
                {activeSubMenu === menu.label &&
                  renderMenu(menu.submenu, 1, menu.label)}
              </>
            ) : (
              <a href={menu.link}>{menu.label}</a>
            )}
          </div>
        ))}
      </div>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Navbar;