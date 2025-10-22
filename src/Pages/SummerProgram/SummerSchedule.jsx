import React from 'react'

function SummerSchedule() {
    return (
        <div className='captital-campus-content-sec my-4'>
            <h1 className='text-center'>Summer UCU Programs</h1>
            <p className='text-center'>Two Week Residential Program || Option to choose any one program</p>
            <div className='d-flex flex-lg-row flex-column'>
                <div className='Residential-programs-div' style={{backgroundColor:"#2f59bb"}}>
                    <p className='fs-5 fw-bold text-center'>Science, Technology</p>
                    <ul className=''>
                        <li className='mb-2'>AI and Data Science</li>
                        <li className='mb-2'>IOT and Robotics</li>
                        <li className='mb-2'>AR, VR, and Gaming</li>
                        <li className='mb-2'>Biology + Human Behavior + Life Sciences</li>
                        <li className='mb-2'>Quantum Computing</li>
                        <li className='mb-2'>Product Design Technology</li>
                    </ul>
                </div>

                
                <div className='Residential-programs-div' style={{backgroundColor:"#1535b4"}}>
                    <p className='fs-5 fw-bold text-center'>Economics, Finance & Business</p>
                    <ul>
                        <li className='mb-2'>AI and Data Science</li>
                        <li className='mb-2'>IOT and Robotics</li>
                        <li className='mb-2'>Biology + Human Behavior + Life Sciences</li>
                        <li className='mb-2'>Quantum Computing</li>
                        <li className='mb-2'>Product Design Technology</li>
                    </ul>
                </div>

                <div className='Residential-programs-div' style={{backgroundColor:"#0c0142"}}>
                    <p className='fs-5 fw-bold text-center'>Law, Literature, Media & Design</p>
                    <ul>
                        <li className='mb-2'>AI and Data Science</li>
                        <li className='mb-2'>IOT and Robotics</li>
                        <li className='mb-2'>AR, VR, and Gaming</li>
                        <li className='mb-2'>Biology + Human Behavior + Life Sciences</li>
                        <li className='mb-2'>Quantum Computing</li>
                        <li className='mb-2'>Product Design Technology</li>
                    </ul>
                </div>


            </div>
        </div>
    )
}

export default SummerSchedule