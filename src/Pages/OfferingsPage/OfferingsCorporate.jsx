import React,{useState} from 'react'
import { Form, Row, Col, Button, Modal } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
const data = [
    {
        image : "https://images.pexels.com/photos/3771055/pexels-photo-3771055.jpeg?auto=compress&cs=tinysrgb&w=600",
        head : "One Stop Access to untapped, high-potential talent",
        para : "Access talent for your organisation from all our partner institutions, all at one place with UCU Consortium"
    },
    {
        image : "https://images.pexels.com/photos/6925201/pexels-photo-6925201.jpeg?auto=compress&cs=tinysrgb&w=400",
        head : " Scout upcoming talent",
        para : "Get first access to talent data for upcoming academic years and engage with them through campus corporate programs as the hiring season begins",
        btn : "Explore More",
        btn2:"Contact us"
    },

]
function OfferingsCorporate() {
    const navigate = useNavigate()
        const [showForm, setShowForm] = useState(false);

    const handleExploreClick = () => setShowForm(true);
    const handleClose = () => setShowForm(false);
  return (
    <div className='captital-campus-content-sec mt-5'>
        <h1>Corporate Offerings</h1>
<div className="d-grid mt-4">
  <div className="row g-4">
    {data.map((item, index) => (
      <div key={index} className="col-lg-6 col-12">
        <div className="oc-card-wrapper d-flex flex-column">
          <img src={item.image} alt={item.head} className="oc-data-image" />
          <div className="oc-text-div d-flex flex-column justify-content-between">
            <div>
              <h4 className="oc-title">{item.head}</h4>
              <p className="oc-desc">{item.para}</p>
            </div>
            <div className="d-flex gap-3">
              {item.btn && (
                <Button
                  className="oc-btn-primary flex-fill"
                  onClick={handleExploreClick}
                >
                  {item.btn}
                </Button>
              )}
              {item.btn2 && (
                <Button className="oc-btn-secondary flex-fill" onClick={()=>navigate('/contact-us')}>
                  {item.btn2}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

                    {/* 🔹 Modal Section */}
            <Modal show={showForm} onHide={handleClose} centered size="lg" className="custom-modal">
                <Modal.Header closeButton className="custom-modal-header">
                    <Modal.Title>Scout upcoming talent Registration</Modal.Title>
                </Modal.Header>

                <Modal.Body className="custom-modal-body">
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="formFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your first name" />
                            </Form.Group>

                            <Form.Group as={Col} md="6" controlId="formContact">
                                <Form.Label>Contact</Form.Label>
                                <Form.Control type="text" placeholder="Enter contact number" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="formEmail">
                                <Form.Label>Email ID</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>

                            <Form.Group as={Col} md="6" controlId="formInstitute">
                                <Form.Label>Company</Form.Label>
                                <Form.Control type="text" placeholder="Enter your Company" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">

                            <Form.Group as={Col} md="6" controlId="formCourse">
                                <Form.Label>Designation</Form.Label>
                                <Form.Control type="text" placeholder="Enter your Designation" />
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="formCourse">
                                <Form.Label>Industry</Form.Label>
                                <Form.Control type="text" placeholder="Enter  Industry" />
                            </Form.Group>
                        </Row>

                        <Form.Group controlId="formIndustry">
                            <Form.Label>Your Requirement</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Requirement" />
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer className="custom-modal-footer">
                    <Button variant="outline-secondary" onClick={handleClose} className="cancelop-btn">
                        Cancel
                    </Button>
                    <Button className="submit-btn">
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
    </div>
  )
}

export default OfferingsCorporate