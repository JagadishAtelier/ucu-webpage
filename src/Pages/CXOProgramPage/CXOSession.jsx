import React from 'react'
const dataApply = [
    {
        image: "https://iimcoursesonline.com/iim-indore-chief-executive-officers-programme/desktop/images/calendar.png",
        text: "Sundays: ",
        time :"Session: 09:00 AM to 11:45 AM (IST)",
        break : "(With a break)"
    },
]
function CXOSession() {
    return (
        <div>
            <h3 className="text-center text-decoration-underline mb-3">Your Session Schedule</h3>

            <div className='d-grid'>
                <div className='row column-gap-3'>
                    {dataApply.map((item, index) => (
                        <div className='d-flex col-5 justify-content-center mx-auto cxo-program-grid'>
                            <div className='cxo-program-grid-image p-3 d-flex justify-content-center align-items-center'><img src={item.image} className='cxo-session-grid-img-tag' /></div>
                            <div className='cxo-program-grid-text p-3'>
                            <p className='mb-0 fw-bold'>{item.text}</p>
                            <p className='mb-0'>{item.time}</p>
                            <p className='mb-0'>{item.break}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <p className='text-center mt-3'>Please note: If required, some sessions will be conducted on a weekday for timely completion of the programme.</p>
        </div>
    )
}

export default CXOSession