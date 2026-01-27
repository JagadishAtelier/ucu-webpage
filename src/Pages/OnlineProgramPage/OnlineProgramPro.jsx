import React, { useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

/* 🔹 Programs with category */
const programs = [
  {
    title: "Product",
    duration: "2 Years",
    category: "Executive Post Graduate Program (Domain Specialization)",
    img: "https://plus.unsplash.com/premium_photo-1690302394250-f3e7626a01b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHByb2R1Y3QlMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww",
    link:"/program/product"
  },
  {
    title: "Consulting",
    duration: "1 Year",
    category: "Executive Post Graduate Program (Domain Specialization)",
    img: "https://media.istockphoto.com/id/2160707342/photo/making-decision-on-the-move.webp?a=1&b=1&s=612x612&w=0&k=20&c=UKdF7StmfHxqV5Tm7yaaq9QuP6iJKkYoS3H4nhGOox4=",
        link:"/program/consulting"
  },
  {
    title: "Cybersecurity",
    duration: "2 Years",
    category: "Executive Post Graduate Program (Domain Specialization)",
    img: "https://media.istockphoto.com/id/1435605327/photo/cybersecurity-concept-global-network-security-technology-business-people-protect-personal.webp?a=1&b=1&s=612x612&w=0&k=20&c=Reqkqf1qILOYmckRT5y1B9pL-hZuBWl1FbXTrWnoiGw=",
        link:"/program/cybersecurity"
  },
  {
    title: "Digital Marketing & AI",
    duration: "1 Year",
    category: "Executive Post Graduate Program (Domain Specialization)",
    img: "https://media.istockphoto.com/id/2166193783/photo/data-analytics-team-meeting-at-night.webp?a=1&b=1&s=612x612&w=0&k=20&c=8rcZn4Dbs7qAE4jn8C2_NrED5R_XWJCJMWMFCJYYvpU=",
        link:"/program/Digital-Marketing-&-AI"
  },
  {
    title: "Banking & Finance",
    duration: "2 Years",
    category: "Executive Post Graduate Program (Domain Specialization)",
    img: "https://plus.unsplash.com/premium_photo-1661313667772-3cdc7bf2344e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFua2luZyUyMGFuZCUyMGZpbmFuY2V8ZW58MHx8MHx8fDA%3D",
        link:"/program/Banking-&-Finance"
  },
  {
    title: "International Business",
    duration: "2 Years",
    category: "Executive Post Graduate Program (Domain Specialization)",
    img: "https://plus.unsplash.com/premium_photo-1688821129380-75c32b3e5918?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVzaW5lc3MlMjBhbmFseXRpY3N8ZW58MHx8MHx8fDA%3D",
        link:"/program/international-business"
  },



  {
    title: "FinTech Genesis",
    duration: "2 Years",
    category: "Executive Post Graduate Program (Career Lane Specialization)",
    img: "https://media.istockphoto.com/id/866905356/photo/fintech-the-financial-technology.webp?a=1&b=1&s=612x612&w=0&k=20&c=R3ceaD5uN_QA_6_OGYQAt2xM5jYNXqCCMxQpIgUAKDs=",
        link:"/program/FinTech-Genesis"
  },
  {
    title: "GCC Launchpad",
    duration: "2 Years",
    category: "Executive Post Graduate Program (Career Lane Specialization)",
    img: "https://www.colliers.com/-/media/images/colliers/asia/india/research-images/2024/1536gccreport.ashx?bid=3dd61b5289dd4e2abf9a823864443392",
        link:"/program/GCC-Launchpad"
  },
  {
    title: "HealthTech Ignition",
    duration: "2 Years",
    category: "Executive Post Graduate Program (Career Lane Specialization)",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoY2FyZXxlbnwwfHwwfHx8MA%3D%3D",
        link:"/program/HealthTech-Ignition"
  },
  {
    title: "Advanced Manufacturing",
    duration: "2 Years",
    category: "Executive Post Graduate Program (Career Lane Specialization)",
    img: "https://plus.unsplash.com/premium_photo-1683121716061-3faddf4dc504?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2VtaWNvbmR1Y3RvcnxlbnwwfHwwfHx8MA%3D%3D",
        link:"/program/Advanced-Manufacturing"
  },



  {
    title: "Individuals Professional",
    duration: "2 Years",
    category: "Executive Education(Individuals Professional)",
    img: "https://img.freepik.com/free-photo/smiling-young-businessman_1098-778.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80",
        link:"/executive-edu?tab=0"
  },


  {
    title: "CXO Academy",
    duration: "2 Years",
    category: "Executive Education(CXO Academy)",
    img: "https://img.freepik.com/free-photo/online-data_1098-16295.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80",
        link:"/executive-edu?tab=2"
  },

  
  {
    title: "Academic Accelerator",
    duration: "2 Years",
    category: "Executive Education(Academic Accelerator)",
    img: "https://img.freepik.com/free-photo/entrepreneurs-meeting-office_23-2148898688.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80",
        link:"/executive-edu?tab=4"
  },

  {
    title: "MDPs",
    duration: "2 Years",
    category: "Executive Education(MDPs)",
    img: "https://img.freepik.com/free-photo/closeup-hands-using-computer-laptop-with-screen-showing-analysis-data_53876-23014.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80",
        link:"/executive-edu?tab=6"
  },

  {
    title: "Leadership Coach Academy",
    duration: "2 Years",
    category: "Executive Education(Leadership Coach Academy)",
    img: "https://img.freepik.com/free-photo/medium-shot-people-learning_23-2149300715.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80",
        link:"/executive-edu?tab=5"
  },

  {
    title: "FinTech Ascend",
    duration: "2 Years",
    category: "Executive & Advanced Executive PG Certificate Programs",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
        link:"/program/FinTech-Ascend"
  },
  {
    title: "FinTech Vanguard",
    duration: "2 Years",
    category: "Executive & Advanced Executive PG Certificate Programs",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
        link:"/program/FinTech-Vanguard"
  },
  {
    title: "GCC-Catalyst",
    duration: "2 Years",
    category: "Executive & Advanced Executive PG Certificate Programs",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
        link:"/program/GCC-Catalyst"
  },
  {
    title: "GCC Elevate",
    duration: "2 Years",
    category: "Executive & Advanced Executive PG Certificate Programs",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
        link:"/program/GCC-Elevate"
  },
  {
    title: "HealthTech Navigate",
    duration: "2 Years",
    category: "Executive & Advanced Executive PG Certificate Programs",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
        link:"/program/HealthTech-Navigate"
  },
  {
    title: "HealthTech Pinnacle",
    duration: "2 Years",
    category: "Executive & Advanced Executive PG Certificate Programs",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
        link:"/program/HealthTech-Pinnacle"
  },


]

/* 🔹 Categories */
const categories = [
  "Executive Post Graduate Program (Domain Specialization)",
  "Executive Post Graduate Program (Career Lane Specialization)",
  "Executive Education(Individuals Professional)",
  "Executive Education(CXO Academy)",
  "Executive Education(Academic Accelerator)",
  "Executive Education(MDPs)",
  "Executive Education(Leadership Coach Academy)",
  "Executive & Advanced Executive PG Certificate Programs",
]

/* 🔹 Helper: moves bracket text to next line */
const renderWithBracketBreak = (text) => {
  const match = text.match(/(.*?)(\s*\(.*\))/);
  if (!match) return text;

  return (
    <>
      {match[1]}
      <br />
      <span>{match[2]}</span>
    </>
  );
}

function OnlineProgramPro() {
  const [activeTab, setActiveTab] = useState(categories[0]);
    const navigate = useNavigate()
  const filteredPrograms = programs.filter(
    (p) => p.category === activeTab
  );

  return (
    <div className="ONLINEPRO-section">
      <div className="text-center">
        {/* 🔹 Title */}
        <h2 className="ONLINEPRO-title mb-4">
          Certificate Programmes AT UCU
        </h2>
        {/* 🔹 Tabs */}
        <div className="ONLINEPRO-tabs-container">
          {categories.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(tab)}
              className={`ONLINEPRO-tab ${
                activeTab === tab ? "active" : ""
              }`}
            >
              {renderWithBracketBreak(tab)}
            </button>
          ))}
        </div>



        {/* 🔹 Swiper */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={filteredPrograms.length > 1}
          spaceBetween={25}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 4 }
          }}
          className="px-3 pb-5 "
        >
          {filteredPrograms.map((program, index) => (
            <SwiperSlide key={index}>
              <div className="ONLINEPRO-card">
                <div className="ONLINEPRO-img-wrapper">
                  <img src={program.img} alt={program.title} />
                </div>

                <h5 className="ONLINEPRO-card-title">
                  {renderWithBracketBreak(program.title)}
                </h5>

                <p className="ONLINEPRO-duration">Duration : {program.duration}</p>

                <button onClick={()=>navigate(program.link)} className="ONLINEPRO-btn">
                  Learn More <span className="ONLINEPRO-arrow"><ChevronRight/></span>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Optional empty state */}
        {filteredPrograms.length === 0 && (
          <p className="mt-4">No programs available</p>
        )}
      </div>
    </div>
  );
}

export default OnlineProgramPro;
