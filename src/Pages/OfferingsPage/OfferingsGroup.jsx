import React from 'react'

const data = [
    {
        image : "https://cdn-icons-png.freepik.com/256/2083/2083219.png?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_white_label",
        head : "Digital & AI Learning Labs",
        para : "AR/VR/AI-driven experiential education."
    },
    {
        image : "https://cdn-icons-png.freepik.com/256/2973/2973250.png?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_white_label",
        head : "Innovation & Incubation Cells",
        para : "Startup mentoring and funding pathways."
    },
    {
        image : "https://cdn-icons-png.freepik.com/256/11112/11112923.png?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_white_label",
        head : "Community Talent Projects",
        para : "Student–SME–NGO collaborations."
    },
    {
        image : "https://cdn-icons-png.freepik.com/256/14208/14208084.png?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_white_label",
        head : "Regional Knowledge Observatory",
        para : "Data repository on institutional innovation."
    },
]
function OfferingsGroup() {
  return (
    <div className='captital-campus-content-sec mt-5'>
        <h1>Academic Accelerator Plus Extensions</h1>
        <div className='d-grid mt-3'>
            <div className='row gap-2'>
                {data.map((item,index)=>(
                    <div className='col-12 col-md-6 col-lg-3 d-flex flex-column gap-3 align-items-center text-center og-blue-box p-3'>
                        <img src={item.image} className='og-image'/>
                        <p className='mb-0 fw-bold'>{item.head}</p>
                        <p className='mb-0 og-para-color'>{item.para}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default OfferingsGroup