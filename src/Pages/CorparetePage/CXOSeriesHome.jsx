import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
const cxoSeriesSubHead = ["CIO", "CTO", "CMO", "CHRO", "CFO", "CPO"];

const data = [
  {
    videoUrl: "https://youtu.be/uvyTVoElld4?si=ET5MBHw44ReoNMhG",
    thumbnail:
      "https://t3.ftcdn.net/jpg/03/88/72/64/360_F_388726457_kjWTTE4phvKdYjSVKr13N1lA1mKc4yJe.jpg",
    para: "Empowering the next generation of digital CIOs",
    author: "Rajesh Mehra",
    profession: "CIO, InnovateCorp",
    cxo: "CIO",
  },
  {
    videoUrl: "https://youtu.be/bhgVNTJUytA?si=FGAtsM2xOS8NPyRU",
    thumbnail:
      "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg",
    para: "Transforming HR strategy for the future workforce",
    author: "Anita Sharma",
    profession: "CHRO, PeopleFirst",
    cxo: "CTO",
  },
  {
    videoUrl: "https://youtu.be/ulaQhIpWY98?si=O_Ofh6g_EBIawX-C",
    thumbnail:
      "https://th.bing.com/th/id/R.3bcbeff4ee0abb81ef150c9ea7e35730?rik=t3aMo1m4uUQi6g",
    para: "Leading through innovation: The CEO’s perspective",
    author: "Priya Nair",
    profession: "CEO, VisionNext",
    cxo: "CMO",
  },
  {
    videoUrl: "https://youtu.be/ZluP0DX4yWk",
    thumbnail:
      "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg",
    para: "Driving efficiency through automation",
    author: "Manish Rao",
    profession: "COO, TechBridge",
    cxo: "CHRO",
  },
  {
    videoUrl: "https://youtu.be/ZluP0DX4yWk",
    thumbnail:
      "https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg",
    para: "Financial resilience in dynamic markets",
    author: "Divya Khanna",
    profession: "CFO, FinWise",
    cxo: "CFO",
  },
  {
    videoUrl: "https://youtu.be/ZluP0DX4yWk",
    thumbnail:
      "https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg",
    para: "Financial resilience in dynamic markets",
    author: "Divya Khanna",
    profession: "CPO, FinWise",
    cxo: "CPO",
  },
];

function CXOSeriesHome() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("CIO");
  const [viewAll, setViewAll] = useState(false);

    useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cxoFromUrl = params.get("cxo");

    if (cxoFromUrl) {
      setActiveTab(cxoFromUrl.toUpperCase());
    }
  }, [location.search]);

  const filteredData = data.filter(item => item.cxo === activeTab);
  return (
    <div id="CXOSeriesHome" className="captital-campus-content-sec mt-5">
      <h1 className="cap-cxo-title text-center display-5 fw-bold"><span style={{ color: "#5ac501" }}>CXO </span> Series</h1>
      <p className="cap-cxo-desc text-center pt">
        UCU’s CXO Series is a marquee leadership engagement platform where top business leaders, BU heads, and global strategists share firsthand insights with students. These high-impact sessions offer a rare window into boardroom thinking, industry foresight, and leadership journeys—bridging the gap between classroom learning and executive decision-making.
        From navigating digital disruption to decoding global business models, the CXO Series equips learners with strategic exposure, career clarity, and the mindset required to lead in tomorrow’s enterprises.

      </p>

      {/* Tabs */}
      <div className="cap-cxo-tabs d-flex justify-content-center flex-wrap gap-3 mt-4">
        {cxoSeriesSubHead.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cap-cxo-tab ${activeTab === tab ? "active" : ""}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Swiper Slider for selected tab */}
      <div className="mt-5">
        {!viewAll && (
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="cap-cxo-swiper pb-3"
          >
            {filteredData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="cap-cxo-card position-relative">
                  <img
                    src={item.thumbnail}
                    alt={item.para}
                    className="cap-cxo-thumb"
                  />
                  <div className="mga-overlay"></div>
                  <div className="cap-cxo-card-body mga-overlay-text">
                    <p className="cap-cxo-author fw-bold mb-1">{item.author}</p>
                    <p className="cap-cxo-prof mb-2">{item.profession}</p>
                    <p className="cap-cxo-para">{item.para}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <div className={`cap-grid-container ${viewAll ? 'expanded' : ''}`}>
          {data.map((item, index) => (
            <div className="cap-cxo-card position-relative" key={index}>
              <img
                src={item.thumbnail}
                alt={item.para}
                className="cap-cxo-thumb"
              />
              <div className="mga-overlay"></div>
              <div className="cap-cxo-card-body mga-overlay-text">
                <p className="cap-cxo-author fw-bold mb-1">{item.author}</p>
                <p className="cap-cxo-prof mb-2">{item.profession}</p>
                <p className="cap-cxo-para">{item.para}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center mt-4">
          <Button className="cap-cxo-view-btn" onClick={() => setViewAll(!viewAll)}>{viewAll ? "View Less" : "View All"}</Button>
        </div>
      </div>
    </div>
  );
}

export default CXOSeriesHome;
