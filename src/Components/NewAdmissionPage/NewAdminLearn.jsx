import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";



function NewAdminLearn({ data }) {
  /* =======================
     FACULTY DATA (Fallback)
  ======================= */
  const defaultFacultyData = [
    {
      title: "Dr. Rajesh Kumar",
      subtitle: "Strategy & Leadership",
      image:
        "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg",
      description:
        "At UCU University, we focus on experiential learning that helps students think strategically and lead with confidence in complex business environments.",
      listItems: ["PhD in Management", "20+ years of academic & industry experience"]
    },
    {
      title: "Dr. Priya Menon",
      subtitle: "Finance & Business Analytics",
      image:
        "https://img.freepik.com/free-photo/picture-dissatisfied-grumpy-young-afro-american-woman-with-long-straight-hair-expressing-her-disagreement-keeping-arms-folded-looking-with-serious-skeptical-facial-expression_344912-1026.jpg",
      description:
        "Our approach blends strong analytical foundations with practical financial insights to prepare students for data-driven decision making.",
      listItems: ["PhD in Finance", "Researcher & industry consultant"]
    },
    {
      title: "Prof. Arjun Mehta",
      subtitle: "Marketing & Digital Strategy",
      image:
        "https://img.freepik.com/free-photo/worldface-pakistani-guy-white-background_53876-146312.jpg",
      description:
        "UCU University emphasizes applied learning, enabling students to understand consumer behavior and modern digital business models.",
      listItems: ["MBA & Advanced Marketing Certifications", "Academic mentor with industry exposure"]
    }
  ];

  /* =======================
     STATS DATA
  ======================= */
  const defaultStats = [
    { value: "25+", label: "Experienced Faculty Members" },
    { value: "Majority", label: "Doctorates & Research Scholars" },
    { value: "15+", label: "Industry-Experienced Mentors" },
    { value: "100+", label: "Research Papers & Case Studies" },
  ];

  const sectionData = data?.learningExperience || {};
  const facultyList = sectionData.cards && sectionData.cards.length > 0 ? sectionData.cards : defaultFacultyData;
  const statsData = defaultStats; // Not in CMS yet
  const title = sectionData.title || "Learn from the Best at UCU University";
  const description = sectionData.description || "UCU University’s faculty combines academic excellence, research depth, and real-world industry exposure to deliver a future-focused learning experience.";


  return (
    <div id="placements" className="NEWADMLEARN-section">
      <Container>
        {/* Header */}
        <div className="text-center NEWADMLEARN-header">
          <h3 className="NEWADMLEARN-title" data-aos="fade-down" data-aos-delay="100">
            {title}
          </h3>
          <p className="NEWADMLEARN-subtitle" data-aos="fade-down" data-aos-delay="100">
            {description}
          </p>
        </div>

        {/* Faculty Slider */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={24}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          data-aos="zoom-in" data-aos-delay="100"
        >
          {facultyList.map((faculty, index) => {
            const credMain = faculty.listItems && faculty.listItems[0] ? faculty.listItems[0] : "";
            const credSub = faculty.listItems && faculty.listItems[1] ? faculty.listItems[1] : "";

            return (
              <SwiperSlide key={index}>
                <div className="NEWADMLEARN-card">
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <img
                      src={faculty.image}
                      alt={faculty.title}
                      className="NEWADMLEARN-avatar"
                    />
                    <div>
                      <div className="NEWADMLEARN-name">{faculty.title}</div>
                      <div className="NEWADMLEARN-role">{faculty.subtitle}</div>
                    </div>
                  </div>

                  <p className="NEWADMLEARN-quote">"{faculty.description}"</p>

                  <div className="NEWADMLEARN-divider">
                    <div className="NEWADMLEARN-cred-label">Credentials</div>
                    <div className="NEWADMLEARN-cred-main">
                      {credMain}
                    </div>
                    <div className="NEWADMLEARN-cred-sub">
                      {credSub}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Stats */}
        <Row className="NEWADMLEARN-stats g-4">
          {statsData.map((stat, index) => (
            <Col xs={6} lg={3} className="text-center" key={index} data-aos="fade-up" data-aos-delay="100">
              <div className="NEWADMLEARN-stat-number">{stat.value}</div>
              <div className="NEWADMLEARN-stat-text">{stat.label}</div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
export default NewAdminLearn;
