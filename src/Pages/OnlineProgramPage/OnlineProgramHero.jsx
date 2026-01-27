import React from "react";

const OnlineProgramHero = () => {
  return (
<div className="ONLINEHER">
  <div className="ONLINEHER-hero-background">
    <div className="ONLINEHER-container container-fluid h-100">
      <div className="ONLINEHER-row row h-100 align-items-center">
        <div className="ONLINEHER-content col-lg-7 text-white ps-lg-5">
          <h1 className="ONLINEHER-title display-3 fw-bold mb-2">
            Learn <span style={{color:"#5ac501"}}>Anywhere.</span>
          </h1>
          <h1 className="ONLINEHER-title display-3 fw-bold mb-2">
            Advance <span style={{color:"#5ac501"}}>Everywhere.</span>
          </h1>
          <h1 className="ONLINEHER-title display-3 fw-bold mb-2">
            With <span style={{color:"#5ac501"}}>UCU Centre for Online Learning</span>
          </h1>

          {/* <div className="ONLINEHER-offer-badges d-flex flex-column gap-2">
            <div className="ONLINEHER-badge-item">
              Apply before 28 Jan 2026
            </div>
            <div className="ONLINEHER-badge-item">
              Seats are filling fast! Apply Today!
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </div>

  <div className="ONLINEHER-form-overlay shadow-lg">
    <div className="ONLINEHER-form-container bg-white p-4 p-xl-3">
      <span className="ONLINEHER-hi fs-3 fw-black">Hi.</span>
      <h2 className="ONLINEHER-welcome fs-4 text-primary fw-bold">
        Welcome to UCU Online Learning
      </h2>
      <p className="ONLINEHER-text text-primary">
        Please enter your details.
      </p>

      <form className="ONLINEHER-form row g-4">
        <div className="col-12">
          <input
            type="text"
            className="ONLINEHER-input form-control"
            placeholder="Student Name"
          />
        </div>

        <div className="col-md-6">
          <input
            type="text"
            className="ONLINEHER-input form-control"
            placeholder="Contact No."
          />
        </div>

        <div className="col-md-6">
          <input
            type="email"
            className="ONLINEHER-input form-control"
            placeholder="Email Address"
          />
        </div>

        <div className="col-md-6">
          <label className="ONLINEHER-label form-label text-muted small">
            Course you are interested in
          </label>
          <select className="ONLINEHER-select form-select">
            <option>Select Course</option>
          </select>
        </div>

        <div className="col-md-6">
          <label className="ONLINEHER-label form-label text-muted small">
            Select Country
          </label>
          <select className="ONLINEHER-select form-select">
            <option>Select Country</option>
          </select>
        </div>

        <div className="col-md-6">
          <label className="ONLINEHER-label form-label text-muted small">
            Select State
          </label>
          <select className="ONLINEHER-select form-select">
            <option>Select State</option>
          </select>
        </div>

        <div className="col-md-6">
          <label className="ONLINEHER-label form-label text-muted small">
            Select City
          </label>
          <select className="ONLINEHER-select form-select">
            <option>Select City</option>
          </select>
        </div>

        <div className="col-12">
          <div className="ONLINEHER-checkbox form-check d-flex gap-2 bg-light p-3 rounded">
            <input
              className="form-check-input mt-1"
              type="checkbox"
              checked
              readOnly
            />
            <label className="form-check-label small lh-sm">
              I authorize UCU to get in touch with me via SMS, phone call or email.
            </label>
          </div>
        </div>

        <div className="col-12 mt-4">
          <button
            type="submit"
            className="ONLINEHER-submit btn btn-primary w-100 py-2 fw-bold"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

  );
};

export default OnlineProgramHero;
