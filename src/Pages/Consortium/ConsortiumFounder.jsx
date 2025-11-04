import React from 'react'
import { RiDoubleQuotesR } from 'react-icons/ri'

function ConsortiumFounder() {
  return (
    <div className='captital-campus-content-sec consortium-founder-container'>
        <div className=''>
            
            <div className='card-consortium-founder position-relative'>
                <RiDoubleQuotesR className='quotes-consortium'/>
                <img src='/founder.jpg' className='consortium-founder-image'/>
                <p className='col-7'>At UCU, we envisioned the Consortium as more than a platform—it is a living ecosystem where institutions, corporates, and students converge to create shared advancement. By strengthening pedagogy and research, unlocking access to high-potential talent, and opening doors to careers and networks, the Consortium fosters a cycle of collaboration, innovation, and impact. It is our commitment to seamlessly connect education, enterprise, and employability for a stronger future.</p>

            </div>
            <div className='d-flex justify-content-end my-4 col-11'>
                <p className='fw-bold consortium-founder-name'>Dr. M Balaji (BALA)</p>
                
                <p className='ps-2'> Founder & Chairman, UCU Chennai & CEO, UCU Consortium</p>
            </div>
        </div>
    </div>
  )
}

export default ConsortiumFounder