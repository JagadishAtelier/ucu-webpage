import React from "react";
import { useNavigate } from "react-router-dom";
import "./NewFooter.css";
import bgImage from "../../Assets/homeImage/Union (3).svg";
import batchImage from "../../Assets/hac/LogoBatch.svg";
import { footerMenu } from "./footerMenu";

const contactUs = [
  { country: "USA", cities: [] },
  { country: "UK", cities: [] },
  { country: "UAE", cities: [] },
  {
    country: "India",
    cities: ["Chennai", "Hyderabad", "Bangalore", "Mumbai", "Gurgaon", "Kolkata"],
  },
];

function NewFooter() {
  const navigate = useNavigate();

  // Split footer menus into two groups
  const menusWithItems = footerMenu.filter((menu) => menu.items && menu.items.length > 0);
  const menusWithoutItems = footerMenu.filter((menu) => !menu.items || menu.items.length === 0);

  return (
    <div className="footer-container">
      <img src={bgImage} className="bgImage" alt="Background" />

      <div className="py-lg-5 py-5 pb-lg-2 px-4 text-white footer-links-content-con">
        <div className="d-flex flex-row flex-wrap flex-lg-row align-items-start justify-content-start justify-content-lg-between row-gap-4 column-gap-4">
          
          {/* 🌟 Logo Section */}
          <div className="position-relative align-items-center d-flex flex-column text-center text-lg-left flex-lg-column gap-3 new-footer-logo">
            <div className="logo-batch-div">
              <img src={batchImage} className="batchImage" alt="Batch Logo" />
              <img
                onClick={() => navigate("/")}
                src="/logo.svg"
                className="logoImage-footer"
                alt="Logo"
              />
            </div>
            <p
              className="col-12 col-lg-10 quats"
              style={{ position: "absolute", bottom: "-30px", marginLeft: "6%" }}
            >
              Built with Industry, Powered by Skills, Measured through Careers!
            </p>
            {/* <p className="col-12 col-lg-10 logo-bottom-text">
              We are passionate education dedicated to providing high-quality resources to learners of all backgrounds.
            </p> */}
          </div>

          {/* 🧭 Footer Menus (with items) */}
          {menusWithItems.map((menu, idx) => (
            <div key={idx} className="new-footer-links">
              <p className="text-white fs-6 fw-600 new-footer-head">
                {menu.title.toUpperCase()}
              </p>
              <div className="d-flex flex-column gap-2 menu-wrapper">
                {menu.items.map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    className="new-footer-text-a text-decoration-none"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* 🌍 Our Outreach Section */}
          <div className="new-footer-links">
            <p className="text-white fs-6 fw-600 new-footer-head">OUR OUTREACH</p>
            <div className="d-flex flex-column gap-2">
              {contactUs.map((data, index) => (
                <div
                  key={index}
                  className={data.cities?.length > 0 ? "mb-2" : "mb-0"}
                >
                  <p className="fw-600 mb-1">{data.country}</p>
                  {data.cities?.length > 0 && (
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
          <div className="ms-5 d-flex justify-content-start flex-column flex-lg-row align-items-center gap-5">

          {/* 🧱 Menus without items (headings only) */}
          {menusWithoutItems.map((menu, idx) => (
            <div key={idx} className="new-footer-links-bottom">
              <p className="text-white fs-6 fw-600 new-footer-head">
                {menu.title.toUpperCase()}
              </p>
            </div>
          ))}
          </div>
        </div>

        {/* ⚡ Footer Bottom */}
        <div className="horizontal-line m-5 m-lg-5 mb-lg-3 mx-0"></div>
        <div className="d-flex flex-column flex-lg-row justify-content-lg-between text-white mx-lg-5">
          
          {/* Left Section */}
          <div>
            <p className="new-footer-text-a">
              Copyright @ 2025. All Rights reserved to{" "}
              <a
                href="https://theateliercreation.com/"
                target="_blank"
                rel="noreferrer"
                className="text-dark"
              >
                Atelier
              </a>
            </p>
            <p className="new-footer-text-a add-new-foot">
              UCU Pty. Ltd. Provider Category: Institute of Higher Education. TEQSA Provider Identification: PRV12041. CRICOS Provider Code: 03335G.
            </p>
          </div>

          {/* Right Section */}
          <div>
            <p className="new-footer-text-a new-footer-head">Stay Connected With Us</p>
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
