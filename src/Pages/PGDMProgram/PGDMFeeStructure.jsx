import React from "react";
import "./PGDMFeeStructure.css";
import feeImage from "../../Assets/aboutPageImage/fee.jpg";

import PGDMBottomBanner from "./PGDMBottomBanner";
import HostelSection from "../../Components/PGDM-program/FeeStructure/HostelSection";

const PGDMFeeStructure = () => {
    return (
        <section className="container p-3 mx-auto  my-1">
            <h3 className="display-6 fw-bold col-12 col-lg-12">
                <span className="program">PGDM</span> Fee Structure
            </h3>

            {/* ================= Fee Info ================= */}
            <div className="fee-info bg-light p-3 rounded">
                <div className="fee-image">
                    <img
                        src={feeImage}
                        alt="Students discussing fee details"
                    />
                </div>

                <div className="fee-details">
                    <h5 className="gradient-text hero-gradient-1">
                         PGDM Fee Structure
                    </h5>
                    <p>
                        The tuition and program fee is <strong> INR 6,00,000.*</strong>.
                    </p>
                    <p>
                        This fee is not inclusive of hostel accommodation, mess and other expenses.This includes only the tuition fee and is subject to revision.
                    </p>
                    <p>
                        {" "}
                        The mess, hostel and other expenses will be charged as-is to the students based on the rated received from UCU authorised service providers.
                    </p>
                    <p>
                        {" "}
                        Students are free to choose their own accommodation as well.
                    </p>
                </div>
            </div>

            <div className="mt-5">
                <HostelSection />
            </div>

            <div className="mt-5">
                {/* <PGDMBottomBanner /> */}
            </div>
        </section>
    );
};

export default PGDMFeeStructure;
