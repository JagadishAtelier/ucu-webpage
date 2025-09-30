import React, { useState, useEffect } from "react";
import "./NewFooter.css";
import { useNavigate } from 'react-router-dom';
import image from "../../Assets/aac/Copy of Webpage_20250924_151944_0000.png";
import bgImage from "../../Assets/homeImage/Union (3).svg";
import batchImage from '../../Assets/hac/LogoBatch.svg'
const aboutData = [
  { name: "About UCU", herf: "/about-ucu" },
  { name: "Vision & Mission", herf: "#" },
  { name: "Founder's Message", herf: "#" },
  { name: "Campus", herf: "#" },
  { name: "Leadership", herf: "#" },
];
const exploreData = [
  { name: "News", herf: "#" },
  { name: "Events", herf: "#" },
  { name: "Blog", herf: "#" },
  { name: "Careers", herf: "#" },
  { name: "Global Agents", herf: "#" },
  { name: "Site map", herf: "#" },
];

const contactUs = [
  {
    country: "India",
    cities: ["Chennai", "Hyderabad", "Bangalore", "Mumbai", "Gurgaon", "Kolkata"],
  },
  { country: "USA", cities: [] },
  { country: "UK", cities: [] },
  { country: "UAE", cities: [] },
];


function NewFooter() {
  const navigate = useNavigate();
  return (
    <div className="footer-container">
      {/* <div className="bg-overlay-footer"></div> */}
      <img src={bgImage} className="bgImage" />
      <div className="py-lg-5 py-5 pb-lg-2 px-4 text-white footer-links-content-con">
        <div className="d-flex flex-row flex-wrap flex-lg-row align-items-center align-items-lg-start justify-content-start justify-content-lg-evenly row-gap-5 column-gap-5">
          <div className="position-relative align-items-center d-flex flex-column text-center text-lg-left flex-lg-column gap-3 new-footer-logo align-items-center align-items-lg-center">
            <div className="logo-batch-div">
              <img src={batchImage} className="batchImage"/>
              <img onClick={()=>navigate('/')} src='/logo.svg' className="logoImage-footer" />
            </div>
            <p className="col-12 col-lg-10 logo-bottom-text">
              We are passionate education dedicated to providing high-quality
              resources learners all backgrounds.
            </p>
          </div>
          <div className="new-footer-links">
            <p className="text-white fs-6 fw-600 new-footer-head text-dark">ABOUT US</p>
            <div className="d-flex flex-column flex-lg-column gap-2">
              {aboutData.map((data, index) => (
                <a
                  href={data.herf}
                  className="new-footer-text-a fw-100 text-decoration-none"
                >
                  {data.name}
                </a>
              ))}
            </div>
          </div>
          <div className="new-footer-links">
            <p className="text-white fs-6 new-footer-head">EXPLORE</p>
            <div className="d-flex flex-column flex-lg-column gap-2">
              {exploreData.map((data, index) => (
                <a
                  href={data.herf}
                  className="new-footer-text-a text-decoration-none"
                >
                  {data.name}
                </a>
              ))}
            </div>
          </div>
          <div className="new-footer-links">
  <p className="text-white fs-6 new-footer-head">OUR OUTREACH</p>
  <div className="d-flex flex-column flex-lg-column gap-2">
  {contactUs.map((data, index) => (
  <div key={index} className={data.cities && data.cities.length > 0 ? "mb-2" : "mb-0"}>
    <p className="fw-600 mb-1">{data.country}</p>
    
    {/* Render cities only if there are any */}
    {data.cities && data.cities.length > 0 && (
      <div className="d-flex flex-column gap-1 ms-2">
        {data.cities.map((city, i) => (
          <a
            key={i}
            href="#"
            className="new-footer-text-a text-decoration-none"
          >
            {city}
          </a>
        ))}
      </div>
    )}
  </div>
))}

  </div>
</div>


          <div className="vertical-line-footer"></div>

          <div className="input-text new-footer-links ">
            <p className="text-white fs-6 new-footer-head">
              Subscribe to Our Newsletter
            </p>
            <p className="new-footer-text-a col-12 col-lg-12">
              We’d love to share updates about our latest events with you. Sign
              up and get our newsletter delivered to your inbox.
            </p>
            <div className="d-flex flex-column flex-lg-row position-relative">
              <input
                type="text"
                placeholder="Enter your mail"
                className="footer-new-input"
              />
              <button className="py-lg-2 px-lg-4 py-2 px-5 position-absolute end-0 border-0 sub-new-footer-btn">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="horizontal-line m-5 m-lg-5 mb-lg-3 mx-0"></div>
        <div className="d-flex flex-column flex-lg-row justify-content-lg-between text-white mx-lg-5">
          <div className="">
            <p className="new-footer-text-a">
              Copyright @ 2025.All Rights reserved to{" "}
              <a
                href="https://theateliercreation.com/"
                target="_blank"
                className="text-dark"
              >
                {" "}
                Atelier
              </a>
            </p>
            <p className="new-footer-text-a add-new-foot">
              UCU Pty. Ltd. Provider Category: Institute of Higher Education.
              TEQSA Provider Identification: PRV12041. CRICOS Provider Code:
              03335G.
            </p>
          </div>

          <div>
            <p className="new-footer-text-a new-footer-head">
              Stay Connected With Us
            </p>
            <div className="social-text">
              <div className="icon-social">
                <i className="bi bi-instagram"></i>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-linkedin"></i>
                <i className="bi bi-youtube"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewFooter;
