import React from 'react'
import './CareerSection.css'
import image1 from '../../Assets/ucu (1)/Rectangle 43.jpg'
import image2 from '../../Assets/ucu (1)/Rectangle 45.jpg'
const data = [
    {
        image : image1,
        heading : "PGDM – Post Graduate Diploma in Management",
        para : "A 2-year MBA program designed for fresh graduates (0–3 years of experience) to build strong management foundations and launch successful careers.",
    },
    {
        image : image2,
        heading : "PGPM – Post Graduate Program in Management",
        para : "A 1-year fast-track MBA program for professionals with 3+ years of experience, focused on leadership, strategic thinking, and global business readiness.",
    }
]
function CareerSection() {
  return (
    <div className='car-container'>
      <div className='car-heading-text'>
        <h1>Programs Designed for Every Career Stage</h1>
        <p>Discover UCU’s industry-aligned programs that prepare you for leadership, innovation, and career growth.</p>
      </div>

      <div className='car-data-div'>
        {data.map((item,index)=>(
            <div className='car-item-div' key={index}>
                <img src={item.image}/>
                <div className='car-right'>
                    <h1>{item.heading}</h1>
                    <p>{item.para}</p>
                    <div className = 'car-explore-btn-div'>
                    <button className='car-explore-btn'>EXPLORE PGDM</button>
                    <button className='car-apply-btn'>APPLY NOW</button>
                    </div>
                </div>
            </div>

        ))}
      </div>
    </div>
  )
}

export default CareerSection
