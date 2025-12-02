import React from "react";

function LCPPower() {
    return (
        <div>
            {/* <h1 className="display-5 fw-bold mb-3">Program <span style={{ color: "#5ac501" }}>Overview</span></h1> */}
            <div className="lcpPower-row-content-wrap">
                <div className="lcpPower-row-content ">

                    <div className="lcpPower-col-group">

                        {/* -------- LEFT IMAGE COLUMN -------- */}
                        <div className="lcpPower-image-col col-lg-5">
                            <div className="lcpPower-image-content">
                                <div className="lcpPower-photo ">
                                    <div className="lcpPower-photo-inner ">
                                        <img
                                            decoding="async"
                                            className="lcpPower-photo-img"
                                            src="https://coachingfederation.org/wp-content/uploads/bb-plugin/cache/icf-about-coaching-conversation-cafe-square-a6e39928efbb799b3c52fb9c64ef133e-vy6scxp84u92.jpg"
                                            alt="A smiling woman holding a tablet, chatting with another woman at a cafe."
                                            height="792"
                                            width="1200"
                                            title="Coaching Conversation in Cafe"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* -------- RIGHT CONTENT COLUMN -------- */}
                        <div className="lcpPower-content-col ">
                            <div className="lcpPower-col-inner">

                                <div className="lcpPower-heading">
                                    <h1 className="display-5 fw-bold mb-3">Program <span style={{ color: "#5ac501" }}>Overview</span></h1>
                                </div>

                                <div className="lcpPower-rich-text">
                                    <p className="pt">
                                        The Leadership Coaching Program at UCU is a high-impact, 6–9 month, one-on-one coaching journey designed exclusively for experienced professionals and emerging senior leaders. Rooted in global coaching standards and aligned with a transformative vision, this program accelerates leadership growth by combining diagnostics, personalized goal-setting, and immersive coaching sessions.

                                    </p>
                                    <p className="pt">Participants engage in tailored development plans, experiential learning, and structured reflection, ensuring measurable transformation in communication, influence, and organizational impact. With its emphasis on leadership identity, stakeholder management, and readiness for complex corporate challenges, the program empowers leaders to evolve into visionary executives prepared to drive enterprise success and societal impact.</p>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default LCPPower;
