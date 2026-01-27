import React from "react";
const collaborators = [
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

function OnlineProgramCollab() {
  return (
    <div className="ONLINECOLLAB-wrapper d-flex flex-column mt-5">

      {/* Title */}
      <div className="ONLINECOLLAB-title-wrapper">
        <h2 className="ONLINECOLLAB-title m-0">
          Our Collaborators
        </h2>
      </div>

      {/* Logos */}
      <div className="ONLINECOLLAB-logos-section">
        <div className="ONLINECOLLAB-logos-track">
          {[...collaborators, ...collaborators].map((logo, index) => (
            <div className="ONLINECOLLAB-logo-item" key={index}>
              <img src={logo} alt="collaborator" />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default OnlineProgramCollab;
