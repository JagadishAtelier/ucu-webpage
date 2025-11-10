import React from 'react'
import { Button } from 'react-bootstrap';
const data = [
    {
        image:
            "https://img.freepik.com/free-vector/abstract-low-polygonal-graduation-cap-planet-earth-globe-model-map-e-learning-concept_127544-1106.jpg?w=740&q=80",
        head: "For Individuals",
        para: "Programmes designed to address the growth and development needs of executives.",
    },
    {
        image:
            "https://img.freepik.com/free-vector/illustration-business-people_53876-18375.jpg?w=740&q=80",
        head: "For Enterprises",
        para: "Solutions crafted to suit your organisation’s development goals.",
    },
    {
        image:
            "https://img.freepik.com/free-vector/education-background-design_1300-10.jpg?w=740&q=80",
        head: "For Public Sector",
        para: "Focused programmes for government and public sector enterprises to drive impact and create change.",
    },
];
function EEPJourney() {
    return (
        <div className='captital-campus-content-sec mt-4'>
            <h3>Transformational learning journeys designed to equip executives across multiple business areas.</h3>
            <div className="container offerings-container mt-5">
                <div className="row g-4">
                    {data.map((item, index) => (
                        <div className="col-lg-4 col-md-6 col-sm-12 mx-auto" key={index}>
                            <div className="offer-card shadow-sm h-100 text-center">
                                <h3 className="eep-journey-head fw-bold mb-0">{item.head}</h3>
                                <img
                                    src={item.image}
                                    alt={item.head}
                                    className="eep-journey-image"
                                />
                                <div className="d-flex justify-content-between flex-column text-start p-3">
                                    <p>{item.para}</p>
                                    <Button className='position'>Know more</Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EEPJourney