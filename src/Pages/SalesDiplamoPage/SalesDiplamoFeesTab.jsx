import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";

const SalesDiplamoFeesTab = () => {
  return (
    <section className="container-fluid p-0 QWERT-fees-section">
      <div className="d-flex flex-column flex-lg-row justify-content-center container QWERT-fees-row">

        {/* LEFT IMAGE */}
        <div className="QWERT-fees-image-col">
          <img
            src="https://img.freepik.com/free-photo/pretty-teenager-happy-be-back-university_23-2148586588.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80"
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
              
Amount should be
            </h3>

            <div className="PGPMFLEX-fees-tab-price-box text-white">
              <span className="PGPMFLEX-fees-tab-currency">₹</span>
              <span className="PGPMFLEX-fees-tab-price">75,000 + tax</span>
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
              <li><span>Installment 1</span><strong>₹ 45,000 + tax</strong></li>
              <li><span>Installment 2</span><strong>₹ 40,000 + tax</strong></li>
              <li><span>Total</span><strong>₹ 85,000 + tax</strong></li>
            </ul>
{/* 
            <div className="PGPMFLEX-fees-tab-distribution mb-3">
              distributed over <strong>18 months</strong>
            </div> */}
            <p>* All fees mentioned above are excluding taxes.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SalesDiplamoFeesTab;
