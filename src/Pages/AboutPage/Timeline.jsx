import React from "react";
import { Container, Row, Col  } from "react-bootstrap";
import "./Timeline.css";
import TimelineRow from "./TimelineRow";
import image1 from '../../Assets/about-page-images/image-1.jpg'
import image2 from '../../Assets/about-page-images/image-2.jpg'
// ✅ TimelineRow Component
// const TimelineRow = ({ title, description, image, reverse }) => {
//   return (
//     <Row className={`timeline-row ${reverse ? "reverse" : ""} active`}>
//       <div className="timeline-point"></div>
//       <Col md={6} className="image">
//         {image && (
//           <div className="image-auto">
//             <img src={image} alt={title} />
//           </div>
//         )}
//       </Col>
//       <Col md={6} className="content">
//         <h3>{title}</h3>
//         <p dangerouslySetInnerHTML={{ __html: description }} />
//       </Col>
//     </Row>
//   );
// };

// ✅ Timeline Component
const Timeline = () => {
  const data = [
    {
      title: "<span>1990 – 2009</span> : Vision Realised",
      description: `
        This journey is the life’s work of our Founder & Chairman, <strong>Dr. M. Balaji (Bala)</strong>.
        It began at the <strong>Ahmedabad Management Association (AMA)</strong>, founded by Dr. Vikram Sarabhai,
        the father of India’s space program, where Dr. Balaji was part of the founding team.<br /><br />
        
        He played a pivotal role in transforming a modest 3,000 sq. ft. facility into a world-class
        30,000 sq. ft. management complex, located opposite IIM Ahmedabad. Under his leadership, AMA established
        <strong>32 Centers of Excellence</strong>, mobilized <strong>₹3.5 crores in funding</strong>, launched over a dozen functional diploma programs,
        and hosted more than <strong>5,000 Management Development Programs</strong> and <strong>2,500+ CXO talks</strong>.<br /><br />
        
        These milestones laid the foundation for his deep expertise in corporate and executive education ecosystems.
      `,
      images: [image1,image2],
      reverse: false,
    },
    {
      title: "<span>2009 – 2026</span> : Building Launchpad for Global Careers",
      description: `
        Dr. Bala carried his vision forward to <strong>Great Lakes Institute of Management</strong>, where he served
        for over 15 years and played a pivotal role in shaping its corporate engagement strategy.<br /><br />

        He built a robust campus placement engine that successfully placed over <strong>8,000 students</strong> and supported
        more than <strong>1,000 MBA graduates annually</strong>. His pioneering contributions included conceptualizing and hosting a series
        of innovative conferences and conventions across emerging and diverse industry sectors, launching India’s first
        <strong>Product Management program</strong> in collaboration with PayPal, and establishing the <strong>Placement Academy for Career Enhancement (PACE)</strong>,
        a strategic initiative designed to bridge the gap between academic curricula and industry expectations.<br /><br />

        He also founded one of India’s most distinguished student-led placement committees, <strong>PlaceCom</strong>,
        which identified and nurtured over <strong>1,000 high-caliber individuals</strong>. This initiative evolved into a leadership development
        platform, producing fast-track talent now serving in global corporations such as <strong>Apple, Google, McKinsey, Facebook,
        PayPal, BCG, Bain, Amazon, Microsoft</strong>, and many others.<br /><br />

        Under his stewardship, the institute’s average campus CTC increased more than sevenfold within a decade,
        reflecting the transformative impact of his leadership.<br /><br />
      `,
      images: ["/historyImages/2.jpg","/historyImages/4.jpg", "/historyImages/5.jpg", "/historyImages/6.jpg", "/historyImages/1.jpg", "/historyImages/3.jpg",],// replace with a collage or carousel image
      reverse: true,
    },
    {
      title: "<span>2026 – Present</span> : Birth of Universal Corporate University (UCU) - Building what's next",
      description: `
        Throughout his career, Dr. Bala keenly observed the widening disconnect between what was taught in business schools
        and what the industry truly needed — an issue magnified by the rise of AI and rapid technological change.<br /><br />

        Recognizing this gap, he united a committed group of industry leaders and alumni to build something transformative,
        not just for learners, but also for educators.<br /><br />

        Through lifelong learning and skill-building initiatives, <strong>UCU</strong> empowers academic institutions to become market-ready,
        enabling faculty to deliver industry-aligned education that produces better outcomes.<br /><br />

        Thus, <strong>UCU was born</strong>, a direct response to the market’s demand for relevant, rigorous, and results-driven corporate education.
        UCU’s foundation is a testament to what happens when vision meets execution, and when education is reimagined for the future of work.<br /><br />

        UCU is the <strong>living legacy</strong> of a leader who dedicated his career to aligning talent with enterprise expectations.
        Every program is engineered for genuine impact, empowering learners to become agile, future-ready business leaders.
      `,
      images: ["/timeline-logo2.png"], // replace with actual image
      reverse: false,
    },
  ];

  return (
    <>
    <h1 className="display-4 fw-bold col-12 text-center mt-4">
       <span style={{color:'#5ac501'}}> Our</span> Journey
      </h1>
    <section className="timeline">
      <div className="timeline-line"></div>
      <div className="container-fluid">
        {data.map((item, idx) => (
          <TimelineRow key={idx} {...item} />
        ))}
      </div>
    </section></>
  );
};

export default Timeline;
