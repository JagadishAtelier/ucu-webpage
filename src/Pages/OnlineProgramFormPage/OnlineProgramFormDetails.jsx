import React from 'react';

const OnlineProgramFormDetails = () => {
  return (
    <div className="ONLINEFORMDATA-wrapper py-5">
      <div className="container">
        {/* Header Section */}
        <div className="ONLINEFORMDATA-header-box mb-4">
          <h1 className="ONLINEFORMDATA-main-title text-danger">Apply Online</h1>
        </div>

        {/* Content Section */}
        <div className="ONLINEFORMDATA-content-card p-4 p-md-5">
          <h2 className="ONLINEFORMDATA-section-title mb-4">Steps to Apply Online</h2>

          {/* Step 1 */}
          <div className="ONLINEFORMDATA-step mb-4">
            <h3 className="ONLINEFORMDATA-step-heading">Step 1: Sign Up to Register and Purchase Form</h3>
            <p className="ONLINEFORMDATA-text">
              Click on Sign Up and first register yourself on the <strong>UCU Apply Online Portal</strong>. 
              With the login credentials received by you at your registered email id, Login to purchase 
              application form. Purchase Application Form online from <strong>UCU Apply Online Portal</strong> 
              from your login. You have to first purchase application form and then fill the application 
              form online and download the e-prospectus in soft copy for your reference further.
            </p>
          </div>

          {/* Step 2 */}
          <div className="ONLINEFORMDATA-step mb-4">
            <h3 className="ONLINEFORMDATA-step-heading">Step 2: Registration</h3>
            <p className="ONLINEFORMDATA-text">
              Upload your Academic Records in the prescribed format, Work Exp. Certificates (If any), 
              passport size recent colour photograph, Govt. Photo Identity Proof.
            </p>
            <ul className="ONLINEFORMDATA-list">
              <li>
                Applicants applying under Defence Category have to produce Proof of service certificate / 
                discharge book / dependent certificate (any one document as applicable).
              </li>
              <li>
                For International and SAARC Students, an address in a foreign country is mandatory, 
                along with address proof or copies of passport page showing visa of the foreign country.
              </li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="ONLINEFORMDATA-step mb-4">
            <h3 className="ONLINEFORMDATA-step-heading">Step 3: Fee Payment</h3>
            <p className="ONLINEFORMDATA-text">
              Pay full program fee Online through payment gateway from your login or via Demand Draft 
              (In the name of <strong>"The Director, UCU Pune"</strong> payable at Pune only) immediately 
              after your admission process is complete.
            </p>
            <p className="ONLINEFORMDATA-text">
              (To check the status of the Application Form, please <a href="#" className="ONLINEFORMDATA-link">click here</a>)
            </p>
            <p className="ONLINEFORMDATA-text">
              In case you encounter any problems or have any queries during the Application process, 
              you can mail us at <a href="mailto:Newadmissions@ucu.net" className="ONLINEFORMDATA-link">Newadmissions@ucu.net</a>
            </p>
          </div>

          {/* Note Section */}
          <div className="ONLINEFORMDATA-note mt-4">
            <p className="ONLINEFORMDATA-text mb-0">
              <strong>Please Note:</strong><br />
              Application Forms are available ONLINE ONLY. Application form fee is non-refundable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineProgramFormDetails;