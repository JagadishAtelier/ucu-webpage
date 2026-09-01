import React from 'react'

const defaultWorkExp = [
    {
        number: "70%",
        name: "Freasher"
    },
    {
        number: "13%",
        name: "1-12"
    },
    {
        number: "12%",
        name: "13-24"
    },
    {
        number: "5%",
        name: "24+"
    },
];

const defaultIndustryDiversity = [
    {
        image: "https://cdn-icons-png.freepik.com/256/7771/7771656.png?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_white_label",
        name: "BFSI"
    },
    {
        image: "https://cdn-icons-png.freepik.com/256/12210/12210340.png?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_white_label",
        name: "Consulting"
    },
    {
        image: "https://cdn-icons-png.freepik.com/256/2415/2415292.png?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_white_label",
        name: "E commerece"
    },
    {
        image: "https://cdn-icons-png.freepik.com/256/1940/1940611.png?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_white_label",
        name: "Education"
    },
    {
        image: "https://cdn-icons-png.freepik.com/256/7771/7771656.png?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_white_label",
        name: "BFSI"
    },
    {
        image: "https://cdn-icons-png.freepik.com/256/12210/12210340.png?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_white_label",
        name: "Consulting"
    },
    {
        image: "https://cdn-icons-png.freepik.com/256/2415/2415292.png?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_white_label",
        name: "E commerece"
    },
    {
        image: "https://cdn-icons-png.freepik.com/256/1940/1940611.png?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_white_label",
        name: "Education"
    },
    {
        image: "https://cdn-icons-png.freepik.com/256/7771/7771656.png?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_white_label",
        name: "BFSI"
    },
];

function BPCWorkExp({ getKeyValue, getArray }) {
    const kv = (key, fallback) => (getKeyValue ? getKeyValue("BPCWorkExp", key, fallback) : fallback);
    const arr = (key, fallback) => (getArray ? getArray("BPCWorkExp", key, fallback) : fallback);

    const titleLeft = kv("titleLeft", "Work Experience (In Months)");
    const titleRight = kv("titleRight", "Industry Diversity");

    const workExpData = arr("workExpData", defaultWorkExp);
    const industryDiversityData = arr("industryDiversityData", defaultIndustryDiversity);

    return (
        <div className='captital-campus-content-sec mt-5'>
            <div className='d-flex flex-lg-row flex-column gap-lg-3 gap-5 p-lg-5 py-4 rounded' style={{backgroundColor:"#f6f6f8"}}>
                <div className="flex-1 w-100">
                    <h3 className='text-center text-lg-start'>{titleLeft}</h3>
                    <div className='d-grid mt-4'>
                        <div className='row gap-5 mx-auto justify-content-lg-start justify-content-center'>
                            {workExpData.map((item,index)=>(
                                <div key={index} className='BPC-work-left-content col-lg-5 col-12'>
                                    <h1 className='fw-bold display-4'>{item.number}</h1>
                                    <p className='fw-bold fs-5'>{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex-1 w-100">
                    <h3 className='text-center text-lg-start'>{titleRight}</h3>
                    <div className='d-grid mt-4'>
                        <div className='row row-gap-4 mx-auto justify-content-center'>
                            {industryDiversityData.map((item,index)=>(
                                <div key={index} className='BPC-work-right-content d-flex flex-column gap-3 align-items-center col-4'>
                                    <div className='BPC-work-right-content-img-div'>
                                      <img src={item.image} alt={item.name} />
                                    </div>
                                    <p className="text-center text-xs mt-1">{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BPCWorkExp