import React from 'react';

function CXOAttended() {

  const topIndustries = [
    ["Information Technology", "Engineering and Manufacturing", "Energy and Resources", "BFSI"],
    ["Healthcare and Pharma", "Construction and Real Estate", "Education and E-learning", "Consumer Goods and Retail"]
  ];

  const topGrades = [
    ["Chief Executive Officer", "Chief Operating Officer", "Managing Director", "Director", "Vice President"],
    ["Assistant Vice President", "Business Head", "Branch Head", "General Manager"]
  ];

  return (
    <section className="cxo-attended-section">
      <div className="container">

        <div className="text-center mb-4">
          <h2 className='text-decoration-underline'>Who Attended This Programme Previously</h2>
        </div>

        <div className="row flex-column flex-lg-row cxo-attended-graph align-items-center">

          {/* LEFT BOX — TOP INDUSTRIES */}
          <div className="col-lg-6">
            <div className="cxo-attended-box">
              <p><strong>Top Industries</strong></p>

              <div className="d-flex">
                {topIndustries.map((group, index) => (
                  <ul key={index}>
                    {group.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT BOX — TOP GRADES */}
          <div className="col-lg-6">
            <div className="cxo-attended-box">
              <p><strong>Top Grades</strong></p>

              <div className="d-flex">
                {topGrades.map((group, index) => (
                  <ul key={index}>
                    {group.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default CXOAttended;
