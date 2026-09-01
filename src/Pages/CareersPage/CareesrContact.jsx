import { Mail, Phone } from 'lucide-react'
import React from 'react'

function CareesrContact({ getKeyValue, getImage }) {
  const kv = (key, fallback) => (getKeyValue ? getKeyValue("CareesrContact", key, fallback) : fallback);
  const img = (index, fallback) => (getImage ? getImage("CareesrContact", index, fallback) : fallback);

  const bgImage = img(0, "https://img.freepik.com/free-photo/hercules-hall-surrounded-by-greenery-sunlight-daytime-munich-germany_181624-17876.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80");
  const heading = kv("heading", "Got Talent? We’re always looking for great people!");
  const description = kv("description", "If there’s no immediate match, don’t worry! We welcome speculative applications and encourage you to send your profile for future opportunities. We’re committed to finding top talent. Working Hours: Monday – Friday, 10:00 am IST to 05:00 pm IST.");
  const contactHeading = kv("contactHeading", "Contact Us");
  const phone = kv("phone", "040 23187777");
  const email = kv("email", "ucu@gmail.com");

  return (
    <div className="captital-campus-content-sec contact-cpo-container">
      <section
        className="connect-section cpo-contact-bg-image"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className='col-lg-6 col-12'>
          <h1 className='text-white position-relative'>{heading}</h1>
          <p className='text-white position-relative'>{description}</p>
        </div>
        <div className='cpo-contact-details rounded'>
          <h1 className='fw-bold'>{contactHeading}</h1>
          <div className='d-flex align-items-center gap-2'>
            <Phone size={18}/>
            <p className='mb-0'>{phone}</p>
          </div>
          <div className='d-flex align-items-center gap-2'>
            <Mail size={18}/>
            <p className='mb-0'>{email}</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CareesrContact