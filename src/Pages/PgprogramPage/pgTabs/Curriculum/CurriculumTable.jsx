import React from "react";

function CurriculumTable() {
  const tableHead = ["Trimester 1", "Trimester 2", "Trimester 3"];

  const tableData = [
    {
      Trimester1: [
        "Macro Economics",
        "Financial Accounting for Decision Making",
        "Marketing Management-1",
        "Individuals in Organizations (OB-1)",
        "Business Statistics",
        "Verbal & Written Communication",
        "FADM Tutorials",
        "Karma Yoga",
      ],
      Trimester2: [
        "Micro Economics",
        "Financial Management-1",
        "Marketing Management-2",
        "Groups in Organizations (OB-2)",
        "Business Maths",
        "Productions and Ops Management",
        "Marketing Research",
        "Management Information System",
      ],
      Trimester3: [
        "Cost and Management Accounting",
        "Financial Management-2",
        "Empirical Study",
        "Business Law",
        "Optimization Business Model for Decision Making",
        "Strategic Management",
        "Business Analytics",
        "Virtual Business - Small Business",
        "Corporate Tax",
      ],
    },
  ];

  return (
    <div className="curriculum-table-container">
      <table className="curriculum-table">
        <thead>
          <tr>
            {tableHead.map((head, index) => (
              <th key={index} className="text-center">{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>
                <ul>
                  {row.Trimester1.map((item, i) => (
                    <div className="d-flex gap-2 align-items-center mb-3">
                        <div className="green-point-box"></div>
                    <p key={i} className="m-0 ">{item}</p>
                    </div>
                  ))}
                </ul>
              </td>
              <td>
                <ul>
                  {row.Trimester2.map((item, i) => (
                                        <div className="d-flex gap-2 align-items-center mb-3">
                        <div className="green-point-box"></div>
                    <p key={i} className="m-0 ">{item}</p>
                    </div>
                  ))}
                </ul>
              </td>
              <td>
                <ul>
                  {row.Trimester3.map((item, i) => (
                                        <div className="d-flex gap-2 align-items-center mb-3">
                        <div className="green-point-box"></div>
                    <p key={i} className="m-0 ">{item}</p>
                    </div>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CurriculumTable;
