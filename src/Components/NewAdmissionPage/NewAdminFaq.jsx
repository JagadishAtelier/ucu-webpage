import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

function NewAdminFaq({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const defaultFaqs = [
    {
      question: "What programs does UCU University offer admissions for?",
      answer: "UCU University offers admissions to a wide range of undergraduate, postgraduate, and doctoral programs across multiple disciplines. Program availability may vary by academic year as per university regulations.",
    },
    {
      question: "What is the general eligibility criteria for admission?",
      answer: "Eligibility criteria depend on the chosen program. In general, applicants must meet the minimum academic qualifications prescribed by UCU University and relevant regulatory bodies. Detailed program-specific requirements are published in the official admission notification.",
    },
    {
      question: "Is an entrance examination required for admission?",
      answer: "Entrance examinations may be required for certain programs. UCU University considers national-level entrance tests, university-conducted assessments, or merit-based evaluation depending on the program applied for.",
    },
    {
      question: "How is the admission selection process conducted?",
      answer: "Admissions are based on a transparent evaluation process that may include academic performance, entrance test scores, interviews, or interaction rounds, depending on the program and level of study.",
    },
    {
      question: "Are scholarships or financial assistance options available?",
      answer: "Yes. UCU University offers merit-based and need-based scholarships in accordance with university policy. Eligibility and award criteria vary by program and are subject to availability.",
    },
    {
      question: "Does UCU University provide support for career and skill development?",
      answer: "UCU University supports students through academic mentoring, skill development initiatives, internships, industry exposure activities, and career guidance services to enhance overall employability.",
    },
  ];

  const sectionData = data?.faqSection || {};
  const faqs = sectionData.faqs && sectionData.faqs.length > 0 ? sectionData.faqs : defaultFaqs;
  const title = sectionData.title || "Frequently Asked Questions";
  const description = sectionData.description || "Everything you need to know about our UCU program";


  return (
    <section id="faq" className="NEWADMFAQ-section">
      <Container className="NEWADMFAQ-container">
        {/* Header */}
        <div className="text-center NEWADMFAQ-header">
          <h3 className="NEWADMFAQ-title" data-aos="fade-down" data-aos-delay="100">{title}</h3>
          <p className="NEWADMFAQ-subtitle" data-aos="fade-down" data-aos-delay="100">
            {description}
          </p>
        </div>

        {/* FAQ List */}
        <div className="NEWADMFAQ-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`NEWADMFAQ-item ${activeIndex === index ? "NEWADMFAQ-active" : ""
                }`}
            >
              <div
                className="NEWADMFAQ-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                {activeIndex === index ? (
                  <BiChevronUp className="NEWADMFAQ-icon" />
                ) : (
                  <BiChevronDown className="NEWADMFAQ-icon" />
                )}
              </div>
              <div
                className={`NEWADMFAQ-answer ${activeIndex === index ? "open" : ""}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default NewAdminFaq