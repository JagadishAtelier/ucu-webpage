import React from 'react'
import { GraduationCap, Users, Target, CheckCircle } from 'lucide-react'

function EEPAcademy() {
  return (
    <div className='captital-campus-content-sec mt-4'>

      {/* Intro Section */}
      {/* <div className="eepa-intro-card"> */}
      <div>
        {/* <GraduationCap className="eepa-intro-icon" /> */}
        <h1 className='display-5 fw-bold'>UCU’s <span style={{ color: "#5ac501" }}> Faculty Development </span> Programs</h1>
</div>
        <p className="pt">
          UCU’s Faculty Development Programs (FDPs) are designed to strengthen academic delivery, 
          enhance pedagogical excellence, and align faculty capabilities with industry and 
          regulatory benchmarks. Through structured workshops, curated decks, and hands-on adoption 
          evidence, FDPs empower educators to integrate contemporary curriculum frameworks, 
          case-based learning, and simulation-driven teaching. Each program emphasizes professional 
          rigor, continuous improvement, and measurable outcomes, ensuring faculty are equipped to 
          champion innovation, compliance, and thought leadership. By investing in FDPs, institutions 
          build sustainable academic capacity and position themselves as regional talent hubs with 
          globally benchmarked standards.
        </p>
      {/* </div> */}

      {/* Target Audience */}
      <div className="eepa-section">
        <h2 className="eepa-section-title">
          <Users className="eepa-title-icon" /> Target Audience
        </h2>

        <div className="eepa-grid">
          {["Junior Faculty", "Assistant/Associate Professors", "Senior Professors", "Dean/Principal"].map((item, index) => (
            <div key={index} className="eepa-card">
              <CheckCircle className="eepa-card-icon" />
              <p className="eepa-card-text mb-0">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Areas */}
      <div className="eepa-section">
        <h2 className="eepa-section-title">
          <Target className="eepa-title-icon" /> Areas Covered
        </h2>

        <div className="eepa-grid">
          {[
            "Sales & Marketing",
            "Operations",
            "Finance",
            "HR",
            "Analytics",
            "Consulting",
            "Product Management",
            "Data Science & Gen AI",
            "Brand Management"
          ].map((item, index) => (
            <div key={index} className="eepa-card">
              <CheckCircle className="eepa-card-icon" />
              <p className="eepa-card-text mb-0">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EEPAcademy
