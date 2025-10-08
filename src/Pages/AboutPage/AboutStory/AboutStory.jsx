import React from 'react';
import './AboutStory.css'; // Keep this import for your custom CSS

function AboutStory() {
  return (
    <div data-aos="fade-up" className='about-story-section py-5 px-3 px-md-4 px-lg-0 text-center text-md-start'>
      <div className="container">
        <h2 className='story-heading fw-bold mb-3 mb-md-4'>
          Reimagining Business Education for a Borderless, Industry-Driven, AI-Empowered Future
        </h2>
        <p className='story-paragraph text-center lead text-dark mx-auto mx-md-0'>
          Universal Corporate University (UCU) was founded with a vision to redefine management education by bridging academia and industry. Our innovative programs are designed to equip aspiring leaders with knowledge, skills, and values that drive meaningful impact across industries and geographies.
        </p>
      </div>
    </div>
  );
}

export default AboutStory;
