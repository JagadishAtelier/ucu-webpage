import React from 'react'
import './AboutPhil.css'
import bgImage from '../../../Assets/aboutPageImage/vision_mission_bg1.png'
import iconVision from '../../../Assets/aboutPageImage/vision.svg' // replace with actual icon
import iconMission from '../../../Assets/aboutPageImage/mission.svg' // replace with actual icon

const data = [
  {
    icon: iconVision,
    head: "Our Vision",
    para: `To be a globally recognised force in business education—democratising access, 
    bridging rural-urban divides, and empowering learners and educators through a curriculum 
    co-created and delivered by industry leaders and corporate practitioners, within a lifelong 
    learning ecosystem that redefines global teaching standards and prepares agile talent for 
    the future of work.`
  },
  {
    icon: iconMission,
    head: "Our Mission",
    para: (
      <>
        <ul className="mission-list text-lg-right">
          <li>To co-create and co-deliver cutting-edge, contemporary, and future-ready curricula in active collaboration with industry leaders, ensuring every learning experience is rooted in enterprise relevance and designed for real-world impact.</li>
          <li>To equip MBA aspirants and professionals with the skills and knowledge required to excel in a competitive business landscape.</li>
          <li>To accelerate academic transformation across partner institutions by empowering their faculty through development programs co-created and delivered with UCU’s expansive industry network—driving measurable upliftment in teaching outcomes and institutional performance.</li>
          <li>To champion inclusive education by leveraging advanced digital platforms that connect rural and urban learners to high-quality business education—unlocking potential, accelerating growth, and fostering a more equitable talent landscape.</li>
        </ul>
      </>
    )
  },
]

function AboutPhil() {
  return (
    <div
      data-aos="fade-up"
      className='aboutphil-container text-white p-3 p-lg-5'
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "60vh"
      }}
    >
      <div className="row w-100 justify-content-center">
        {data.map((item, index) => (
          <div
            key={index}
            className={`col-12 col-lg-12 d-flex flex-column align-items-center align-items-lg-start mb-4 px-3 ${
              index === 0 ? "text-left align-items-lg-start" : "text-right align-items-lg-start"
            }`}
            data-aos={index === 0 ? "fade-right" : "fade-left"}
          >
            <img src={item.icon} className="phil-icon-image mb-3" alt={item.head} />
            <h1 className="fw-bold fs-2 mb-3 text-center text-lg-start">{item.head}</h1>
            {typeof item.para === "string" ? (
              <p className="fs-6 mb-0 text-center text-lg-start">{item.para}</p>
            ) : (
              <div className="fs-6 text-center text-lg-right">{item.para}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutPhil
