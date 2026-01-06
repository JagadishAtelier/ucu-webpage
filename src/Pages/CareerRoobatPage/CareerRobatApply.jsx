import React from 'react';

function CareerRobatApply() {
  const eligibilityCriteria = [
    "Women having a career break of a minimum of 2 and a maximum of 8 years",
    "Have at least 2 years of work experience before the break",
    "Bachelor’s degree with at least 50% marks or equivalent CGPA from a recognised university",
    "Valid GMAT/CAT/NMAT score or any other entrance exam. Please note that admissions will be based on several factors like the profile, past work experience, essay submission and entrance exam score.",
    "Interested in pursuing a high impact career in the fields of FinTech, Product Management, Consulting, Sales & Marketing, Banking & Finance, General Management and more.",
  ];

  return (
    <section className="CRPFWPP-section py-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <span className="CRPFWPP-badge">Eligibility</span>
            <h2 className="CRPFWPP-main-title">Who Can Apply?</h2>
            <div className="CRPFWPP-divider">
              <span></span>
            </div>
          </div>
        </div>
        
        <div className="row g-4 justify-content-center">
          {eligibilityCriteria.map((text, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className={`CRPFWPP-glass-card CRPFWPP-card-delay-${index}`}>
                <div className="CRPFWPP-card-header">
                  <div className="CRPFWPP-number-blob">{index + 1}</div>
                </div>
                <div className="CRPFWPP-card-body">
                  <p className="CRPFWPP-description">{text}</p>
                </div>
                <div className="CRPFWPP-card-footer"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CareerRobatApply;