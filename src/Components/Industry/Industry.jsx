import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Industry.css";

const data = [
  {
    videoUrl: "https://youtu.be/uvyTVoElld4?si=ET5MBHw44ReoNMhG",
    author: "Rajesh Mehra",
    proffection: "CEO, InnovateCorp",
    para: "UCU is bridging the gap between academia and industry with programs that prepare future-ready leaders",
  },
  {
    videoUrl: "https://youtu.be/bhgVNTJUytA?si=FGAtsM2xOS8NPyRU",
    author: "Anita Kapoor",
    proffection: "Managing Director, Visionary Enterprises",
    para: "The corporate partnership initiatives at UCU are creating impactful opportunities for students and professionals alike.",
  },
  {
    videoUrl: "https://youtu.be/ulaQhIpWY98?si=O_Ofh6g_EBIawX-C",
    author: "Vikram Sethi",
    proffection: "Chief Human Resources Officer, Global Dynamics",
    para: "UCU is cultivating the next generation of business leaders through practical, industry-focused learning.",
  },
];

function convertToEmbedUrl(url) {
  const videoId = url.split("youtu.be/")[1].split("?")[0];
  return `https://www.youtube.com/embed/${videoId}`;
}

function Industry() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <div className="industry-container">
      <div className="car-heading-text" data-aos="fade-up">
        <h1 className="h1 fw-bold fs-1 fs-lg-1">Industry Icons Speak</h1>
        <p className="program-description">
          Insights from top leaders shaping the future of business education at
          UCU.
        </p>
      </div>

      <div className="industry-card-div">
        {data.map((item, index) => (
          <div
            key={index}
            className="industry-card"
            data-aos="zoom-in"
            data-aos-delay={index * 200} // stagger effect
          >
            <iframe
              className="i-frame"
              src={convertToEmbedUrl(item.videoUrl)}
              title={item.author}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="program-description">{item.para}</p>
            <p className="program-description">
              <strong>-{item.author}</strong>, {item.proffection}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Industry;
