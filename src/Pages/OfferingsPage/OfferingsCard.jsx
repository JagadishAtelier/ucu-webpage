import React from "react";

const data = [
  {
    image:
      "https://img.freepik.com/free-vector/abstract-low-polygonal-graduation-cap-planet-earth-globe-model-map-e-learning-concept_127544-1106.jpg?w=740&q=80",
    head: "Academic Transformation",
    para: `
      <ul>
        <li>Curriculum redesign and outcome mapping</li>
        <li>Faculty Development Programs (FDPs) on pedagogy, research, and digital tools</li>
        <li>Assessment frameworks & rubrics</li>
        <li>Benchmarking against AICTE/UGC/NIRF standards</li>
      </ul>
    `,
  },
  {
    image:
      "https://img.freepik.com/free-vector/illustration-business-people_53876-18375.jpg?w=740&q=80",
    head: "Industry & Employability Connect",
    para: `
      <ul>
        <li>Regional Talent Hubs with local industries and chambers</li>
        <li>Internships, live projects, placement pipelines</li>
        <li>Industry lectures and adjunct faculty linkages</li>
      </ul>
    `,
  },
  {
    image:
      "https://img.freepik.com/free-vector/education-background-design_1300-10.jpg?w=740&q=80",
    head: "Research & Knowledge Capital",
    para: `
      <ul>
        <li>Case Study & Simulation Hubs</li>
        <li>Whitepapers, research publications, and observatories</li>
        <li>Incubation of Centres of Excellence (CoEs)</li>
      </ul>
    `,
  },
  {
    image:
      "https://img.freepik.com/free-vector/gradient-roadmap-infographic-template_23-2149014708.jpg?w=740&q=80",
    head: "Governance & Quality Roadmap",
    para: `
      <ul>
        <li>NAAC/NIRF gap analysis</li>
        <li>IQAC strengthening and institutional scorecard</li>
        <li>Deemed-to-be-University & autonomy readiness blueprint</li>
      </ul>
    `,
  },
  {
    image:
      "https://img.freepik.com/premium-vector/augmented-reality-infographic-circle-concept-smart-ui-elements-facial-recognition-ar-app-ar-game-virtual-reality_159242-3818.jpg?w=740&q=80",
    head: "Brand, Alumni & Community",
    para: `
      <ul>
        <li>Digital branding and media kit</li>
        <li>Alumni engagement portals and events</li>
        <li>Community talent projects and social impact showcases</li>
      </ul>
    `,
  },
];

function OfferingsCard() {
  return (
    <div className="container offerings-container ">
      <div className="row g-4">
        {data.map((item, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12 mx-auto" key={index}>
            <div className="offer-card shadow-sm h-100 text-center">
              <img
                src={item.image}
                alt={item.head}
                className="offer-image img-fluid"
              />
              <div className="offer-content text-start p-3">
                <h5 className="offer-head text-center fw-bold">{item.head}</h5>
                <div
                  className="offer-para"
                  dangerouslySetInnerHTML={{ __html: item.para }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfferingsCard;
