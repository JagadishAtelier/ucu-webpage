import React from 'react'

function CampusLocation() {
  return (
    <div className="captital-campus-content-sec my-4">
<div className='d-flex flex-column flex-lg-row justify-content-between gap-5'>
      <div className="campus-map-wrapper">
        <iframe
          title="UCU University Chennai Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.899180087062!2d80.27948707454438!3d13.06042208726757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52689cbfe0a4d7%3A0x2e95b9eb89f76f7e!2sUniversity%20of%20Madras!5e0!3m2!1sen!2sin!4v1729175416507!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className='campus-address-location'>
        <h1>How to reach campus</h1>
        <p>UCU Chennai</p>
        <p>UCU Campus</p>
        <p>UCU Road</p>
        <p>UCU Chennai-400058</p>
      </div>
      </div>
    </div>
  )
}

export default CampusLocation