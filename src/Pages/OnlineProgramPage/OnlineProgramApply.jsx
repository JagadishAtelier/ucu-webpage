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
    title: "Purchase Application",
    icon: UserPlus,
    points: [
      "Register on Apply Online Portal",
      "Login & purchase application form",
      "Forms available online & offline",
      "Pay fee to reserve your seat",
    ],
  },
  {
    step: "STEP 2",
    title: "Registration",
    icon: Upload,
    points: [
      "Upload photo & ID proof",
      "Submit academic records",
      "Upload signature & experience certificates",
      "Defence applicants submit service proof",
    ],
  },
  {
    step: "STEP 3",
    title: "Fee Payment",
    icon: CreditCard,
    points: [
      "Pay full program fee online",
      "Confirm admission seat",
      "Exam fee not included",
    ],
  },

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

const OnlineProgramApply = () => {
  const navigate = useNavigate()
  return (
    <div className="ONLINEAPP-section container-fluid py-5">
      <div className="container">

        {/* ===== Heading ===== */}
        <div className="row mb-5">
          <div className="col-lg-8">
            <h2 className="ONLINEAPP-title">
              How to <br />
              <span>Apply?</span>
            </h2>
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

                  <ul>
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                </div>
              </div>
            );
          })}
        </div>

        {/* ===== CTA ===== */}
        <div className="row mt-4 g-4 justify-content-center">
          <div className="col-lg-3 col-md-4">
            <a
              className="ONLINEAPP-cta ONLINEAPP-apply"
              href="/online-program-form"
            >
              APPLY NOW
            </a>
          </div>

          <div className="col-lg-3 col-md-4">
            <a
              className="ONLINEAPP-cta ONLINEAPP-call"
              // href="tel:8792740467"
            >
              CALL NOW
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OnlineProgramApply;
