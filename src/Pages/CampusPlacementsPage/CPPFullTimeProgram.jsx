import { Briefcase, CalculatorIcon, Calendar1Icon, Laptop, MapPin, TimerIcon } from "lucide-react";
import React from "react";
import { Button } from "react-bootstrap";

const data = [
    {
        head: "PGPM-ELITE",
        duration: "2 Years",
        exp: "0-5 Years",
        mode: "Residential",
        location: "Chennai",
        startDate: "June 2026",
    },
    {
        head: "PGDM",
        duration: "2 Years",
        exp: "0-5 Years",
        mode: "Residential",
        location: "Chennai",
        startDate: "June 2026",
    },
];

function CPPFullTimeProgram() {
    return (
      <div className="Cpp-full-row">
        {data.map((item, index) => (
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
    );
}

export default CPPFullTimeProgram;
