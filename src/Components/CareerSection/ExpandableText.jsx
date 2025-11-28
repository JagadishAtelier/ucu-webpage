import React, { useState } from "react";

function ExpandableText({ text, limit = 120, color = "#000" }) {
  const [expanded, setExpanded] = useState(false);

  const isLongText = text.length > limit;
  const displayText = expanded ? text : text.substring(0, limit) + (isLongText ? "..." : "");

  return (
    <p className="program-description mb-2" style={{ color }}>
      {displayText}

      {isLongText && (
        <span
          onClick={() => setExpanded(!expanded)}
          style={{
            color: "#5ac501",
            cursor: "pointer",
            marginLeft: "8px",
          }}
        >
          {expanded ? "Show Less" : "Read More"}
        </span>
      )}
    </p>
  );
}

export default ExpandableText;
