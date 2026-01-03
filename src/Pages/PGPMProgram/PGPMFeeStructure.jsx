import React from "react";
import { Accordion } from "react-bootstrap";
import "./PGPMFeeStructure.css";
import feeImage from "../../Assets/aboutPageImage/fee.jpg"; // update with actual path or import

import PGPMBottomBanner from "../../Pages/PGPMProgram/PGPMBottomBanner";
import HostelSection from "../../Components/PGDM-program/FeeStructure/HostelSection";

const PGPMFeeStructure = () => {
  return (
    <section className="container p-3 mx-auto  my-1">
      <h3 className="display-6 fw-bold col-12 col-lg-12">
        <span className="program">PGPM</span> Fee Structure
      </h3>

      {/* ================= Fee Info ================= */}
      <div className="fee-info bg-light p-3 rounded">
        <div className="fee-image">
          <img
            src={feeImage} // update with actual path or import
            alt="Students discussing fee details"
          />
        </div>

        <div className="fee-details">
          <h5 className="gradient-text hero-gradient-1">
            Indian Participants:
          </h5>
          <p>
            The tuition and program fee is <strong> INR 8,00,000*</strong>.
          </p>
          <p>
            This fee is not inclusive of hostel accommodation, mess and other expenses.This includes only the tuition fee and is subject to revision.This fee is not inclusive of hostel accommodation, mess and other expenses.This includes only the tuition fee and is subject to revision.
          </p>
          <p>
            {" "}
            The mess, hostel and other expenses will be charged as-is to the students based on the rated received from UCU authorised service providers.
          </p>

          
        </div>
      </div>

      <div className="mt-5">
        <HostelSection />
      </div>

    
      <div className="mt-5">
        <PGPMBottomBanner />
      </div>
    </section>
  );
};

export default PGPMFeeStructure;
