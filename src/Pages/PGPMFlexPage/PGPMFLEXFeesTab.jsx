import React from "react";
import { Badge } from "react-bootstrap";

const PGPMFLEXFeesTab = () => {
  return (
    <section className="container-fluid p-0 QWERT-fees-section">
      <div className="d-flex justify-content-center container QWERT-fees-row">

        {/* LEFT IMAGE */}
        <div className="QWERT-fees-image-col">
          <img
            src="https://img.freepik.com/premium-photo/free-photo-front-view-male-female-student-wearing-black-backpack-holding-copybooks-files_1283069-4794.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80"
            alt="Fees"
            className="QWERT-fees-image"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="QWERT-fees-right">

          {/* PLAN 1 – DARK */}
          <div className="QWERT-fees-dark">
            <Badge className="PGPMFLEX-fees-tab-badge PGPMFLEX-fees-tab-plan-one">
              Plan 1
            </Badge>

            <h3 className="PGPMFLEX-fees-tab-title text-white">
              The total for UCU is
            </h3>

            <div className="PGPMFLEX-fees-tab-price-box text-white">
              <span className="PGPMFLEX-fees-tab-currency">₹</span>
              <span className="PGPMFLEX-fees-tab-price">5,00,000</span>
            </div>
          </div>

          {/* PLAN 2 – LIGHT */}
          <div className="QWERT-fees-light">
            <Badge className="PGPMFLEX-fees-tab-badge PGPMFLEX-fees-tab-plan-two">
              Plan 2
            </Badge>

            <h3 className="PGPMFLEX-fees-tab-title">
              Installment Plan
            </h3>

            <ul className="PGPMFLEX-fees-tab-installment-list">
              <li><span>Installment 1</span><strong>₹ 1,50,000</strong></li>
              <li><span>Installment 2</span><strong>₹ 1,50,000</strong></li>
              <li><span>Installment 3</span><strong>₹ 1,50,000</strong></li>
              <li><span>Installment 4</span><strong>₹ 1,50,000</strong></li>
              <li><span>Total</span><strong>₹ 6,00,000</strong></li>
            </ul>

            <div className="PGPMFLEX-fees-tab-distribution mb-3">
              distributed over <strong>18 months</strong>
            </div>
            <p>* All fees mentioned above are excluding taxes.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PGPMFLEXFeesTab;
