import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Industry.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { getAllIndustryIcon } from "../../Api/HomePageApi/IndustryIconsApi";
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
  const [ iconsData , setIconsData ] = useState([])

  useEffect(()=>{
    const fetchData = async() =>{
      try {
        const res = await getAllIndustryIcon()
        setIconsData(res.data || res)
        console.log("Iconsdata : ",res.data || res)
      } catch (error) {
        console.log("Failed to fetch data : ",error)
      }
    }
    fetchData()
  },[])
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <div className="industry-container">
      <div
        className="d-flex flex-column flex-lg-column align-items-lg-center justify-content-lg-center"
        data-aos="fade-up"
      >
        <h1 className="display-4 fw-bold col-12 text-center">
          <span style={{ color: "#5ac501" }}>Industry</span> Icons Speak
        </h1>
        <p className="sort-disc col-lg-6 text-center">
          Insights from top leaders shaping the future of business education at
          UCU.
        </p>
      </div>

      {/* ✅ Swiper Integration */}
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
        className="industry-card-div"
      >
        {iconsData.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="industry-card"
              data-aos="zoom-in"
              data-aos-delay={index * 200}
            >
              <iframe
                className="i-frame"
                src={convertToEmbedUrl(item.VideoUrl)}
                title={item.author}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p className="program-description">{item.authorDesc}</p>
              <p className="program-description">
                <strong>-{item.author}</strong>, {item.authorProf}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Industry;
