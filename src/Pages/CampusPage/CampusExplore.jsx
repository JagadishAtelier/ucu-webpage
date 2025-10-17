import React from 'react'
const data = [
    {image : "https://www.spjimr.org/wp-content/uploads/2025/06/state-of-the-art-classroom.webp",
        text : "State-of-the-art learning spaces",
        hoverHead : "State-of-the-art learning spaces",
        hoverContent : "Equipped with advanced hybrid and non-hybrid classrooms, tutorial rooms, seminar halls, and laboratories, the campus facilitates immersive learning experiences."
    },
    {image : "https://www.spjimr.org/wp-content/uploads/2025/06/state-of-the-art-classroom.webp",
        text : "State-of-the-art learning spaces",
        hoverHead : "State-of-the-art learning spaces",
        hoverContent : "Equipped with advanced hybrid and non-hybrid classrooms, tutorial rooms, seminar halls, and laboratories, the campus facilitates immersive learning experiences."
    },
    {image : "https://www.spjimr.org/wp-content/uploads/2025/06/state-of-the-art-classroom.webp",
        text : "State-of-the-art learning spaces",
        hoverHead : "State-of-the-art learning spaces",
        hoverContent : "Equipped with advanced hybrid and non-hybrid classrooms, tutorial rooms, seminar halls, and laboratories, the campus facilitates immersive learning experiences."
    },
]
function CampusExplore() {
  return (
    <div className='captital-campus-content-sec my-5'>
        <h1 className='mb-4'>Explore student life at UCU</h1>
        <p>At UCU, participants lead clubs, host nationally recognised student fests, and celebrate festivals from across India. The campus buzzes with vibrant energy and reflects the rich cultural diversity of its community. These experiences provide students opportunities to pursue their passions, grow as leaders, and build meaningful connections. By engaging with alumni and industry experts, they gain real-world insights and forge lifelong bonds that extend well beyond the classroom.</p>
            <div className='d-grid'>
            <div className='row row-gap-4'>
                {data.map((item,index)=>(
<div key={index} className='col-lg-4 col-12 col-md-6 campus-faculity-item-div mx-auto'>
              <div className='campus-faculity-image-div'>
                <img src={item.image} className='campus-faculity-image'/>
                <p className='campus-explore-bottom-text'>{item.text}</p>
              </div>
            </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default CampusExplore