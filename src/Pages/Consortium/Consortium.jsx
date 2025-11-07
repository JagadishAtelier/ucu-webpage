import React from "react";
import "./Consortium.css";
import { ChevronRight } from "lucide-react";
import Navbar from "../../Components/Navbar/Navbar";
import NewFooter from "../../Components/NewFooter/NewFooter";
import ConsortiumDesc from "./ConsortiumDesc";
import ConsotiumPillars from "./ConsotiumPillars";
import ConsortiumFounder from "./ConsortiumFounder";
import ConsortiumNumbers from "./ConsortiumNumbers";
import ConsortiumLeader from "./ConsortiumLeader";
import ConsortiumStrategic from "./ConsortiumStrategic";
function Consortium() {
  return (
    <div>
      <Navbar />
      <div
        data-aos="fade-down"
        className="fac-hero-section d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start text-white text-center text-md-start text-lg-start p-3 p-lg-5 p-lg-7"
        style={{
          backgroundImage: `url(https://cgsm.org/wp-content/uploads/2023/12/48047178498_59f3a415d8_o-1-resized-min.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "60vh",
        }}
      >
        <div className="w-100 w-lg-75 w-lg-50 ms-lg-5" data-aos="fade-right">
          {/* Dynamic Title */}
          <h1 className="fw-bold fs-1 fs-lg-1">UCU Consortium </h1>
          <p>
            Advancing inclusion in education and empowering institutions Sample
          </p>
        </div>

        <div className="position-absolute bottom-0 left-0 d-flex align-items-center campus-route-bg py-3">
          <p className="m-0">UCU</p>
          <ChevronRight />
          <p className="m-0">CONSORTIUM </p>
        </div>
      </div>
      <ConsortiumDesc />
      <ConsotiumPillars />
      <ConsortiumFounder />
      <ConsortiumNumbers />
      <ConsortiumLeader />
      <ConsortiumStrategic />
      <NewFooter />
    </div>
  );
}

export default Consortium;
