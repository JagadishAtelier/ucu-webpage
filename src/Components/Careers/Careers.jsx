import React from "react";
import "./Careers.css";
import {
  FaArrowRight,
  FaChevronRight,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import NewFooter from "../NewFooter/NewFooter";

const sidebarMenu = [
    { label: "Staff Diversity", link: "#StaffDiversity" },
    { label: "Academic Positions", link: "#Academic" },
    { label: "Non-Academic Positions", link: "#NonAcademic" },
    { label: "Apply Today", link: "#ApplyToday" },
  ];
  
function Careers() {
  return (
    <div>
        <Navbar/>
    <div
      data-aos="fade-down"
      className="fac-hero-section d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start text-white text-center text-lg-start p-3 p-lg-5 p-lg-7"
      style={{
        backgroundImage: `url("https://www.newcastle.edu.au/__data/assets/image/0003/883092/careers-1600x800_1.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "60vh",
      }}
    >
      <div
        className="w-100 w-lg-100 w-lg-100 ms-lg-7 hero-left"
        data-aos="fade-right"
      >
        {/* Dynamic Title */}
        <h1 className="display-4 fw-bold col-12  text-uppercase">Careers At UCU</h1>

        <div className="d-flex align-items-center flex-row gap-2 justify-content-center justify-content-lg-start mt-3">
              <p className="fs-5 mb-0 bread-crumb">Home</p>
                <FaChevronRight size={window.innerWidth > 991 ? 12 : 15} />
                <p className="fs-5 mb-0 bread-crumb">Careers</p>
        </div>

      </div>
    </div>
    <div className="d-flex flex-lg-row flex-column-reverse gap-5 py-lg-5 py-5">
        <div className="position-relative col-lg-7 d-flex flex-column gap-5 ps-lg-5 px-3">
            <div id="StaffDiversity">  
                <h1 data-aos="fade-down" className="display-4 fw-medium">WORKING <span style={{color:"#5ac501"}}>AT UCU</span></h1>
                <p data-aos="fade-right" className="fs-6 ">Working at UCU offers a dynamic and rewarding environment where employees are encouraged to grow both professionally and personally. The institution values diversity, innovation, and collaboration, creating a culture that supports academic excellence and community impact. Staff and faculty benefit from opportunities for research, training, and career development, while contributing to shaping future leaders. With a strong commitment to inclusivity and work-life balance, UCU fosters a supportive workplace where every individual’s contribution is valued.</p>
            </div>
            <div id="Academic">
                <h1 data-aos="fade-down" className="display-4 fw-medium"><span style={{color:"#5ac501"}}>ACADEMIC</span>  POSITIONS</h1>
                <p data-aos="fade-right">Academic Positions at UCU provide scholars and educators with opportunities to engage in teaching, research, and mentorship within a vibrant learning community. Faculty members play a key role in shaping curricula, advancing knowledge through innovative research, and inspiring students to achieve academic excellence. UCU values intellectual curiosity, collaboration, and dedication, offering a supportive environment for career growth and professional development. By joining the academic team, individuals contribute to building a culture of excellence, integrity, and impactful education.</p>
                <button className="py-lg-2 px-lg-5 border-0 text-white py-2 px-5" style={{backgroundColor:"#5ac501"}}>View Current Opportunities</button>
            </div>
            <div id="NonAcademic">
                <h1 data-aos="fade-down" className="display-4 fw-medium"><span style={{color:"#5ac501"}}>Non-Academic</span> Positions</h1>
                <p data-aos="fade-right">Non-Academic Positions at UCU provide vital support to the university’s mission by ensuring smooth operations across various departments. From administration, marketing, admissions, and finance to student services, IT, and campus management, these roles create the foundation that enables academic excellence to thrive. UCU values teamwork, innovation, and dedication, offering employees opportunities for growth while contributing meaningfully to the success of the institution. Joining the non-academic staff means becoming part of a supportive community committed to service, efficiency, and excellence.</p>
                <button  className="py-lg-2 px-lg-5 border-0 text-white py-2 px-5" style={{backgroundColor:"#5ac501"}}>Join our team</button>
            </div>
            <div id="ApplyToday">
                <h1 data-aos="fade-down" className="display-4 fw-medium">APPLY <span style={{color:"#5ac501"}}>TODAY</span></h1>
                <p data-aos="fade-right">Apply Today and take the first step toward building a rewarding career with UCU. Whether you are seeking an academic or non-academic role, UCU offers opportunities to grow, contribute, and make an impact in a vibrant, diverse, and supportive environment. By joining our community, you will become part of a team that values excellence, collaboration, and innovation. Explore available positions, discover where your skills fit best, and begin your journey toward shaping the future of education and beyond.</p>
            </div>
        </div>


      <div className="program-curriculum shadow-sm rounded col-lg-4 career-page-sidebar">
        <div className="program-header">Careers At UCU</div>
        <ul data-aos="fade-down" className="list-unstyled program-menu mb-0">
          {sidebarMenu.map((m, i) => (
            <li key={i} data-aos="fade-left">
              <a href={m.link} className="d-flex align-items-center">
                <FaArrowRight className="me-2 arrow-icon" /> {m.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="careers-page-banner" data-aos="zoom-in">
            <img src="https://sgtuniversity.ac.in/assets/images/careerBanner.jpeg"/>
        </div>
      </div>
      </div>
      <NewFooter/>
    </div>
  );
}

export default Careers;
