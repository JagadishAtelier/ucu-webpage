import React from "react";

function CXOMasterClass() {
  const masterCards = [
    { img: "https://iimcoursesonline.com/iim-indore-chief-executive-officers-programme/desktop/images/four.png", text: "Masterclasses", width: 35 },
    { img: "https://iimcoursesonline.com/iim-indore-chief-executive-officers-programme/desktop/images/four.png", text: "Top-level CEOs", width: 35 },
    { img: "https://iimcoursesonline.com/iim-indore-chief-executive-officers-programme/desktop/images/6.png", text: "Hours of in-depth knowledge", width: 35 },
    { img: "https://iimcoursesonline.com/iim-indore-chief-executive-officers-programme/desktop/images/qa.png", text: "Interactive QnA sessions", width: 40 },
    { img: "https://iimcoursesonline.com/iim-indore-chief-executive-officers-programme/desktop/images/conversation.png", text: "Discussion", width: 40 },
    { img: "https://iimcoursesonline.com/iim-indore-chief-executive-officers-programme/desktop/images/insight.png", text: "Industry insights and practices", width: 40 },
  ];

  return (
    <section className="cxomasterclass-section">
      <div className="cxomasterclass-container">

        <div className="cxomasterclass-row">

          {/* LEFT IMAGE */}
          <div className="cxomasterclass-left">
            <img
              src="https://iimcoursesonline.com/iim-indore-chief-executive-officers-programme/desktop/images/ceo.png"
              alt=""
              className="cxomasterclass-main-img"
            />
          </div>

          {/* RIGHT TEXT */}
          <div className="cxomasterclass-right">
            <h2 className="mb-3">Masterclasses with CEO<small>s</small></h2>
            <h3>Insights from the Executive Suite</h3>

            <p>
              Experience the pinnacle of learning through well-thought-out masterclasses.
              We have invited industry experts to not only share their domain knowledge but
              also throw light on the nuances of their topics that can only be achieved
              by vast and diverse experience.
            </p>

            <div className="cxomasterclass-card-container">
              {masterCards.map((card, index) => (
                <div key={index} className="cxomasterclass-card">
                  <img src={card.img} alt="" width={card.width} />
                  <p className="mb-0">{card.text}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default CXOMasterClass;
