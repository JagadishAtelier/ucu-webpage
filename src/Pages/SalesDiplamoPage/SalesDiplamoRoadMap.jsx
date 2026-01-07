import React from 'react';

const SalesDiplamoRoadMap = () => {
  const roadmapData = [
    {
      id: "01",
      month: "Month 0",
      title: "The Gateway",
      subtitle: "Admission & Onboarding",
      tasks: ["Admission: Apply for the Diploma Program.", "Interview and Results"],
      color: "#00a0dc"   // PGPMFlex Blue
    },
    {
      id: "02",
      month: "Month 1-3",
      title: "The Deep Dive",
      subtitle: "Classroom & Field Exposure",
      tasks: ["Classroom Programs", "Field Visits", "Interim Assessments","Seminars & Workshops","Optional Live Project Opportunities"],
      color: "#76bc43"   // PGPMFlex Green
    },
    {
      id: "03",
      month: "Month 4-5",
      title: "The Bridge",
      subtitle: "Career & Placements",
      tasks: ["Career Grooming & Campus Placements"],
      color: "#00a0dc"
    },
    {
      id: "04",
      month: "Month 6",
      title: "The Milestone",
      subtitle: "Certification & Beyond",
      tasks: ["Final Assessments", "Convocation"],
      color: "#76bc43"
    }
  ];

  return (
    <section className="SALESDIPROAD-section">
      <div className="container">
        <div className="SALESDIPROAD-header ">
          <h3 className="SALESDIPROAD-title mt-lg-5">Program Roadmap</h3>
          <div className="SALESDIPROAD-underline"></div>
        </div>

        <div className="SALESDIPROAD-wrapper">
          <div className="SALESDIPROAD-main-path"></div>

          <div className="SALESDIPROAD-flex-container">
            {roadmapData.map((item, index) => (
              <div
                key={index}
                className={`SALESDIPROAD-node ${index % 2 === 0 ? 'top' : 'bottom'}`}
              >
                <div
                  className="SALESDIPROAD-glass-card"
                  style={{ '--card-accent': item.color }}
                >
                  <div className="SALESDIPROAD-card-id">{item.id}</div>
                  <span className="SALESDIPROAD-card-month">{item.month}</span>

                  <ul className="SALESDIPROAD-task-list">
                    {item.tasks.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                </div>

                <div className="SALESDIPROAD-connector">
                  <div
                    className="SALESDIPROAD-pulse"
                    style={{ background: item.color }}
                  ></div>
                  <div
                    className="SALESDIPROAD-dot"
                    style={{ borderColor: item.color }}
                  ></div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesDiplamoRoadMap;
