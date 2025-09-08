// src/components/ProgramDescription.jsx
import React from "react";
import { Accordion, Card, Button, Table, Carousel } from "react-bootstrap";
import { ArrowRight, Clock, MapPin, Calendar, Star } from "lucide-react";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import "./ProgramDescription.css";
import Testimonials from "./Testimonials";
import CountUp from "react-countup";
import CountUpCard from "./CountUpCard";

const ProgramDescription = () => {
  // Course Data (mappable)
  const curriculum = [
    {
      year: "Year One",
      semesters: [
        {
          semester: "Semester I",
          courses: [
            { name: "Foundations of Management", credits: 4 },
            { name: "Managerial Economics", credits: 3 },
            { name: "Organizational Behavior & Human Resources", credits: 3 },
            { name: "Business Statistics", credits: 3 },
            { name: "Financial Accounting", credits: 4 },
          ],
        },
        {
          semester: "Semester II",
          courses: [
            { name: "Marketing Management", credits: 4 },
            { name: "Corporate Finance", credits: 4 },
            { name: "Operations & Supply Chain Management", credits: 3 },
            { name: "Research Methods for Business", credits: 3 },
            { name: "Business Law & Ethics", credits: 3 },
          ],
        },
        {
          semester: "Semester III",
          courses: [
            { name: "Information Systems for Managers", credits: 3 },
            { name: "Strategic Management", credits: 4 },
            { name: "Elective 1", credits: 3 },
            { name: "Elective 2", credits: 3 },
            { name: "Summer Internship Project", credits: 6 },
          ],
        },
      ],
    },
    {
      year: "Year Two",
      semesters: [
        {
          semester: "Semester IV",
          courses: [
            { name: "Global Business Environment", credits: 3 },
            { name: "Data Analytics for Managers", credits: 4 },
            { name: "Leadership & Change Management", credits: 3 },
            { name: "Elective 3", credits: 3 },
            { name: "Elective 4", credits: 3 },
          ],
        },
        {
          semester: "Semester V",
          courses: [
            { name: "Entrepreneurship & Innovation", credits: 4 },
            { name: "Project Management", credits: 3 },
            { name: "Negotiation Skills", credits: 3 },
            { name: "Elective 5", credits: 3 },
            { name: "Elective 6", credits: 3 },
          ],
        },
        {
          semester: "Semester VI",
          courses: [
            { name: "Capstone Project & Business Simulation", credits: 6 },
            { name: "Seminar on Contemporary Business Issues", credits: 3 },
            { name: "Elective 7", credits: 3 },
            { name: "Elective 8", credits: 3 },
            { name: "Strategic Financial Management", credits: 4 },
          ],
        },
      ],
    },
    {
      year: "Year Three",
      semesters: [
        {
          semester: "Semester VII",
          courses: [
            { name: "Advanced Corporate Strategy", credits: 4 },
            { name: "International Marketing", credits: 3 },
            { name: "Mergers & Acquisitions", credits: 3 },
            { name: "Elective 9", credits: 3 },
            { name: "Elective 10", credits: 3 },
          ],
        },
        {
          semester: "Semester VIII",
          courses: [
            { name: "Digital Transformation", credits: 3 },
            { name: "Risk Management", credits: 4 },
            { name: "Behavioral Finance", credits: 3 },
            { name: "Elective 11", credits: 3 },
            { name: "Elective 12", credits: 3 },
          ],
        },
        {
          semester: "Semester IX",
          courses: [
            { name: "Global Leadership Seminar", credits: 3 },
            { name: "Final Dissertation & Thesis", credits: 8 },
            { name: "Advanced Public Speaking", credits: 3 },
            { name: "Elective 13", credits: 3 },
            { name: "Elective 14", credits: 3 },
          ],
        },
      ],
    },
  ];
  const data = [
    { end: 17.8, label: "Average CTC", prefix: "₹ ", suffix: "LPA" },
    { end: 30.8, label: "Highest CTC", prefix: "₹ ", suffix: "LPA" },
    { end: 61, label: "Consulting Roles Offered", suffix: "%" },
    {
      end: 28.6,
      label: "Average CTC for Top 10%",
      prefix: "₹ ",
      suffix: "LPA",
    },
    { end: 25, label: "Employed in Business Consulting", suffix: "%" },
    { end: 25, label: "New Recruiters", suffix: "+" },
  ];
  const sidebarMenu = [
    { label: "Course Curriculum", link: "#curriculum" },
    { label: "Program Faculty", link: "faculty-details" },
    { label: "Apply Admission", link: "admission" },
    { label: "Scholarship", link: "scholarship" },
    { label: "Joint Event", link: "event" },
  ];

  return (
    <div className="program-description container-fluid px-3 px-md-5 py-3">
      <div className="row">
        {/* Left Content */}
        <div className="col-lg-8">
          {/* Program Image */}
          <div className="program-big-thumb mb-4">
            <img
              src="https://www.greatlakes.edu.in/chennai/uploads/programmes/pgpm-bg22.jpg"
              alt="program"
              className="img-fluid rounded"
            />
          </div>

          {/* About */}
          <div className="program-about mb-5">
            <h4 className="title mb-3">About The Program</h4>
            <p>
              The UCU Post Graduate Program in Management (PGPM) is the flagship
              full-time MBA program, in a fast track 1 year format, designed for
              high-potential professionals looking to move into managerial
              roles. The PGPM is an AICTE approved post graduate certificate in
              management with a unique pedagogy and a diverse cohort for rich
              peer learning.
            </p>
          </div>

          {/* Accordion (Courses) */}
          <div className="program-credit-area mb-5" id="curriculum">
            <h5 className="title mb-3">Program Courses</h5>
            <Accordion defaultActiveKey="2">
              {curriculum.map((year, idx) => (
                <Accordion.Item eventKey={idx.toString()} key={idx}>
                  <Accordion.Header>{year.year}</Accordion.Header>
                  <Accordion.Body>
                    {/* Nested accordion for semesters */}
                    <Accordion alwaysOpen>
                      {year.semesters.map((sem, sIdx) => (
                        <Accordion.Item
                          eventKey={`${idx}-${sIdx}`}
                          key={`${idx}-${sIdx}`}
                        >
                          <Accordion.Header>{sem.semester}</Accordion.Header>
                          <Accordion.Body>
                            <Table bordered size="sm" responsive>
                              <thead className="table-theme">
                                <tr>
                                  <th>Course</th>
                                  <th>Credits</th>
                                </tr>
                              </thead>
                              <tbody>
                                {sem.courses.map((c, i) => (
                                  <tr key={i}>
                                    <td>{c.name}</td>
                                    <td>{c.credits}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </Table>
                          </Accordion.Body>
                        </Accordion.Item>
                      ))}
                    </Accordion>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>

          <div className="career-inpact-section my-5">
            <h5 className="title mb-3">Career Impact</h5>
            <p>
              The PGPM Class of 2025 at UCU had an exceptional placement season
              with top recruiters like Accenture, Deloitte, Cognizant, and
              Infosys Consulting, and 25+ new companies including KPMG, IBM, and
              Swiggy offering diverse roles.
            </p>
            <div class="col-11 my-5">
              <img
                alt=""
                src="https://www.greatlakes.edu.in/chennai/assets/greatlakes/images/career-impact-1.jpg"
                title=""
              />
            </div>
            <div className="row">
              {data.map((item, index) => (
                <CountUpCard
                  key={index}
                  end={item.end}
                  label={item.label}
                  prefix={item.prefix}
                  suffix={item.suffix}
                />
              ))}
            </div>
          </div>

          {/* Testimonial Carousel */}
          <div className="program-student-testimonial">
            <h5 className="title mb-4">Student Testimonials</h5>
            <Testimonials />
          </div>
        </div>

        {/* Sidebar */}
        {/* Sidebar */}
        <div className="col-lg-4">
          <div className="program-sidebar sticky-sidebar">
            {/* Curriculum Menu */}
            <div className="program-curriculum shadow-sm rounded">
              <div className="program-header">PGPM-ELITE (Full-Time)</div>
              <ul className="list-unstyled program-menu mb-0">
                {sidebarMenu.map((m, i) => (
                  <li key={i}>
                    <a href={m.link} className="d-flex align-items-center">
                      <FaArrowRight className="me-2 arrow-icon" /> {m.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="program-info mb-4 p-4 shadow-sm bg-white rounded">
              <h5>Department Contact Info</h5>
              <p>PGPM-ELITE (Full-Time)</p>
              <div className="contact-info my-5">
                <h6>Contact:</h6>
                <a href="mailto:barry.Unipix@info.com">info.pgpm@ucu.com</a>
                <a href="tel:+9196642514251">+91 966425 14251</a>
              </div>
              <div className="social-info">
                <h6>Social Info:</h6>
                <div className="d-flex gap-3 social-icons">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF size={20} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram size={20} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn size={20} />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Event */}
            <div className="program-event p-4 rounded text-white">
              <p>Joint New Event About PGPM-ELITE (Full-Time)</p>
              <h4 className="event-title">PGPM-ELITE (Full-Time) Studies</h4>
              <div className="single-event-content-meta my-5">
                <div className="event-time">
                  <Clock size={16} /> 10:30 am
                </div>
                <div className="event-place mt-3">
                  <MapPin size={16} /> Yarra Park, Delhi, IN
                </div>
                <div className="event-date mt-3">
                  <Calendar size={16} /> November 28, 2023
                </div>
              </div>
              <Button variant="light mt-3">
                View Our Program <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDescription;
