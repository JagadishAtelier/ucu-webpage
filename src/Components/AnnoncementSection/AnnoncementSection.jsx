import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "./AnnoncementSection.css";

const announceData = [
  {
    text: "Universal Corporate University (UCU) unveils its Global Industry & Leadership Excellence Center — a hub for industry-led learning, leadership growth, and collaborative research. Where knowledge meets opportunity, UCU prepares you to lead in a competitive world."
  },
  {
    text: "Admissions for the new batch are now open. Apply today to be part of a transformative learning experience that combines academic rigor with real-world corporate insights."
  },
  {
    text: "UCU collaborates with leading corporates globally to ensure students are industry-ready and leadership-capable by the time they graduate."
  }
];

function AnnoncementSection() {
  return (
    <div className="Announcement-container position-relative">
      <div className="Announcement-header-mobile"> {/* New container for mobile layout */}
        <h1>Announcement</h1>
        <div className="Announcement-arrow-icons">
          <button className="announcement-prev">
            <ChevronLeft size={20} />
          </button>
          <button className="announcement-next">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".announcement-next",
          prevEl: ".announcement-prev",
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
      >
        {announceData.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="Announcement-para">
              <p>{data.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default AnnoncementSection;