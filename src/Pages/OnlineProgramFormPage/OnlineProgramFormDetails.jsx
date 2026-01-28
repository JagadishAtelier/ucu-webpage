import React from "react";
import {
  UserPlus,
  Upload,
  CreditCard,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

/* =========================
   STEP DATA (DYNAMIC)
========================= */
const stepsData = [
  {
    step: "STEP 1",
    title: "Sign Up to Register and Purchase Form",
    icon: UserPlus,
    para: "Click on Sign Up and first register yourself on the UCU Apply Online Portal. With the login credentials received by you at your registered email id, Login to purchase application form. Purchase Application Form online from UCU Apply Online Portalfrom your login. You have to first purchase application form and then fill the application form online and download the e-prospectus in soft copy for your reference further.",
  },
  {
    step: "STEP 2",
    title: "Registration",
    icon: Upload,
    para: "Upload your Academic Records in the prescribed format, Work Exp. Certificates (If any), passport size recent colour photograph, Govt. Photo Identity Proof.",
    points: [
      "Applicants applying under Defence Category have to produce Proof of service certificate / discharge book / dependent certificate (any one document as applicable).",
      "Submit academic records",
      "For International and SAARC Students, an address in a foreign country is mandatory, along with address proof or copies of passport page showing visa of the foreign country.",
    ],
  },
  {
    step: "STEP 3",
    title: "Fee Payment",
    icon: CreditCard,
    points: [
      {
        text:
          'Pay full program fee Online through payment gateway from your login or via Demand Draft (In the name of "The Director, UCU Pune" payable at Pune only) immediately after your admission process is complete.',
      },
      {
        text: "To check the status of the Application Form, please ",
        linkText: "click here",
        link: "/application-status",
      },
      {
        text:
          "In case you encounter any problems or have any queries during the Application process, you can mail us at ",
        linkText: "Newadmissions@ucu.net",
        link: "mailto:Newadmissions@ucu.net",
      },
    ],
  }



  /* 👉 ADD MORE STEPS LIKE THIS – COLORS WILL AUTO-ROTATE */
  // {
  //   step: "STEP 4",
  //   title: "Confirmation",
  //   icon: CheckCircle,
  //   points: ["Admission confirmed", "Welcome email sent"],
  // },
];

/* =========================
   COLOR ORDER (FIXED)
========================= */
const stepClasses = [
  "ONLINEAPP-step1",
  "ONLINEAPP-step2",
  "ONLINEAPP-step3",
];

const OnlineProgramFormDetails = () => {
  const navigate = useNavigate()
  return (
    <div className="ONLINEAPP-section container-fluid py-5">
      <div className="container">

        {/* ===== Heading ===== */}
        <div className="row mb-5">
          <div className="col-lg-8">
            <h2 className="ONLINEAPP-title">
              <span>Apply Online</span>
            </h2>
            <h4>Steps to Apply Online</h4>
          </div>
        </div>

        {/* ===== Steps Grid ===== */}
        <div className="row g-4">
          {stepsData.map((item, index) => {
            const Icon = item.icon;
            const bgClass = stepClasses[index % stepClasses.length];

            return (
              <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                <div className={`ONLINEAPP-card ${bgClass}`}>

                  <div className="ONLINEAPP-icon">
                    <Icon size={42} />
                  </div>

                  <h5>{item.step}</h5>
                  <h4>{item.title}</h4>
                  {item.para && (
                    <p>{item.para}</p>
                  )}
                  {item.points && (
                    <ul>
                      {item.points.map((point, i) => (
                        <li key={i}>
                          {typeof point === "string" ? (
                            point
                          ) : (
                            <>
                              {point.text}
                              {point.link && (
                                point.link.startsWith("mailto:") ? (
                                  <a href={point.link} className="ONLINEAPP-link text-white">
                                    {point.linkText}
                                  </a>
                                ) : (
                                  <a
                                    className="ONLINEAPP-link text-white"
                                    role="button"
                                    href={point.link}
                                  >
                                    {point.linkText}
                                  </a>
                                )
                              )}
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}




                </div>
              </div>
            );
          })}
        </div>
          <div className="mt-5">
            <h3>Note</h3>
            <p>Application Forms are available ONLINE ONLY. Application form fee is non-refundable.</p>
          </div>
      </div>
    </div>
  );
};

export default OnlineProgramFormDetails;
