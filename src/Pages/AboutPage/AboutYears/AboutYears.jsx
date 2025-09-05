import React from 'react'
import './AboutYears.css'
const data = [
    {
        head : "23 Yrs",
        para : "Transforming business education and shaping future leaders"
    },
    {
        head : "20K+",
        para : "Alumni across the world"
    },
    {
        head : "70+",
        para : "Faculty & Industry Mentors"
    },
    {
        head : "1",
        para : "Global Campus Network with growing collaborations"
    },
]
function AboutYears() {
  return (
    <div className='d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-start text-white text-center text-md-start py-4 px-3 p-md-5 p-lg-7 bg-darkblue'>
<div className="d-flex flex-column flex-md-row justify-content-md-between align-items-md-start w-100">
  {data.map((item, index) => (
    <div 
      key={index} 
      className={`col-12 col-md-3 d-flex flex-column gap-md-4 gap-3 flex-md-column text-gap-between align-items-center align-items-md-start px-0 px-md-3 position-relative ${
        index < data.length - 1 ? "with-divider" : ""
      }`}
    >
      <h1 className="fw-bold text-size">{item.head}</h1>
      <p className="fs-6 mb-0">{item.para}</p>
    </div>
  ))}
</div>



      
    </div>
  )
}

export default AboutYears
