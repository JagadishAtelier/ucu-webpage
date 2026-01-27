import React from 'react';

const OnlineProgramStats = () => {
  // This data can be fetched from your CMS
  const stats = [
    {
      id: 1,
      number: "5000+",
      text: "Industry professionals for one on one mentorship for all our students",
      icon: "fa-chalkboard-teacher"
    },
    {
      id: 2,
      number: "1500+",
      text: "Academicians from leading institutes in India and abroad delivering our courses",
      icon: "fa-university"
    },
    {
      id: 3,
      number: "500+",
      text: "Professors of Practice from the industry and CXOs co-creating and co-delivering our courses",
      icon: "fa-user-tie"
    }
  ];

  return (
    <div className="ONLINEACT py-5">
      <div className="container">
        <div className="stats-wrapper shadow-lg">
          <div className="row g-0">
            {stats.map((item) => (
              <div key={item.id} className="col-lg-4 stats-item">
                <div className="stats-content">
                  <div className="icon-box">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <h3 className="stat-number">{item.number}</h3>
                  <p className="stat-desc">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineProgramStats;