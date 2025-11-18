import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const paragraphs = [
  "Curriculum co-authored and delivered by 100+ CXOs and HR leaders, ensuring day-zero readiness and long-term leadership potential.",
  "Faculty drawn from global MNCs, bringing practical insights and mentorship to every classroom.",
  "Access to high-calibre, untapped talent from rural and underserved regions, transformed through UCU’s immersive ecosystem into market-ready professionals with exceptional attitude, resilience, and long-term commitment to organizational growth.",
  "Inclusive education model, connecting rural colleges to our digital platforms and breaking economic barriers to ensure equitable access to high-quality learning."
];

export default function CppMindMap() {
  const cardsRef = useRef([]);
  const indicatorRef = useRef(null);

useEffect(() => {
  // Animate cards
  gsap.from(cardsRef.current, {
    x: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".cpp-mindmap-cards-container",
      start: "top 80%",
    }
  });

  // Smooth scroll indicator animation
  ScrollTrigger.create({
    trigger: ".cpp-mindmap-cards-container",
    start: "top 500",
    end: "bottom 500",
    onUpdate: (self) => {
      const progress = self.progress;
      const lineHeight = self.trigger.offsetHeight;
      const indicator = indicatorRef.current;
      if (indicator) {
        // Animate smoothly using gsap.to
        gsap.to(indicator, {
          top: progress * lineHeight,
          duration: 1,
          ease: "power1.out"
        });
      }
    }
  });
}, []);


  return (
    <div className="cpp-mindmap-container">
      <div className="cpp-mindmap-left-image">
        <img
          src="https://img.freepik.com/premium-photo/young-asian-female-student-holding-a4-papers-with-both-hands-black-wall-question-marks-ligh-tbulb-doodle_175634-23299.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_incoming&w=740&q=80"
          alt="Left Side"
        />
      </div>

      <div className="cpp-mindmap-right-content">
        <div className="cpp-mindmap-vertical-line">
          <div className="cpp-mindmap-indicator" ref={indicatorRef}></div>
        </div>
        <div className="cpp-mindmap-cards-container">
          {paragraphs.map((para, index) => (
            <div
              className="cpp-mindmap-card"
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <p>{para}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
