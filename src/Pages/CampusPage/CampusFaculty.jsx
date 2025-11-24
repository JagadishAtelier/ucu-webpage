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
function CampusFaculty() {
  return (
    <div className='captital-campus-content-sec'>
        <h1 className='mb-4 display-5 fw-bold' style={{color:"#5ac501"}}>Facilities</h1>
        <div className='d-grid'>
            <div className='row row-gap-4'>
                {data.map((item,index)=>(
<div key={index} className='col-lg-4 col-12 col-md-6 campus-faculity-item-div'>
              <div className='campus-faculity-image-div'>
                <img src={item.image} className='campus-faculity-image'/>
                                <div className='campus-faculity-image-overlay'></div>
                {/* Overlay content */}
                <div className='campus-faculity-hover-overlay'>
                  <p className='campus-faculity-hover-head'>{item.hoverHead}</p>
                  <p className='campus-faculity-hover-content'>{item.hoverContent}</p>
                </div>

                <p className='campus-faculity-bottom-text'>{item.text}</p>
              </div>
            </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default CampusFaculty