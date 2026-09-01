import React from 'react'
import { RiDoubleQuotesR } from 'react-icons/ri'

function ConsortiumFounder({ getKeyValue, getImage }) {
  const kv = (key, fallback) => (getKeyValue ? getKeyValue("ConsortiumFounder", key, fallback) : fallback);
  const img = (index, fallback) => (getImage ? getImage("ConsortiumFounder", index, fallback) : fallback);

  const founderImage = img(0, '/founder.jpg');
  const founderName = kv("founderName", "Dr. M Balaji (BALA)");
  const founderTitle = kv("founderTitle", "Founder & Chairman, UCU Chennai & CEO, UCU Consortium");
  const quote = kv("quote", "At UCU, we envisioned the Consortium as more than a platform—it is a living ecosystem where institutions, corporates, and students converge to create shared advancement. By strengthening pedagogy and research, unlocking access to high-potential talent, and opening doors to careers and networks, the Consortium fosters a cycle of collaboration, innovation, and impact. It is our commitment to seamlessly connect education, enterprise, and employability for a stronger future.");

  return (
    <div className='captital-campus-content-sec consortium-founder-container'>
      <div className=''>
        <div className='card-consortium-founder position-relative'>
          <RiDoubleQuotesR className='quotes-consortium d-lg-block d-none' />
          <img src={founderImage} className='consortium-founder-image' alt={founderName} />
          <div className='d-flex flex-column mt-2 col-12 d-lg-none d-block'>
            <p className='fw-bold m-0 pt'>{founderName}</p>
            <p className='m-0 pt'>{founderTitle}</p>
          </div>
          <p className='col-lg-7 pt'>{quote}</p>
        </div>
        <div className='justify-content-end my-4 col-11 d-lg-flex d-none'>
          <p className='fw-bold consortium-founder-name'>{founderName}</p>
          <p className='ps-2'>{founderTitle}</p>
        </div>
      </div>
    </div>
  )
}

export default ConsortiumFounder