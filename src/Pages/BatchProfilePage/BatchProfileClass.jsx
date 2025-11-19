import React from 'react'

const data = [
    {
        image : "https://cdn-icons-png.freepik.com/256/15887/15887697.png?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_white_label",
        head : "1.3 Years",
        para : "Average Experience"
    
    },
    {
        image : "https://cdn-icons-png.freepik.com/256/11531/11531392.png?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_white_label",
        head : "22 Years",
        para : "Average Age"
    },
    {
        image : "https://cdn-icons-png.freepik.com/256/53/53125.png?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_white_label",
        head : "72%",
        para : " Male"
    
    },
    {
        image : "https://cdn-icons-png.freepik.com/256/53/53176.png?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_white_label",
        head : "28%",
        para : "Female"
    
    },
]
function BatchProfileClass() {
  return (
    <div className='captital-campus-content-sec mt-4'>
        <h1>PGDM Class Profile 2023-25</h1>
        <p>The PGDM program is for fresh graduates and young professionals with less than 3 years of work experience, with a proven academic track record. The PGDM Class of 2025 consists of close to 70% freshers and 30% students with up to 36 months’ experience. The cohort is highly diverse with students coming from various undergraduate backgrounds and industries like BFSI, Consulting, E-Commerce, Healthcare, Education, etc., which adds immensely to classroom learning and discussions.</p>
        <h3>Demographics</h3>
        <div className='d-grid mt-4'>
            <div className='row row-gap-5'>
                {data.map((item,index)=>(
                    <div className='d-flex gap-3 align-items-center justify-content-lg-center justify-content-start col-lg-3 col-md-6'>
                        <img src={item.image} className='BPC-icons'/>
                        <div>
                        <h1 className='mb-0'>{item.head}</h1>
                        <p className='mb-0'>{item.para}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default BatchProfileClass