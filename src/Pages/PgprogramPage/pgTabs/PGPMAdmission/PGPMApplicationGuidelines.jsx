import React from 'react'
const data = [
    {
        text: "Candidates meeting the eligibility criteria can apply to UCU Institute of Management by completing an online form"
    },
    {
        text: "Candidates can choose to apply by any of the following methods:"
    },
    {
        text: "Visit the website www.greatlakes.edu.in and fill in the online application form after making a payment of INR 2,200. Candidates have the option of either applying to UCU, Chennai and UCU, Gurgaon campuses separately or for both the campuses through the common application form by selecting the appropriate option in the registration form"
    },
    {
        text: "The eventual application process is online for all candidates"
    },
    {
        text: "CCandidates have to provide the official email-id of the recommender."
    },
]
function PGPMApplicationGuidelines() {
    return (
        <div className='mt-5'>
            <h2>Application Guidelines</h2>
            <div className='mt-4'>
                {data.map((item, index) => (
                    <div className='d-flex gap-3 align-items-baseline mb-2'>
                        <div className="green-point-box p-2"></div>
                        <p className='mb-0'>{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PGPMApplicationGuidelines