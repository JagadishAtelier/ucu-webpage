import "./CurriculumOverview.css";

export default function CurriculumOverview() {
  return (
    <section className="curriculum-section py-5">
      <div className="container-flued mx-5">
        <div className="row align-items-center px-4">

          {/* LEFT SIDE */}
          <div className="col-lg-6 text-white">

            <h2 className="fw-bold mb-4 lh-base">
              Globally Benchmarked Curriculum. Truly World
              <br /> Class Faculty.
            </h2>

            <div className="mb-4">
              <h1 className="highlight-number">40+</h1>
              <p className="description">
                World’s renowned Management Gurus and global thought leaders
                comprise to form UCU Academic Advisory Council, which
                helps us continuously innovate our curriculum to stay relevant
                with the dynamic needs of the rapidly changing corporate
                environment.
              </p>
            </div>

            <div className="mb-4">
              <h1 className="highlight-number">50+</h1>
              <p className="description">
                Full time faculty with rich academic and industry experience
                from across the world ensures that you learn management
                practices from the best.
              </p>
            </div>

            <div className="mb-4">
              <h1 className="highlight-number">25+</h1>
              <p className="description">
                International visiting faculty from Ivy League schools such as
                Kellogg, Stanford, Yale, etc., provide global perspectives.
              </p>
            </div>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="curiculum image-wrapper">
              <img
                src="/historyImages/1.jpg"
                alt="Curriculum"
                className="img-fluid rounded-25"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
