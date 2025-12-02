import React from "react";

function CXOCurriculam() {
  const curriculumData = [
    {
      title: "Functional Expertise",
      columns: [
        {
          heading: "Operational Excellence",
          items: [
            "Efficient Operations and Supply Chain Management",
            "Lean Management Principles",
            "Supply Chain Optimisation",
            "Quality Management and Continuous Improvement",
          ],
        },
        {
          heading: "MarTech",
          items: [
            "Digital Marketing Trends and Tools",
            "Consumer Behaviour Analysis",
            "Brand Management and Positioning",
          ],
        },
        {
          heading: "People Management for Superior Performance",
          items: [
            "Effective Team Building and Leadership",
            "Talent Development and Retention Strategies",
            "Conflict Resolution and Communication Skills",
          ],
        },
        {
          heading: "Financial Acumen",
          items: [
            "Understanding Financial Statements",
            "Budgeting and Financial Planning",
            "Investment Analysis and Decision-making",
          ],
        },
      ],
    },

    {
      title: "Technology and Analytics",
      columns: [
        {
          heading: "Analytical Approaches",
          items: [
            "Data Analytics in Strategic Decision-making",
            "Utilising Big Data for Business Insights",
          ],
        },
      ],
    },

    {
      title: "Technology Orientation",
      columns: [
        {
          heading: "Technological Integration",
          items: [
            "Leveraging Technology for Business Innovation",
            "Technology Management Strategies",
          ],
        },
        {
          heading: "Future Trends",
          items: [
            "Anticipating and Adapting to Technological Shifts",
            "Use of Cutting-edge Technologies for the Business",
          ],
        },
        {
          heading: "AI in Leadership",
          colSize: 6,
          items: [
            "AI-driven Decision-making in Leadership",
            "Integrating AI in Strategic Planning and Execution",
            "Ethical Considerations of AI in Leadership",
            "AI in Enhancing Customer Experience and Engagement",
            "Leveraging AI for Operational Efficiency",
            "AI's Role in Predictive Analysis and Risk Management",
          ],
        },
      ],
    },

    {
      title: "Consumer Behaviour and Customer Centricity",
      columns: [
        {
          heading: "Customer Experience Management",
          items: [
            "Consumer Behavior and Behavioral Economics",
            "Understanding Customer Needs and Expectations",
            "Customer Journey Mapping",
          ],
        },
        {
          heading: "",
          items: [
            "Personalisation and Customer Engagement",
            "Building Customer Loyalty and Advocacy",
            "Customer Feedback and Continuous Improvement",
          ],
        },
      ],
    },

    {
      title: "Strategy",
      columns: [
        {
          heading: "Strategic Decision-making",
          items: [
            "Aligning Services with Societal Expectations",
            "Enhancing Customer Engagement",
          ],
        },
        {
          heading: "Sustainable Business Models",
          items: [
            "Adapting to Regulatory Changes",
            "Environmental Sustainability in Business",
          ],
        },
      ],
    },
  ];

  return (
    <section className="cxocurriculam-course-content">
      <div className="container">
        <div className="text-center mb-4">
          <h2>The Comprehensive 5-Module Curriculum</h2>
        </div>

        {curriculumData.map((section, index) => (
          <div key={index} className="cxocurriculam-section">
            <div className="col-md-12">
              <h3 className="cxocurriculam-section-title">{section.title}</h3>
            </div>

            <div className="row">
              {section.columns.map((col, idx) => (
                <div
                  key={idx}
                  className={`col-md-${col.colSize || 4} cxocurriculam-col`}
                >
                  {col.heading && (
                    <p>
                      <strong>{col.heading}</strong>
                    </p>
                  )}
                  <ul>
                    {col.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CXOCurriculam;
