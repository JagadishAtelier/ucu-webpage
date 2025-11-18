import React, { useEffect, useState } from "react";
import { Mail, MailOpen, Map, MapPin, Phone, PhoneCall } from "lucide-react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";

function ContactPageForm() {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  const describesYou = [
    { name: "I am a School Student" },
    { name: "I am a College Student" },
    { name: "I am a University Student" },
    { name: "I am a Research Scholar" },
    { name: "I am a Professor / Lecturer" },
    { name: "I am a Working Professional" },
    { name: "I am Preparing for Competitive Exams" },
    { name: "I am Looking for Admission" },
    { name: "I am a Parent / Guardian" },
    { name: "Other" }
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
          <p className="mb-0 col-9 mx-auto">
            At UCU School of Global Management, we put the student first. We are
            here to talk to you about our programs, help you choose the right
            one and discuss your career prospects.
          </p>
          <p className="mb-0">
            Please fill out the form and we will get in touch with you shortly.
          </p>
          <div className="d-flex align-items-center">
            <div className="cpf-hr-line"></div>
            <p className="mb-0">OR</p>
            <div className="cpf-hr-line"></div>
          </div>
          <p className="mb-0 fw-bold fs-5">
            CONNECT WITH US THROUGH OUR
          </p>
          <div className="d-grid">
            <div className="row column-gap-4 row-gap-3">
              {/* Address */}
              <div
                className="contact-card position-relative d-flex flex-column align-items-center justify-content-center text-white"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80')",
                }}
              >
                <div className="overlay"></div>

                <MapPin size={32} />
                <h3 className="mb-1 mt-2">Address</h3>
                <p className="mb-0">UCU Road, UCU University</p>
                <p className="mb-0">Chennai - 600 025</p>
                <p className="mb-0">Tamil Nadu</p>
              </div>

              {/* Email */}
              <div
                className="contact-card position-relative d-flex flex-column align-items-center justify-content-center text-white"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80')",
                }}
              >
                <div className="overlay"></div>

                <MailOpen size={32} />
                <h3 className="mb-1 mt-2">Email</h3>
                <p className="mb-0">Admissions : Admissions@gmail.com</p>
                <p className="mb-0">Administration : Administration@gmail.com</p>
                <p className="mb-0">Examinations : Examinations@gmail.com</p>
              </div>

              {/* Phone */}
              <div
                className="contact-card position-relative d-flex flex-column align-items-center justify-content-center text-white"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80')",
                }}
              >
                <div className="overlay"></div>

                <PhoneCall size={32} />
                <h3 className="mb-1 mt-2">Phone</h3>
                <p className="mb-0">Admissions : 9876543210</p>
                <p className="mb-0">Administration : 8765432109</p>
                <p className="mb-0">Examinations : 7654321098</p>
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

        <div className="contact-form-wrapper py-5 mt-5">
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
                      <Form.Select disabled={!describesYou.length}>
                        <option value="">-- Choose Option --</option>
                        {describesYou.map((d) => (
                          <option key={d.name} value={d.name}>{d.name}</option>
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


      </div>
    </div>
  );
}

export default ContactPageForm;
