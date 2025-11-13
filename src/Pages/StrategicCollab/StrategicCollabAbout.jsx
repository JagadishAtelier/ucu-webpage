import React from "react";
import { Globe, BookOpen, Building2, UserCheck, Rocket, Landmark } from "lucide-react";
import { Container, Row, Col } from "react-bootstrap";

const data = [
  {
    icon: <Globe size={40} color="white" />,
    head: "Global and National Academic Alliances",
    para: "Joint initiatives with universities and think tanks to foster cross-border learning, research, and faculty exchange.",
  },
  {
    icon: <BookOpen size={40} color="white" />,
    head: "Joint Research Programs",
    para: "Cutting edge research and innovation initiatives with leading institutes, scholars and industries both in India & abroad.",
  },
  {
    icon: <Building2 size={40} color="white" />,
    head: "Industry-Led Centres of Excellence (CoEs)",
    para: "Sector-specific hubs in Marketing, Banking & Finance, Operations, Analytics, and Emerging Enterprise & Innovation (GCCs, FinTech, etc.)—co-developed with corporate partners to drive curriculum relevance and talent alignment.",
  },
  {
    icon: <UserCheck size={40} color="white" />,
    head: "Faculty Chairs & Visiting Scholar Programs",
    para: "Sponsored by industry leaders to bring cutting-edge expertise and global perspectives into the classroom.",
  },
  {
    icon: <Rocket size={40} color="white" />,
    head: "SME & Startup Engagements",
    para: "Real-world projects, mentorship, and innovation labs that connect students with entrepreneurial ecosystems.",
  },
  {
    icon: <Landmark size={40} color="white" />,
    head: "Government & Skill Missions",
    para: "Collaborations that extend UCU’s reach to underserved regions through digital platforms and inclusive skilling programs.",
  },
];

function StrategicCollabAbout() {
  return (
    <div className="captital-campus-content-sec mt-5">
      <Container>
        <h1 className="text-center fw-bold mb-3">
          Strategic Collaborations – Building Bridges for Impact
        </h1>
        <p className="text-center mx-auto mb-4" style={{ maxWidth: "800px", color: "#555" }}>
          At Universal Corporate University (UCU Chennai), strategic collaboration is not an add-on—it is a founding principle.
          UCU actively partners with leading institutions, industries, SMEs, and government bodies across India and abroad to
          co-create a future-ready ecosystem of business education.
        </p>

        <h4 className="text-center fw-semibold mb-4">Our collaborations span:</h4>

        <Row className="g-4">
          {data.map((item, index) => (
            <Col key={index} xs={12} sm={6} lg={4}>
              <div className="collab-card p-4 h-100 rounded-4 shadow d-flex flex-column" style={{backgroundColor:"#0c0142"}}>
                <div className="mb-3">{item.icon}</div>
                <h5 className="fw-semibold text-white">{item.head}</h5>
                <p className="mt-2 text-white" style={{ fontSize: "0.95rem" }}>
                  {item.para}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <p className="mt-4">These partnerships power UCU’s mission to deliver industry-aligned, globally benchmarked, and socially inclusive business education—ensuring that every learner is equipped not just with knowledge, but with opportunity.</p>
    </div>
  );
}

export default StrategicCollabAbout;
