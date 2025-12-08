import React from "react";
import "./ThoughtLeaders.css";

const leaders = [
  {
    img: "https://www.greatlakes.edu.in/chennai/assets/greatlakes/images/adi-godrej.webp",
    title: "Adi Godrej",
    subtitle: "Chairman, Godrej Group",
  },
  {
    img: "https://www.greatlakes.edu.in/chennai/assets/greatlakes/images/vijay-govindarajan.webp",
    title: "Vijay Govindarajan",
    subtitle: "Professor, Tuck",
  },
  {
    img: "https://www.greatlakes.edu.in/chennai/assets/greatlakes/images/ram-charan.webp",
    title: "Ram Charan",
    subtitle: "Global Thought Leader",
  },
  {
    img: "https://www.greatlakes.edu.in/chennai/assets/greatlakes/images/philip.webp",
    title: "Philip Kotler",
    subtitle: "Professor, Kellogg",
  },
  {
    img: "https://www.greatlakes.edu.in/chennai/assets/greatlakes/images/ratan-tata1.webp",
    title: "Ratan Tata",
    subtitle: "Chairman, TATA Sons",
  },
  {
    img: "https://www.greatlakes.edu.in/chennai/assets/greatlakes/images/indra.webp",
    title: "Indra Nooyi",
    subtitle: "Ex-Chairperson & CEO, PepsiCo",
  },
];

const ThoughtLeadersSection = () => {
  return (
    <section className="thought-section py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h1 className="display fw-bold">
              Perspectives from <span style={{color:"#5ac501ff"}}>Global Thought Leaders</span>
            </h1>

            <div className="mt-4">
              <h1 className="number-big">150+</h1>
              <p className="content-text">
                CXOs on campus every year ensure that our students stay updated
                with the most recent industry trends.
              </p>
            </div>

            <div className="mt-4">
              <h1 className="number-big">44</h1>
              <p className="content-text">
                Industry veterans who comprise our Business Advisory Council
                provide industry insights which shape our yearly curriculum and
                keep it industry relevant.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE GRID */}
          <div className="col-md-6">
            <div className="leaders-grid">
              {leaders.map((item, i) => (
                <div className="leader-card" key={i}>
                  <img src={item.img} alt={item.title} />
                  <div className="leader-info">
                    <h5>{item.title}</h5>
                    <p>{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ThoughtLeadersSection;
