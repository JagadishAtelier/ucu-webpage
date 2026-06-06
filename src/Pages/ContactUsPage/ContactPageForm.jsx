import React, { useEffect, useState } from "react";
import { MailOpen, MapPin, PhoneCall } from "lucide-react";
import { Col, Container, Form, Row } from "react-bootstrap";

const iconMap = {
  "map-pin": MapPin,
  mail: MailOpen,
  phone: PhoneCall,
};

const fallbackCards = [
  {
    tagName: "Founder's Office",
    title: "Founder's Office",
    iconImage: "map-pin",
    image:
      "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=800",
    content: ["Leadership office and institutional correspondence", "Chennai, TN - 600 025"],
    link: "mailto:foundersoffice@ucu.edu",
    buttonText: "Contact Office",
    isVisible: true,
  },
  {
    tagName: "Administration",
    title: "UCU General Administration",
    iconImage: "mail",
    image:
      "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800",
    content: ["Primary: ucu@gmail.com", "Admissions: reg@university.edu"],
    link: "mailto:ucu@gmail.com",
    buttonText: "Compose Email",
    isVisible: true,
  },
  {
    tagName: "Rising Leaders",
    title: "Rising Leaders",
    iconImage: "phone",
    image:
      "https://img.freepik.com/free-photo/happy-customer-service-representative-using-computer-while-communicating-with-clients-online_637285-6679.jpg?w=740&q=80",
    content: ["Connect with India and International Regional Chapters", "North, South, East, West and Central centers"],
    link: "#regional-centers",
    buttonText: "View Chapters",
    isVisible: true,
  },
];

const describesYou = [
  { name: "I'm a student looking for an undergraduate course" },
  { name: "I want to pursue a Full-time program" },
  { name: "I want to pursue a Flexi-program" },
  { name: "I want to pursue a Career Reboot Program for Women" },
  { name: "I want to pursue a Executive Post Graduate Certificate Programmes" },
  { name: "I want to be a Data Scientist" },
  { name: "I want to Join Financial Technology Program" },
  { name: "I want to do a Doctorate in Business Administration" },
  { name: "I'm a parent of a future student and I'm looking for options" },
  { name: "I'm an UCU Alumni and I'd love to keep in touch" },
  { name: "I'm looking to recruit from the best business schools" },
];

function ContactPageForm({ data }) {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedDescription, setSelectedDescription] = useState("");

  const visibleCards = (data?.contactCard?.length ? data.contactCard : fallbackCards).filter(
    (card) => card.isVisible !== false
  );
  const showContactBoxes = data?.visibility?.contactBoxes !== false;
  const showContactForm = data?.visibility?.contactForm !== false;

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/states")
      .then((res) => res.json())
      .then((result) => {
        setCountries(result.data || []);
      })
      .catch((err) => console.error("Error fetching countries:", err));
  }, []);

  const handleCountryChange = (e) => {
    const countryName = e.target.value;
    setSelectedCountry(countryName);
    const selected = countries.find((country) => country.name === countryName);
    setStates(selected ? selected.states : []);
  };

  return (
    <div className="captital-campus-content-sec mt-5">
      <div className="d-flex flex-lg-column flex-md-column flex-column gap-3">
        <div className="col-lg-12 col-md-12 col-12 d-flex justify-content-center text-center flex-column gap-3">
          <p className="mb-0 col-9 mx-auto pt">{data?.introSection?.title}</p>
          <h1 className="mb-0 display-5 fw-bold text-uppercase">
            <span style={{ color: "#5ac501" }}>connect with us </span> through our
          </h1>

          {showContactBoxes && (
            <div className="CRTContact-universe-section">
              <div className="CRTContact-universe-grid">
                {visibleCards.map((card, index) => {
                  const Icon = iconMap[card.iconImage] || MapPin;
                  const fallbackImage = fallbackCards[index % fallbackCards.length].image;

                  return (
                    <div className="CRTContact-univ-card" key={`${card.title}-${index}`}>
                      <div
                        className="CRTContact-univ-banner"
                        style={{ backgroundImage: `url('${card.image || fallbackImage}')` }}
                      >
                        <div className="CRTContact-univ-label">{card.tagName || card.title}</div>
                      </div>
                      <div className="CRTContact-univ-body">
                        <div className="CRTContact-univ-icon">
                          <Icon size={22} />
                        </div>
                        <div className="CRTContact-univ-info">
                          <h3>{card.title}</h3>
                          {(card.content || []).map((line, lineIndex) => (
                            <p key={lineIndex}>{line}</p>
                          ))}
                        </div>
                        <div className="CRTContact-univ-footer">
                          <a href={card.link || "#"} className="CRTContact-univ-link">
                            {card.buttonText || "Know More"} -&gt;
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {showContactForm && (
          <>
            <p className="mt-5 text-center pt">
              Please fill out the form and we will get in touch with you shortly.
            </p>
            <div className="contact-form-wrapper py-5">
              <Container>
                <div className="contact-form-card mx-auto p-4 p-md-5">
                  <Form>
                    <Row className="mb-4">
                      <Col lg={6}>
                        <Form.Group className="floating-box">
                          <Form.Label className="form-label-uni">First Name*</Form.Label>
                          <Form.Control type="text" required />
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group className="floating-box">
                          <Form.Label className="form-label-uni">Last Name*</Form.Label>
                          <Form.Control type="text" required />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row className="mb-4">
                      <Col lg={6}>
                        <Form.Group className="floating-box">
                          <Form.Label className="form-label-uni">Mobile Number*</Form.Label>
                          <Form.Control type="text" required />
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group className="floating-box">
                          <Form.Label className="form-label-uni">Email*</Form.Label>
                          <Form.Control type="email" required />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row className="mb-4">
                      <Col lg={6}>
                        <Form.Group>
                          <Form.Label className="form-label-uni">Country*</Form.Label>
                          <Form.Select onChange={handleCountryChange} value={selectedCountry}>
                            <option value="">-- Select Country --</option>
                            {countries.map((country) => (
                              <option key={country.name} value={country.name}>
                                {country.name}
                              </option>
                            ))}
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group>
                          <Form.Label className="form-label-uni">State*</Form.Label>
                          <Form.Select disabled={!states.length}>
                            <option value="">-- Select State --</option>
                            {states.map((state) => (
                              <option key={state.name} value={state.name}>
                                {state.name}
                              </option>
                            ))}
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row className="mb-4">
                      <Col lg={6}>
                        <Form.Group className="floating-box">
                          <Form.Label className="form-label-uni">City*</Form.Label>
                          <Form.Control type="text" required />
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group>
                          <Form.Label className="form-label-uni">What Describes You Best?*</Form.Label>
                          <Form.Select
                            value={selectedDescription}
                            onChange={(event) => setSelectedDescription(event.target.value)}
                            required
                          >
                            <option value="">-- Choose Option --</option>
                            {describesYou.map((item) => (
                              <option key={item.name} value={item.name}>
                                {item.name}
                              </option>
                            ))}
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>

                    <div className="mb-4">
                      <Form.Group>
                        <Form.Label className="form-label-uni">Your Message*</Form.Label>
                        <Form.Control as="textarea" rows={4} placeholder="Write your message..." />
                      </Form.Group>
                    </div>

                    <div className="text-center">
                      <button className="submit-btn-uni px-5 py-2">Submit</button>
                    </div>
                  </Form>
                </div>
              </Container>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ContactPageForm;
