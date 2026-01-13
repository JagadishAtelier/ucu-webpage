import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaCheck,
  FaCheckCircle,
  FaFileAlt,
} from "react-icons/fa";

function NewAdminAdmission() {
  return (
    <div id="admissions" className="NEWADMADMIS-section py-5">
      <Container>
        {/* HEADER */}
        <div className="text-center mb-5">
          <h3 className="NEWADMADMIS-title mb-3" data-aos="fade-down" data-aos-delay="100">UCU University Admission Process</h3>
          <p className="NEWADMADMIS-subtitle mx-auto" data-aos="fade-down" data-aos-delay="100">
            A transparent and structured admission process designed to assess academic readiness, career aspirations, and overall potential.
          </p>
        </div>

        <Row className="g-5">
          {/* TIMELINE */}
          <Col lg={6}>
            <h4 className="NEWADMADMIS-subheading mb-4" data-aos="fade-up" data-aos-delay="100">
              Application Timeline
            </h4>

            <div className="NEWADMADMIS-timeline">
              {[
                {
                  step: "1",
                  title: "Online Application",
                  date: "November – March",
                  desc: "Complete the online application by submitting personal details, academic records, and a statement of purpose through the UCU University admissions portal.",
                },
                {
                  step: "2",
                  title: "Entrance Exam Evaluation",
                  date: "CAT / XAT / GMAT / CMAT",
                  desc: "Applicants are shortlisted based on valid entrance test scores in line with UCU University admission guidelines.",
                },
                {
                  step: "3",
                  title: "Interaction / Assessment",
                  date: "April 2026",
                  desc: "Shortlisted candidates participate in group discussions, written assessments, or interaction rounds to evaluate communication skills, analytical ability, and teamwork.",
                },
                {
                  step: "4",
                  title: "Personal Interview",
                  date: "April – May",
                  desc: "A faculty panel reviews the candidate’s academic background, career goals, leadership potential, and program fit.",
                },
              ].map((item, index) => (
                <div key={index} className="NEWADMADMIS-timeline-item" data-aos="fade-up" data-aos-delay="100">
                  <div className="NEWADMADMIS-step">{item.step}</div>
                  <div>
                    <div className="NEWADMADMIS-item-title">
                      {item.title}
                    </div>
                    <div className="NEWADMADMIS-item-date">
                      {item.date}
                    </div>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}

              {/* FINAL STEP */}
              <div className="NEWADMADMIS-timeline-item">
                <div className="NEWADMADMIS-step-final">
                  <FaCheck />
                </div>
                <div>
                  <div className="NEWADMADMIS-item-title">
                    Final Selection
                  </div>
                  <div className="NEWADMADMIS-item-date">
                    June 2026
                  </div>
                  <p>
                    Selected candidates receive official admission offers. Academic sessions commence as per the university academic calendar.
                  </p>
                </div>
              </div>
            </div>
          </Col>

          {/* ELIGIBILITY */}
          <Col lg={6}>
            <h4 className="NEWADMADMIS-subheading mb-4" data-aos="fade-down" data-aos-delay="100">
              Eligibility Criteria
            </h4>

            <div className="NEWADMADMIS-card mb-4" data-aos="fade-left" data-aos-delay="100">
              <div className="NEWADMADMIS-eligibility" >
                <div >
                  <FaCheckCircle />
                  <div>
                    <h6>Academic Qualification</h6>
                    <p>
                      A bachelor’s degree in any discipline (10+2+3 or 10+2+4 pattern) from a recognized university with the minimum marks prescribed by UCU University.
                    </p>
                  </div>
                </div>

                <div>
                  <FaCheckCircle />
                  <div>
                    <h6>Entrance Examination</h6>
                    <p>
                      A valid score in CAT / XAT / GMAT / CMAT or other accepted examinations as notified by the university. There is no age restriction for admission.
                    </p>
                  </div>
                </div>

                <div>
                  <FaCheckCircle />
                  <div>
                    <h6>Work Experience</h6>
                    <p>
                      Work experience is not mandatory. Fresh graduates and working professionals are equally encouraged to apply.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* DOCUMENTS */}
            <div className="NEWADMADMIS-documents" data-aos="fade-up" data-aos-delay="100">
              <h5 className="mb-4">Required Documents</h5>
              <ul>
                {[
                  "Class 10, 12, and Bachelor’s degree mark sheets and certificates",
                  "Valid entrance examination scorecard",
                  "Statement of Purpose outlining academic and career objectives",
                  "Work experience certificate (if applicable)",
                  "Letters of recommendation (if applicable)",
                  "Recent passport-size photographs",
                ].map((doc, index) => (
                  <li key={index}>
                    <FaFileAlt />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NewAdminAdmission;
