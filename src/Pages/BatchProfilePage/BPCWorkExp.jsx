import React from 'react'

const leftData = [
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
]

const rightData = [
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
]
function BPCWorkExp() {
    return (
        <div className='captital-campus-content-sec mt-5'>
            <div className='d-flex gap-3 p-5 rounded'style={{backgroundColor:"#f6f6f8"}}>
                <div>
                    <h3>Work Experience (In Months)</h3>
                    <div className='d-grid mt-4'>
                        <div className='row gap-5 mx-auto justify-content-start'>
                            {leftData.map((item,index)=>(
                                <div className='BPC-work-left-content col-6'>
                                    <h1 className='fw-bold display-4'>{item.number}</h1>
                                    <p className='fw-bold fs-5'>{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                <div>
                    <h3>Industry Diversity</h3>
                    <div className='d-grid mt-4'>
                        <div className='row row-gap-4 mx-auto justify-content-center'>
                            {rightData.map((item,index)=>(
                                <div className='BPC-work-right-content d-flex flex-column gap-3 align-items-center col-4'>
                                    <div className='BPC-work-right-content-img-div'><img src={item.image}/></div>
                                    <p>{item.name}</p>
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