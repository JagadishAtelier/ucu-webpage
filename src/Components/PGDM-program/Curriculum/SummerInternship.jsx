import React from 'react'

function SummerInternship() {
      const tableHead = ["Trimester 4", "Trimester 5", "Trimester 6"];

  const tableData = [
    {
      Trimester1: [
        "Understanding Emerging markets",
        "Human Resource Management",
        "Elective-1",
        "Elective-2",
        "Elective-3",
        "Elective-4",
        "Elective-5",
        "Elective-6",
      ],
      Trimester2: [
        "Mandarin / Language Lab",
        "Business Ethics",
        "Boardroom simulation",
        "Elective-7",
        "Elective-8",
        "Elective-9",
        "Elective-10",
        "Elective-11",
        "Elective-12",
      ],
      Trimester3: [
        "Elective-13",
        "Elective-14",
        "Elective-15",
        "Elective-16",
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
  )
}

export default SummerInternship