import React from "react";
import "../PGDMProgram/PGDMFeeStructure.css"; // Reuse CSS
import feeImage from "../../Assets/aboutPageImage/fee.jpg";
import PGPMBottomBanner from "../../Pages/PGPMProgram/PGPMBottomBanner";
import HostelSection from "../../Components/PGDM-program/FeeStructure/HostelSection";

const PGXPMFeeStructure = () => {
    return (
        <section className="container p-3 mx-auto  my-1">
            <h3 className="display-6 fw-bold col-12 col-lg-12">
                <span className="program">PGXPM</span> Fee Structure
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
                        PGXPM Fee Structure
                    </h5>
                    <p>
                        Our fee is  <strong> INR 9,00,000*</strong> + tax.
                    </p>
                    <p>
                        Total cost is <strong> INR 10,00,000*</strong> + with two installments of <strong>
                            INR 5,00,000*
                        </strong>
                         + tax each
                    </p>
                </div>
            </div>

            <div className="mt-5">
                {/* Reusing Hostel section if relevant, or maybe just text since it's executive */}
                {/* <HostelSection /> */}
                <p className="text-muted">*Accommodation during campus immersion modules will be charged separately.</p>
            </div>

            {/* <div className="mt-5">
                <PGPMBottomBanner />
            </div> */}
        </section>
    );
};

export default PGXPMFeeStructure;
