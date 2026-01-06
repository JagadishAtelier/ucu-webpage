import React from 'react';

const PGPMFlexWho = () => {
  const cards = [
    {
      icon: "★",
      text: " Professionals with 2+ years of working experience in the private or public sector wanting a business education while working"
    },
    {
      icon: "⚙",
      text: "Keep same till the word business"
    },
    {
      icon: "♟",
      text: "Start-up owners aiming to give direction to and strategically expand the business"
    },
    {
      icon: "↗",
      text: " Practitioners from non-business fields like doctors, lawyers, CAs and CSs wanting to scale up their practice or equip themselves for exploring interdisciplinary areas"
    }
  ];

  return (
    <section className="PGPMFLEX container">
      <h2 className="PGPMFLEX-section-title text-center mb-5">
        Who is the PGPM Flex For?
      </h2>

      <div className="row g-3 justify-content-center position-relative">
        {/* Vertical divider */}
        <div className="PGPMFLEX-vertical-divider d-none d-md-block"></div>

        {cards.map((card, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3">
            <div className="PGPMFLEX-info-card d-flex align-items-start p-3 h-100 shadow">
              <div className="PGPMFLEX-icon-container me-3">
                <span className="PGPMFLEX-icon-box">{card.icon}</span>
              </div>
              <p className="PGPMFLEX-card-text mb-0">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PGPMFlexWho;
