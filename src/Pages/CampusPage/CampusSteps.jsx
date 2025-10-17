import React from 'react'
const data = [
    {head : "Airports",
        para : "International Airport (T2): ~25-minute drive, Domestic Airport (T1): ~20-minute drive",
        image : "https://spjimr.co/wp-content/uploads/2025/05/right-arrow.png"
    },
    {head : "Airports",
        para : "International Airport (T2): ~25-minute drive, Domestic Airport (T1): ~20-minute drive",
        image : "https://spjimr.co/wp-content/uploads/2025/05/right-arrow.png"
    },
    {head : "Airports",
        para : "International Airport (T2): ~25-minute drive, Domestic Airport (T1): ~20-minute drive",
        image : "https://spjimr.co/wp-content/uploads/2025/05/right-arrow.png"
    },
    {head : "Airports",
        para : "International Airport (T2): ~25-minute drive, Domestic Airport (T1): ~20-minute drive",
        image : "https://spjimr.co/wp-content/uploads/2025/05/right-arrow.png"
    },
    {head : "Airports",
        para : "International Airport (T2): ~25-minute drive, Domestic Airport (T1): ~20-minute drive",
        image : "https://spjimr.co/wp-content/uploads/2025/05/right-arrow.png"
    },
    {head : "Airports",
        para : "International Airport (T2): ~25-minute drive, Domestic Airport (T1): ~20-minute drive",
        image : "https://spjimr.co/wp-content/uploads/2025/05/right-arrow.png"
    },
]
function CampusSteps() {
  return (
    <div className='captital-campus-content-sec my-5'>
        <h1>Everything you need, just steps away</h1>

            <div className='d-grid'>
            <div className='row row-gap-4'>
                {data.map((item,index)=>(
<div key={index} className='col-lg-4 col-12 col-md-6 campus-faculity-item-div mx-auto'>
              <div className='campus-faculity-image-div'>
                <img src={item.image} className='campus-faculity-image'/>
                <div>
                <p className='campus-explore-bottom-text'>{item.head}</p>
                <p className=''>{item.para}</p>
                  </div>
              </div>
            </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default CampusSteps