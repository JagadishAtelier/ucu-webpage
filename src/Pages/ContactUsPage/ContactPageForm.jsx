import React, { useEffect, useState } from "react";
import { Mail, Phone } from "lucide-react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";

function ContactPageForm() {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

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
        className="d-flex flex-lg-row flex-md-row flex-column gap-3 p-lg-5 p-3"
        style={{ backgroundColor: "#0c0142", color: "white" }}
      >
        {/* LEFT SIDE CONTENT */}
        <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-center text-center flex-column gap-3">
          <p className="mb-0">
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
            CONNECT WITH US THROUGH OUR TOLL-FREE NUMBER
          </p>
          <h1 className="mb-0 fw-bold text-center">9876543210</h1>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="col-lg-6 col-md-6 col-12 d-flex flex-column gap-3">
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
                <Col>
                  <Form.Group controlId="formPhone">
                    <Form.Label>Mobile Phone Number*</Form.Label>
                    <Form.Control type="text" placeholder="Enter your mobile number" />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
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

              <div className="d-flex justify-content-center mt-4">
                <Button variant="light" type="submit" className="fw-bold px-4">
                  Submit
                </Button>
              </div>
            </Form>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default ContactPageForm;
