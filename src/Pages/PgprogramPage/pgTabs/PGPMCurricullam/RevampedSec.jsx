import React from 'react'


function RevampedSec() {
    const industry = [
        {
            heading: "Product Management",
            points: [
                "Strategic Product Development and Execution Part 1",
                "Technology Product Sales and Marketing",
                "Strategic Product Development and Execution Part 2",
                "Stakeholder Management and Contextualization",
            ],
        },
        {
            heading: "Analytics",
            points: [
                "Business Intelligence – Data Mining",
                "Exploratory Data Analysis",
                "Predictive Analytics for Management",
                "Prescriptive Analytics",
                "Time Series Forecasting",
                "Times Series Analytics for Financial Markets",
            ],
        },
        {
            heading: "Consulting",
            points: [
                "Unstructured Problem Solving and Management Consulting",
                "Digital Transformation & Change Management",
                "Execution Excellence & Value Management",
                "Scaling in Enterprises",
            ],
        },
        {
            heading: "Data Science",
            points: [
                "Business Intelligence – Data Mining",
                "Exploratory Data Analysis",
                "Machine Learning 1 – LDA, SVM, Random Forest, Neural Networks",
                "Machine Learning 2 – Clustering, PCA and Factor Analysis, Causal AI",
            ],
        },
    ];

    const functional = [
        {
            heading: "Finance",
            points: [
                "Corporate Valuation",
                "Options, Futures & Derivatives",
                "Fixed Income Securities",
                "Mergers & Acquisition",
                "Financial Risk Management",
            ],
        },
        {
            heading: "Marketing",
            points: [
                "Digital Marketing",
                "Marketing Analytics",
                "B2C/B2B Sales",
                "Technology Product Marketing",
                "Advanced Marketing Strategy",
                "Consumer Behavior",
                "Customer Relationship Management",
            ],
        },
        {
            heading: "Operations",
            points: [
                "Service Operations Management",
                "Agile Business Processes",
                "Project Management",
                "Supply Chain Management",
                "Supply Chain Optimization",
                "ERP",
                "Process Excellence",
            ],
        },
    ];

    // FIX: Loop through max length only
    const maxRows = Math.max(industry.length, functional.length);
    return (
        <div className='mt-4'>
            <h2>The revamped curriculum at UCU focuses on empowering tomorrow’s Innovators, Strategists, and Changemakers through various innovations:</h2>
            <h4 className='my-4'>Applied Learning Through Labs</h4>
            <p className='pt'>Labs focus on honing real-world skills across domains, including soft and hard skills. These labs ensure that you are not just learning theory but are equipped to apply your knowledge in practical, impactful ways and are business ready from Day 1.</p>
            <p className='fw-bold pt'>Labs</p>

            {/* Perfectly Balanced Columns */}
            {[...Array(maxRows)].map((_, index) => (
                <div className="row mb-4" key={index}>
                    {/* LEFT COLUMN */}
                    <div className="col-lg-6 col-12">
                        {industry[index] && (
                            <>
                                <p className="SS-list-heading px-3 py-3">
                                    {industry[index].heading}
                                </p>

                                {industry[index].points.map((point, idx) => (
                                    <div
                                        className="d-flex gap-2 align-items-center mb-2"
                                        key={idx}
                                    >
                                        <div className="green-point-box"></div>
                                        <p className="m-0">{point}</p>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="col-lg-6 col-12 mt-4 mt-lg-0">
                        {functional[index] && (
                            <>
                                <p className="SS-list-heading px-3 py-3">
                                    {functional[index].heading}
                                </p>

                                {functional[index].points.map((point, idx) => (
                                    <div
                                        className="d-flex gap-2 align-items-center mb-2"
                                        key={idx}
                                    >
                                        <div className="green-point-box"></div>
                                        <p className="m-0">{point}</p>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RevampedSec