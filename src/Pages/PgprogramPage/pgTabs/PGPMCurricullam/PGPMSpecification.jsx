import React from "react";

function PGPMSpecification() {
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
        <div>
            <h1>
                <span style={{ color: "#5ac501" }}>Dual specialisation:</span>{" "}
                Developing Functional and Industry Expertise
            </h1>

            <p className="pt">
                The PGPM program offers specialisations allowing students to gain deep expertise in two disciplines. In addition to Finance, Marketing, and Operations, you can pursue dual majors in Analytics, Data Science, Consulting and Strategy, gaining expertise tailored to today’s complex business environment. These specialisations, designed in consultation with industry leaders, emphasize problem-solving and in-depth industry competencies.
            </p>

            <div className="row mt-5 mb-3 d-none d-lg-block">
                <div className="col-6">
                    <h2 className="fw-bold">Industry Specialisations</h2>
                </div>
                <div className="col-6">
                    <h2 className="fw-bold">Functional Specialisations</h2>
                </div>
            </div>

            {/* Perfectly Balanced Columns */}
            {/* DESKTOP VIEW (2 columns row-by-row) */}
            <div className="d-none d-lg-block">
                {[...Array(maxRows)].map((_, index) => (
                    <div className="row mb-4" key={index}>

                        {/* LEFT COLUMN */}
                        <div className="col-lg-6">
                            {industry[index] && (
                                <>
                                    <p className="SS-list-heading px-3 py-3">
                                        {industry[index].heading}
                                    </p>
                                    {industry[index].points.map((point, idx) => (
                                        <div className="d-flex gap-2 align-items-center mb-2" key={idx}>
                                            <div className="green-point-box"></div>
                                            <p className="m-0">{point}</p>
                                        </div>
                                    ))}
                                </>
                            )}
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="col-lg-6">
                            {functional[index] && (
                                <>
                                    <p className="SS-list-heading px-3 py-3">
                                        {functional[index].heading}
                                    </p>
                                    {functional[index].points.map((point, idx) => (
                                        <div className="d-flex gap-2 align-items-center mb-2" key={idx}>
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


            {/* MOBILE VIEW (Stacked Industry → Functional) */}
            <div className="d-block d-lg-none">

                {/* INDUSTRY SECTION */}
                <h2 className="fw-bold">Industry Specialisations</h2>
                {industry.map((item, index) => (
                    <div className="mb-4" key={index}>
                        <p className="SS-list-heading px-3 py-3">{item.heading}</p>
                        {item.points.map((p, i) => (
                            <div className="d-flex gap-2 align-items-center mb-2" key={i}>
                                <div className="green-point-box"></div>
                                <p className="m-0">{p}</p>
                            </div>
                        ))}
                    </div>
                ))}

                {/* FUNCTIONAL SECTION */}
                <h2 className="fw-bold mt-5">Functional Specialisations</h2>
                {functional.map((item, index) => (
                    <div className="mb-4" key={index}>
                        <p className="SS-list-heading px-3 py-3">{item.heading}</p>
                        {item.points.map((p, i) => (
                            <div className="d-flex gap-2 align-items-center mb-2" key={i}>
                                <div className="green-point-box"></div>
                                <p className="m-0">{p}</p>
                            </div>
                        ))}
                    </div>
                ))}

            </div>

            <div className="d-flex gap-5 flex-wrap mt-5 justify-contnet-center">
                <div className="text-center p-4 shadow rounded-4 bg-light col-12 col-lg-5">
                    <i className="bi bi-people-fill fs-1 text-success"></i>
                    <h4 className="mt-3 fw-semibold">Real-World Perspectives Delivered by Industry Leaders</h4>
                    <p className="text-muted">
                        PGPM 2.0 features enhanced involvement from industry experts who co-design specialisations like
                        the PayPal Product Management Program offering direct insights and hands-on experience.
                    </p>
                </div>

                <div className="text-center p-4 shadow rounded-4 bg-light col-12 col-lg-5">
                    <i className="bi bi-mortarboard-fill fs-1 text-primary"></i>
                    <h4 className="mt-3 fw-semibold">Structured Student Mentoring by Faculty</h4>
                    <p className="text-muted">
                        Each student is paired with a faculty mentor who provides personalized guidance on academics,
                        career goals, and skill development.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default PGPMSpecification;
