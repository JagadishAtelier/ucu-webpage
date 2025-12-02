import React from "react";

function LCPGrid() {
    const gridData = [
        {
            title: "For the coachee",
            points: ["Empathetic mirror to reflect thoughts, dilemmas, and decisions",
                "Perspective building from the outside through feedback",
                "Experiential learning by converting insights into actions"]
        },
        {
            title: "For the organization",
            points: ["Outside neutral support for the leader through the transition and growth phases",
                "Improvement in stakeholder relationships",
                "Faster development of high-potential talent to succeed in the next level"]
        },
        {
            title: "Helps the coachee in",
            points: ["Improving peer and upward relationships and influencing skills",
                "Building executive presence, strategic thinking, and long-term focus",
                "Enabling leadership, listening, coaching, and developing teams",
                "Building leadership visibility and brand",
                "Enabling decision-making and leadership confidence"
            ]
        }
    ];

    return (
        <div className="mt-5">
            <h1 className="mb-3">Value that coaching creates</h1>
            <div className="lcpGrid-container">
                {gridData.map((item, index) => (
                    <div className="lcpGrid-card" key={index}>
                        <h3 className="lcpGrid-title">{item.title}</h3>

                        <ul className="lcpGrid-list">
                            {item.points.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LCPGrid;
