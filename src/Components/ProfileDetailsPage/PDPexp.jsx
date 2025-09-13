import React from 'react'

function PDPexp() {
  return (
    <div className='d-flex flex-column gap-3 subject-container'>
        <div className='vertical-line-pdp'></div>
        <h4>EXPERIENCE</h4>
        <div className='d-flex flex-column flex-md-row flex-lg-row pdp-exp justify-content-between'>
        <div>
        <h5>
Academic experience</h5>
        <ul className='education-li-list pdp-sub'>
                <li>Customer Experience</li>
                <li>Recommender Systems</li>
                <li>Machine Learning</li>
                <li>Business Analytics</li>
            </ul>
            </div>
            <div>
            <h5>Corporate experience</h5>
        <ul className='education-li-list pdp-sub'>
                <li>CEO, Semantiks.com (Startup)</li>
                <li>CEO, Ninestars Info Tech</li>
                <li>VP, Tech Mahindra</li>
                <li>VP – IT, Bennet Coleman & Co</li>
            </ul>
            </div>
            </div>
    </div>
  )
}

export default PDPexp
