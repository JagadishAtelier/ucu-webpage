import React, { useState } from "react";

function CXOProfessor() {
  const professors = [
    {
      img: "https://iimcoursesonline.com/iim-indore-chief-executive-officers-programme/desktop/images/ranjeet.webp",
      name: "Prof. Ranjeet Nambudiri",
      title: "Dean Faculty & Professor – Organisational Behaviour and Human Resource Management, IIM Indore",
      shortDesc: "Prof Ranjeet Nambudiri brings over 23 years of experience spanning industry and academia. A doctoral graduate from IIM Ahmedabad, he has previously held key leadership roles at IIM Indore, including Dean (Programmes), Dean (Administration), and member of the Board of Governors.",
      longDesc: "He was shortlisted among the top 15 global nominees for the EIU Business Professor of the Year Award (2012) and was recognised as Best Teacher at IIM Indore (2013). Prof Nambudiri has conducted 300+ executive training programmes for senior professionals, armed forces, and bureaucrats. His core research areas include high-performance work systems, change management, and organisational restructuring, with publications in top international journals. He is also a published author with Tata McGraw Hill and has registered cases with the Richard Ivey School of Business."
    },
    {
      img: "https://iimcoursesonline.com/iim-indore-chief-executive-officers-programme/desktop/images/aditya.webp",
      name: "Dr. Aditya Billore",
      title: "Faculty – Marketing, IIM Indore",
      shortDesc: "Dr. Aditya Billore is a Fellow of IIM Indore, with an academic background in Microelectronics and VLSI Design (M.Tech) and Electronics Engineering (B.E.) from Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal.",
      longDesc: "With 7 years of teaching experience, he focuses on digital advertising and consumer behaviour. His teaching interests include new media advertising and experimental research methods in marketing."
    }
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="cxoprofessor-section">
      <div className="cxoprofessor-container">
        <div className="text-center mb-4">
          <h2 className="text-decoration-underline">Meet Your Professors</h2>
        </div>

        <div className="cxoprofessor-details">
          {professors.map((prof, index) => (
            <div key={index} className="cxoprofessor-row">
              
              {/* Image */}
              <div className="cxoprofessor-img">
                <img src={prof.img} alt={prof.name} />
              </div>

              {/* Content */}
              <div className="cxoprofessor-content">
                <h5>{prof.name}</h5>
                <h6 className="mb-2">{prof.title}</h6>
                <p>{prof.shortDesc}</p>

                {expandedIndex === index && (
                  <div className="cxoprofessor-more">
                    <p>{prof.longDesc}</p>
                  </div>
                )}

                <p
                  className="cxoprofessor-toggle"
                  onClick={() => toggleReadMore(index)}
                >
                  {expandedIndex === index ? "Read Less <" : "Read More >"}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CXOProfessor;
