import React from "react";

const defaultWhyData = [
  {
    iconName: "Star",
    title: "Global Gold Standard",
    text: "Inspired by the definition of coaching as “partnering with clients in a thought-provoking and creative process that inspires them to maximize their personal and professional potential"
  },
  {
    iconName: "Shield",
    title: "Professionalism & Integrity",
    text: "Programs built on responsibility, respect, competence, and excellence"
  },
  {
    iconName: "Heart",
    title: "Human-Centric Approach",
    text: "Compassionate, equitable, and tailored to individual journeys"
  },
  {
    iconName: "TrendingUp",
    title: "Impact-Driven",
    text: "Every coaching engagement is measured through behavioral shifts and organizational outcomes"
  }
];

function LCPWhy({ getKeyValue, getArray }) {
  const kv = (key, fallback) => (getKeyValue ? getKeyValue("LCPWhy", key, fallback) : fallback);
  const arr = (key, fallback) => (getArray ? getArray("LCPWhy", key, fallback) : fallback);

  const mainHeading = kv("mainHeading", "Why UCU Leadership Coach Academy?");
  const whyItems = arr("whyItemsList", defaultWhyData);

  const renderIcon = (name) => {
    switch (name) {
      case "Star":
        return (
          <svg width="32" height="32" strokeWidth="1.6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.91L18.18 22 12 18.27 5.82 22 7 14.18l-5-4.91 6.91-1.01L12 2z"/>
          </svg>
        );
      case "Shield":
        return (
          <svg width="32" height="32" strokeWidth="1.6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path d="M12 2l8 4v6c0 5.25-3.75 10-8 10s-8-4.75-8-10V6l8-4z"/>
          </svg>
        );
      case "Heart":
        return (
          <svg width="32" height="32" strokeWidth="1.6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path d="M12 21s-7.5-4.5-7.5-10.5S9 2 12 6c3-4 7.5-2 7.5 4.5S12 21 12 21z"/>
          </svg>
        );
      case "TrendingUp":
      default:
        return (
          <svg width="32" height="32" strokeWidth="1.6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path d="M3 17l6-6 4 4 8-8" />
            <path d="M14 7h7v7" />
          </svg>
        );
    }
  };

  return (
    <div className="LCPWhy-section mt-5">
      <div className="LCPWhy-container">
        <h3 className="LCPWhy-title">{mainHeading}</h3>

        <div className="LCPWhy-grid">
          {whyItems.map((item, index) => (
            <div key={index} className="LCPWhy-card">
              <div className="LCPWhy-icon">
                {renderIcon(item.iconName)}
              </div>
              <p className="LCPWhy-text">
                <strong>{item.title}:</strong> {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LCPWhy;
