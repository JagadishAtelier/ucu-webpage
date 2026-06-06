import { MailOpen, PhoneCall } from "lucide-react";
import React from "react";
import { Accordion } from "react-bootstrap";

const fallbackSections = [
  {
    title: "Founder's Office",
    isVisible: true,
    items: [
      { name: "Mumbai", phones: ["9876543210", "9876543210"], email: "ucu@gmail.com" },
      { name: "Chennai", phones: ["9876543210", "9876543210"], email: "ucu@gmail.com" },
    ],
  },
  {
    title: "UCU General Administration",
    isVisible: true,
    items: [
      {
        name: "Administration Desk",
        role: "General Administration",
        phones: ["9876543210"],
        email: "ucu@gmail.com",
      },
    ],
  },
  {
    title: "Rising Leaders",
    isVisible: true,
    items: [
      {
        name: "Regional Chapters",
        role: "India and International Chapters - North, South, East, West and Central",
        phones: ["9876543210"],
        email: "risingleaders@ucu.edu",
      },
    ],
  },
];

function ContactAccordion({ sections }) {
  const visibleSections = (sections?.length ? sections : fallbackSections).filter(
    (section) => section.isVisible !== false
  );

  if (!visibleSections.length) {
    return null;
  }

  return (
    <div className="captital-campus-content-sec mt-5">
      <Accordion defaultActiveKey="0" className="mt-4">
        {visibleSections.map((section, sectionIndex) => (
          <Accordion.Item eventKey={`${sectionIndex}`} key={`${section.title}-${sectionIndex}`}>
            <Accordion.Header>{section.title}</Accordion.Header>
            <Accordion.Body>
              {(section.items || []).map((item, itemIndex) => (
                <div className={itemIndex > 0 ? "mt-5" : ""} key={`${item.name}-${itemIndex}`}>
                  {item.name && <h3>{item.name}</h3>}
                  {item.role && <p className="fs-5">{item.role}</p>}
                  {(item.phones || []).map((phone, phoneIndex) => (
                    <div className="d-flex gap-3 my-3" key={`${phone}-${phoneIndex}`}>
                      <PhoneCall style={{ color: "#5ac501" }} size={22} />
                      <p className="mb-0 fw-bold">{phone}</p>
                    </div>
                  ))}
                  {item.email && (
                    <div className="d-flex gap-3">
                      <MailOpen style={{ color: "#5ac501" }} size={22} />
                      <p className="mb-0 fw-bold">{item.email}</p>
                    </div>
                  )}
                </div>
              ))}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default ContactAccordion;
