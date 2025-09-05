import React from 'react'
import './AboutPhil.css'
import bgImage from '../../../Assets/aboutPageImage/image-ucu.svg'
import icon1 from '../../../Assets/aboutPageImage/Our Philosophy-ucu.svg'
import icon2 from '../../../Assets/aboutPageImage/ucu-principle-icon.svg'
import icon3 from '../../../Assets/aboutPageImage/key of success_icon.svg'
const data = [
    {
        icon : icon1,
        head : "Our Philosophy",
        para : "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence."
    },
    {
        icon : icon2,
        head : "UCU's Principle",
        para : "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence."
    },
    {
        icon: icon3,
        head : "Key Of Success",
        para : "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence."
    },
]
function AboutPhil() {
  return (
    <div className='d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-start text-white text-center text-md-start p-3 p-md-5 p-lg-7'
        style={{
            backgroundImage : `url(${bgImage})`,
            backgroundPosition : "center",
            backgroundSize : "cover",
            backgroundRepeat : "no-repeat",
            minHeight : "60vh"

        }}
    >
<div className="d-flex flex-column flex-md-row justify-content-md-between align-items-md-start w-100">
  {data.map((item, index) => (
    <div 
      key={index} 
      className={`col-12 col-md-4 d-flex flex-column flex-md-column align-items-center align-items-md-start px-0 px-md-3 position-relative ${
        index < data.length - 1 ? "with-divider" : ""
      }`}
    >
      <img src={item.icon} className="phil-icon-image mb-2" alt={item.head} />
      <h1 className="fw-bold fs-2 mb-2">{item.head}</h1>
      <p className="fs-6 mb-0">{item.para}</p>
    </div>
  ))}
</div>



      
    </div>
  )
}

export default AboutPhil
