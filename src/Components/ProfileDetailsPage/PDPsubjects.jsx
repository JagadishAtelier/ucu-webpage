import React from 'react'

function PDPsubjects() {
  return (
    <div className='bg-light d-flex flex-column gap-3 subject-container'>
        <div className='vertical-line-pdp'></div>
        <h4>SUBJECTS TAUGHT / STUDENT PROJECT MENTOR</h4>
        <div className="d-flex gap-1">
          <div className="w-25 rounded-md bg-white p-3" >
            <h5 className='border-bottom border-2 border-green pb-2'>SUBJECTS TAUGHT</h5>
        <ul className='education-li-list pdp-sub'>
                <li>Discrete Mathematics</li>
                <li>Business Analytics</li>
                <li>Retail Analytics</li>
                <li>Media Analytics</li>
            </ul>
          </div>
          <div className="w-25 rounded-md bg-white p-3 "><h5 className='border-bottom border-2 border-green pb-2'>STUDENT PROJECT MENTOR</h5>
        <ul className='education-li-list pdp-sub'>
                <li>Discrete Mathematics</li>
                <li>Business Analytics</li>
                <li>Retail Analytics</li>
                <li>Media Analytics</li>
            </ul></div>
        </div>
            
    </div>
  )
}

export default PDPsubjects
