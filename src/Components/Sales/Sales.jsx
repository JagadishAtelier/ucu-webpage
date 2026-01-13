import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Sales.css";
import { useModal } from "../Context/ApplyModal/ModalContext";
import image1 from "../../Assets/ucu (1)/Rectangle 53.jpg";
import image2 from "../../Assets/ucu (1)/Rectangle 53-1.jpg";
import image3 from "../../Assets/ucu (1)/Rectangle 53-2.jpg";
import image4 from "../../Assets/ucu (1)/Rectangle 100.jpg";
import Aos from "aos";

const functionalData = [
  { image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2FsZXN8ZW58MHx8MHx8fDA%3D", heading: "Sales", para: `UCU’s Diploma Programs are crafted to be truly distinctive — designed to fast‑track careers by equipping learners with sharp, industry‑ready skills that deliver immediate impact.` },
  { image: "https://plus.unsplash.com/premium_photo-1690302394250-f3e7626a01b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHByb2R1Y3QlMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww", heading: "Product Management", para: `  Build, launch, and lead breakthrough products with cross-functional expertise and market-first thinking` },
  { image: "https://media.istockphoto.com/id/1435605327/photo/cybersecurity-concept-global-network-security-technology-business-people-protect-personal.webp?a=1&b=1&s=612x612&w=0&k=20&c=Reqkqf1qILOYmckRT5y1B9pL-hZuBWl1FbXTrWnoiGw=", heading: "Cyber Security", para: `Protect the digital frontier with cutting-edge skills in risk, resilience, and cyber intelligence` },
  { image: "https://media.istockphoto.com/id/2166193783/photo/data-analytics-team-meeting-at-night.webp?a=1&b=1&s=612x612&w=0&k=20&c=8rcZn4Dbs7qAE4jn8C2_NrED5R_XWJCJMWMFCJYYvpU=", heading: "Brand Management & Digital Marketing", para: ` Drive growth & enhance brand value in the digital age through data-led storytelling and performance marketing mastery  ` },
  { image: "https://images.unsplash.com/photo-1617906647113-0b8b7f262c6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fE1vYmlsaXR5fGVufDB8fDB8fHww", heading: "Mobility & Sustainability", para: `Shape the future of smart, sustainable ecosystems with innovation at the intersection of tech and impact` },
  { image: "https://media.istockphoto.com/id/2160707342/photo/making-decision-on-the-move.webp?a=1&b=1&s=612x612&w=0&k=20&c=UKdF7StmfHxqV5Tm7yaaq9QuP6iJKkYoS3H4nhGOox4=", heading: "Consulting", para: `Become a trusted advisor with analytical thinking, strategic insight, and boardroom-ready problem solving` },
  { image: "https://plus.unsplash.com/premium_photo-1661313667772-3cdc7bf2344e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFua2luZyUyMGFuZCUyMGZpbmFuY2V8ZW58MHx8MHx8fDA%3D", heading: "Banking & Finance", para: ` Navigate the banking & financial landscape with domain depth, regulatory fluency, and technology enabled thinking to spearhead value driven outcomes ` },
  { image: "https://plus.unsplash.com/premium_photo-1688821129380-75c32b3e5918?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVzaW5lc3MlMjBhbmFseXRpY3N8ZW58MHx8MHx8fDA%3D", heading: "Business Analytics", para: `Turn data into decisions with analytical tools that power business performance and strategic clarity` },
  { image: "https://media.istockphoto.com/id/2156388139/photo/hispanic-latin-american-couple-software-engineer-developer-use-computer-work-on-program.webp?a=1&b=1&s=612x612&w=0&k=20&c=TUOL-41O9o9XnQbLksRDeHjiKIv5scF-jTmOqkrEwLg=", heading: "Data Science & AI", para: `Harness the power of algorithms and AI to unlock insights, automate intelligence, and transform industries` },
];

const industryData = [
  {
    image: "https://media.istockphoto.com/id/866905356/photo/fintech-the-financial-technology.webp?a=1&b=1&s=612x612&w=0&k=20&c=R3ceaD5uN_QA_6_OGYQAt2xM5jYNXqCCMxQpIgUAKDs=",
    heading: "FinTech Genesis",
    para: `Lead the financial revolution with cutting-edge skills in digital finance, innovation, and tech-powered disruption
    `,
  },
  {
    image: "https://www.colliers.com/-/media/images/colliers/asia/india/research-images/2024/1536gccreport.ashx?bid=3dd61b5289dd4e2abf9a823864443392",
    heading: "GCC Launchpad",
    para: `Step into the engine room of global enterprises—mastering strategy, scale, and operational excellence across GCCs
    `,
  },
  {
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoY2FyZXxlbnwwfHwwfHx8MA%3D%3D",
    heading: "HealthTech Ignition",
    para: "A focused program that delves into the intricacies of modern logistics, procurement, and supply chain.",
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1683121716061-3faddf4dc504?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2VtaWNvbmR1Y3RvcnxlbnwwfHwwfHx8MA%3D%3D",
    heading: "Advanced Manufacturing",
    para: "Specialized program focused on financial technology and innovations.",
  },
  // {
  //   image: image2,
  //   heading: "Global Capability Centers (GCC)",
  //   para: "Intensive program for students preparing for careers in global shared services and business operations.",
  // },
  // {
  //   image: image3,
  //   heading: "Supply Chain Management & Logistics",
  //   para: "A focused program that delves into the intricacies of modern logistics, procurement, and supply chain.",
  // },
];

function Sales() {
  const [activeTab, setActiveTab] = useState("functional");
  const { showModal } = useModal();
  useEffect(() => {
    Aos.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  // const data = activeTab === "functional" ? functionalData : industryData;

  return (
    <div className="sales-container container-fluid my-lg-3 my-1">
      <div className="d-flex flex-lg-column flex-column align-items-lg-center justify-content-lg-center text-center mb-4">
        <h1 className="display-4 fw-bold col-12 col-lg-12 text-center">
          <span style={{ color: "#5ac501" }}>Executive Post Graduate</span> <br /> Certificate Programmes
        </h1>
        <p className="col-lg-6 text-center sort-disc">
          Explore our range of industry-focused programs designed to equip <br /> students with practical skills and career-ready expertise.
        </p>
      </div>
      {/* <div className="sales-tabs text-center mb-4">
        <button
          className={`tab-btn ${activeTab === "functional" ? "active" : ""}`}
          onClick={() => setActiveTab("functional")}
        >
          Functional (off-line)
        </button>
        <button
          className={`tab-btn ${activeTab === "industry" ? "active" : ""}`}
          onClick={() => setActiveTab("industry")}
        >
          Industry-Sector Specific Offerings
        </button>
      </div> */}
      <div>
        <h1 className="display-6 fw-bold col-12 col-lg-12 text-center">
          <span style={{ color: "#5ac501" }}>Domain </span> Specialization
        </h1>
      </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
        className="sales-swiper"
      >
        {functionalData.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="sales-item-div"
              data-aos="fade-up"
              data-aos-delay={index * 250}
            >
              <img src={item.image} alt={item.heading} />
              <div className="p-3 position-relative">
                <h1 className="mt-3">{item.heading}</h1>
                <p className="mb-3">{item.para}</p>
                <div className="car-explore-btn-div sales-btn p-1">
                  <button className="car-explore-btn expo-btn btn btn-outline-dark">
                    EXPLORE
                  </button>
                  <button onClick={() => showModal("apply")} className="car-apply-btn expo-btn">APPLY NOW</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div>
        <h1 className="display-6 fw-bold col-12 col-lg-12 text-center mt-lg-4 mt-3">
          <span style={{ color: "#5ac501" }}>Career Lane </span> Specialization
        </h1>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
        className="sales-swiper"
      >
        {industryData.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="sales-item-div"
              data-aos="fade-up"
              data-aos-delay={index * 250}
            >
              <img src={item.image} alt={item.heading} />
              <div className="p-3 position-relative">
                <h1 className="mt-3">{item.heading}</h1>
                <p className="mb-3">{item.para}</p>
                <div className="car-explore-btn-div sales-btn p-1">
                  <button className="car-explore-btn expo-btn btn btn-outline-dark">
                    EXPLORE
                  </button>
                  <button onClick={() => showModal("apply")} className="car-apply-btn expo-btn">APPLY NOW</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Sales;
