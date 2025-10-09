import React from 'react';
import './AboutStory.css'; // Keep this import for your custom CSS

function AboutStory() {
  return (
    <div data-aos="fade-up" className='about-story-section py-5 px-3 px-md-4 px-lg-0 text-center text-md-start'>
      <div className="container">
        <h2 className='story-heading fw-bold mb-3 mb-md-4'>
          Reimagining <span style={{color:'#5ac501'}}> Business Education</span> for a Borderless, Industry-Driven, <span style={{color:'#5ac501'}}>AI</span>-Empowered Future
        </h2>
        <p className='story-paragraph text-center lead  mx-auto mx-md-0'>
          Universal Corporate University (UCU) was founded with a vision to redefine management education by bridging academia and industry. Our innovative programs are designed to equip aspiring leaders with knowledge, skills, and values that drive meaningful impact across industries and geographies.
        </p>
      </div>
    </div>
  );
}

export default AboutStory;
