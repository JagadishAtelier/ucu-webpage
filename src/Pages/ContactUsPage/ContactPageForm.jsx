import React, { useEffect, useState } from "react";
import { Mail, MailOpen, Map, MapPin, Phone, PhoneCall } from "lucide-react";
import { Col, Container, Form, Row, Button, Dropdown } from "react-bootstrap";

function ContactPageForm() {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

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
    { name: "I'm looking to recruit from the best business schools" }
  ];


  // Fetch all countries with states
  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/states")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data.data);
      })
      .catch((err) => console.error("Error fetching countries:", err));
  }, []);

  // Handle country change and load states
  const handleCountryChange = (e) => {
    const countryName = e.target.value;
    setSelectedCountry(countryName);
    const selected = countries.find((c) => c.name === countryName);
    setStates(selected ? selected.states : []);
  };

  return (
    <div className="captital-campus-content-sec mt-5">
      <div
        className="d-flex flex-lg-column flex-md-column flex-column gap-3"
      >
        {/* LEFT SIDE CONTENT */}
        <div className="col-lg-12 col-md-12 col-12 d-flex justify-content-center text-center flex-column gap-3">
          <p className="mb-0 col-9 mx-auto pt">
            At UCU School of Global Management, we put the student first. We are
            here to talk to you about our programs, help you choose the right
            one and discuss your career prospects.
          </p>
          {/* <div className="d-flex align-items-center">
            <div className="cpf-hr-line"></div>
            <p className="mb-0 pt">OR</p>
            <div className="cpf-hr-line"></div>
          </div> */}
          <h1 className="mb-0 display-5 fw-bold text-uppercase">
            <span style={{ color: "#5ac501" }}>connect with us </span> through our
          </h1>
          <div className="contactSection-container">
            <div className="contactSection-grid">

              {/* Address */}
              <div
                className="contactSection-card"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=900&q=80')",
                }}
              >
                <div className="contactSection-overlay"></div>

                <div className="contactSection-icon">
                  <MapPin size={28} />
                </div>

                <h3>Address</h3>
                <p>UCU Road, UCU University</p>
                <p>Chennai - 600 025</p>
                <p>Tamil Nadu</p>
              </div>

              {/* Email */}
              <div
                className="contactSection-card"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=900&q=80')",
                }}
              >
                <div className="contactSection-overlay"></div>

                <div className="contactSection-icon-email">
                  <MailOpen size={28} />
                </div>
                <div className="d-flex flex-column justify-contnet-center align-items-center my-auto">
                  <h3>Email</h3>
                  <p>University : ucu@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div
                className="contactSection-card"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80')",
                }}
              >
                <div className="contactSection-overlay"></div>

                <div className="contactSection-icon">
                  <PhoneCall size={28} />
                </div>
                <div className="d-flex flex-column justify-contnet-center align-items-center my-auto">
                  <h3>Phone</h3>
                  <p>Office : 9876543210</p>
                </div>
              </div>

            </div>
          </div>



        </div>

        {/* RIGHT SIDE FORM */}
        {/* <div className="col-lg-12 col-md-12 col-12 d-flex flex-column gap-3">
          <p className="mb-0 fs-5 bg-white text-black text-center py-3 fw-bold">
            Get in touch with us today
          </p>
          <Container>
            <Form>
              <Row className="mb-3">
                <Col lg={6}>
                  <Form.Group controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your first name" />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your last name" />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col lg={6}>
                  <Form.Group controlId="formPhone">
                    <Form.Label>Mobile Phone Number*</Form.Label>
                    <Form.Control type="text" placeholder="Enter your mobile number" />
                  </Form.Group>
                </Col>

                <Col lg={6}>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email*</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col lg={6}>
                  <Form.Group controlId="formCountry">
                    <Form.Label>Country*</Form.Label>
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
                  <Form.Group controlId="formState">
                    <Form.Label>State*</Form.Label>
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

              <Row className="mb-3">
                <Col lg={6}>
                  <Form.Group controlId="city">
                    <Form.Label>City*</Form.Label>
                    <Form.Control type="text" placeholder="Enter your city" />
                  </Form.Group>
                </Col>

                <Col lg={6}>
                  <Form.Group controlId="DescribesYou">
                    <Form.Label>What Describes You Best?*</Form.Label>
                    <Form.Select disabled={!describesYou.length}>
                      <option value="">-- What Describes You Best --</option>
                      {describesYou.map((state) => (
                        <option key={state.name} value={state.name}>
                          {state.name}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="YourMessage">
                    <Form.Label>Your Message*</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Write your message..."
                    />
                  </Form.Group>
                </Col>
              </Row>


              <div className="d-flex justify-content-center mt-4">
                <Button variant="light" type="submit" className="fw-bold px-4">
                  Submit
                </Button>
              </div>
            </Form>
          </Container>
        </div> */}
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
                        {countries.map((c) => (
                          <option key={c.name} value={c.name}>{c.name}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col lg={6}>
                    <Form.Group>
                      <Form.Label className="form-label-uni">State*</Form.Label>
                      <Form.Select disabled={!states.length}>
                        <option value="">-- Select State --</option>
                        {states.map((s) => (
                          <option key={s.name} value={s.name}>{s.name}</option>
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

                      <Dropdown className="describes-dropdown-contact-us">
                        <Dropdown.Toggle className="describes-btn-contact-us w-100">
                          -- Choose Option --
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="describes-menu-contact-us w-100 px-0 py-2 transition-none">
                          {describesYou.map((d) => (
                            <Dropdown.Item key={d.name}>{d.name}</Dropdown.Item>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
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


      </div>
    </div>
  );
}

export default ContactPageForm;
