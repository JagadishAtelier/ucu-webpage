// src/components/CountUpCard.jsx
import { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import "./CountUpCard.css";

const CountUpCard = ({ end, label, prefix = "", suffix = "" }) => {
  const [hasStarted, setHasStarted] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [hasStarted]);

  return (
    <div className="col-12 col-md-4 mb-4" ref={cardRef}>
      <div className="count-card p-4 rounded-3 text-center d-flex flex-column justify-content-center h-100">
        <div className="count-number">
          {hasStarted ? (
            <CountUp
              start={0}
              end={end}
              duration={2.5}
              separator=","
              prefix={prefix}
              suffix={suffix}
              className="count-text"
            />
          ) : (
            <span className="count-text">
              {prefix}
              {end}
              {suffix}
            </span>
          )}
        </div>
        <p className="count-label fw-bold mt-2">{label}</p>
      </div>
    </div>
  );
};

export default CountUpCard;
