import React from "react";

export default function EEPPhase() {
  const phases = [
    {
      title: "Phase 1: Kickoff and Discovery",
      items: ["Chemistry discussion", "Context understanding"]
    },
    {
      title: "Phase 2: Diagnostics, Goal Setting",
      items: ["Assessment", "Goal Setting"]
    },
    {
      title: "Phase 3: Implementation",
      items: [
        "Dive deep 1:1 sessions",
        "Explore mindsets",
        "Experimentation and real world application on goal",
        "Weekly Journalling, Monthly nudges, articles, prompts"
      ]
    },
    {
      title: "Phase 4: Closure",
      items: [
        "Final feedforward",
        "Personal Journal Paper / Presentation on impact stories"
      ]
    }
  ];

  return (
    <section className="EEPPhase-container container py-5">
      <h1 className="EEPPhase-title mb-4">
        The proposed program will cover four phases
      </h1>

      <div className="row g-4">
        {phases.map((phase, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3 bg-white">
            <div className="EEPPhase-card p-4 h-100 border rounded shadow">
              <h5 className="EEPPhase-card-title fw-semibold mb-3">
                {phase.title}
              </h5>
              <ul className="EEPPhase-list list-unstyled">
                {phase.items.map((item, i) => (
                  <li key={i} className="EEPPhase-list-item mb-2">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
