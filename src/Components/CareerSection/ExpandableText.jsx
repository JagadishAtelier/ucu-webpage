import React, { useState, useRef, useEffect } from "react";

/**
 * ExpandableText – shows "Read More" ONLY when the text
 * actually overflows the visible box (CSS line-clamp).
 *
 * Props:
 *   text      – the string to render
 *   maxLines  – number of visible lines before clamping (default 4)
 *   color     – text colour
 *   limit     – (legacy, ignored) kept for backward-compat with callers
 */
function ExpandableText({ text, maxLines = 4, color = "#000", limit }) {
  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef(null);

  // Measure overflow only when text is clamped (not expanded)
  useEffect(() => {
    const el = textRef.current;
    if (el && !expanded) {
      // Use rAF so the browser applies the clamp styles before we measure
      requestAnimationFrame(() => {
        setIsOverflowing(el.scrollHeight > el.clientHeight + 1);
      });
    }
  }, [text, expanded]);

  // Re-check on window resize (box width may change)
  useEffect(() => {
    const handleResize = () => {
      const el = textRef.current;
      if (el && !expanded) {
        setIsOverflowing(el.scrollHeight > el.clientHeight + 1);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [expanded]);

  const clampStyle = !expanded
    ? {
        display: "-webkit-box",
        WebkitLineClamp: maxLines,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      }
    : {};

  return (
    <div className="mb-2">
      <p
        ref={textRef}
        className="program-description"
        style={{ color, ...clampStyle, marginBottom: isOverflowing ? "4px" : "0" }}
      >
        {text}
      </p>

      {isOverflowing && (
        <span
          onClick={() => setExpanded(!expanded)}
          style={{
            color: "#5ac501",
            cursor: "pointer",
            fontSize: "inherit",
            fontWeight: 600,
          }}
        >
          {expanded ? "Show Less" : "Read More"}
        </span>
      )}
    </div>
  );
}

export default ExpandableText;
