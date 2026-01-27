import { ChevronRight } from "lucide-react";
import React from "react";

const OnlineProgramValue = () => {
  return (
    <div id="value-added-services" className="ONLINEVAL-wrapper position-relative">
      <div className="container-fluid p-0">

        {/* TOP CONTENT */}
        <div className="row g-0 ONLINEVAL-top-section">

          {/* LEFT CONTENT */}
          <div className="col-lg-6 ONLINEVAL-content position-relative">
            <img
              src="/ONLINEVAL-bg.avif"
              alt="Value Added Services BG"
              className="ONLINEVAL-bg-image"
            />

            <div className="ONLINEVAL-content-inner">
              <h2 className="ONLINEVAL-title">
                <span>VALUE-ADDED</span><br />
                SERVICES
              </h2>

              <p>
                When you join Symbiosis centre for distance learning for any of our programs,
                its not only the academic excellence which concerns us.
              </p>

              <p>
                To this end, SCDL students have access to a number of
                VALUE ADDED PROGRAMS at no extra cost.
              </p>

              <div className="ONLINEVAL-links">
                <a href="/student-services">Student Services</a>

                <a href="/value-added-services" className="ONLINEVAL-learn-more">
                  <span>LEARN MORE</span>
                <ChevronRight/>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE (DESKTOP) */}
          <div className="col-lg-6 d-none d-lg-block ONLINEVAL-side-image">
            <img
              src="/ONLINEVAL-bg-right.avif"
              alt="Side Visual"
            />
          </div>
        </div>

        {/* BOTTOM CARDS */}
        <div className="row g-0 ONLINEVAL-cards">

          <div className="col-md-6 col-lg-3 ONLINEVAL-card red-1">
            <img src="https://www.scdl.net/_next/image?url=%2Fapi%2Ffetch-media%2F65b32cd0-a26f-458f-a42c-bf130bae0c3c&w=828&q=75" alt="" />
            <h5>CAREER</h5>
            <p>CONTINUATION<br />PROGRAM</p>
          </div>

          <div className="col-md-6 col-lg-3 ONLINEVAL-card red-2">
            <img src="https://www.scdl.net/_next/image?url=%2Fapi%2Ffetch-media%2Fa3b3de7d-6ae1-449a-bcbb-97665911e4d0&w=828&q=75" alt="" />
            <h5>PLACEMENT</h5>
            <p>ASSISTANCE<br />PROGRAM</p>
          </div>

          <div className="col-md-6 col-lg-3 ONLINEVAL-card red-3">
            <img src="https://www.scdl.net/_next/image?url=%2Fapi%2Ffetch-media%2F2ee3c641-b01d-4ea2-8ece-28066fd32a61&w=828&q=75" alt="" />
            <h5>CAREER</h5>
            <p>RELAUNCH PROGRAM</p>
          </div>

          <div className="col-md-6 col-lg-3 ONLINEVAL-card red-4">
            <img src="https://www.scdl.net/_next/image?url=%2Fapi%2Ffetch-media%2F65d2f955-b628-48d8-95ab-8a723dfc8c93&w=828&q=75" alt="" />
            <h5>MENTORSHIP</h5>
            <p>PROGRAM</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default OnlineProgramValue;
