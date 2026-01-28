import React from 'react'
import './OnlineProgramFormPage.css'
import NewFooter from '../../Components/NewFooter/NewFooter';
import Navbar from '../../Components/Navbar/Navbar';
import OnlineProgramFormDetails from './OnlineProgramFormDetails';

const genderOptions = ["Male", "Female", "Other"];

const prefixOptions = ["Mr.", "Ms.", "Mrs.", "Dr."];

const maritalStatusOptions = ["Single", "Married", "Divorced", "Widowed"];

const educationCompletedOptions = [
  "10 + 2 (Higher Secondary)",
  "Diploma",
  "Undergraduate (UG)",
  "Postgraduate (PG)",
  "Professional Degree",
  "Working Professional"
];

const ucuPrograms = [
  "Online MBA",
  "Online BBA",
  "Online MCA",
  "Online BCA",
  "Online M.Com",
  "Online B.Com",
  "Online MA (Education)",
  "Online MA (Psychology)",
  "Online MSc (Data Science)",
  "Online PG Diploma"
];

const countries = ["India"];

const statesIndia = [
  "Tamil Nadu",
  "Karnataka",
  "Kerala",
  "Maharashtra",
  "Telangana",
  "Andhra Pradesh",
  "Delhi",
  "West Bengal"
];

const categories = [
  "General",
  "OBC",
  "SC",
  "ST",
  "EWS"
];

function OnlineProgramFormPage() {
return (
  <div>
    <Navbar/>
<div className="ONLINEFORM-page-wrapper">
      <div className="container ONLINEFORM-main-container">
        <div className="card ONLINEFORM-card shadow-lg">
          <div className="card-body p-4 p-md-5">
            <h2 className="ONLINEFORM-title mb-1">Sign Up Form</h2>
            <p className="ONLINEFORM-subtitle mb-4">
              Already have an account? <span className="text-primary ONLINEFORM-link">Login</span>
            </p>

            <form>
              <div className="row g-3">
                {/* Name Row */}
                <div className="col-md-3">
                  <label className="ONLINEFORM-label">First Name *</label>
                  <input type="text" className="form-control ONLINEFORM-input" />
                </div>
                <div className="col-md-3">
                  <label className="ONLINEFORM-label">Middle Name</label>
                  <input type="text" className="form-control ONLINEFORM-input" />
                </div>
                <div className="col-md-3">
                  <label className="ONLINEFORM-label">Last Name</label>
                  <input type="text" className="form-control ONLINEFORM-input" />
                </div>
                <div className="col-md-3">
                  <label className="ONLINEFORM-label">Applied via</label>
                  <select className="form-select ONLINEFORM-input bg-light" disabled>
                    <option>Self</option>
                  </select>
                </div>

                {/* Contact Row */}
                <div className="col-md-6">
                  <label className="ONLINEFORM-label">Mobile Number *</label>
                  <div className="input-group">
                    <span className="input-group-text ONLINEFORM-input bg-white text-muted border-end-0">+91</span>
                    <input type="tel" className="form-control ONLINEFORM-input border-start-0" />
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="ONLINEFORM-label">Email *</label>
                  <input type="email" className="form-control ONLINEFORM-input" />
                </div>

                {/* Personal Details Row */}
                <div className="col-md-4">
                  <label className="ONLINEFORM-label">Gender *</label>
<select className="form-select ONLINEFORM-input">
  <option value="">Select</option>
  {genderOptions.map((g, i) => (
    <option key={i} value={g}>{g}</option>
  ))}
</select>

                </div>
                <div className="col-md-4">
                  <label className="ONLINEFORM-label">Prefix * ⇅</label>
<select className="form-select ONLINEFORM-input">
  <option value="">Select</option>
  {prefixOptions.map((p, i) => (
    <option key={i} value={p}>{p}</option>
  ))}
</select>

                </div>
                <div className="col-md-4">
                  <label className="ONLINEFORM-label">Marital Status *</label>
<select className="form-select ONLINEFORM-input">
  <option value="">Select</option>
  {maritalStatusOptions.map((m, i) => (
    <option key={i} value={m}>{m}</option>
  ))}
</select>

                </div>

                {/* Education Row */}
                <div className="col-md-4">
                  <label className="ONLINEFORM-label">Education Completed *</label>
<select className="form-select ONLINEFORM-input">
  <option value="">Select</option>
  {educationCompletedOptions.map((edu, i) => (
    <option key={i} value={edu}>{edu}</option>
  ))}
</select>

                </div>
                <div className="col-md-8">
                  <label className="ONLINEFORM-label">Interested In * ⇅</label>
<select className="form-select ONLINEFORM-input">
  <option value="">Select</option>
  {ucuPrograms.map((program, i) => (
    <option key={i} value={program}>{program}</option>
  ))}
</select>

                </div>

                {/* Address Row */}
                <div className="col-md-3">
                  <label className="ONLINEFORM-label">Residential Country *</label>
<select className="form-select ONLINEFORM-input">
  <option value="">Select</option>
  {countries.map((c, i) => (
    <option key={i} value={c}>{c}</option>
  ))}
</select>

                </div>
                <div className="col-md-3">
                  <label className="ONLINEFORM-label">State * ⇅</label>
<select className="form-select ONLINEFORM-input">
  <option value="">Select</option>
  {statesIndia.map((state, i) => (
    <option key={i} value={state}>{state}</option>
  ))}
</select>

                </div>
                <div className="col-md-3">
                  <label className="ONLINEFORM-label">City * ⇅</label>
                  <select className="form-select ONLINEFORM-input">
                    <option selected>Select</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label className="ONLINEFORM-label">Date of Birth *</label>
                  <input type="date" className="form-control ONLINEFORM-input" />
                </div>

                {/* Loan Category */}
                <div className="col-md-6">
                  <label className="ONLINEFORM-label">Category *</label>
<select className="form-select ONLINEFORM-input">
  <option value="">Select</option>
  {categories.map((cat, i) => (
    <option key={i} value={cat}>{cat}</option>
  ))}
</select>

                </div>
                <div className="col-md-6 d-flex align-items-center mt-4">
                  <div className="form-check">
                    <input className="form-check-input ONLINEFORM-checkbox" type="checkbox" id="loanCheck" />
                    <label className="form-check-label ONLINEFORM-label" htmlFor="loanCheck">
                      Would you like to apply for Education loan?
                    </label>
                  </div>
                </div>

                {/* Password Row */}
                <div className="col-md-6">
                  <label className="ONLINEFORM-label">Password *</label>
                  <div className="input-group">
                    <input type="password" placeholder="Password" className="form-control ONLINEFORM-input" />
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="ONLINEFORM-label">Confirm Password *</label>
                  <div className="input-group">
                    <input type="password" placeholder="Confirm Password" className="form-control ONLINEFORM-input" />
                  </div>
                </div>

                {/* Captcha Row */}
                <div className="col-12 mt-4">
                  <label className="ONLINEFORM-label">Captcha *</label>
                  <div className="row">
                    <div className="col-md-4">
                        <div className="ONLINEFORM-captcha-box d-flex align-items-center justify-content-between p-2 border">
                            <span className="ONLINEFORM-captcha-text">59816</span>
                            <span className="ONLINEFORM-refresh">🔄</span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <input type="text" placeholder="Enter Captcha Text" className="form-control ONLINEFORM-input h-100" />
                    </div>
                  </div>
                </div>

                {/* Terms */}
                <div className="col-12 mt-3">
                  <div className="form-check">
                    <input className="form-check-input ONLINEFORM-checkbox" type="checkbox" checked readOnly id="terms" />
                    <label className="form-check-label ONLINEFORM-small-text" htmlFor="terms">
                      I authorize SCDL to get in touch with me via SMS, phone call or email. This will override registry on DND/NDNC.
                    </label>
                  </div>
                </div>

                {/* Submit */}
                <div className="col-12 text-end mt-4">
                  <button type="button" className="btn ONLINEFORM-submit-btn px-4 py-2">Register</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <OnlineProgramFormDetails/>
    <NewFooter/>
    </div>
  );
};

export default OnlineProgramFormPage