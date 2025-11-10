import React from 'react'

import bgImage from '../../Assets/EEPage/advan-bg.png'
import { Button } from 'react-bootstrap'

import pointImage from '../../Assets/EEPage/bullet-blue.svg'

const data = [
    {
        image: pointImage,
        text: "Globally Renowned Faculty"
    },
    {
        image: pointImage,
        text: "Research-backed Thought Leadership"
    },
    {
        image: pointImage,
        text: "Deep Expertise in Emerging Markets"
    },
    {
        image: pointImage,
        text: "Future-ready Perspectives"
    },
    {
        image: pointImage,
        text: "Transformational Learning Experience"
    },
    {
        image: pointImage,
        text: "Executive Benefits"
    },
]
function EEPAdvantage() {
    return (
        <div
            data-aos="fade-down"
            className="hero-section d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start text-white text-center text-lg-start p-3 p-lg-5"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "40vh",
            }}
        >
            <div className="w-100 w-lg-75 w-lg-50 ms-lg-5" data-aos="fade-right">
                <h3 className="fw-bold fs-2 fs-lg-1">UCU Advantage</h3>
                <p>Learn from UCU's distinguished faculty, collaborate and network with senior executives from across industries and sectors. Develop business insights from the university's cutting-edge thought leadership and strengthen your ability to be future ready.</p>
                <Button className="mt-3 px-5" style={{ backgroundColor: "#5ac501", border: "none" }}>
                    Search
                </Button>
                <div className='d-flex flex-lg-row flex-column gap-lg-1 gap-4 mt-5'>
                    <div className='d-grid col-lg-6 col-12'>
                        <div className='row gap-column-3 row-gap-3 row-gap-lg-0'>
                            {data.map((item, index) => (
                                <div className='col-lg-5 col-md-6 col-12 d-flex align-items-start gap-2'>
                                    <img src={item.image} />
                                    <p className='mb-0 text-start'>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='col-12'>
                        <img src='https://images.isb.edu/is/image/isbprod/isb-advantage-home-page?fmt=webp&qlt=100,0&resMode=sharp2&op_usm=1.75,0.3,2,0&version=1762749148467' style={{borderRadius:"10px"}} className='col-12 col-lg-5' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EEPAdvantage