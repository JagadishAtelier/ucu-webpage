import React from 'react'
import './AboutBrand.css'
import image1 from '../../../Assets/aboutPageImage/Deloitte.svg'
import image2 from '../../../Assets/aboutPageImage/amazon.svg'
import image3 from '../../../Assets/aboutPageImage/Tech Mahindra.svg'
import image4 from '../../../Assets/aboutPageImage/accenture.svg'
import image5 from '../../../Assets/aboutPageImage/tcs.svg'

const images = [
    image1,image2,image3,image4,image5
]
function AboutBrand() {
  return (
    <div className='bgBalck mx-md-5 mx-2 my-5 py-md-2 d-flex align-items-md-center justify-content-md-around'>
      {images.map((img,index)=>(
        <div key={index} className='abt-brand-logo'>
            <img src={img} className='abt-brand-logo-img'/>

        </div>
      ))}
    </div>
  )
}

export default AboutBrand
