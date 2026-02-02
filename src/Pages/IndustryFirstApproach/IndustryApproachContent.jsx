import React, { useEffect, useRef, useState } from "react";
import {
  Rocket,
  Timer,
  GraduationCap,
  BadgeCheck,
  Target,
  TestTube2,
  RefreshCcw,
  User2,
  Users,
  Building2,
} from "lucide-react";
import "./IndustryFirstApproach.css";

const iconMap = {
  Rocket: <Rocket />,
  Timer: <Timer />,
  GraduationCap: <GraduationCap />,
  BadgeCheck: <BadgeCheck />,
  Target: <Target />,
  TestTube2: <TestTube2 />,
  RefreshCcw: <RefreshCcw />,
  Users: <Users />,
  Building2: <Building2 />,
  User2: <User2 />
};

function stripHtml(html) {
  if (!html) return "";
  const tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

function IndustryApproachContent({ features, title, description }) {
  const rowsRef = useRef([]);
  const cardsRef = useRef([]);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  useEffect(() => {
    // 🔹 Existing row animation observer
    const rowObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-row");
          }
        });
      },
      { threshold: 0.2 }
    );

    rowsRef.current.forEach((row) => {
      if (row) rowObserver.observe(row);
    });

    // 🔹 NEW: Card active observer (for mobile)
    let cardObserver;

    if (window.innerWidth <= 768) {
      cardObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active-card");
            } else {
              entry.target.classList.remove("active-card");
            }
          });
        },
        {
          threshold: 0.6, // card must be 60% visible
        }
      );

      cardsRef.current.forEach((card) => {
        if (card) cardObserver.observe(card);
      });
    }

    return () => {
      rowObserver.disconnect();
      if (cardObserver) cardObserver.disconnect();
    };
  }, [features]);

  // Use props features if available
  const dataFeatures = features || [];

  // Chunk into rows of 3
  const rows = [];
  for (let i = 0; i < dataFeatures.length; i += 3) {
    rows.push(dataFeatures.slice(i, i + 3));
  }

  return (
    <section className="industry-approach-section py-5">
      <div className="container-flued mx-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6">
            {title || "Industry Aligned. Leadership Driven."}
          </h2>
          {description && (
            <div className="text-muted mx-auto" style={{ maxWidth: "750px" }} dangerouslySetInnerHTML={{ __html: description }}></div>
          )}
        </div>

        {rows.map((rowItems, rowIndex) => (
          <div
            key={rowIndex}
            ref={(el) => (rowsRef.current[rowIndex] = el)}
            className="row g-4 industry-row reveal-row justify-content-center"
          >
            {rowItems.map((item, index) => {
              const cardIndex = rowIndex * 3 + index;
              const isExpanded = expandedIndex === cardIndex;
              const iconComponent = iconMap[item.icon] || <Rocket />;

              return (
                <div className="col-lg-4 col-md-6 d-flex justify-content-center" key={index}>
                  <div
                    className="industry-card text-left h-100 w-100"
                    ref={(el) => cardsRef.current.push(el)}
                  >
                    <div className="d-flex justify-content-center">
                      <div className="industry-icon">{iconComponent}</div>
                    </div>
                    <h4 className="fw-bold mt-4 mb-3 text-center">{item.title}</h4>

                    <div className="text-muted small text-center">
                      {isExpanded ? (
                        <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
                      ) : (
                        <p>{stripHtml(item.description).slice(0, 120) + "..."}</p>
                      )}
                    </div>

                    <p
                      className="text-primary text-center fw-bold mt-1"
                      style={{ cursor: "pointer" }}
                      onClick={() => toggleExpand(cardIndex)}
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}

export default IndustryApproachContent;
