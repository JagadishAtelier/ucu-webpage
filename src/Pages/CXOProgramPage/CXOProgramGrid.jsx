import React from 'react'

const dataApply = [
    {
        image: "https://iimcoursesonline.com/iim-indore-chief-executive-officers-programme/desktop/images/eligibility.png",
        text: "10+ years of full-time work experience.Diploma/Graduate/Post-graduate/equivalent degree with min. 50% marks."
    },
]

const data = [
    {
        image: "https://iimcoursesonline.com/iim-indore-chief-executive-officers-programme/desktop/images/work-team.png",
        text: "Learning with C-Suite professionals"
    },
    {
        image: "https://iimcoursesonline.com/iim-indore-chief-executive-officers-programme/desktop/images/work-team.png",
        text: "Learning with C-Suite professionals"
    },
    {
        image: "https://iimcoursesonline.com/iim-indore-chief-executive-officers-programme/desktop/images/work-team.png",
        text: "Learning with C-Suite professionals"
    },
    {
        image: "https://iimcoursesonline.com/iim-indore-chief-executive-officers-programme/desktop/images/work-team.png",
        text: "Learning with C-Suite professionals"
    },
    {
        image: "https://iimcoursesonline.com/iim-indore-chief-executive-officers-programme/desktop/images/work-team.png",
        text: "Learning with C-Suite professionals"
    },
    {
        image: "https://iimcoursesonline.com/iim-indore-chief-executive-officers-programme/desktop/images/work-team.png",
        text: "Learning with C-Suite professionals"
    },
]
function CXOProgramGrid() {
    return (
        <div className='captital-campus-content-sec cxo-program-grid-con'>
            <h3 className="text-center text-decoration-underline mb-3">Who Can Apply?</h3>

            <div className='d-grid'>
                <div className='row column-gap-3'>
                    {dataApply.map((item, index) => (
                        <div className='d-flex col-lg-5 justify-content-center mx-auto cxo-program-grid'>
                            <div className='cxo-program-grid-image p-3 d-flex justify-content-center align-items-center'><img src={item.image} className='cxo-program-grid-img-tag' /></div>
                            <p className='cxo-program-grid-text p-3 mb-0'>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>


            <h3 className="text-center text-decoration-underline mt-5 mb-3">What Are the Key Benefits?</h3>

            <div className='d-grid'>
                <div className='row row-gap-4'>
                    {data.map((item, index) => (
                        <div className='d-flex col-lg-4 col-md-6 justify-content-center mx-auto cxo-program-grid'>
                            <div className='cxo-program-grid-image p-3 d-flex justify-content-center align-items-center'><img src={item.image} className='' /></div>
                            <p className='cxo-program-grid-text p-3 mb-0 d-flex justify-content-center align-items-center'>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>


            <h3 className="text-center text-decoration-underline mt-5 mb-3">What to Expect?</h3>

            <p>This UCU’s Chief Executive Officers Programme (CEO Programme) equips you with the strategic thinking, leadership agility and industry perspective needed to lead at the C-suite level. The CEO course focuses on key areas such as operational efficiency, people management, digital marketing, ethical leadership and cross-cultural management.</p>
            <p>Delivered by the esteemed IIM Indore faculty through an interactive learning platform, ensuring a rigorous and practical experience, this is one of the best executive leadership training programmes.</p>
            <p>You will walk away with the skills to drive sustainable growth, foster innovation and build resilient, future-ready organisations. Join a cohort of like-minded senior professionals and take a decisive step towards your next executive leadership milestone.</p>
        </div>
    )
}

export default CXOProgramGrid