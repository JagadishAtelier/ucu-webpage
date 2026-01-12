import React, { useState } from "react";
import {
    Container,
    Row,
    Col,
    Accordion,
    Button,
    Tabs,
    Tab,
    Nav,
} from "react-bootstrap";
import "../../Components/PGDM-program/Curriculum/Curriculum.css";
// import pgdmImage from "../../../Assets/aboutPageImage/vision_image.jpg"; 
import CurriculumTable from "../../Components/PGDM-program/Curriculum/CurriculumTable";
import SummerInternship from "../../Components/PGDM-program/Curriculum/SummerInternship";
import Electives from "../../Components/PGDM-program/Curriculum/Electives";
import OerationTable from "../../Components/PGDM-program/Curriculum/OerationTable";
import AimlaTable from "../../Components/PGDM-program/Curriculum/AimlaTable";
import { useLocation } from "react-router-dom";
// import PGPMCurricullam from "../PgprogramPage/pgTabs/PGPMCurricullam/PGPMCurricullam";
// import PGPMBottomBanner from "../PGPMProgram/PGPMBottomBanner";

const PGDMCurricullam = () => {
    // const [key, setKey] = useState("marketing");
    return (
        <section className="pgdm-section">
            <div className="container my-4">
                {/* Header */}
                <div className="text-left mb-5">
                    <h2 className="display-6 fw-bold col-12 col-lg-12">
                        <span className="program">PGDM</span> Curriculum and Programme
                        Structure
                    </h2>
                    <p className="pgdm-intro">
                        A new-age curriculum co-created with the Industry, keeping corporate needs and employability at the forefront
                    </p>
                </div>

                {/* Programme Structure */}
                <CurriculumTable />
                <div className="my-4">
                    <p className="Summer-Internship-head text-center">Summer Internship</p>
                    {/* <SummerInternship/> */}
                </div>
                <SummerInternship />


                {/* Majors */}
                <section className="majors mb-5">
                    {/* Content commented out in original file */}
                </section>

                {/* Minors */}
                <section className="minors">
                    <h3 className="majors-section-title mb-4">Industry Sector Major</h3>
                    <Row>
                        <Col md={3}>
                            <Button className="minor-btn">Fin-Tech</Button>
                        </Col>
                        <Col md={3}>
                            <Button className="minor-btn">GCC</Button>
                        </Col>
                        <Col md={3}>
                            <Button className="minor-btn">Consulting</Button>
                        </Col>
                                                <Col md={3}>
                            <Button className="minor-btn">Semiconductor</Button>
                        </Col>
                        {/* <Col md={3}>
                            <Button className="minor-btn">Manufacturing</Button>
                        </Col> */}
                    </Row>
                    {/* <Row>
                        <Col md={3}>
                            <Button className="minor-btn">Semiconductor</Button>
                        </Col>
                    </Row> */}
                </section>

                <div>
                    <Electives />
                </div>
                <div className="mt-4">
                    <OerationTable />
                </div>
                <div className="mt-4">
                    <AimlaTable />
                </div>
            </div>
        </section>
    );
};

export default PGDMCurricullam;
