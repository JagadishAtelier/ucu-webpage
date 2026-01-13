import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
function NewAdminFaq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "What programs does UCU University offer admissions for?",
      a: "UCU University offers admissions to a wide range of undergraduate, postgraduate, and doctoral programs across multiple disciplines. Program availability may vary by academic year as per university regulations.",
    },
    {
      q: "What is the general eligibility criteria for admission?",
      a: "Eligibility criteria depend on the chosen program. In general, applicants must meet the minimum academic qualifications prescribed by UCU University and relevant regulatory bodies. Detailed program-specific requirements are published in the official admission notification.",
    },
    {
      q: "Is an entrance examination required for admission?",
      a: "Entrance examinations may be required for certain programs. UCU University considers national-level entrance tests, university-conducted assessments, or merit-based evaluation depending on the program applied for.",
    },
    {
      q: "How is the admission selection process conducted?",
      a: "Admissions are based on a transparent evaluation process that may include academic performance, entrance test scores, interviews, or interaction rounds, depending on the program and level of study.",
    },
    {
      q: "Are scholarships or financial assistance options available?",
      a: "Yes. UCU University offers merit-based and need-based scholarships in accordance with university policy. Eligibility and award criteria vary by program and are subject to availability.",
    },
    {
      q: "Does UCU University provide support for career and skill development?",
      a: "UCU University supports students through academic mentoring, skill development initiatives, internships, industry exposure activities, and career guidance services to enhance overall employability.",
    },
  ];


  return (
    <section id="faq" className="NEWADMFAQ-section">
      <Container className="NEWADMFAQ-container">
        {/* Header */}
        <div className="text-center NEWADMFAQ-header">
          <h3 className="NEWADMFAQ-title">Frequently Asked Questions</h3>
          <p className="NEWADMFAQ-subtitle">
            Everything you need to know about our UCU program
          </p>
        </div>

        {/* FAQ Items */}
        <div className="NEWADMFAQ-list">
          {faqs.map((item, index) => (
            <div className="NEWADMFAQ-item" key={index}>
              <button
                className="NEWADMFAQ-question text-black"
                onClick={() => toggleFAQ(index)}
              >
                <span>{item.q}</span>

                {activeIndex === index ? (
                  <BiChevronUp className="NEWADMFAQ-icon" />
                ) : (
                  <BiChevronDown className="NEWADMFAQ-icon" />
                )}

              </button>

              <div
                className={`NEWADMFAQ-answer ${activeIndex === index ? "open" : ""
                  }`}
              >
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default NewAdminFaq