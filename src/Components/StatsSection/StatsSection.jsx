import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import "./StatsSection.css"; // custom css file

const statsData = [
  { value: 20000, label: "Undergraduate & Graduate Students" },
  { value: 16214, label: "UCU University Faculty & Staff" },
  { value: 300000, label: "UCU University Alumni Worldwide" },
  { value: 1000000, label: "Undergraduate & Graduate Students" },
];

const StatsSection = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="stats-section py-5 mb-5">
      <div className="container-fluid px-5">
        <div className="row text-center">
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              className={`col-md-3 col-6 stats-box ${
                idx !== statsData.length - 1 ? "border-end" : ""
              }`}
            >
              <h2 className="stat-number">
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    formattingFn={
                      (val) => val.toLocaleString("en-IN")
                    }
                  />
                ) : (
                  0
                )}
              </h2>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
