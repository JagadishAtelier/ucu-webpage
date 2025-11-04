import React from 'react'

const data = [
    {
        num: "80+",
        text: "Leading Fortune 500 corporate partners"
    },
    {
        num: "1200+",
        text: "Current students"
    },
    {
        num: "1",
        text: "Mission"
    },
    {
        num: "21",
        text: "Say X Empanelled Schools"
    },
    {
        num: "700+",
        text: "Annual incoming students"
    },
    {
        num: "59",
        text: "Years of service"
    },
]
function ConsortiumNumbers() {
    return (
        <div className='captital-campus-content-sec my-4'>
            <div className='consortium-number-div'>
                <div className='consortium-number-div-left'>
                    <h1 className='text-uppercase col-10 mx-auto'>UCU Consortium By The Numbers</h1>
                    <p className='col-10 mx-auto'>Our facts and figures are a testament to our efforts to drive impactful change:</p>
                    <div className='col-10 mx-auto left-consotium-number'>
                        <p className='fs-2 mb-0 ps-3 fw-bold'>20,000+ </p>
                        <p className='left-consotium-number-p2 ps-3'>Leading academicians & industry professionals
                        </p>
                    </div>
                    <div className='col-10 mx-auto left-consotium-number mt-4'>
                        <p className='fs-2 mb-0 ps-3 fw-bold'>2000 </p>
                        <p className='left-consotium-number-p2 ps-3'> CXOs associated with us</p>
                    </div>
                </div>
                <div className='consortium-number-image-div position-relative'>
                    <img src='https://cgsm.org/wp-content/uploads/2023/12/52973348930_ea9a52cd24_o-3-resized-min.jpg' className='consortium-number-image' />
                    <div className='d-grid consortium-numberr-grid'>
                        <div className='row row-gap-3 gap-2'>
                            {data.map((item, index) => (
                                <div className='consortium-number-container col-lg-5 p-lg-3 p-md-3 p-2 text-center text-md-start text-lg-start'>
                                    <p className='fs-2 mb-0 ps-lg-3 fw-bold'>{item.num}</p>
                                    <p className='ps-lg-3 mb-0'>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConsortiumNumbers