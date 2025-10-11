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
        <div className="icon d-lg-block d-none"><FiClock size={24} /></div>
        <div className="app-content d-lg-block d-none" style={{marginTop: '-18px'}}>
          <p className="text-small d-lg-block d-none">Applications Open</p>
          <p className="text-small d-lg-block d-none">Batch 2026–28</p>
          
        </div>
        <button className="apply-btn d-lg-block d-none">Apply Now</button>
        
        {/* Mobile content */}
        <div className="d-flex ">
          <div className="icon d-lg-none d-block"><FiClock size={24} /></div>
            <div className="app-content d-lg-none d-block" style={{marginTop: '-18px'}}>
              <p className="text-small d-lg-none d-block">Applications Open</p>
            <p className="text-small d-lg-none d-block">Batch 2026–28</p>
          
        </div>
        </div>
        <button className="apply-btn d-lg-none d-block">Apply Now</button>
        
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
