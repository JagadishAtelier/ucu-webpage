import "./PGPMProgram.css";

export const IndustryConnect = () => {
  return (
    <section className="industry-connect container py-1">
      <div className="industry-connect__container">
        <h3>
          <span style={{ color: "#5ac501" }}>Industry</span> Connect
        </h3>
        <div className="industry-connect__grid">
          {/* LEFT: IMAGE */}
          <div className="industry-connect__image">
            <img src="/historyImages/3.jpg" alt="Industry Connect" />
          </div>

          {/* RIGHT: CONTENT */}
          <div className="industry-connect__content">
            <p className="text-justifys">
              UCU Chennai is the brainchild of leaders from business and
              academia with 30+ years of experience. It has well established
              industry networks, via 10,000+ professionals, 1000+ BU Leaders and
              500+ CXOs, VPs and BU Leaders.
              <br />
              <br />
              As part of the program, UCU regularly hosts these leaders on
              campus for interactive leadership sessions and for generating
              unique career opportunities for the students. They also provide
              one-on-one mentorship to the budding leaders in UCU, preparing
              them for future business leadership.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
