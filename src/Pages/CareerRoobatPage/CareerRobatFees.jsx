import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../Pages/PGPMFlexPage/PGPMFlexPage.css";

const CareerRobatFees = ({ getKeyValue, getArray }) => {
    const kv = (key, fallback) => (getKeyValue ? getKeyValue("CareerRobatFees", key, fallback) : fallback);
    const arr = (key, fallback) => (getArray ? getArray("CareerRobatFees", key, fallback) : fallback);

    const titleStart = kv("titleStart", "Program");
    const titleSpan = kv("titleSpan", "Fees");
    const tagline = kv("tagline", "Invest in your restart with our flexible fee structure");
    const startingFromLabel = kv("startingFromLabel", "Starting from");
    const priceMain = kv("priceMain", "₹ 75,000");
    const taxDisclaimer = kv("taxDisclaimer", "* excluding taxes");

    const plan1Tag = kv("plan1Tag", "Standard · Savings Plan");
    const plan1Title = kv("plan1Title", "One-time Payment");
    const plan1Price = kv("plan1Price", "₹ 75,000");
    const plan1Note = kv("plan1Note", "Pay the full amount upfront and save.");

    const plan2Tag = kv("plan2Tag", "Plan 2 · Flexible");
    const plan2Title = kv("plan2Title", "Installment Plan");
    const totalLabel = kv("totalLabel", "Total: ₹ 85,000");
    const totalSublabel = kv("totalSublabel", "Distributed over 2 installments");

    const defaultInstallments = [
        { label: "Installment 1", value: "₹ 45,000" },
        { label: "Installment 2", value: "₹ 40,000" }
    ];
    const installments = arr("installmentsDataList", defaultInstallments);

    const disclaimer1 = kv("disclaimer1", "* All fees mentioned above are excluding taxes.");
    const disclaimer2 = kv("disclaimer2", "* Accommodation during campus immersion modules will be charged separately.");

    return (
        <section className="QWERT-fees-wrapper">
            <Container>
                <Row className="align-items-start g-5">
                    {/* LEFT – STICKY */}
                    <Col lg={5} className="QWERT-sticky-wrap-col">
                        <div className="QWERT-sticky-wrap">
                            <div className="QWERT-fees-intro">
                                <h1>
                                    {titleStart} <span>{titleSpan}</span>
                                </h1>
                                <p className="QWERT-fees-tagline">{tagline}</p>
                                <div className="QWERT-main-price">
                                    <small className="text-white">{startingFromLabel}</small>
                                    <h2>{priceMain}</h2>
                                    <span>{taxDisclaimer}</span>
                                </div>
                            </div>
                        </div>
                    </Col>

                    {/* RIGHT – SCROLL CONTENT */}
                    <Col lg={7} className="QWERT-fees-panels-col">
                        <div className="QWERT-fees-panels">
                            {/* PLAN 1 */}
                            <div className="QWERT-fees-panel QWERT-one-time">
                                <div className="QWERT-panel-header">
                                    <span>{plan1Tag}</span>
                                    <h3>{plan1Title}</h3>
                                </div>
                                <div className="QWERT-panel-price">{plan1Price}</div>
                                <p className="QWERT-panel-note">{plan1Note}</p>
                            </div>

                            {/* PLAN 2 */}
                            <div className="QWERT-fees-panel QWERT-installment">
                                <div className="QWERT-panel-header">
                                    <span>{plan2Tag}</span>
                                    <h3>{plan2Title}</h3>
                                </div>
                                <ul className="QWERT-installment-breakup">
                                    {installments.map((inst, idx) => (
                                        <li key={idx}><span>{inst.label}</span><strong>{inst.value}</strong></li>
                                    ))}
                                </ul>
                                <div className="QWERT-installment-footer">
                                    <strong>{totalLabel}</strong>
                                    <span>{totalSublabel}</span>
                                </div>
                                <p className="mt-3 text-muted small">{disclaimer1}</p>
                                <p className="text-muted small">{disclaimer2}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CareerRobatFees;
