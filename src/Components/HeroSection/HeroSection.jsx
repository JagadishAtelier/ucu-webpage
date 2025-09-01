import React from 'react'
import './HeroSection.css'
import image from '../../Assets/WhatsApp Image 2025-09-01 at 10.11.41_c995dc02.jpg'
import AnnoncementSection from '../AnnoncementSection/AnnoncementSection'
const heroData = [
    {
        header : "Shaping Leaders For The Corporate World",
        para : "At Universal Corporate University (UCU), we blend academic excellence with real-world corporate insights to create industry-ready leaders",
        images :image,
    }
]
function HeroSection() {
  return (
    <>
    <div className='hero-section-container'>
{heroData.map((data, index) => (
  <div key={index} className='her0-section-data-div'>
    <div className='hero-section-left'>
        <h1>{data.header}</h1>
        <div className='hero-para-line-div'>
            <div className='vertical-line'></div>
            <p>{data.para}</p>
        </div>
        <div className="hero-btn">
            <button className='hero-section-apply-btn'>APPLY NOW</button>
            <button className='hero-section-download-btn'>DOWNLOAD BROCHURE</button>
        </div>
    </div>
    <div className='hero-image'>
        <img src={data.images}/>
    </div>
  </div>
))}

    </div>
<AnnoncementSection/>
    </>
  )
}

export default HeroSection
