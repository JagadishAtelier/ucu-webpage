import React from "react";
import { Container } from "react-bootstrap";

function NewAdminReady({ data }) {
    const title = data?.readyToApply?.title || "Ready to Transform Your Career?";
    const description = data?.readyToApply?.description || "Join 180 ambitious individuals in the Class of 2026. Applications close March 31, 2026.";

    return (
        <div id="apply" className="NEWADMCAREER-section">
            <Container className="text-center NEWADMCAREER-container">
                <h3 className="NEWADMCAREER-title" data-aos="fade-down" data-aos-delay="100">
                    {title}
                </h3>
                <p className="NEWADMCAREER-subtitle text-white" data-aos="fade-down" data-aos-delay="100">
                    {description}
                </p>

                {/* Buttons */}
                <div className="d-flex flex-column flex-sm-row justify-content-center gap-3" data-aos="fade-down" data-aos-delay="100">
                    <a
                        href="#brochure"
                        className="NEWADMCAREER-btn-primary d-inline-flex align-items-center justify-content-center gap-2"
                    >
                        <i className="fas fa-rocket"></i>
                        Apply Now
                    </a>
                    <a href="#brochure" className="NEWADM-btn-outline">
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