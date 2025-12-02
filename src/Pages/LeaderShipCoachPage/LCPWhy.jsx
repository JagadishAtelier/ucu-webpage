import React from "react";

function LCPWhy() {
  return (
    <div className="LCPWhy-section mt-5">
      <div className="LCPWhy-container">
        <h3 className="LCPWhy-title">Why UCU Leadership Coach Academy?</h3>

        <div className="LCPWhy-grid">

          <div className="LCPWhy-card">
            <div className="LCPWhy-icon">
              {/* Star Icon */}
              <svg width="32" height="32" strokeWidth="1.6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.91L18.18 22 12 18.27 5.82 22 7 14.18l-5-4.91 6.91-1.01L12 2z"/>
              </svg>
            </div>
            <p className="LCPWhy-text">
              <strong>Global Gold Standard:</strong> Coaching defined as a thought-provoking,
              creative partnership enabling individuals to maximize potential.
            </p>
          </div>

          <div className="LCPWhy-card">
            <div className="LCPWhy-icon">
              {/* Shield Icon */}
              <svg width="32" height="32" strokeWidth="1.6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path d="M12 2l8 4v6c0 5.25-3.75 10-8 10s-8-4.75-8-10V6l8-4z"/>
              </svg>
            </div>
            <p className="LCPWhy-text">
              <strong>Professionalism & Integrity:</strong> Built on responsibility, respect,
              competence & excellence.
            </p>
          </div>

          <div className="LCPWhy-card">
            <div className="LCPWhy-icon">
              {/* Heart Icon */}
              <svg width="32" height="32" strokeWidth="1.6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path d="M12 21s-7.5-4.5-7.5-10.5S9 2 12 6c3-4 7.5-2 7.5 4.5S12 21 12 21z"/>
              </svg>
            </div>
            <p className="LCPWhy-text">
              <strong>Human-Centric Approach:</strong> Compassionate, equitable, and personalized
              for every learner.
            </p>
          </div>

          <div className="LCPWhy-card">
            <div className="LCPWhy-icon">
              {/* Growth / Trending Icon */}
              <svg width="32" height="32" strokeWidth="1.6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path d="M3 17l6-6 4 4 8-8" />
                <path d="M14 7h7v7" />
              </svg>
            </div>
            <p className="LCPWhy-text">
              <strong>Impact-Driven:</strong> Coaching outcomes measured through real behavioral
              change & organizational impact.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default LCPWhy;
