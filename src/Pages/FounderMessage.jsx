import React from "react";
import "./FounderMessage.css";
import Navbar from "../Components/Navbar/Navbar";
import NewFooter from "../Components/NewFooter/NewFooter";
import founderImg from "/founder.jpg";

const FounderMessage = () => {
  return (
    <>
      <Navbar />
      <h4 className="display-4 fw-bold col-12 col-lg-12 text-lg-left text-center  my-4 mx-lg-5 m-0">
        Message from the <span style={{color:'#5ac501'}}> Founder & Chairman</span>
      </h4>
      <section className="founder-section">
        <div className="founder-content">
          <p className="founder-subtitle">FOUNDER & CHAIRMAN</p>
          <h1 className="founder-name">Dr. M. Balaji (Bala)</h1>
          <p className="founder-org">Universal Corporate University</p>
        </div>
        <div className="founder-image-wrapper">
          <img src={founderImg} alt="Founder" className="founder-image" />
        </div>
      </section>
      <div className="founder-message-page">
        <div className="container p-0">
          {" "}
          {/* Full-width container */}
          <section className="founder-message-section text-dark">
            <div className="message-wrapper">
              <p className="story-paragraph">Dear Stakeholders,</p>
              <p className="story-paragraph">
                It is with immense pride that I welcome you to <strong>Universal
                Corporate University (UCU)</strong> , a pioneering institution with a bold
                mission to democratize access to high-quality business education
                and cultivate a future-ready talent pipeline aligned with the
                dynamic needs of global corporations.
              </p>
              <p className="story-paragraph">
                India stands today as a beacon of intellectual capital,
                increasingly recognized by global organizations as a premier hub
                for skilled professionals. UCU was founded to meet this growing
                demand, not only by <strong>nurturing exceptional talent but also by
                strengthening academic institutions through rigorous Faculty
                Development Programs, powered by a diverse network of industry
                leaders.</strong>
              </p>
              <p className="story-paragraph">
                With over 35 years of experience bridging academia and industry,
                I have witnessed first-hand the widening gap between traditional
                education and corporate expectations. After decades of building
                learning ecosystems, placing more than seven thousand students,
                and shaping talent pipelines across India’s top institutions, it
                became clear that business education must evolve from
                theoretical abstraction to industrial relevance.
              </p>
              <p className="story-paragraph">
                UCU was born from this conviction, a university forged not in
                ivory towers, but in boardrooms, CXO conclaves, and the crucible
                of real-world leadership. Our curriculum is co-authored by over
                100+ CXOs and HR leaders, delivered by seasoned practitioners
                from global MNCs, and designed to ensure day-zero readiness and
                long-term leadership. Whether you're a fresh graduate or a
                seasoned professional, UCU is where ambition meets enterprise
                expectations. We don’t just teach business—we build business
                leaders.
              </p>
              <p className="story-paragraph">
                Our commitment to inclusivity drives us to connect rural
                colleges to our digital platforms, ensuring that students across
                India, regardless of geography, can access the same high-quality
                learning experiences as their urban counterparts. We believe
                education must be dynamic, inclusive, and responsive to rapid
                technological and market shifts.
              </p>
              <p className="story-paragraph">
                Beyond traditional education, UCU offers executive learning and
                continuous upskilling programs that empower professionals and
                organizations to stay competitive in an ever-evolving landscape.
                We are dedicated to fostering innovation, critical thinking, and
                adaptability, qualities essential for leadership across sectors.
                Above all, we stand for accessible education that breaks
                economic barriers and nurtures a vibrant ecosystem where talent
                thrives and meets industry needs with precision and excellence.
              </p>
              <p className="story-paragraph">
                As India steps into its next economic chapter, UCU is proud to
                lead the way, one industry-aligned learner at a time. I invite
                you to join us in this transformative journey. Together, let us
                shape the leaders who will drive innovation, prosperity, and
                positive change in the years to come.
              </p>
              <p className="signature">
                Warm regards,
                <br />
                <strong>Dr. M. Balaji (Bala)</strong>
                <br />
                Founder & Chairman
                <br />
                Universal Corporate University, Chennai
              </p>
            </div>
          </section>
        </div>
      </div>
      <NewFooter />
    </>
  );
};

export default FounderMessage;
