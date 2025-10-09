import React from "react";
import image from "../../../../Assets/aboutPageImage/vision_image1.jpg";

function FeesParticipants() {
    return (
        <>
        <div className="row">
            <div className="col-6 col-lg-6 ">
                <div>
                    <img src={image} alt="" srcset="" height={500} />
                </div>
            </div> 
            <div className="col-6 col-lg-6 ">
                <h3 className="display-4 pt-4 fw-bold col-12 col-lg-12" style={{color:"#fff", fontSize:"24px"}}><span style={{color:"#5ac501"}}>Indian </span>Participants:</h3>
                <p className="font-weight-normal" style={{color:"#fff"}}>
                    We believe in a fair, transparent, and inclusive environment where all participants are treated with respect and dignity. Our fees are designed to provide adequate support for our staff, volunteers, and students, while also allowing us to maintain our commitment to providing a safe and inclusive experience for all.
                </p>
                <h3 className="display-4 pt-4 fw-bold col-12 col-lg-12" style={{color:"#fff", fontSize:"24px"}}><span style={{color:"#5ac501"}}>International </span>Participants:</h3>
                <p className="font-weight-normal" style={{color:"#fff"}}>
                    As a non-profit organization, we have a commitment to ensuring that our fees are accessible to all members, regardless of their income, education, or location. We also aim to provide support for those who may not be able to afford our fees.
                </p>
                <p className="font-weight-normal" style={{color:"#fff"}}>
                    We are committed to fostering a culture of support and understanding among our participants. We encourage participants to reach out to us if they need help or support, and we will do our best to provide them with the resources they need.
                </p>
            </div>
        </div>
        </>
    );
}

export default FeesParticipants;