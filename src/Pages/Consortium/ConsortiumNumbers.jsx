import React from 'react'

const defaultStats = [
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
];

function ConsortiumNumbers({ getKeyValue, getArray }) {
    const kv = (key, fallback) => (getKeyValue ? getKeyValue("ConsortiumNumbers", key, fallback) : fallback);
    const arr = (key, fallback) => (getArray ? getArray("ConsortiumNumbers", key, fallback) : fallback);

    const mainTitle = kv("mainTitle", "UCU Consortium By The Numbers");
    const subtitle = kv("subtitle", "Our facts and figures are a testament to our efforts to drive impactful change:");
    
    const leftStatNum1 = kv("leftStatNum1", "20,000+");
    const leftStatText1 = kv("leftStatText1", "Leading academicians & industry professionals");
    
    const leftStatNum2 = kv("leftStatNum2", "2000");
    const leftStatText2 = kv("leftStatText2", "CXOs associated with us");

    const stats = arr("statsData", defaultStats);

    return (
        <div className='captital-campus-content-sec my-4'>
            <div className='consortium-number-div'>
                <div className='consortium-number-div-left'>
                    <h1 className='text-uppercase col-10 mx-auto display-5 fw-bold'>{mainTitle}</h1>
                    <p className='col-10 mx-auto text-white'>{subtitle}</p>
                    <div className='col-10 mx-auto left-consotium-number'>
                        <p className='fs-2 mb-0 ps-3 fw-bold'>{leftStatNum1} </p>
                        <p className='left-consotium-number-p2 ps-3 text-white'>{leftStatText1}</p>
                    </div>
                    <div className='col-10 mx-auto left-consotium-number mt-4'>
                        <p className='fs-2 mb-0 ps-3 fw-bold'>{leftStatNum2} </p>
                        <p className='left-consotium-number-p2 ps-3 text-white'>{leftStatText2}</p>
                    </div>
                </div>
                <div className='consortium-number-image-div position-relative d-flex align-items-center'>
                    <div className='d-grid consortium-numberr-grid '>
                        <div className='row row-gap-3 gap-2'>
                            {stats.map((item, index) => (
                                <div key={index} className='consortium-number-container col-lg-5 p-lg-3 p-md-3 p-2 text-center text-md-start text-lg-start'>
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