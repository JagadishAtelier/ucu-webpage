import React from 'react'
import './Sales.css'
import image1 from '../../Assets/ucu (1)/Rectangle 53.jpg'
import image2 from '../../Assets/ucu (1)/Rectangle 53-1.jpg'
import image3 from '../../Assets/ucu (1)/Rectangle 53-2.jpg'
import image4 from '../../Assets/ucu (1)/Rectangle 100.jpg'
const data = [
    {
        image : image1,
        heading : "Diploma in Cybersecurity",
        para : "Hands-on training for students aiming to enter the high-demand field of data security and digital protection.",
    },
    {
        image : image2,
        heading : "Diploma in GCC (Global Capability Centres)",
        para : "Specialized course to prepare talent for careers in multinational shared service and operations hubs.",
    },
    {
        image : image3,
        heading : "Diploma in AI & Product Management",
        para : "Future-focused program on artificial intelligence applications and product lifecycle leadership.",
    },
]
function Sales() {
  return (
    <div className='sales-container'>
      <div className='car-heading-text'>
        <h1>Diploma in Sales</h1>
        <p>6-month program for undergraduates eager to build careers in business development and client engagement.</p>
      </div>

      <div className='sales-data-div'>
        {data.map((item,index)=>(
            <div key={index} className='sales-item-div'>
                <img src={item.image}/>
                <h1>{item.heading}</h1>
                <p>{item.para}</p>
                <div className = 'car-explore-btn-div sales-btn'>
                    <button className='car-explore-btn expo-btn'>EXPLORE PGDM</button>
                    <button className='car-apply-btn expo-btn'>APPLY NOW</button>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Sales
