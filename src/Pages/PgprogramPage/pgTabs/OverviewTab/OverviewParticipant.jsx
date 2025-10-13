import { Play, X } from "lucide-react";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import modules from the new path
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const data = [
  {
    videoUrl: "https://youtu.be/uvyTVoElld4?si=ET5MBHw44ReoNMhG",
    thumbnail: "https://www.spjimr.org/wp-content/uploads/2022/07/Amardeep-Singh-jpg.webp",
    author: "Rajesh Mehra",
    proffection: "CEO, InnovateCorp",
    para: "UCU is bridging the gap between academia and industry with programs that prepare future-ready leaders",
  },
  {
    videoUrl: "https://youtu.be/bhgVNTJUytA?si=FGAtsM2xOS8NPyRU",
    thumbnail: "https://www.spjimr.org/wp-content/uploads/2022/09/PGP-GM-1.jpg",
    author: "Anita Kapoor",
    proffection: "Managing Director, Visionary Enterprises",
    para: "The corporate partnership initiatives at UCU are creating impactful opportunities for students and professionals alike.",
  },
  {
    videoUrl: "https://youtu.be/ulaQhIpWY98?si=O_Ofh6g_EBIawX-C",
    thumbnail: "https://www.spjimr.org/wp-content/uploads/2022/09/PGP-GM-2.jpg",
    author: "Vikram Sethi",
    proffection: "Chief Human Resources Officer, Global Dynamics",
    para: "UCU is cultivating the next generation of business leaders through practical, industry-focused learning.",
  },
  {
    videoUrl: "https://youtu.be/uvyTVoElld4?si=ET5MBHw44ReoNMhG",
    thumbnail: "https://www.spjimr.org/wp-content/uploads/2022/07/Amardeep-Singh-jpg.webp",
    author: "Rajesh Mehra",
    proffection: "CEO, InnovateCorp",
    para: "UCU is bridging the gap between academia and industry with programs that prepare future-ready leaders",
  },
  {
    videoUrl: "https://youtu.be/bhgVNTJUytA?si=FGAtsM2xOS8NPyRU",
    thumbnail: "https://www.spjimr.org/wp-content/uploads/2022/09/PGP-GM-1.jpg",
    author: "Anita Kapoor",
    proffection: "Managing Director, Visionary Enterprises",
    para: "The corporate partnership initiatives at UCU are creating impactful opportunities for students and professionals alike.",
  },
  {
    videoUrl: "https://youtu.be/ulaQhIpWY98?si=O_Ofh6g_EBIawX-C",
    thumbnail: "https://www.spjimr.org/wp-content/uploads/2022/09/PGP-GM-2.jpg",
    author: "Vikram Sethi",
    proffection: "Chief Human Resources Officer, Global Dynamics",
    para: "UCU is cultivating the next generation of business leaders through practical, industry-focused learning.",
  },
];

function convertToEmbedUrl(url) {
  const videoId = url.split("youtu.be/")[1].split("?")[0];
  return `https://www.youtube.com/embed/${videoId}`;
}

function OverviewParticipant() {
  const [modalVideo, setModalVideo] = useState(null);

  return (
    <div>
      <h1 className="display-4 col-12 fw-bold"><span style={{color:"#5ac501"}}>Aspirants & Parents</span> Speak</h1>
      <p className="mb-4">
        Hear from our Aspirants, present students and their parents speak on the
        uniqueness of our programs and their outcomes
      </p>

<Swiper
  modules={[Navigation, Pagination, Autoplay]} // include Autoplay
  spaceBetween={20}
  slidesPerView={3}
  className="participant-sec-swiper"
  navigation
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000, disableOnInteraction: false }} // autoplay config
  breakpoints={{
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
  }}
>
        {data.map((item, index) => (
          <SwiperSlide key={index} className="text-center">
            <img
              src={item.thumbnail}
              alt={item.author}
              style={{ width: "100%", cursor: "pointer" }}
              onClick={() => setModalVideo(item.videoUrl)}
              className="participant-play-thumbnail"
            />
            <div className="participant-play-icon"><Play/></div>
            <p className="text-start ms-3 m-0 mt-3 fs-5 fw-bold">
              {item.author}
            </p>
            <p className="text-start ms-3 m-0 mt-2">{item.proffection}</p>
                    </SwiperSlide>
        ))}
              </Swiper>

      {/* Modal */}
      {modalVideo && (
        <div className="video-modal" onClick={() => setModalVideo(null)}>
          <div className="video-modal-content" onClick={e => e.stopPropagation()}>
            <iframe
              className="video-modal-i-frame"
              src={convertToEmbedUrl(modalVideo)}
              title="Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button className="close-button-participant" onClick={() => setModalVideo(null)}>
              <X/>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default OverviewParticipant;
