import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { getAllOnlineStats } from "../../Api/OnlineProgramApi/OnlineStatsApi";
import DynamicIcon from "../DynamicIcon";

const OnlineProgramStats = () => {
  const [statsData,setStatsData] = useState([])
  useEffect(()=>{
    fetchData()
  },[])
const fetchData = async () => {
  try {
    const res = await getAllOnlineStats();

    const data = res?.data || res || [];
    setStatsData(data);
  } catch (error) {
    console.log("Failed to fetch", error);
  }
};

  return (
    <div className="ONLINEACT py-lg-5 py-0">
      <div className="container">
        <div className="stats-wrapper shadow-lg position-relative">
          <div className="stats-custom-prev">
            <i className="fas fa-chevron-left"></i>
          </div>

          <div className="stats-custom-next">
            <i className="fas fa-chevron-right"></i>
          </div>
          {/* Slider */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".stats-custom-prev",
              nextEl: ".stats-custom-next",
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = ".stats-custom-prev";
              swiper.params.navigation.nextEl = ".stats-custom-next";
            }}
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
            className="stats-swiper"
          >
            {statsData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="stats-item h-100">
                  <div className="stats-content">
                    <div className="icon-box">
                      <DynamicIcon
                        name={item.iconImage?.[0]}
                        size={42}
                      />
                    </div>
                    <h3 className="stat-number">{item.count}</h3>
                    <p className="stat-desc">{item.content}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </div>
  );
};

export default OnlineProgramStats;
