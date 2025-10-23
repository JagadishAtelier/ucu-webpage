import React, { useState } from "react";
import { FiMapPin, FiUsers, FiBriefcase } from "react-icons/fi";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button, Accordion, Table } from "react-bootstrap";

const ITEMS = [
  {
    id: "location",
    label: "Overview",
    icon: <FiMapPin size={20} />,
    head: "Admissions",
    title: "Future leaders start here.",
    text: `<p>At MDI Gurgaon, we put all our experience and knowledge behind your career goals. From post graduate diploma programmes to executive post graduate and fellowship programmes to continuing executive education programmes, our integrated approach to research, learning and innovation is designed around you. A world of opportunity awaits!</p>`,
    link: "/campus-ambience",
  },
  {
    id: "pedagogy",
    label: "Fee Payment",
    icon: <FiUsers size={20} />,
    head: "Fee Payment",
    text: `
      <p class='fw-bold text-black'>Instructions for Fee payment:</p>
      <ul>
        <li class='fw-bold'><p>Ensure there are no blank spaces in your enrollment number.</p></li>
        <li class='fw-bold'><p>Do not refresh the web page or navigate back after clicking 'pay now.'</p></li>
        <li class='fw-bold'><p>Challan-based RTGS payments must be processed exclusively from bank branches. Do not add the virtual account number mentioned in the challan as a beneficiary in Netbanking.</p></li>
        <li class='fw-bold'><p>The RTGS/NEFT fee transfer amount must match the amount specified in the challan. If the payment amount differs, the fee will be returned and deemed unpaid.</p></li>
      </ul>
      <div class="d-grid">
        <div class='row gap-3'>
          <div class="adp-fee-payment-box"><p>Advance Fees for PGDM-Business</p><p>Management</p><button class="chtp-btn">Click here to pay</button></div>
          <div class="adp-fee-payment-box"><p>Advance Fees for PGDM-Business</p><p>Management</p><button class="chtp-btn">Click here to pay</button></div>
          <div class="adp-fee-payment-box"><p>Advance Fees for PGDM-Business</p><p>Management</p><button class="chtp-btn">Click here to pay</button></div>
        </div>
      </div>
    `,
  },
  {
    id: "placements",
    label: "Financial Aid",
    icon: <FiBriefcase size={20} />,
    head: "Financial Aid",
    brands: [
      { name: "Credila Education Loan", img: "https://mdi.ac.in/resources/admin_uploads/Credila-Logo-Sept24.png" },
      { name: "Bank of Maharashtra Education Loan Scheme", img: "https://mdi.ac.in/resources/admin_uploads/logo-bank-of-maharashtra.png" },
      { name: "Union Bank Education Loan Scheme", img: "https://mdi.ac.in/resources/admin_uploads/logo-union-bank-of-india.png" },
      { name: "IDBI Bank Special Education Loan Scheme", img: "https://mdi.ac.in/resources/admin_uploads/logo-IDBI-Bank.png" },
      { name: "Bank of India", img: "https://mdi.ac.in/resources/admin_uploads/logo-bank-of-india.png" },
    ],
  },
  {
    id: "AdmissionsFAQ",
    label: "Admissions FAQ's",
    icon: <FiBriefcase size={20} />,
    head: "Admissions FAQ's",
    faq: [
      {
        question: "How many two year full time PGDM programmes are offered by MDI Gurgaon?",
        answer: `
          <ul>
            <li><p>Post Graduate Diploma in Management (PGDM)</p></li>
            <li><p>Post Graduate Diploma in Management - Human Resource Management (PGDM-HRM)</p></li>
            <li><p>Post Graduate Diploma in Management - International Business (PGDM-IB)</p></li>
            <li><p>Post Graduate Diploma in Management-Business Analytics (PGDM-Business Analytics)</p></li>
          </ul>
        `,
      },
      {
        question: "How can one apply?",
        answer: `<p>One can apply online after registering for Common Admissions Test (CAT). GMAT is applicable only for foreign nationals, NRIs, and PIOs.</p>`,
      },
      {
        question: "What is the selection process?",
        answer: `<p>MDI Gurgaon follows a two-phase admissions process i.e. shortlisting and final WAT-GD-PI process conducted at various cities in India.</p>`,
      },
    ],
  },
  {
    id: "GrievanceCommittee",
    label: "Grievance Committee",
    icon: <FiBriefcase size={20} />,
    head: "Grievance Committee",
    text: `<p>The Students' Grievance Redressal Committee:</p>`,
    table: [
      ["Prof. Jyotsna Bhatnagar", "Chairperson"],
      ["Prof. Sangeeta Shah Bharadwaj", "Member"],
      ["Prof. P. C. Biswal", "Member"],
      ["CAO (Academics)", "Member"],
      ["Prof. Sumita Rai", "Member"],
    ],
  },
  {
    id: "ContactAdmissions",
    label: "Contact Admissions",
    icon: <FiBriefcase size={20} />,
    head: "Contact Admissions",
    text: `
      <p>For Admissions related information, please contact:</p>
      <h3 class="content-title">Admissions Office</h3>
      <h3 class="content-title">Management Development Institute Gurgaon</h3>
      <p>Mehrauli Road, Sukhrali, Gurugram - 122007 INDIA</p>
      <h3 class="content-title">Graduate Programmes Admissions</h3>
      <p>Tel: +91-124-4560555 / 666</p>
      <p>Fax: +91-124-4560456</p>
      <p>Email: ucu@gmail.com</p>
    `,
  },
];

function AsmissionDetails() {
  const navigate = useNavigate();
  const [active, setActive] = useState("location");
  const [mobileOpen, setMobileOpen] = useState("location");

  const activeItem = ITEMS.find((i) => i.id === active) || ITEMS[0];

  const handleMobileToggle = (id) => {
    setMobileOpen((prev) => (prev === id ? null : id));
  };

  return (
    <div className="captital-campus-content-sec my-5">
      <div className="d-flex gap-5">
        {/* Left Nav */}
        <div className="col-12 col-lg-3">
          <div className="left-nav d-flex flex-column adp-left-container">
            {ITEMS.map((item) => {
              const isActive = item.id === active;
              const isOpen = mobileOpen === item.id;
              return (
                <div key={item.id}>
                  {/* Desktop */}
                  <button
                    className={`nav-pill d-lg-flex d-none align-items-center mb-3 p-3 ${isActive ? "active" : ""}`}
                    onClick={() => setActive(item.id)}
                    aria-pressed={isActive}
                  >
                    <div className="label">{item.label}</div>
                  </button>

                  {/* Mobile */}
                  <button
                    className={`nav-pill mob-nav-pill d-flex d-lg-none align-items-center justify-content-between w-100 p-3 ${isOpen ? "show" : ""}`}
                    onClick={() => handleMobileToggle(item.id)}
                  >
                    <div className="d-flex align-items-center">
                      <div className="icon me-3">{item.icon}</div>
                      <div className="label">{item.label}</div>
                    </div>
                    <ChevronDown className={`transition ${isOpen ? "rotate-180" : ""}`} />
                  </button>

                  {/* Mobile Content */}
                  <div
                    className={`mobile-content bg-light p-3 mt-2 rounded shadow-sm d-lg-none ${
                      isOpen ? "show" : ""
                    }`}
                  >
                    {item.text && (
                      <div
                        className="content-text"
                        dangerouslySetInnerHTML={{ __html: item.text }}
                      />
                    )}

                    {item.brands && (
                      <div className="brand-section mt-3">
                        <div className="d-flex flex-wrap align-items-start gap-4">
                          {item.brands.map((brand, i) => (
                            <div key={i} className="d-flex flex-column align-items-center mx-auto" style={{ width: "170px", minHeight: "140px" }}>
                              <div className="brand-card bg-white rounded shadow-sm p-3 d-flex align-items-center justify-content-center" style={{ width: "100%", height: "80px" }}>
                                <img src={brand.img} alt={brand.name} title={brand.name} style={{ maxWidth: "100%", maxHeight: "60px", objectFit: "contain" }} />
                              </div>
                              <p className="mt-2 mb-0 text-muted fw-semibold" style={{ fontSize: "14px", textAlign: "center" }}>{brand.name}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.faq && (
                      <Accordion defaultActiveKey="0" className="mt-4">
                        {item.faq.map((faqItem, index) => (
                          <Accordion.Item eventKey={index.toString()} key={index}>
                            <Accordion.Header>{faqItem.question}</Accordion.Header>
                            <Accordion.Body>
                              <div dangerouslySetInnerHTML={{ __html: faqItem.answer }} />
                            </Accordion.Body>
                          </Accordion.Item>
                        ))}
                      </Accordion>
                    )}

                    {item.table && (
                      <Table responsive className="apd-custom-table mt-3">
                        <tbody>
                          {item.table.map((row, rowIndex) => (
                            <tr key={rowIndex} className={rowIndex % 2 === 0 ? "alt-row" : ""}>
                              {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className="py-3">{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Content - Desktop */}
        <div className="col-12 col-lg-8 d-none d-lg-block adp-right-container">
          <div className="adp-content-card p-4">
            <h3 className="content-title fs-1">{activeItem.head}</h3>
            {activeItem.title && <h3 className="content-title">{activeItem.title}</h3>}
            {activeItem.text && (
              <div
                className="content-text"
                dangerouslySetInnerHTML={{ __html: activeItem.text }}
              />
            )}

            {activeItem.brands && (
              <div className="brand-section mt-3">
                <div className="d-flex flex-wrap align-items-start gap-4">
                  {activeItem.brands.map((brand, i) => (
                    <div key={i} className="d-flex flex-column align-items-center" style={{ width: "180px", minHeight: "140px" }}>
                      <div className="brand-card bg-white rounded shadow-sm p-3 d-flex align-items-center justify-content-center" style={{ width: "100%", height: "80px" }}>
                        <img src={brand.img} alt={brand.name} title={brand.name} style={{ maxWidth: "100%", maxHeight: "60px", objectFit: "contain" }} />
                      </div>
                      <p className="mt-2 mb-0 text-muted fw-semibold" style={{ fontSize: "14px", textAlign: "center" }}>{brand.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeItem.faq && (
              <Accordion defaultActiveKey="0" className="mt-4">
                {activeItem.faq.map((faqItem, index) => (
                  <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header>{faqItem.question}</Accordion.Header>
                    <Accordion.Body>
                      <div dangerouslySetInnerHTML={{ __html: faqItem.answer }} />
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            )}

            {activeItem.table && (
              <>
                <Table responsive className="apd-custom-table mt-3">
                  <tbody>
                    {activeItem.table.map((row, rowIndex) => (
                      <tr key={rowIndex} className={rowIndex % 2 === 0 ? "alt-row" : ""}>
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className="py-3">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <div>
                  <p>
                    The role of the committee is to prevent unfair practices and to provide a mechanism to students for redressal of their grievances.
                    Aggrieved students may approach the Students' Grievance Redressal Committee via
                    email at <a href="mailto:ucu@gmail.com">ucu@gmail.com</a> or through
                    <a href="https://ucu-webpage.vercel.app/"> this web portal</a>.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AsmissionDetails;
