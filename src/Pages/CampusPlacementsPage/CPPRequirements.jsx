import React, { useState } from "react";
import CPPFullTimeProgram from "./CPPFullTimeProgram";
import CPPFlexiProgram from "./CPPFlexiProgram";
import CPPExecutive from "./CPPExecutive";

const sideData = [
  "Full time programs",
  "Flexi programs",
  "Executive Post Graduate programs",
];

function CPPRequirements() {
  const [selected, setSelected] = useState("Full time programs");

  const renderContent = () => {
    switch (selected) {
      case "Full time programs":
        return (
            <CPPFullTimeProgram/>
        );
      case "Flexi programs":
        return (
            <CPPFlexiProgram/>
        );
      case "Executive Post Graduate programs":
        return (
            <CPPExecutive/>
        );
      default:
        return null;
    }
  };

  return (
    <div className="Cpp-req-container mt-3">
      <h1 className="text-center mb-5">
        Find the programme that meets your requirements and aspirations:
      </h1>

      <div className="Cpp-req-layout">
        {/* Left sidebar */}
        <div className="Cpp-req-sidebar">
          {sideData.map((item, index) => (
            <button
              key={index}
              className={`Cpp-req-btn ${
                selected === item ? "Cpp-req-active" : ""
              }`}
              onClick={() => setSelected(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Right content */}
        <div className="Cpp-req-content">{renderContent()}</div>
      </div>
    </div>
  );
}

export default CPPRequirements;
