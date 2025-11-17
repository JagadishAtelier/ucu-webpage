import React, { useState } from "react";

const statesData = {
  Maharashtra: { top: "60%", left: "30%", info: "Maharashtra info" },
  Kerala: { top: "85%", left: "35%", info: "Kerala info" },
  Delhi: { top: "20%", left: "50%", info: "Delhi info" },
  Karnataka: { top: "70%", left: "35%", info: "Karnataka info" },
  TamilNadu: { top: "90%", left: "45%", info: "Tamil Nadu info" },
  // Add all states with approximate top/left positions
};

export default function IndiaMapWithPopup() {
  const [hoveredState, setHoveredState] = useState(null);

  return (
    <div style={{ position: "relative", width: "800px", margin: "0 auto" }}>
      {/* Map Image */}
      <img
        src="https://i.pinimg.com/736x/e7/b3/5a/e7b35a6461b350af24b83bc310360070.jpg"
        alt="India Map"
        style={{ width: "100%", display: "block" }}
      />

      {/* State Hotspots */}
      {Object.entries(statesData).map(([stateName, { top, left, info }]) => (
        <div
          key={stateName}
          style={{
            position: "absolute",
            top: top,
            left: left,
            width: "30px",
            height: "30px",
            transform: "translate(-50%, -50%)",
            cursor: "pointer",
            backgroundColor:"black"
          }}
          onMouseEnter={() => setHoveredState({ name: stateName, info })}
          onMouseLeave={() => setHoveredState(null)}
        ></div>
      ))}

      {/* Tooltip Popup */}
{/* Tooltip Popup */}
{hoveredState && (
  <div
    style={{
      position: "absolute",
      top: "0",
      left: "50%",
      transform: "translate(-50%, 0)",
      background: "#000", // Fully black background
      color: "#fff",
      padding: "8px 12px",
      borderRadius: "6px",
      pointerEvents: "none",
      marginTop: "20px",
    }}
  >
    {hoveredState.info}
  </div>
)}

    </div>
  );
}
