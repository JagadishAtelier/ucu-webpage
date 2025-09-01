import React from 'react'
import './AnnoncementSection.css'
const announceData = [
    {
        text:"Universal Corporate University (UCU) unveils its Global Industry & Leadership Excellence Center  a hub for industry-led learning, leadership growth, and collaborative research. Where knowledge meets opportunity, UCU prepares you to lead in a competitive world."
    }
]
function AnnoncementSection() {
  return (
    <div className='Announcement-container'>
      <h1>Announcement</h1>
      <div  className='Announcement-arrow-icons'>
      <i class="bi bi-chevron-left"></i>
      <i class="bi bi-chevron-right"></i>
        </div>
        {announceData.map((data,index)=>(
            <div key={index}  className='Announcement-para'>
                <p>{data.text}</p>
            </div>
        ))}
    </div>
  )
}

export default AnnoncementSection
