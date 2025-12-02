import React from "react";

function LCPEnrollment() {
    return (
        <section className="lcpenrollment-section">
            <div className="lcpenrollment-container">

                <h2 className="lcpenrollment-title">
                    Be Part of Something <span className="lcpenrollment-gold">Bigger</span>
                </h2>

                <p className="lcpenrollment-text">
                    Join a global community of life-changing visionaries. Together, we will create a
                    future where coaching leads the way to empowerment and positive impact. Grow,
                    transform, and make an impact with us!
                </p>

                <div className="lcpenrollment-buttons">
                    <a
                        href="https://coachingfederation.org/about/icf-membership/individual-membership/"
                        className="lcpenrollment-btn"
                        target="_self"
                    >
                        Individual Membership
                    </a>

                    <a
                        href="https://coachingfederation.org/about/icf-membership/organization-membership/"
                        className="lcpenrollment-btn"
                        target="_self"
                    >
                        Organization Membership
                    </a>
                </div>

            </div>
        </section>
    );
}

export default LCPEnrollment;
