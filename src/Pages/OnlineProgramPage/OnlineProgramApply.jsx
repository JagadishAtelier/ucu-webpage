import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllWorkflows } from "../../Api/OnlineProgramApi/OnlineApplyApi";
import DynamicIcon from "../DynamicIcon";

/* =========================
   COLOR ORDER (FIXED)
========================= */
const stepClasses = [
  "ONLINEAPP-step1",
  "ONLINEAPP-step2",
  "ONLINEAPP-step3",
];

const OnlineProgramApply = () => {
  const [stepsData, setStepsData] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    try {
      const res = await getAllWorkflows();
      const apiData = res?.data || [];
      console.log(apiData)
      // 🔥 TRANSFORM DATA
      const formattedData = apiData.flatMap(item =>
        item.steps.map(step => ({
          step: `STEP ${step.stepNumber}`,
          title: step.title,
          icon: step.iconName,
          points: step.descriptionPoints,
        }))
      );
      console.log(formattedData)
      setStepsData(formattedData);
    } catch (error) {
      console.log("Failed to fetch", error);
    }
  };

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
            const bgClass = stepClasses[index % stepClasses.length];

            return (
              <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                <div className={`ONLINEAPP-card ${bgClass}`}>

                  <div className="ONLINEAPP-icon">
                    <DynamicIcon
                      name={item.icon}
                      size={42}

                    />
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
