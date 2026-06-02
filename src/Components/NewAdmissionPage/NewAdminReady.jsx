import React from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NewAdminReady({ data }) {
    const title = data?.readyToApply?.title || "Ready to Transform Your Career?";
    const description = data?.readyToApply?.description || "Join 180 ambitious individuals in the Class of 2026. Applications close March 31, 2026.";

    const navigate = useNavigate();
    const [selectedProgram, setSelectedProgram] = React.useState("");

    const handleExplore = (e) => {
        e.preventDefault();
        if (selectedProgram) {
            navigate(selectedProgram);
        } else {
            alert("Please select a program first.");
        }
    };

    return (
        <div id="apply" className="NEWADMCAREER-section">
            <Container className="text-center NEWADMCAREER-container">
                <h3 className="NEWADMCAREER-title" data-aos="fade-down" data-aos-delay="100">
                    {title}
                </h3>
                <p className="NEWADMCAREER-subtitle text-white" data-aos="fade-down" data-aos-delay="100">
                    {description}
                </p>

                {/* Buttons and Dropdown */}
                <div className="d-flex flex-column flex-wrap flex-sm-row justify-content-center align-items-center gap-3" data-aos="fade-down" data-aos-delay="100">
                    <Form.Select
                        value={selectedProgram}
                        onChange={(e) => setSelectedProgram(e.target.value)}
                        style={{ minWidth: "250px", padding: "12px 20px", borderRadius: "30px", border: "1px solid #ddd" }}
                    >
                        <option value="">Select a Program</option>
                        <optgroup label="Full Time Programs">
                            <option value="/pgpm-elite?tab=admissions">PGPM ELITE | Career Accelerator</option>
                            <option value="/program-pgdm?tab=admissions">PGDM | Young Leaders' Program</option>
                            <option value="/PGPM-Flex?tab=admissions">PGPM Flex</option>
                            <option value="/program-pgxpm?tab=admissions">PGXPM</option>
                            <option value="/Career-Reboot-Program-for-Women?tab=admissions">Career Reboot Program for Women</option>
                        </optgroup>
                        <optgroup label="Domain Specialization">
                            <option value="/SalesDiplamo?tab=admissions">Sales</option>
                            <option value="/program/product?tab=admissions">Product</option>
                            <option value="/program/consulting?tab=admissions">Consulting</option>
                            <option value="/program/cybersecurity?tab=admissions">Cybersecurity</option>
                            <option value="/program/dm-ai?tab=admissions">Digital Marketing & AI</option>
                            <option value="/program/banking-finance?tab=admissions">Banking & Finance</option>
                            <option value="/program/international-business?tab=admissions">International Business</option>
                        </optgroup>
                        <optgroup label="Career Lane Specialization">
                            <option value="/program/fintech?tab=admissions">FinTech Genesis</option>
                            <option value="/program/gcc?tab=admissions">GCC Launchpad</option>
                            <option value="/program/HealthTech-Ignition?tab=admissions">HealthTech Ignition</option>
                            <option value="/program/Advanced-Manufacturing?tab=admissions">Advanced Manufacturing</option>
                        </optgroup>
                        <optgroup label="Executive Education">
                            <option value="/executive-edu?tab=3">Executive PhD</option>
                            <option value="/program/FinTech-Ascend?tab=admissions">FinTech Ascend</option>
                            <option value="/program/FinTech-Vanguard?tab=admissions">FinTech Vanguard</option>
                            <option value="/program/GCC-Catalyst?tab=admissions">GCC Catalyst</option>
                            <option value="/program/GCC-Elevate?tab=admissions">GCC Elevate</option>
                            <option value="/program/HealthTech-Navigate?tab=admissions">HealthTech Navigate</option>
                            <option value="/program/HealthTech-Pinnacle?tab=admissions">HealthTech Pinnacle</option>
                        </optgroup>
                    </Form.Select>
                    <button
                        onClick={handleExplore}
                        className="NEWADMCAREER-btn-primary d-inline-flex align-items-center justify-content-center gap-2 border-0"
                    >
                        <i className="fas fa-rocket"></i>
                        Explore
                    </button>
                    <a href="#brochure" className="NEWADM-btn-outline text-decoration-none">
                        <i className="fas fa-download me-2"></i>
                        Download Brochure
                    </a>
                </div>

                {/* Help Card */}
                <div className="NEWADMCAREER-help-card mx-auto" data-aos="fade-down" data-aos-delay="100">
                    <div className="NEWADMCAREER-help-label">Need Help?</div>
                    <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3 NEWADMCAREER-contact">
                        <a href="tel:+911234567890" className="NEWADMCAREER-contact-link d-flex gap-3 align-items-center text-white">
                            <i className="fas fa-phone"></i>
                            +91 123 456 7890
                        </a>
                        <a href="mailto:admissions@ucu.edu" className="NEWADMCAREER-contact-link d-flex gap-3 align-items-center text-white">
                            <i className="fas fa-envelope"></i>
                            admissions@ucu.edu
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default NewAdminReady