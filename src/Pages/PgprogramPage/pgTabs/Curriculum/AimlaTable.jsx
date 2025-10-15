import React from 'react'
const tableHead = ["AIMLA",];
  const tableData = [
    {
      Trimester1: [
        "Data Visualisation and BI: Tableau, Power BI",
        "Deep Learning",
        "Marketing Analytics",
        "Web and Social Media Analytics",
        "Supply Chain Analytics",
        "Financial Risk Analytics",
        "Natural Language Processing",
        "Business Applications of AI",
      ],
    },
  ];
function AimlaTable() {
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AimlaTable