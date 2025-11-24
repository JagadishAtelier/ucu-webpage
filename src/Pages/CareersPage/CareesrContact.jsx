import { Mail, Phone } from 'lucide-react'
import React from 'react'

function CareesrContact() {
  return (
    <div className="captital-campus-content-sec contact-cpo-container">
            <section
      className="connect-section cpo-contact-bg-image rounded"
      style={{ backgroundImage: `url("https://img.freepik.com/free-photo/hercules-hall-surrounded-by-greenery-sunlight-daytime-munich-germany_181624-17876.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80")` }}
    >
    <div className='col-lg-6 col-12'>
        <h1 className='text-white position-relative'>Got Talent? We’re always looking for great people!</h1>
        <p className='text-white position-relative'>If there’s no immediate match, don’t worry! We welcome speculative applications and encourage you to send your profile for future opportunities. We’re committed to finding top talent. Working Hours: Monday – Friday, 10:00 am IST to 05:00 pm IST.</p>
    </div>
    <div className='cpo-contact-details rounded'>
        <h1 className='fw-bold'>Contact Us</h1>
        <div className='d-flex align-items-center gap-2'>
            <Phone size={18}/>
            <p className='mb-0'>040 23187777</p>
        </div>
        <div className='d-flex align-items-center gap-2'>
            <Mail size={18}/>
            <p className='mb-0'>ucu@gmail.com</p>
        </div>
    </div>

    </section>
    </div>
  )
}

export default CareesrContact