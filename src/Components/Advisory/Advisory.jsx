import React, { useEffect, useState } from "react";
import "./Advisory.css";
import { useParams } from "react-router-dom";
import { FaLinkedin, FaChevronRight } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import { getCouncilCategoryWithAdvisoriesByTitle } from "../../Api/CouncilApi";
import NewFooter from "../NewFooter/NewFooter";

function Advisory() {
  const { title } = useParams();
  const [category, setCategory] = useState(null);
  const [advisories, setAdvisories] = useState([]);
  useEffect(() => {
    if (title) {
      fetchData(title);
    }
  }, [title]);

  const fetchData = async (title) => {
    try {
      const res = await getCouncilCategoryWithAdvisoriesByTitle(title);
      console.log(res.data)
      // API returns: { success, data: { category, adivsories } }
      const { category, adivsories } = res.data;

      setCategory(category);
      setAdvisories(adivsories);
    } catch (error) {
      console.error("Failed to fetch", error);
    }
  };
  if (!category) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  return (
    <div>
      <Navbar />
      <div
        data-aos="fade-down"
        className="fac-hero-section d-flex flex-column flex-lg-column align-items-lg-start align-items-center justify-content-center justify-content-lg-center text-white text-center text-lg-start p-3 p-lg-5 p-lg-7"
        style={{
          backgroundImage: `url(${category.bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "60vh",
        }}
      >
        <h1 className="display-4 fw-bold col-12">{category.councilTitle}</h1>

        <div className="d-flex align-items-center flex-row gap-2 justify-content-center justify-content-lg-start mt-3">
          <p className="fs-4 mb-0 bread-crumb">Home</p>
          <FaChevronRight size={window.innerWidth > 991 ? 12 : 15} />
          {/* <p className="fs-5 mb-0 bread-crumb">Advisory Council</p>
          <FaChevronRight size={window.innerWidth > 991 ? 12 : 15} /> */}
          <p className="fs-4 mb-0 bread-crumb">{category.councilTitle}</p>
        </div>
      </div>
      <section className="my-5 px-3 px-lg-5">
        {/* <h4 className="text-start text-lg-center display-4 fw-bold col-12  mb-3 lg:mb-4">
          {council.sec2head}
        </h4> */}
        <p className="text-center text-lg-center">{category.aboutContent}</p>
      </section>

      <section
        className="container position-relative justify-content-center align-items-center"
        style={{
          backgroundImage: `url('/logo1.png')`,
          backgroundSize: "auto", // adjust size to fit nicely
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "60vh",
        }}
      >
        {/* Overlay to make it slightly visible */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: "rgba(255,255,255,0.9)", // light overlay
            pointerEvents: "none", // keep it non-interactive
          }}
        />

        <div className="position-relative">
          <h1 className="display-4 fw-bold col-12 text-center my-5">
           Meet Our  {category.councilTitle}
          </h1>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center mb-lg-5 mb-5 position-relative">
          {advisories.map((person, idx) => (
            <div key={idx} className="col d-flex">
              <div className="staff-card d-flex flex-column justify-content-between align-items-center text-center w-100 mt-lg-3">
                <img
                  src={person.profileImageUrl}
                  alt={person.name}
                  className="staff-img"
                />
                <div className="com-logo">
                  {person.companyLogo ? (
                    <img
                      src={person.companyLogo}
                      className="com-logo-img"
                      alt="company logo"
                    />
                  ) : null}
                </div>

                <div className="">
                  <p className="fs-5 mb-2 font-bold">{person.comText}</p>
                  <h4 className="fs-4 fw-bold text-uppercase mb-2">
                    {person.name}
                  </h4>
                  <p className="fs-5 color-highlight mb-2 font-bold">
                    {person.desigination}
                  </p>
                </div>

                <div className="d-flex flex-column align-items-center gap-2">
                  <a href={person.linkedinUrl}>
                    <FaLinkedin size={30} className="linkedin-icon" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <NewFooter />
    </div>
  );
}

export default Advisory;
