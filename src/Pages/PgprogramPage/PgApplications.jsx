import React from "react";
import { FiClock, FiDownload, FiFileText } from "react-icons/fi";
import { LuHourglass } from "react-icons/lu";
import "./PgApplications.css";
import { div } from "framer-motion/client";

export default function PgApplications() {
  return (
    <div className="pg-applications">
      {/* Applications Open */}
      <div className="app-box box-1">
        <div className="icon"><FiClock size={24} /></div>
        <div className="app-content" style={{marginTop: '-18px'}}>
          <p className="text-small">Applications Open</p>
          <p className="text-small">Batch 2026–28</p>
          
        </div>
        <button className="apply-btn">Apply Now</button>
        
      </div>

      {/* Duration */}
      <div className="app-box box-2">
        <div className="icon"><LuHourglass size={24} /></div>
        <div>
          <p className="text-small">Duration</p>
          <p className="text-large">2 years</p>
        </div>
      </div>

      {/* Programme Starts */}
      <div className="app-box box-3">
        <div className="icon"><FiFileText size={24} /></div>
        <div>
          <p className="text-small">Programme Starts</p>
          <p className="text-large">June 2026</p>
        </div>
      </div>

      {/* Download Brochure */}
      <div className="app-box box-4">
        <div className="icon"><FiDownload size={24} /></div>
        <div>
          <p className="text-small">Download Brochure</p>
        </div>
      </div>
    </div>
  );
}
