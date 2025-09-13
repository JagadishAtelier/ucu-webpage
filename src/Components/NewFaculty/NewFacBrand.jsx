import React from 'react'
import bgImage from '../../Assets/aboutPageImage/image-ucu.svg'
function NewFacBrand() {
  return (
    <div className='NFB-overlay d-flex flex-column flex-lg-column align-items-start justify-content-center justify-content-lg-start text-white text-center text-lg-start py-4 px-3 p-lg-5 p-lg-7 bg-darkblue my-lg-5 my-5'
    style={{
      backgroundImage : `url("https://png.pngtree.com/thumb_back/fh260/background/20240917/pngtree-a-lecture-hall-or-meeting-space-in-an-upscale-college-business-image_16223871.jpg")`,
      backgroundPosition : "center",
      backgroundSize : "cover",
      backgroundRepeat : "no-repeat",
      minHeight : "30vh"

  }}
    >
      <h1 className='fs-2'>More from UCU World</h1>
      <div className='d-flex gap-5'>
        <img src='	https://sdabocconiasiacenter.com/wp-content/uploads/2024/07/sdab-business-logo.png'/>
        <img src='https://sdabocconiasiacenter.com/wp-content/uploads/2024/07/ftr-logo2.png'/>
        <img src='https://sdabocconiasiacenter.com/wp-content/uploads/2024/07/ftr-logo3.png'/>
      </div>
    </div>
  )
}

export default NewFacBrand
