import React, { useEffect, useRef } from "react";
import {
  Rocket,
  Timer,
  GraduationCap,
  BadgeCheck,
  Target,
  TestTube2,
  RefreshCcw,
} from "lucide-react";
import "./IndustryFirstApproach.css";

const features = [
  { icon: <Rocket />, title: "Industry First. Future Ready. Always.", description: "At UCU, we don’t follow industry trends — we help create them. Every program is co-built with the industry, for the industry, and benchmarked against global best practices." },
  { icon: <Timer />, title: "Strategy Powered by 100+ CXOs", description: "Our councils include CHROs, TA Heads, L&D leaders and CXOs from global MNCs who actively co-design our curriculum across domains like Product, Cybersecurity, FinTech, Digital Marketing, GCCs & more." },
  { icon: <GraduationCap />, title: "Faculty of Titans", description: "Our Professors of Practice come from top consulting, finance and tech firms, delivering real-world insights, boardroom thinking and industry execution." },
  { icon: <BadgeCheck />, title: "Day-Zero Industry Readiness", description: "Case-based learning, simulations, leadership labs and corporate grooming ensure graduates are job-ready from day one." },
  { icon: <Target />, title: "Sector-Specific Leadership Tracks", description: "Specialized programs across FinTech, Mobility, BFSI, Manufacturing, Data & Analytics, Consulting, and Semiconductors — all built for future leadership." },
  { icon: <TestTube2 />, title: "Faculty Certification with Corporate DNA", description: "Our Faculty Certification blends pedagogy with corporate acumen — reimagining how modern educators teach for industry outcomes." },
  { icon: <RefreshCcw />, title: "Continuous Learning for Continuous Relevance", description: "Executive learning programs for professionals to stay updated with emerging tools, trends and enterprise transformations." },
];

function IndustryApproachContent() {
  const rowsRef = useRef([]);
  const cardsRef = useRef([]);

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
  }, []);

  const rows = [
    features.slice(0, 3),
    features.slice(3, 6),
    features.slice(6, 7),
  ];

  return (
    <section className="industry-approach-section py-5">
      <div className="container-fluid mx-1">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6">
            Industry Aligned. Leadership Driven.
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "750px" }}>
            UCU is built on a simple belief: education must move at the speed of
            industry. Every program is engineered with corporate leaders to
            create future-ready professionals.
          </p>
        </div>

        {rows.map((rowItems, rowIndex) => (
          <div
            key={rowIndex}
            ref={(el) => (rowsRef.current[rowIndex] = el)}
            className="row g-4 industry-row reveal-row justify-content-center"
          >
            {rowItems.map((item, index) => (
              <div
                className="col-lg-4 col-md-6 d-flex justify-content-center"
                key={index}
              >
                <div
                  className="industry-card text-left h-100 w-100"
                  ref={(el) => (cardsRef.current.push(el))}
                >
                  <div className="d-flex justify-content-center">
                    <div className="industry-icon">{item.icon}</div>
                  </div>
                  <h4 className="fw-bold mt-4 mb-3 text-center">
                    {item.title}
                  </h4>
                  <p className="text-muted small text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default IndustryApproachContent;
