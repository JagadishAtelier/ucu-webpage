import React from "react";
import "./Brands.css";
import image1 from "../../Assets/ucu-logos/Mask group.png";
import image2 from "../../Assets/ucu-logos/Mask group-1.png";
import image3 from "../../Assets/ucu-logos/Mask group-2.png";
import image4 from "../../Assets/ucu-logos/Mask group-3.png";
import image5 from "../../Assets/ucu-logos/Mask group-4.png";

const images = [image1, image2, image3, image4, image5];

function Brands() {
  return (
    <div className="brand-container my-3">
      <div className="car-heading-text banner-text">
        <h1>Industry–Academia Collaboration</h1>
        <p>
          We partner with leading corporations and institutions to bring
          real-world insights, corporate mentorship, and career opportunities to
          our students.
        </p>
      </div>

      <div className="brands-div">
        <div className="line mb-4"></div>
        <div className="marquee">
          <div className="marquee-content-brands">
            {images.map((img, index) => (
              <div key={`first-${index}`} className="img-item-div">
                <img src={img} alt={`brand-${index}`} />
              </div>
            ))}
            {/* Duplicate images for infinite loop effect */}
            {images.map((img, index) => (
              <div key={`second-${index}`} className="img-item-div">
                <img src={img} alt={`brand-${index}-duplicate`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;