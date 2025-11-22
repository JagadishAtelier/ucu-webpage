import React from "react";

function PDPexp() {
  return (
    <div className="d-flex flex-column gap-3 subject-container exp-border rounded">
      <div className="vertical-line-pdp"></div>
      <h4>EXPERIENCE</h4>
      <div className="d-flex gap-2">
        <div className="bg-light rounded p-3 w-50 shadow-on-hover">
          <h5 className="border-2 border-green border-bottom pb-2">Academic experience</h5>
          <ul className="education-li-list pdp-sub">
            <li>Customer Experience</li>
            <li>Recommender Systems</li>
            <li>Machine Learning</li>
            <li>Business Analytics</li>
          </ul>
        </div>
        <div className="bg-light rounded p-3 w-50 shadow-on-hover">
          <h5 className="border-2 border-green border-bottom pb-2">Corporate experience</h5>
          <ul className="education-li-list pdp-sub">
            <li>CEO, Semantiks.com (Startup)</li>
            <li>CEO, Ninestars Info Tech</li>
            <li>VP, Tech Mahindra</li>
            <li>VP – IT, Bennet Coleman & Co</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PDPexp;
