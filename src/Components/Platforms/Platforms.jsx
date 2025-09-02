import React, { useState } from "react";
import "./Platforms.css";
import image from "../../Assets/ucu (1)/Rectangle 154.jpg";
const data = [
  {
    head: "PGDM Online",
    text: "Flexible, online versions of UCU’s programs with the same academic rigor, designed for professionals who prefer learning at their own pace.",
  },
  {
    head: "PGPM Online",
    text: "Flexible, online versions of UCU’s programs with the same academic rigor, designed for professionals who prefer learning at their own pace.",
  },
  {
    head: "Diploma Programs Online",
    text: "Flexible, online versions of UCU’s programs with the same academic rigor, designed for professionals who prefer learning at their own pace.",
  },
  {
    head: "Executive Education Online",
    text: "Flexible, online versions of UCU’s programs with the same academic rigor, designed for professionals who prefer learning at their own pace.",
  },
];
function Platforms() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleText = (index) => {
    setOpenIndex(openIndex === index ? null : index); // toggle
  };
  return (
    <div className="platforms-container">
      <div className="car-heading-text mb-4">
        <h1 className="h1 fw-bold">
          E-Learning Programs – Learn Anytime, Anywhere
        </h1>
        <p>
          Flexible, online versions of UCU’s programs with the same academic
          rigor, designed for professionals who prefer learning at their own
          pace.
        </p>
      </div>
      <div className="platform">
        <img src={image} />
        <div className="platform-data-div">
          {data.map((item, index) => (
            <div key={index} className="platform-indiviual-con">
              <div
                className="platform-item-div"
                onClick={() => toggleText(index)}
                style={{ cursor: "pointer" }}
              >
                <h1>{item.head}</h1>
                <i class={`bi bi-chevron-down `}></i>
              </div>
              {openIndex === index && (
                <div>
                  <p className="platform-text">{item.text}</p>
                  <div className="car-explore-btn-div-faq">
                    <button className="btn btn-outline-dark py-2">EXPLORE PGDM</button>
                    <button className="car-apply-btn py-2">APPLY NOW</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Platforms;
