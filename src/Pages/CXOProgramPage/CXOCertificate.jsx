import React from "react";

function CXOCertificate() {
  return (
    <section className="cxocertificate-section">
      <div className="cxocertificate-container">

        <div className="cxocertificate-row">

          {/* LEFT SIDE CONTENT */}
          <div className="cxocertificate-left">
            <div className="cxocertificate-title">
              <h2>Your Key Credentials</h2>
            </div>

            <p>
              Successful participants will receive a ‘Certificate of Successful Completion’
              along with a ‘Executive Education Alumni Status’ with multiple exclusive
              benefits like:
            </p>

            <ul className="cxocertificate-list">
              <li>Communication of brochures and newsletters from IIM Indore</li>
              <li>Access to the IIM Indore Campus Library (onsite access only)</li>
              <li>Official email ID and ID card of the institute</li>
            </ul>

            <div className="cxocertificate-note">
              <p>
                <small>
                  <em>
                    Note: *All certificate images are for illustrative purposes only and may be
                    subject to change at the discretion of IIM Indore.
                  </em>
                </small>
              </p>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="cxocertificate-right">
            <img
              src="https://iimcoursesonline.com/iim-indore-chief-executive-officers-programme/desktop/images/certificate.jpg"
              alt="Certificate"
              className="cxocertificate-image"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default CXOCertificate;
