import React from "react";

function PGPMConcentrate() {
 const terms = [
    {
      title: "TERM 1",
      list: [
        "Micro Economics",
        "Statistical Methods in Decision-making: Part 1",
        "Financial Accounting",
        "Strategic Marketing & Customer Focus: Part 1",
        "Impact Skills Lab [Communication Lab; Making Sense of Data]",
      ],
    },
    {
      title: "TERM 2",
      list: [
        "Principles of Operations Management: Part 1",
        "Statistical Methods in Decision-making: Part 2",
        "Managerial Accounting",
        "Strategic Marketing & Customer Focus: Part 2",
        "Impact Skills Lab [Storytelling with Data]",
      ],
    },
    {
      title: "TERM 3",
      list: [
        "Business Analytics",
        "Corporate Finance",
        "Strategic Management",
        "Managing Self and People",
        "Principles of Operations Management: Part 2",
        "Impact Skills Lab - Innovation Sandbox",
        "Empirical Study/Industry White Paper",
      ],
    },
    {
      title: "TERM 4",
      list: [
        "Micro Economics",
        "Statistical Methods in Decision-making: Part 1",
        "Financial Accounting",
        "Strategic Marketing & Customer Focus: Part 1",
        "Impact Skills Lab [Communication Lab; Making Sense of Data]",
      ],
    },
    {
      title: "TERM 5",
      list: [
        "Principles of Operations Management: Part 1",
        "Statistical Methods in Decision-making: Part 2",
        "Managerial Accounting",
        "Strategic Marketing & Customer Focus: Part 2",
        "Impact Skills Lab [Storytelling with Data]",
      ],
    },
    {
      title: "TERM 6",
      list: [
        "Business Analytics",
        "Corporate Finance",
        "Strategic Management",
        "Managing Self and People",
        "Principles of Operations Management: Part 2",
        "Impact Skills Lab - Innovation Sandbox",
        "Empirical Study/Industry White Paper",
      ],
    },
  ];

  return (
    <div className="pgpm-wrapper mt-5">
      <h2>Courses and Concentrations</h2>

      <p className="pt">
        The rigorous one year residential program is designed to make the
        students business-ready and capable of responding to complex business
        requirements that arise in a changing global business environment.
      </p>

      <p className="fw-bold pt">Core Courses</p>

      {/* EXACT 3-COLUMN DESIGN */}
      <div className="pgpm-concentrate-grid">
        {terms.map((col, idx) => (
          <div className="border rounded pgpm-concentrate-grid-item" key={idx}>
            <div className="term-box">
              <p className="term-heading">{col.title}</p>

              {col.list.map((item, i) => (
                <div className="d-flex align-items-baseline gap-2 mb-2" key={i}>
                  <div className="green-dot"></div>
                  <p className="m-0">{item}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>


      <h3 className="fw-bold mt-5">Concentration Courses</h3>

      {/* EXACT 3-COLUMN DESIGN */}
      <div className="pgpm-concentrate-grid">
        {terms.map((col, idx) => (
          <div className="border rounded pgpm-concentrate-grid-item" key={idx}>
            <div className="term-box">
              <p className="term-heading">{col.title}</p>

              {col.list.map((item, i) => (
                <div className="d-flex align-items-baseline gap-2 mb-2" key={i}>
                  <div className="green-dot"></div>
                  <p className="m-0">{item}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PGPMConcentrate;
