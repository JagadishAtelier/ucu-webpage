import React, { useEffect, useRef, useState } from "react";
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
  { icon: <Rocket />, title: "Industry First. Future Ready. Always.", description: "At Universal Corporate University (UCU), Chennai, we don’t just follow industry trends — we set them. Our programs are engineered for the boardroom, built with the boardroom, and benchmarked against global best practices. Here's how we lead the charge:" },
  { icon: <Timer />, title: "Strategy Powered by 100+ CXOs", description: "Our Business Advisory Council, HR Leadership Panels (CHROs, TA Heads, L&D Experts), and Young CXO Council bring together over 100 top-tier industry leaders from global MNCs. These visionaries co-create UCU’s curriculum, ensuring every module is a direct response to what the market demands — not what academia assumes. - In addition, UCU is establishing sector-specific and program-led advisory councils in domains such as Sales, Product Management, Cybersecurity, Brand Management, Digital Marketing, FinTech, Global Capability Centres (GCCs), and more — enabling deep vertical alignment and precision-driven curriculum design for each specialized track." },
  { icon: <GraduationCap />, title: "Faculty of Titans", description: "UCU’s Professors of Practice and industry trainers hail from the world’s most respected firms in Consulting, Finance, Product Management, and Technology. They don’t just teach — they transfer wisdom, war stories, and winning strategies." },
  { icon: <BadgeCheck />, title: "Day-Zero Industry Readiness", description: "Our learners don’t wait to be industry-ready — they arrive that way. Every program is infused with real-world simulations, case-led learning, and leadership grooming, ensuring fresh graduates hit the ground sprinting and experienced professionals ascend to strategic roles." },
  { icon: <Target />, title: "Sector-Specific Leadership Tracks", description: "Whether it’s FinTech, Mobility, Sustainability, BFSI, IT/ITES, Manufacturing, Consulting, Data & Analytics, or Semiconductors — our curated programs are precision-built to meet the leadership needs of tomorrow’s enterprises." },
  { icon: <TestTube2 />, title: "Faculty Certification with Corporate DNA", description: "UCU’s pioneering Faculty Certification initiative reimagines academic excellence by blending traditional pedagogy with corporate acumen. We certify educators to teach with the pulse of the industry — not just the pages of a textbook." },
  { icon: <RefreshCcw />, title: "Continuous Learning for Continuous Relevance", description: "For working professionals, UCU is a lifelong partner. Our executive learning modules ensure you stay ahead of the curve — with the latest tools, trends, and transformations shaping your sector." },
];

function IndustryApproachContent() {
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
  }, []);

  const rows = [
    features.slice(0, 3),
    features.slice(3, 6),
    features.slice(6, 7),
  ];

  return (
    <section className="industry-approach-section py-5">
      <div className="container-flued mx-5">
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
            {rowItems.map((item, index) => {
              const cardIndex = rowIndex * 3 + index;
              const isExpanded = expandedIndex === cardIndex;

              return (
                <div className="col-lg-4 col-md-6 d-flex justify-content-center" key={index}>
                  <div
                    className="industry-card text-left h-100 w-100"
                    ref={(el) => cardsRef.current.push(el)}
                  >
                    <div className="d-flex justify-content-center">
                      <div className="industry-icon">{item.icon}</div>
                    </div>
                    <h4 className="fw-bold mt-4 mb-3 text-center">{item.title}</h4>

                    <p className="text-muted small text-center">
                      {isExpanded
                        ? item.description
                        : item.description.slice(0, 120) + "..."}
                    </p>

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
