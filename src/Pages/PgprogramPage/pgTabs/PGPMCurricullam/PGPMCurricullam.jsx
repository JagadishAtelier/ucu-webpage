import React from "react";
import WhyPgpmSection from "./WhyPgpmSection";
import "./PGPMCurricullam.css";
import RevampedSec from "./RevampedSec";
import PGPMSpecification from "./PGPMSpecification";
import PGPMConcentrate from "./PGPMConcentrate";
import PGPMBottomBanner from "../../../PGPMProgram/PGPMBottomBanner";
import PGPMIndustrySectorMajor from "../../../PGPMProgram/PGPMIndustrySectorMajor";
const data = [
  {
    head: "Communicate with Impact & Lead with Confidence",
    text: "Graduates excel in communication and leadership, effectively managing teams and driving organizational success.",
  },
  {
    head: "Make Data-Driven Decisions and Leverage Disruptive Technologies",
    text: "Graduates turn data into insights, utilizing tools like Generative AI to innovate and solve modern business challenges.",
  },
  {
    head: "Adapt to Global Trends, Innovate and Drive Change",
    text: "Graduates navigate global trends, lead cross-cultural teams, and foster innovation to drive organizational growth.",
  },
  {
    head: "Incorporate Sustainability and Ethics",
    text: "Graduates prioritize sustainability and ethical decision-making, shaping them into responsible leaders of tomorrow.",
  },
];
function PGPMCurricullam() {
  return (
    <section className="pgdm-section">
      <div className="container my-4">
        {/* HEADING */}
        <h1 className="fw-bold mb-3">
          <span style={{ color: "#5ac501ff" }}>Dual Majors:</span> Developing
          Functional and Industry Sector Expertise
        </h1>

        <p className="text-muted mb-4 col-lg-9">
          In alignment with the evolving industry trends, we offer industry
          sector specialisations in high-potential areas aligned with new-age
          jobs, largely driven by the GCC economy.
        </p>

        {/* MAJORS GRID */}
        <div className="row g-4 mt-3">
          {/* INDUSTRY SECTOR MAJORS */}
          <div className="col-lg-6">
            <div className="border h-100 p-4 bg-light rounded-2">
              {/* <h3 className="fw-bold mb-2">Industry Sector Majors</h3>
              <p className="text-muted small mb-3">
                Designed for emerging roles in high-growth global sectors
              </p> */}
              <p className="small border-start border-color-green ps-3 mb-3">
                In alignment with the evolving industry trends, we offer
                industry sector specialisations in the following major high
                potential areas:
              </p>

              <ul className="ps-3 mb-3">
                <li className="mb-2">Fin-Tech</li>
                <li className="mb-2">Product Management</li>
                <li className="mb-2">Consulting</li>
                <li className="mb-2">Data Science & AI</li>
              </ul>

              <p className="small border-end border-color-green ps-3 mb-0">
                These are in lines with the major wave of new age jobs upcoming
                in these sectors, dominated by the GCC economy.
              </p>
            </div>
          </div>

          {/* FUNCTIONAL MAJORS */}
          <div className="col-lg-6">
            <div className="border h-100 p-4 rounded-2">
              <p className="small border-start ps-3 mb-3 border-color-green" >
                Combined with the Industry Sector Majors, we offer the second
                major in traditional functional domains:
              </p>

              <ul className="ps-3 mb-0">
                <li className="mb-2">Sales & Marketing</li>
                <li className="mb-2">Banking & Finance</li>
                <li className="mb-2">Operations</li>
                <li className="mb-2">OB / HR</li>
              </ul>
            </div>
          </div>
        </div>
        <PGPMIndustrySectorMajor/>
        {/* <WhyPgpmSection />
        <RevampedSec />
        {/* <PGPMSpecification/> 
        <PGPMConcentrate /> */}
        {/* <PGPMBottomBanner /> */}
      </div>
    </section>
  );
}

export default PGPMCurricullam;
