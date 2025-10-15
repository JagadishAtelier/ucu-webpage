import React from 'react'
      const tableHead = ["Operations", "OB/HR/Strategy",];

  const tableData = [
    {
      Trimester1: [
        "Logistics and Supply Chain Management",
        "IT Consulting",
        "Data Visualization and Analytics",
        "Management Services Operations",
        "Strategic Sourcing and Corporate Quality",
        "Project Management",
        "Operations and Analytics",
        "Enterprise Resource Planning",
        "Virtualization Strategies for Organizations",
        "Cloud Security",
        "Strategic Sourcing and Supply Chain Management",
        "Business Intelligence",
        "International SCM",
        "Total Quality Management",
        "Advanced Analytics Model",
        
      ],
      Trimester2: [
        "Strategy Execution including Economics of Strategy",
        "Design, Thinking and Innovation",
        "Leading People At Work - Contemporary Challenges",
        "New Venture Planning",
        "Management Consulting",
        "International Business Strategy",
        "Negotiations and bargaining",
        
      ],
    },
  ];
function OerationTable() {
  return (
    <div className='curriculum-table-container'>
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
                <ul className='mt-3'>
                  {row.Trimester1.map((item, i) => (
                    <div className="d-flex gap-2 align-items-center mb-3">
                        <div className="green-point-box"></div>
                    <p key={i} className="m-0 ">{item}</p>
                    </div>
                  ))}
                </ul>
              </td>
              <td>
                <ul className='mt-3'>
                  {row.Trimester2.map((item, i) => (
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
  )
}

export default OerationTable