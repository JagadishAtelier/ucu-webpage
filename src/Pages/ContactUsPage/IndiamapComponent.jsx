import React, { useState } from "react";
import ReactDatamaps from "react-india-states-map";

const data = {
  Maharashtra: { value: 50, tooltip: "Maharashtra info" },
  Kerala: { value: 30, tooltip: "my name" },
};

export default function IndiamapComponent() {
  const [tooltip, setTooltip] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (stateName, stateData, event) => {
    if (stateData?.tooltip) {
      setTooltip(stateData.tooltip);
      setPosition({ x: event.clientX, y: event.clientY });
    }
  };

  const handleMouseLeave = () => {
    setTooltip("");
  };

  return (
    <div className="india-map-wrapper" style={{ position: "relative" }}>
      <ReactDatamaps
        data={data}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        disableDefaultTooltip={true} // ✅ important
      />

      {tooltip && (
        <div
          style={{
            position: "fixed",
            top: position.y + 10,
            left: position.x + 10,
            background: "black",
            color: "white",
            padding: "5px 10px",
            borderRadius: "4px",
            pointerEvents: "none",
            zIndex: 1000,
          }}
        >
          {tooltip}
        </div>
      )}
    </div>
  );
}
