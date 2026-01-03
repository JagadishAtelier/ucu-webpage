import { IndianRupee } from 'lucide-react';
import React from 'react'

function HostelSection() {
    const tableHead = ["Categories", "Annual Fees ( 2025 - 26 )",];

  const tableData = [
    {
      Trimester1: [
        "Girls - AC DOUBLE",
        "Boys - AC DOUBLE",
        "Boys - AC DOUBLE",
      ],
      Trimester2: [
        "1,25,000",
        "1,90,000",
        "1,25,000",
      ],
    },
  ];
  return (
    <div>
        <h1 className='hostel-sec-head'>Hostel</h1>
            <div className="curriculum-table-container">
      <table className="curriculum-table">
        <thead>
          <tr>
            {tableHead.map((head, index) => (
              <th key={index} className='hostel-sec text-white'>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex} className='hostel-sec-table-data'>
              <td>
                <ul>
                  {row.Trimester1.map((item, i) => (
                    <div className="d-flex gap-2 align-items-center mb-3">
                    
                    <p key={i} className="m-0 ">{item}</p>
                    </div>
                  ))}
                </ul>
              </td>
              <td>
                <ul>
                  {row.Trimester2.map((item, i) => (
                    <div className="d-flex gap-1 align-items-center mb-3">
                    <IndianRupee size={18}/>
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
          <p className='fw-bold mt-3'>Note :</p>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat eros non augue facilisis, vel commodo felis tincidunt.
</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat eros non augue facilisis, vel commodo felis tincidunt.
</li>
      </ul>
    </div>
  )
}

export default HostelSection