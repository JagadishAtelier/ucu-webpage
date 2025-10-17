import React from 'react'

const data = [
    { image : "https://www.spjimr.org/wp-content/uploads/2025/06/private-b-school-1.png",
        header : "#1-Univercity"
    },
    { image : "https://www.spjimr.org/wp-content/uploads/2025/06/placement-records-img.png",
        header : "100% Placement"
    },
    { image : "https://www.spjimr.org/wp-content/uploads/2025/06/corporate-hub-3.png",
        header : "Corporate hub access"
    },
    { image : "https://www.spjimr.org/wp-content/uploads/2025/06/global-dimension-4.png",
        header : "Global-dimension"
    },
    { image : "https://www.spjimr.org/wp-content/uploads/2025/06/alumni-network-5.png",
        header : "Alumni-network"
    },
    { image : "https://www.spjimr.org/wp-content/uploads/2025/06/societal-impact-6.png",
        header : "Societal-impact"
    },
]
function CampusChoose() {
  return (
    <div className='captital-campus-content-sec my-5'>
        <h1>Why choose UCU?</h1>
        <div className='d-grid mt-5'>
            <div className='row row-gap-5'>
                {data.map((item,index)=>(
                    <div className='d-flex gap-lg-4 gap-2 col-lg-4 col-md-4 col-6 align-items-center campus-choose-item'>
                        <img src={item.image} className='campus-choose-data-image'/>
                        <p className='m-0 campus-choose-data-text fw-normal'>{item.header}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default CampusChoose