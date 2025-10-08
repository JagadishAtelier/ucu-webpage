import React, { useState, useRef, useEffect } from "react";
import "./AboutYears.css";
import CountUp from "react-countup";
import bgImage from "../../../Assets/aboutPageImage/image-ucu.svg";

const data = [
  {
    head: 30,
    suffix: "+ Years",
    para: "Of leadership experience shaping business education and transforming learning journeys worldwide.",
  },
  {
    head: 12000,
    suffix: "+",
    para: "Global alumni network blending international insight with local excellence and strong industry links.",
  },
  {
    head: 200,
    suffix: "+",
    para: "SMEs and industry practitioners driving UCU’s growth and fostering impactful corporate learning.",
  },
  {
    head: 100,
    suffix: "+",
    para: "Eminent global professors advancing UCU’s academic excellence and inspiring next-gen leaders.",
  },
];

function AboutYears() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="about-years-section d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start text-white text-center text-lg-start py-5 px-3 px-lg-5"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="d-flex flex-column justify-content-between flex-lg-row justify-content-lg-between align-items-lg-start w-100">
        {data.map((item, index) => (
          <div
            key={index}
            className={`col-12 col-lg-3 d-flex flex-column gap-3 flex-lg-column align-items-center align-items-lg-start px-0 px-lg-3 position-relative ${
              index < data.length - 1 ? "with-divider" : ""
            }`}
          >
            <h1 className="fw-bold counter-text">
              {inView ? (
                <CountUp
                  start={0}
                  end={item.head}
                  duration={2.5}
                  separator=","
                  suffix={item.suffix}
                />
              ) : (
                0
              )}
            </h1>

            <p className="counter-paragraph mb-0">{item.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutYears;
