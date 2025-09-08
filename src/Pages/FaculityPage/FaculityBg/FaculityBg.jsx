import React from 'react'
import './FaculityBg.css'

function FaculityBg() {
  return (
    <section
      className="fac-hero-section d-flex flex-column align-items-center justify-content-center text-white text-center p-3 p-lg-5"
      style={{
        backgroundImage: `url("https://demo.farmstudios.net/oakwood/wp-content/uploads/sites/29/2025/08/images-HA8NXYA.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        height: "60vh",
        width: "100%",
      }}
    >
      <div className="d-flex flex-column align-items-center justify-content-center text-center">
        <h1 className="display-4 fw-bold col-10">
          Start Your Journey in{" "}
          <span style={{ color: "#C19A6B" }}>Business</span> Today
        </h1>
        <p className="col-10 col-md-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          efficitur ex quis lorem elementum varius. Nam vestibulum, ex sit amet
          dapibus eleifend, lectus justo finibus erat, eget commodo lorem diam
          vitae nulla.
        </p>
        <div className="fac-explore-btn-div platform-btn">
          <button className="fac-apply-btn">APPLY NOW</button>
        </div>
      </div>
    </section>
  )
}

export default FaculityBg
