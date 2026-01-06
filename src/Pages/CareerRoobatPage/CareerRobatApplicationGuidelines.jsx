import React from 'react'
const data = [
    {
        text: "Candidates meeting the eligibility criteria can apply to UCU Chennai by completing an online form"
    },
    {
        text: "Candidates can choose to apply by any of the following methods:"
    },
    {
        text: "Visit the website  and fill in the online application form after making a payment of INR 1,500. The payment can be made online through net banking/debit/credit card."
    },
    {
        text: "The eventual application process is online for all candidates."
    },
    {
        text: "Candidates have to provide the official email-id of the recommender."
    },
]
function CareerRobatApplicationGuidelines() {
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

export default CareerRobatApplicationGuidelines