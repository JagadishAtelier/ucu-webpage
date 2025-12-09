import React from 'react'
import WhyPgpmSection from './WhyPgpmSection'
import './PGPMCurricullam.css'
import RevampedSec from './RevampedSec'
import PGPMSpecification from './PGPMSpecification'
import PGPMConcentrate from './PGPMConcentrate'
const data = [
    {
        head: "Communicate with Impact & Lead with Confidence",
        text: "Graduates excel in communication and leadership, effectively managing teams and driving organizational success."
    },
    {
        head: "Make Data-Driven Decisions and Leverage Disruptive Technologies",
        text: "Graduates turn data into insights, utilizing tools like Generative AI to innovate and solve modern business challenges."
    },
    {
        head: "Adapt to Global Trends, Innovate and Drive Change",
        text: "Graduates navigate global trends, lead cross-cultural teams, and foster innovation to drive organizational growth."
    },
    {
        head: "Incorporate Sustainability and Ethics",
        text: "Graduates prioritize sustainability and ethical decision-making, shaping them into responsible leaders of tomorrow."
    },
]
function PGPMCurricullam() {

    return (
        <div>
            <h1 className='display-5 fw-bold'><span style={{color:"#5ac501"}}>PGPM 2.0,</span> India’s Most Innovative and Industry Focused Curriculum</h1>
            <p className='pt'>The UCU PGPM has been among top ranked one year MBA programs in the country since its inception. This year the program has been meticulously redesigned to stay ahead of industry needs, ensuring that young professionals like you are equipped to lead in an ever-changing business landscape.</p>
            <h2 className='mt-4'>As a PGPM graduate from UCU, you will be able to:</h2>
            <div className='mt-4'>
            {data.map((item, index) => (
                <div className='d-flex gap-3 align-items-baseline'>
                    <div className="green-point-box p-2"></div>
                    <div>
                        <p className='mb-1 fw-bold'>{item.head}</p>
                        <p>{item.text}</p>
                    </div>
                </div>
            ))}
            </div>
            <WhyPgpmSection/>
            <RevampedSec/>
            {/* <PGPMSpecification/> */}
            <PGPMConcentrate/>
        </div>
    )
}

export default PGPMCurricullam