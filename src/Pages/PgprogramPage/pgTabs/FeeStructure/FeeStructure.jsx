import React from "react";
import { Accordion } from "react-bootstrap";
import "./FeeStructure.css";
import feeImage from "../../../../Assets/aboutPageImage/fee.jpg"; // update with actual path or import
import HostelSection from "./HostelSection";

const FeeStructure = () => {
  return (
    <section className="fee-structure p-3 mx-auto placement-tab-div my-1">
      <h3 className="display-6 fw-bold col-12 col-lg-12"><span className="program">PGDM</span> Fee Structure</h3>

      {/* ================= Fee Info ================= */}
      <div className="fee-info bg-light p-3 rounded">
        <div className="fee-image">
          <img
            src={feeImage} // update with actual path or import
            alt="Students discussing fee details"
          />
        </div>

        <div className="fee-details">
          <h5 className="gradient-text hero-gradient-1">Indian Participants:</h5>
          <p>
            The fee for Indian Participants is <strong> INR 10,00,000*</strong>.
          </p>
          <p>
            This fee is not inclusive of hostel accommodation, mess and other expenses.This includes only the tuition fee and is subject to revision.</p>
<p> The above mentioned fee does not include the 
Global Fast Track Immersion Program which is our exchange program crafted for the 
two year PGDM.</p>
          {/* <p className="mt-3">
            [The above mentioned fee does not include the Global Fast Track Immersion Program which is our exchange program crafted for the two year PGDM. ]
          </p> */}

          <h5 className="gradient-text hero-gradient-1 mt-4">International Participants:</h5>
          <p>
            The fee for Indian Participants is  <strong> INR 16,00,000*</strong>.
          </p>
          <p>
            This  his fee is not inclusive of hostel accommodation, mess and other expenses.This includes only the tuition fee and is subject to revision.
          </p>
          <p> The above mentioned fee does not include the 
Global Fast Track Immersion Program which is our exchange program crafted for the 
two year PGDM.</p>

          {/* <p className="mt-3">
            [The Global Fast Track (GFT) and International Exchange are optional components of
            the PGDM and PGDM (BM) programmes. Please note that the fees mentioned above do not
            include the expenses associated with these components.]
          </p> */}
        </div>
      </div>


            <div className="mt-5">
              <HostelSection/>
            </div>



      {/* ================= Scholarships ================= */}
      <div className="scholarship-section">
        <h4 className="gradient-text hero-gradient-1">Financial Assistance and Scholarships</h4>
        <p>
          The main objective of financial assistance and scholarships is to provide monetary
          assistance to meritorious and needy PGDM participants. The scholarship is available
          after the programme commences and is awarded each academic year.
        </p>

        <Accordion defaultActiveKey="0" className="mt-4">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Merit cum Means Based Financial Assistance</Accordion.Header>
            <Accordion.Body>
              <p>
                The scholarship is awarded based on both academic merit and financial need. It
                covers a portion of the tuition fee for eligible students who demonstrate
                outstanding performance and genuine need for support.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Budding Leadership Excellence Scholarship</Accordion.Header>
            <Accordion.Body>
              <p>
                Budding Leadership Excellence Scholarship is designed to recognize students
                who exhibit exceptional leadership qualities, academic excellence, and a
                commitment to making a positive impact on society.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
};

export default FeeStructure;
