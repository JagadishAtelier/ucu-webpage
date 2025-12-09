import React, { useState } from "react";
import videoimage from "../../Assets/aboutPageImage/vision_image1.jpg";
import { FaPlayCircle } from "react-icons/fa";

function PGPMObjectives() {
  const [playVideo, setPlayVideo] = useState(false);

  // Replace this with your YouTube video ID
  const youtubeId = "REFbLK1iank";
  return (
    <div>
        <div
          style={{ paddingBottom: "150px", position: "relative" }}
          className="container my-1"
        >
          <h1 className="display-4 fw-bold col-12 col-lg-12 mb-3">
            <span style={{ color: "#fff" }}>Objective</span>
          </h1>

          <p className="font-weight-normal">
            The PGPM Elite Program is crafted to shape future-ready leaders who are
            agile, industry-immersed, and capable of driving high-impact decisions in
            dynamic business environments. Rooted in UCU’s mission of wise
            innovation, the program focuses on accelerated learning, global exposure,
            and career transformation.
          </p>

          <ul>
            <p className="fw-light">
              <li>
                <span className="fw-bold">
                  Build strong managerial foundations with analytical depth and
                  leadership agility,
                </span>{" "}
                enabling learners to make confident, responsible, and
                multi-dimensional decisions in fast-paced professional settings.
              </li>
            </p>

            <p className="fw-light">
              <li>
                <span className="fw-bold">
                  Promote experiential, hands-on learning culture,
                </span>{" "}
                where participants engage in real-world industry projects, case
                sprints, simulations, and high-impact challenges that accelerate
                managerial maturity.
              </li>
            </p>

            <p className="fw-light">
              <li>
                <span className="fw-bold">
                  Integrate academic depth with contemporary industry relevance,
                </span>{" "}
                ensuring each learner builds competencies aligned with modern
                business expectations and leadership roles.
              </li>
            </p>

            <p className="fw-light">
              <li>
                <span className="fw-bold">
                  Provide domain-driven specialization exposure,
                </span>{" "}
                empowering learners to transition into roles with practical expertise,
                industry insights, and Day-One readiness.
              </li>
            </p>
          </ul>

          <p className="">PGPM Elite Competency Goals:</p>

          <ol>
            <p>
              <li>
                <span className="fw-bold ">
                  Develop Ethical, Purpose-Driven Managers
                </span>
              </li>
            </p>
            <p className="fw-light mt-2">
              Inspire leaders who demonstrate responsibility, integrity, and
              sustainable thinking in every business decision.
            </p>

            <p>
              <li>
                <span className="fw-bold">
                  Strengthen Global Mindset & Business Fluency
                </span>
              </li>
            </p>
            <p className="fw-light mt-2">
              Equip participants to operate confidently in global markets, adapt to
              cultural diversity, and lead cross-border teams.
            </p>

            <p>
              <li>
                <span className="fw-bold">
                  Attain Multi-Domain Business Mastery
                </span>
              </li>
            </p>
            <p className="fw-light mt-2">
              Build refined expertise across marketing, finance, strategy, analytics,
              and operations with strong cross-functional problem-solving skills.
            </p>

            <p>
              <li>
                <span className="fw-bold">Enhance Strategic Decision-Making</span>
              </li>
            </p>
            <p className="fw-light mt-2">
              Train learners to evaluate complex scenarios using data-driven,
              innovative, and ethically sound frameworks.
            </p>

            <p>
              <li>
                <span className="fw-bold">Nurture Transformational Leaders</span>
              </li>
            </p>
            <p className="fw-light mt-2">
              Empower learners to drive innovation, manage change, and lead with
              vision in evolving business landscapes.
            </p>
          </ol>

          {/* VIDEO SECTION */}
          <div
            className="my-4 position-absolute overview-video video-con-objectives"
            style={{
              width: "700px",
              height: "350px",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            {!playVideo ? (
              <>
                <img
                  src={videoimage}
                  alt="Video thumbnail"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                    position: "relative",
                    zIndex: 1,
                  }}
                />

                <div
                  className="play-btn-container"
                  onClick={() => setPlayVideo(true)}
                  style={{
                    position: "absolute",
                    top: "90%",
                    left: "6%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 3,
                    cursor: "pointer",
                  }}
                >
                  <FaPlayCircle size={50} color="#1703a9" />
                </div>
              </>
            ) : (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&controls=0&rel=0&modestbranding=1&showinfo=0`}
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  borderRadius: "10px",
                }}
              ></iframe>
            )}
          </div>
        </div>
    </div>
  );
}

export default PGPMObjectives;
