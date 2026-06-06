import React from "react";

const leadCoachSections = [
  {
    title: "Lead Coach",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
  {
    title: "Lead Coach",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
];

function OurExperts() {
  return (
    <>
      {leadCoachSections.map((section, index) => (
        <section className="leadCoach-section mt-5" key={`${section.title}-${index}`}>
          <h2 className="leadCoach-title">{section.title}</h2>
          <div className="leadCoach-card shadow">
            <img src={section.image} alt={section.title} className="leadCoach-image" />
          </div>
        </section>
      ))}
    </>
  );
}

export default OurExperts;
