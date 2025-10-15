import React from 'react'
      const tableHead = ["MARKETING", "FINANCE",];

  const tableData = [
    {
      Trimester1: [
        "Consumer Behaviour",
        "Digital Marketing",
        "Consumer Behaviour",
        "Services Marketing",
        "Strategic Marketing",
        "International Marketing",
        "Sales and Distribution Management",
        "Customer Relationship Management",

        "Retailing Management",
        "Integrated Marketing Communications",
        "Rural Marketing",
        "B2B Marketing",
        "Web and Social Media analytics",
        "Marketing Metrics",
        "Markstrat Simulation",
        "Sports Marketing",
        "Current Trends in Marketing",
        "New Product Development",
        "Brand Management",
      ],
      Trimester2: [
        "Financial Statement Analysis",
        "International Finance",
        "Corporate Financial Strategy",
        "Financial Modelling ",
        "Options, Futures and Derivatives",
        "Fixed Income Securities ",
        "Security Analysis and Portfolio Management",
        "Investment Banking ",
        "Commodities Markets ",
        "Financial Risk Analytics",
        "Experimental Economics ",
        "Management of Commercial Banks ",
        "Trading ",
        "Financial Institutions and Markets ",
        "Equity Research ",
        "Corporate Valuation",
        "Project and Infra structure Finance",
      ],
    },
  ];
function Electives() {
  return (
    <div className='curriculum-table-container'>
        <h3 className="majors-section-title mb-4 mt-5">List of Electives</h3>
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

export default Electives