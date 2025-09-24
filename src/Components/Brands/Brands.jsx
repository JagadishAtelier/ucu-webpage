import React from "react";
import "./Brands.css";
import image1 from "../../Assets/ucu-logos/Mask group.png";
import image2 from "../../Assets/ucu-logos/Mask group-1.png";
import image3 from "../../Assets/ucu-logos/Mask group-2.png";
import image4 from "../../Assets/ucu-logos/Mask group-3.png";
import image5 from "../../Assets/ucu-logos/Mask group-4.png";

const images = [
  "https://www.greatlakes.edu.in/chennai/assets/greatlakes/images/edhec-business-school.png",
  "https://www.greatlakes.edu.in/chennai/assets/greatlakes/images/chicago-booth1.png",
  "https://www.greatlakes.edu.in/chennai/assets/greatlakes/images/manchester-metropolitan-university.png",
  "https://www.greatlakes.edu.in/chennai/assets/greatlakes/images/nucb-business-school.png",
  "https://www.greatlakes.edu.in/chennai/assets/greatlakes/images/ieseg.png",
  "https://www.greatlakes.edu.in/chennai/assets/greatlakes/images/frankfurt-school-of-finance-and-management.png",
  "https://www.greatlakes.edu.in/chennai/assets/greatlakes/images/bologna-business-school.png",
  "https://www.greatlakes.edu.in/chennai/assets/greatlakes/images/skema-business-school.png",
  "https://www.greatlakes.edu.in/chennai/assets/greatlakes/images/hhl-leipzig-graduate-school-of-management.png",
  "https://www.greatlakes.edu.in/chennai/assets/greatlakes/images/pace-university.png",
  "https://www.greatlakes.edu.in/chennai/assets/greatlakes/images/universite-bordeaux.png",
  "https://www.greatlakes.edu.in/chennai/assets/greatlakes/images/ipag.png",
  "https://www.greatlakes.edu.in/chennai/assets/greatlakes/images/university-of-huddersfield.png",
  "https://www.greatlakes.edu.in/chennai/assets/greatlakes/images/ajman-university.png"
];

function Brands() {
  return (
    <div className="brand-container my-3">
      <div className="car-heading-text banner-text my-lg-auto">
        <h1 className="fw-bold fs-1 fs-lg-1">Industry Collaboration</h1>
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