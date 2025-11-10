import React from 'react'

const data = [
    {
        number : "#1",
        text : "Ranking in India Financial Times"
    },
    {
        number : "650+",
        text : "Programmes delivered"
    },
    {
        number : "50k+",
        text : "Future leaders groomed"
    },
]
function EEPRanking() {
    return (
        <div
            data-aos="fade-down"
            className="hero-section d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-center text-white text-center text-lg-start p-3 p-lg-5 mt-4"
            style={{
                backgroundImage: `url(	https://execed.isb.edu/content/dam/sites/cee/images/data-metrics-bg.webp)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "40vh",
            }}
        >
            <div className="" data-aos="fade-right">
                <div className='d-grid'>
                    <div className='row column-gap-3 row-gap-5 py-4 py-lg-0'>
                        {data.map((item,index)=>(
                            <div className='d-flex flex-column gap-3 col-lg-3 col-12 text-center mx-auto'>
                                <h1 className='mb-0'>{item.number}</h1>
                                <h4 className='mb-0'>{item.text}</h4>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default EEPRanking