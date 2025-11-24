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
    <div className='captital-campus-content-sec'>
        <h1 className='display-5 fw-bold'>Everything you need, <span style={{color:"#5ac501"}}>just steps away</span></h1>
        <div className='d-grid mt-5 '>
            <div className='row row-gap-lg-4 row-gap-md-5 row-gap-3'>
                {data.map((item,index)=>(
                    <div className='d-flex gap-lg-2 gap-2 col-lg-4 col-md-4 col-12 align-items-start campus-choose-item'>
                        <img src={item.image} className='campus-steps-data-image mt-1'/>
                        <div>
                        <p className='campus-choose-data-text fw-normal'>{item.head}</p>
                        <p className='m-0 fs-6 text-medium'>{item.para}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default CampusSteps