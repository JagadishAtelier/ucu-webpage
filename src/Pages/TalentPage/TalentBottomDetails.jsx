import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
function TalentBottomDetails() {
    return (
        <div className='captital-campus-content-sec my-4'>
            <section
                className="connect-section m-0 text-center p-3 rounded"
                style={{ backgroundImage: `url("https://img.freepik.com/free-photo/hercules-hall-surrounded-by-greenery-sunlight-daytime-munich-germany_181624-17876.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80")` }}
            >
                <Container>
                    <Row className="justify-content-start text-start">
                            <h2 className="connect-title fs-1 fw-bold">Explore Talent</h2>
                            <p className="position-relative">
                                +91 9876543210
                            </p>
                            <p className="position-relative">
                                Official Email ID
                            </p>
                            <p className="position-relative">
                                Group Official Email ID
                            </p>
                            <p className="position-relative">
                                Head - Training & Placement
                            </p>
                            <p className="position-relative">
                                Corporate & Career Services
                            </p>
                            <p className="position-relative">
                                Universal Corporate University, Chennai
                            </p>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default TalentBottomDetails