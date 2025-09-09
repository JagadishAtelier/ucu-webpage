import React, { useState } from "react";
import "./FaculityVission.css";
import { FaArrowRight,FaQuoteRight} from 'react-icons/fa'
function FaculityVission() {
  const [activeTab, setActiveTab] = useState("vision");

  return (
    <div className="faculty-container d-flex flex-column-reverse flex-lg-row gap-2 gap-lg-4 px-lg-4 py-lg-5 px-4 py-5">
      {/* Banner */}
      <div className="faculty-banner">
        <img
          src="https://demo.farmstudios.net/oakwood/wp-content/uploads/sites/29/2025/09/images-AM5GVPM.jpg"
          alt="Faculty Banner"
          
        />
      </div>
      {/* Tab Content */}
      <div className="right-side-fac">
              {/* Tabs */}
      <div className="faculty-tabs d-flex flex-row flex-lg-row gap-4">
      <h3
  className={`${activeTab === "vision" ? "active" : ""} display-6 tab-text-fac`}
  onClick={() => setActiveTab("vision")}
>
  Vision
  <span className="arrow-icon-fac">
    <FaArrowRight size={20} />
  </span>
</h3>

<h3
  className={`${activeTab === "mission" ? "active" : ""} display-6 tab-text-fac`}
  onClick={() => setActiveTab("mission")}
>
  Mission
  <span className="arrow-icon-fac">
    <FaArrowRight size={20} />
  </span>
</h3>

      </div>
      <div className="faculty-content mt-2 mt-lg-2">
        {activeTab === "vision" && (
          <div className="vision-section d-flex flex-column flex-lg-column gap-2 gap-lg-2">
            <h1 className="display-4 fw-bold col-10">Our Vision for the Future of <span style={{ color: "#5ac501" }}>Economic</span></h1>
            <p className="program-description">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id mi mauris. Praesent ante nisl, interdum in pharetra in, scelerisque vel purus. Sed rutrum, diam et tincidunt iaculis, metus ex dignissim tortor, quis ullamcorper libero sapien ut elit. Etiam lobortis ullamcorper tortor nec convallis. Nam porttitor bibendum pretium. Phasellus massa mauris, faucibus at nunc vel, hendrerit dignissim quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce sagittis nisi vitae est sollicitudin sagittis.
            </p>
            <div className="vision-images d-flex flex-row flex-lg-row">
  {[
    "https://demo.farmstudios.net/oakwood/wp-content/uploads/sites/29/2025/08/images-95M6PNH.jpg",
    "https://demo.farmstudios.net/oakwood/wp-content/uploads/sites/29/2025/08/images-YMZPJG5.jpg",
    "https://demo.farmstudios.net/oakwood/wp-content/uploads/sites/29/2025/08/images-HSJBKSS.jpg",
    "https://demo.farmstudios.net/oakwood/wp-content/uploads/sites/29/2025/08/images-95M6PNH.jpg",
  ]
    .slice(0, window.innerWidth < 992 ? 2 : 4) // 👈 show 2 if tablet/mobile, else 4
    .map((src, i) => (
      <img key={i} src={src} alt={`vision-${i}`} />
    ))}
</div>

                <div>
            <p className="mt-2 mt-lg-4 program-description">
            Aenean quis lacinia sem. Pellentesque fermentum nisi non enim dapibus consectetur. Vivamus sed lacinia massa. Ut in nisl nec neque varius aliquam vel a est. Proin pretium augue nulla, id tincidunt velit porta et. In vestibulum urna nulla, nec vestibulum ex fermentum at. Etiam pellentesque porttitor nisl, ut aliquam magna tristique et. Etiam at diam mi. Aliquam ac gravida sapien, in pulvinar dui. Duis molestie arcu sed placerat elementum. Cras at nisl in urna dictum lobortis eu eu augue. Phasellus eu rutrum ipsum. Duis consectetur eleifend neque eu feugiat. Ut lacinia nisl finibus massa volutpat, et tincidunt ex venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum nulla ac risus imperdiet fermentum.
            </p>
            </div>
          </div>
        )}

        {activeTab === "mission" && (
          <div className="mission-section">
<h1 className="display-4 fw-bold col-10">Our Mission to<span style={{ color: "#5ac501" }}> Educate and Inspire</span></h1>

            <ul>
              <li className="title mb-3">✔ Provide Quality Education

                <p className="program-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id mi mauris. Praesent ante nisl, interdum in pharetra in, scelerisque vel purus. Sed rutrum, diam et tincidunt iaculis, metus ex dignissim tortor, quis ullamcorper libero sapien ut elit.</p>
              </li>
              <li>✔ Foster Ethical Leadership
                <p className="program-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id mi mauris. Praesent ante nisl, interdum in pharetra in, scelerisque vel purus. Sed rutrum, diam et tincidunt iaculis, metus ex dignissim tortor, quis ullamcorper libero sapien ut elit.</p>
              </li>
              <li>✔ Advance Research and Innovation

                <p className="program-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id mi mauris. Praesent ante nisl, interdum in pharetra in, scelerisque vel purus. Sed rutrum, diam et tincidunt iaculis, metus ex dignissim tortor, quis ullamcorper libero sapien ut elit.</p>

              </li>
              <li>✔ Build Global Connections

                <p className="program-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id mi mauris. Praesent ante nisl, interdum in pharetra in, scelerisque vel purus. Sed rutrum, diam et tincidunt iaculis, metus ex dignissim tortor, quis ullamcorper libero sapien ut elit.</p>
              </li>
            </ul>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}

export default FaculityVission;
