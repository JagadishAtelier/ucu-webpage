import React, { useEffect,useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Aspirants.css";

const data = [
  {
    videoUrl: "https://youtu.be/uvyTVoElld4?si=ET5MBHw44ReoNMhG",
    thumbnail: "https://t3.ftcdn.net/jpg/03/88/72/64/360_F_388726457_kjWTTE4phvKdYjSVKr13N1lA1mKc4yJe.jpg",
    author: "Rajesh Mehra",
    proffection: "CEO, InnovateCorp",
    para: "UCU is bridging the gap between academia and industry with programs that prepare future-ready leaders",
  },
  {
    videoUrl: "https://youtu.be/bhgVNTJUytA?si=FGAtsM2xOS8NPyRU",
    thumbnail: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?cs=srgb&dl=pexels-moose-photos-1587009.jpg&fm=jpg",
    author: "Anita Kapoor",
    proffection: "Managing Director, Visionary Enterprises",
    para: "The corporate partnership initiatives at UCU are creating impactful opportunities for students and professionals alike.",
  },
  {
    videoUrl: "https://youtu.be/ulaQhIpWY98?si=O_Ofh6g_EBIawX-C",
    thumbnail: "https://th.bing.com/th/id/R.3bcbeff4ee0abb81ef150c9ea7e35730?rik=t3aMo1m4uUQi6g&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2010%2f05%2ffree-stock-photos-people_102217.jpg&ehk=vGjIrntn5QyP%2fIXY2Ei7Iiz4%2fy%2byXvP8I8j0XxemwjI%3d&risl=&pid=ImgRaw&r=0",
    author: "Vikram Sethi",
    proffection: "Chief Human Resources Officer, Global Dynamics",
    para: "UCU is cultivating the next generation of business leaders through practical, industry-focused learning.",
  },
  {
    videoUrl: "https://youtu.be/ulaQhIpWY98?si=O_Ofh6g_EBIawX-C",
    thumbnail: "https://th.bing.com/th/id/R.3bcbeff4ee0abb81ef150c9ea7e35730?rik=t3aMo1m4uUQi6g&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2010%2f05%2ffree-stock-photos-people_102217.jpg&ehk=vGjIrntn5QyP%2fIXY2Ei7Iiz4%2fy%2byXvP8I8j0XxemwjI%3d&risl=&pid=ImgRaw&r=0",
    author: "Vikram Sethi",
    proffection: "Chief Human Resources Officer, Global Dynamics",
    para: "UCU is cultivating the next generation of business leaders through practical, industry-focused learning.",
  },
];

function convertToEmbedUrl(url) {
  const videoId = url.split("youtu.be/")[1].split("?")[0];
  return `https://www.youtube.com/embed/${videoId}`;
}

function Aspirants() {
const [activeVideo, setActiveVideo] = useState(null);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
    });
  }, []);

  return (
<div className="asp-industry-container">
  <div
    className="d-flex flex-column flex-lg-column align-items-lg-center justify-content-lg-center"
    data-aos="fade-up"
  >
    <h1 className="display-4 fw-bold col-12 text-center">
      <span style={{ color: "#5ac501" }}>Aspirants & Parents </span> Speak
    </h1>
    <p className="sort-disc col-lg-6 text-center">
      Hear from our Aspirants, present students and their parents speak on
      the uniqueness of our programs and their outcomes.
    </p>
  </div>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="asp-industry-card-div"
      >
    {data.map((item, index) => (
    <SwiperSlide key={index}>
      <div
        key={index}
        className="asp-industry-card"
        data-aos="zoom-in"
        data-aos-delay={index * 200}
      >
        {activeVideo === index ? (
          <iframe
            className="asp-i-frame"
            src={convertToEmbedUrl(item.videoUrl)}
            title={item.author}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        ) : (
          <div
            className="asp-video-thumbnail-wrapper"
            onClick={() => setActiveVideo(index)}
          >
            <img
              src={item.thumbnail}
              alt={item.author}
              className="asp-participant-play-thumbnail"
            />
            <div className="asp-play-button-overlay">▶</div>
          </div>
        )}
        <p className="program-description">
          <strong>-{item.author}</strong>
        </p>
        <p className="program-description">{item.proffection}</p>
      </div>
      </SwiperSlide>
    ))}
    </Swiper>
</div>

  );
}

export default Aspirants;
