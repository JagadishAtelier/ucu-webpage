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
import useFrontendContent from "../../hooks/useFrontendContent";

function Consortium() {
  const { getKeyValue, getImage, getArray } = useFrontendContent("consortium");

  const title = getKeyValue("Consortium", "title", "Consortium");
  const bgImage = getImage("Consortium", 0, "https://cgsm.org/wp-content/uploads/2023/12/48047178498_59f3a415d8_o-1-resized-min.jpg");
  const subtitle = getKeyValue("Consortium", "subtitle", "Advancing inclusion in education and empowering institutions Sample");

  return (
    <div>
      <Navbar />
      <div
        data-aos="fade-down"
        className="fac-hero-section d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start text-white text-center text-md-start text-lg-start p-3 p-lg-5 p-lg-7"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "60vh",
        }}
      >
        <div className="w-100 w-lg-75 w-lg-50 ms-lg-5" data-aos="fade-right">
          <h1 className="fw-bold fs-1 fs-lg-1">UCU <span style={{color:"#5ac501"}}>{title}</span></h1>
          <p>{subtitle}</p>
        </div>

        <div className="position-absolute bottom-0 left-0 d-flex align-items-center campus-route-bg py-3">
          <p className="m-0">UCU</p>
          <ChevronRight />
          <p className="m-0">{title.toUpperCase()}</p>
        </div>
      </div>
      <ConsortiumDesc getKeyValue={getKeyValue} />
      <ConsotiumPillars getKeyValue={getKeyValue} getArray={getArray} />
      <ConsortiumFounder getKeyValue={getKeyValue} getImage={getImage} />
      <ConsortiumNumbers getKeyValue={getKeyValue} getArray={getArray} />
      <ConsortiumLeader getKeyValue={getKeyValue} getArray={getArray} />
      <ConsortiumStrategic getKeyValue={getKeyValue} getArray={getArray} />
      <NewFooter />
    </div>
  );
}

export default Consortium;
