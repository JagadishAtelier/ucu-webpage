import React from "react";

function LCPContact() {
  return (
    <div className="LCPContact-wrapper mt-5">

      <h3 className="LCPContact-heading">Contact Us</h3>

      <div className="LCPContact-content">

        {/* LEFT SECTION – CONTACT TEAM */}
        <div className="LCPContact-team">
          <div className="LCPContact-person">
            <h4 className="LCPContact-person-name">Dr. Anitha Joseph</h4>
            <p className="LCPContact-person-role">Program Director</p>
            <p className="LCPContact-person-detail">
              <span>Contact:</span> +91 98765 43210
            </p>
            <p className="LCPContact-person-detail">
              <span>Email:</span> anitha.j@ucu.edu
            </p>
          </div>

          <div className="LCPContact-person">
            <h4 className="LCPContact-person-name">Mr. Deepak Varma</h4>
            <p className="LCPContact-person-role">Admissions Coordinator</p>
            <p className="LCPContact-person-detail">
              <span>Contact:</span> +91 87654 32109
            </p>
            <p className="LCPContact-person-detail">
              <span>Email:</span> deepak.v@ucu.edu
            </p>
          </div>
        </div>

        {/* RIGHT SECTION – CONTACT FORM */}
        <div className="LCPContact-formBox">
          <form className="LCPContact-form">

            <div className="LCPContact-formGroup">
              <label>Name</label>
              <input type="text" placeholder="Enter Name" />
            </div>

            <div className="LCPContact-formGroup">
              <label>Designation</label>
              <input type="text" placeholder="Enter Designation" />
            </div>

            <div className="LCPContact-formGroup">
              <label>Contact</label>
              <input type="text" placeholder="Enter Contact Number" />
            </div>

            <div className="LCPContact-formGroup">
              <label>Email</label>
              <input type="email" placeholder="Enter Email Address" />
            </div>

            <button className="LCPContact-submitBtn">Submit</button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default LCPContact;
