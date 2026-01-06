import React from 'react';

const PGPMFlexInfographic = () => {
  const features = [
    "Leadership Development",
    "Delivered by CXOs and academicians from UCU and leading institutes worldwide",
    "Application oriented hands-on learning",
    "Dedicated 1:1 mentorship by dedicated professional from leading corporates"
  ];

  return (
    <div className="container PGPMFLEXINFO-container my-5">
      <div className="row align-items-center gy-5">

        {/* Left Circle */}
        <div className="col-lg-5 col-md-6 text-center">
          <div className="PGPMFLEXINFO-main-circle mx-auto">
            <h3 className="PGPMFLEXINFO-circle-title">
              PGPM Flex <br />
              <span style={{color:"#5ac501"}} className="">HOLISTIC</span> <br />
              <small className="text-black fs-6">
                Development co-powered by Industry
              </small>
            </h3>
          </div>
        </div>

        {/* Right Content */}
        <div className="col-lg-7 col-md-6">
          <div className="PGPMFLEXINFO-list-wrapper">
            {features.map((text, index) => (
              <div key={index} className="PGPMFLEXINFO-feature-item">
                <span className="PGPMFLEXINFO-dot"></span>
                <p className="PGPMFLEXINFO-feature-text m-0">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default PGPMFlexInfographic;
