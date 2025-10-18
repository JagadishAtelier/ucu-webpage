import React from 'react'
import { BsInstagram, BsLinkedin, BsTwitterX, BsYoutube } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'

function SocietalStep() {
  return (
    <div className='captital-campus-content-sec my-4'>
        <h1 className='display-4 col-12 fw-bold'><span style={{color:"#5ac501"}}>UCU Societal Impact: </span>Making a lasting difference one step at a time</h1>
        <div className='d-flex flex-lg-row flex-md-row flex-column gap-3 '>
            <p className='col-lg-9 col-md-7  fw-normal fs-6'>Since its inception, UCU has pioneered several unique initiatives that have established its reputation as a world leader in creating positive societal impact. These initiatives deeply integrate the UCU community of participants, faculty, and professional staff with our local K-Ward community, with grassroots NGOs across the Indian subcontinent, and the emerging community of entrepreneurs dedicated to creating positive societal impact.</p>
            <img src='https://www.spjimr.org/wp-content/uploads/2024/05/positive-impact-rating.png' className='societal-image-1'/>
        </div>

<div className='d-flex gap-3 my-4 flex-lg-row flex-md-row flex-column'>
  <p className='col-lg-9 col-md-7 fw-normal fs-6'>
    UCU's societal impact initiatives have been recognised globally. The Positive Impact Ratings (PIR) has named UCU a ‘pioneering school’ for social impact and sustainability achievements every year since 2021. The United Nations Global Compact Network India awarded UCU with the prestigious Innovative Practices Award in 2018 for its societal initiatives. AACSB recognised the institute as one of the top 30 innovative B-schools through its ‘Innovations that Inspire’ initiative in 2016 and 2017. UCU is also the founding chair of UNPRME’s India chapter and a strong proponent of the role of SDGs in guiding business education.
  </p>

  <div className='societal-image-2'>
    <img
      src='https://www.spjimr.org/wp-content/uploads/2024/05/sustainable-development-goals-new-jpg.webp'
      alt='SDG goals'
    />
    <div className='societal-impactimage-btn'>
      <button>SDG Dashboard</button>
      <button>Mobile SDG Dashboard</button>
    </div>
  </div>
</div>


<div className='d-flex gap-3 flex-lg-row flex-md-row flex-column'>
    <div className=''>
  <p className='col-lg-12 col-md-12 fw-normal fs-6'>
    As part of UCU's commitment to creating societal impact, we invited leading education reformer Sonam Wangchuk to join our Governing Council in 2022. This video presents his inspirational keynote address on the importance and role of innovation and technology in the social sector at UCU's business academia conference.
  </p>
  <div className='d-flex flex-wrap gap-4 align-items-center'>
  <p className='m-0 col-12 col-lg-3'>Learn more about his work:</p>
<BsLinkedin size={20} style={{ color: "#0A66C2" }} />   {/* LinkedIn Blue */}
<BsInstagram size={20} style={{ color: "#E4405F" }} />  {/* Instagram Pink/Red */}
<BsTwitterX size={20} style={{ color: "#000000" }} />   {/* X (Twitter) Black */}
<FaFacebook size={20} style={{ color: "#1877F2" }} />   {/* Facebook Blue */}
<BsYoutube size={20} style={{ color: "#FF0000" }} />    {/* YouTube Red */}

  </div>
</div>
  <div className='societal-video-1'>
    <iframe
      src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
      title="Sonam Wangchuk Keynote"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>


    </div>
  )
}

export default SocietalStep