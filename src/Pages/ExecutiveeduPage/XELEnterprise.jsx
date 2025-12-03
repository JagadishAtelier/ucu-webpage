import React from "react";
import { FaCogs, FaUsersCog, FaChartLine, FaChessQueen, FaLayerGroup } from "react-icons/fa";


function XELEnterprise() {
  return (
    <div className='captital-campus-content-sec mt-4'>

      {/* HEADER SECTION */}
      <section className="xel-header">
        <h1>
          <span>eXecutive</span> Education & Learning (XEL)
        </h1>
        <p className="sub">Enterprise Programs</p>
        <h3 className="tagline">
          Turbocharge your executive prowess with XEL’s high-octane courses—ignite bold leadership and deliver breakthrough results!
        </h3>
      </section>

      {/* ABOUT SECTION */}
      <section className="xel-about">
        <p>
          At UCU, we recognize that every organization’s leadership challenges are unique. Our <straon> Enterprise Programs </straon> are fully customized learning journeys co-created with client organizations to deliver measurable business outcomes. Designed for corporates, government bodies, and institutions seeking transformation, these programs go beyond training to engineer sustainable change.
        </p>
      </section>

      {/* OUR APPROACH – ICON CARDS */}
      <section className="xel-section">
        <h2>Our Approach</h2>
        <div className="xel-card-grid">
          <div className="xel-card">
            <FaCogs />
            <h4>Diagnostic Alignment</h4>
            <p>We begin with a deep assessment of organizational needs, leadership gaps, and strategic priorities.</p>
          </div>

          <div className="xel-card">
            <FaUsersCog />
            <h4>Co-Design</h4>
            <p>Learning journeys are crafted in partnership with client stakeholders, ensuring contextual relevance and alignment with business goals.</p>
          </div>

          <div className="xel-card">
            <FaLayerGroup />
            <h4>Immersive Delivery</h4>
            <p>Bespoke interventions combining workshops, simulations, coaching, and action-learning projects.</p>
          </div>

          <div className="xel-card">
            <FaChartLine />
            <h4>Impact Measurement</h4>
            <p> Outcomes tracked through Kirkpatrick’s four levels, business metrics, and ROI dashboards.</p>
          </div>

          <div className="xel-card">
            <FaChessQueen />
            <h4>Sustainability</h4>
            <p>Post-program mentoring, nudges, and reinforcement mechanisms to embed change.</p>
          </div>
        </div>
      </section>

      {/* PROGRAM FORMATS */}
      <section className="xel-section alt-bg">
        <h2>Program Formats</h2>
        <ul className="xel-bullet-list">
          <li><strong>Emerging Leaders Programs</strong> – Accelerating the pipeline of high-potential talent.</li>
          <li><strong>Senior Leadership Transformation Labs</strong> – Driving strategy execution, culture change, and enterprise agility.
</li>
          <li><strong>Functional Leadership Programs</strong> – Customized tracks in Finance, Sales, Operations, HR, and Technology.
</li>
          <li><strong>Boardroom Readiness Journeys</strong> – Preparing executives for CXO and governance roles.
</li>
        </ul>
      </section>

      {/* WHY UCU */}
      <section className="xel-section">
        <h2>Why UCU Enterprise Programs?</h2>
        <ul className="xel-bullet-list">
          <li><strong>Impact-Driven</strong> – Every program is tied to measurable organizational outcomes.</li>
          <li><strong>Industry Co-Creation</strong> – Designed with corporate partners, ensuring real-world relevance.
</li>
          <li><strong>Global Yet Local</strong> – World-class frameworks contextualized for regional realities.</li>
          <li><strong>Agile Delivery</strong> – Hybrid, digital, and in-person formats tailored to organizational rhythm.
</li>
          <li><strong>Sustained Transformation</strong> – Beyond skills, we build systems and mindsets for long-term success.
</li>
        </ul>
      </section>

    </div>
  );
}

export default XELEnterprise;
