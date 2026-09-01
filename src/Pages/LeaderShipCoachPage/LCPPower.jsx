import React from "react";

function LCPPower({ getKeyValue, getImage }) {
    const kv = (key, fallback) => (getKeyValue ? getKeyValue("LCPPower", key, fallback) : fallback);
    const img = (index, fallback) => (getImage ? getImage("LCPPower", index, fallback) : fallback);

    const headingStart = kv("headingStart", "Program");
    const headingSpan = kv("headingSpan", "Overview");
    const description1 = kv("description1", "The Leadership Coaching Program at UCU is a high-impact, 6–9 month, one-on-one coaching journey designed exclusively for experienced professionals and emerging senior leaders. Rooted in global coaching standards and aligned with a transformative vision, this program accelerates leadership growth by combining diagnostics, personalized goal-setting, and immersive coaching sessions.");
    const description2 = kv("description2", "Participants engage in tailored development plans, experiential learning, and structured reflection, ensuring measurable transformation in communication, influence, and organizational impact. With its emphasis on leadership identity, stakeholder management, and readiness for complex corporate challenges, the program empowers leaders to evolve into visionary executives prepared to drive enterprise success and societal impact.");
    const sideImage = img(0, "https://coachingfederation.org/wp-content/uploads/bb-plugin/cache/icf-about-coaching-conversation-cafe-square-a6e39928efbb799b3c52fb9c64ef133e-vy6scxp84u92.jpg");

    return (
        <div>
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
                                            src={sideImage}
                                            alt="Coaching session"
                                            height="792"
                                            width="1200"
                                            title="Coaching Conversation"
                                            style={{objectFit: "cover", height: "100%", maxHeight: "500px", width: "100%"}}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* -------- RIGHT CONTENT COLUMN -------- */}
                        <div className="lcpPower-content-col ">
                            <div className="lcpPower-col-inner">
                                <div className="lcpPower-heading">
                                    <h1 className="display-5 fw-bold mb-3">{headingStart} <span style={{ color: "#5ac501" }}>{headingSpan}</span></h1>
                                </div>

                                <div className="lcpPower-rich-text text-justifys">
                                    <p className="pt">{description1}</p>
                                    <p className="pt">{description2}</p>
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
