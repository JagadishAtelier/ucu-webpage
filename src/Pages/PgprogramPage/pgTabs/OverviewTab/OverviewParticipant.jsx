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
    thumbnail:
      "https://t3.ftcdn.net/jpg/03/88/72/64/360_F_388726457_kjWTTE4phvKdYjSVKr13N1lA1mKc4yJe.jpg",
    author: "Rajesh Mehra",
    proffection: "CEO, InnovateCorp",
    para: "UCU is bridging the gap between academia and industry with programs that prepare future-ready leaders",
  },
  {
    videoUrl: "https://youtu.be/bhgVNTJUytA?si=FGAtsM2xOS8NPyRU",
    thumbnail:
      "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?cs=srgb&dl=pexels-moose-photos-1587009.jpg&fm=jpg",
    author: "Anita Kapoor",
    proffection: "Managing Director, Visionary Enterprises",
    para: "The corporate partnership initiatives at UCU are creating impactful opportunities for students and professionals alike.",
  },
  {
    videoUrl: "https://youtu.be/ulaQhIpWY98?si=O_Ofh6g_EBIawX-C",
    thumbnail:
      "https://th.bing.com/th/id/R.3bcbeff4ee0abb81ef150c9ea7e35730?rik=t3aMo1m4uUQi6g&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2010%2f05%2ffree-stock-photos-people_102217.jpg&ehk=vGjIrntn5QyP%2fIXY2Ei7Iiz4%2fy%2byXvP8I8j0XxemwjI%3d&risl=&pid=ImgRaw&r=0",
    author: "Vikram Sethi",
    proffection: "Chief Human Resources Officer, Global Dynamics",
    para: "UCU is cultivating the next generation of business leaders through practical, industry-focused learning.",
  },
  {
    videoUrl: "https://youtu.be/uvyTVoElld4?si=ET5MBHw44ReoNMhG",
    thumbnail:
      "https://tse2.mm.bing.net/th/id/OIP.IrUBHhdMo6wWLFueKNreRwHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
    author: "Rajesh Mehra",
    proffection: "CEO, InnovateCorp",
    para: "UCU is bridging the gap between academia and industry with programs that prepare future-ready leaders",
  },{
    videoUrl: "https://youtu.be/uvyTVoElld4?si=ET5MBHw44ReoNMhG",
    thumbnail:
      "https://t3.ftcdn.net/jpg/03/88/72/64/360_F_388726457_kjWTTE4phvKdYjSVKr13N1lA1mKc4yJe.jpg",
    author: "Rajesh Mehra",
    proffection: "CEO, InnovateCorp",
    para: "UCU is bridging the gap between academia and industry with programs that prepare future-ready leaders",
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
      <h1 className="display-4 col-12 fw-bold text-black text-lg-center text-md-center text-start">
        <span style={{ color: "#5ac501" }}>Aspirants & Parents</span> Speak
      </h1>
      <p className="mb-4 sort-disc col-lg-6 text-center mx-auto">
        Hear from our Aspirants, present students and their parents speak on the
        uniqueness of our programs and their outcomes
      </p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // include Autoplay
        spaceBetween={20}
        slidesPerView={3}
        className="participant-sec-swiper"
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }} // autoplay config
        loop={true}
        loopedSlides={6}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 4 },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="text-center">
            <div className="participant-image-wrapper">
    <img
      src={item.thumbnail}
      alt={item.author}
      onClick={() => setModalVideo(item.videoUrl)}
      className="participant-play-thumbnail"
    />

    <div
      className="participant-play-icon"
      role="button"
      onClick={() => setModalVideo(item.videoUrl)}
    >
      <Play size={26} />
    </div>
  </div>
            <p className="text-start ms-3 m-0 mt-3 fs-5 fw-bold">
              {item.author}
            </p>
            <p className="text-start ms-3 m-0 mt-2 sort-disc">
              {item.proffection}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      {modalVideo && (
        <div className="video-modal" onClick={() => setModalVideo(null)}>
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="video-modal-i-frame"
              src={convertToEmbedUrl(modalVideo)}
              title="Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              className="close-button-participant"
              onClick={() => setModalVideo(null)}
            >
              <X />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default OverviewParticipant;
