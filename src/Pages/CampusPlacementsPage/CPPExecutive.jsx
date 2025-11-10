import { Briefcase, CalculatorIcon, Calendar1Icon, Laptop, MapPin, TimerIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const functionalData = [
  {
    head: "Sales",
    duration: "1 Year",
    exp: "2-5 Years",
    mode: "Online",
    location: "Hyderabad",
    startDate: "March 2026",
  },
  {
    head: "Product Management",
    duration: "6 Months",
    exp: "1-3 Years",
    mode: "Hybrid",
    location: "Bangalore",
    startDate: "April 2026",
  },
  {
    head: "Cybersecurity",
    duration: "6 Months",
    exp: "1-3 Years",
    mode: "Hybrid",
    location: "Bangalore",
    startDate: "April 2026",
  },
  {
    head: "Brand Management & Digital Marketing",
    duration: "6 Months",
    exp: "1-3 Years",
    mode: "Hybrid",
    location: "Bangalore",
    startDate: "April 2026",
  },
  {
    head: "Mobility & Sustainability",
    duration: "6 Months",
    exp: "1-3 Years",
    mode: "Hybrid",
    location: "Bangalore",
    startDate: "April 2026",
  },
  {
    head: "Consulting",
    duration: "6 Months",
    exp: "1-3 Years",
    mode: "Hybrid",
    location: "Bangalore",
    startDate: "April 2026",
  },
  {
    head: "Banking & Finance",
    duration: "6 Months",
    exp: "1-3 Years",
    mode: "Hybrid",
    location: "Bangalore",
    startDate: "April 2026",
  },
  {
    head: "Business Analytics",
    duration: "6 Months",
    exp: "1-3 Years",
    mode: "Hybrid",
    location: "Bangalore",
    startDate: "April 2026",
  },
  {
    head: "Data Science & AI",
    duration: "6 Months",
    exp: "1-3 Years",
    mode: "Hybrid",
    location: "Bangalore",
    startDate: "April 2026",
  },
];

const industryData = [
  {
    head: "FinTech",
    duration: "1 Year",
    exp: "3-7 Years",
    mode: "Online",
    location: "Mumbai",
    startDate: "July 2026",
  },
  {
    head: "Global Capability Centers (GCC)",
    duration: "1 Year",
    exp: "2-6 Years",
    mode: "Online",
    location: "Delhi",
    startDate: "August 2026",
  },
  {
    head: "Semi conductors",
    duration: "1 Year",
    exp: "2-6 Years",
    mode: "Online",
    location: "Delhi",
    startDate: "August 2026",
  },
  {
    head: "Health Care & Life Science. ",
    duration: "1 Year",
    exp: "2-6 Years",
    mode: "Online",
    location: "Delhi",
    startDate: "August 2026",
  },
];

function CPPExecutive() {
  const [activeTab, setActiveTab] = useState("functional");

  const activeData = activeTab === "functional" ? functionalData : industryData;

  return (
    <div className="Cpp-full-container">
      {/* --- Top Buttons --- */}
      <div className="Cpp-tab-buttons d-flex gap-3 mb-4 justify-content-lg-start justify-content-center ">
        <Button
          variant={activeTab === "functional" ? "primary" : "outline-primary"}
          onClick={() => setActiveTab("functional")}
        >
          Functional Specialization
        </Button>
        <Button
          variant={activeTab === "industry" ? "primary" : "outline-primary"}
          onClick={() => setActiveTab("industry")}
        >
          Industry Sector Specialization
        </Button>
      </div>

      {/* --- Grid Section --- */}
      <div className="Cpp-full-row">
        {activeData.map((item, index) => (
          <div className="Cpp-full-card" key={index}>
            <p className="Cpp-full-head">{item.head}</p>
            <div className="p-2">
              <div className="Cpp-full-info">
                <div className="Cpp-full-info-left">
                  <TimerIcon />
                  <p>Duration</p>
                </div>
                <p>{item.duration}</p>
              </div>

              <div className="Cpp-full-info">
                <div className="Cpp-full-info-left">
                  <Briefcase />
                  <p>Work ex. required</p>
                </div>
                <p>{item.exp}</p>
              </div>

              <div className="Cpp-full-info">
                <div className="Cpp-full-info-left">
                  <Laptop />
                  <p>Mode</p>
                </div>
                <p>{item.mode}</p>
              </div>

              <div className="Cpp-full-info">
                <div className="Cpp-full-info-left">
                  <MapPin />
                  <p>Location</p>
                </div>
                <p>{item.location}</p>
              </div>

              <div className="Cpp-full-info">
                <div className="Cpp-full-info-left">
                  <Calendar1Icon />
                  <p>Start date</p>
                </div>
                <p>{item.startDate}</p>
              </div>

              <div className="Cpp-full-buttons">
                <Button>Admission open</Button>
                <Button>Know more</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CPPExecutive;
