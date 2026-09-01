import { Mail, Phone } from 'lucide-react'
import React from 'react'

function CareersQuery({ getKeyValue }) {
  const kv = (key, fallback) => (getKeyValue ? getKeyValue("CareersQuery", key, fallback) : fallback);

  const queryLabel1 = kv("queryLabel1", "Have a Query?");
  const queryHeading1 = kv("queryHeading1", "For Prospective Hires");
  const queryDesc1 = kv("queryDesc1", "Feel free to reach out to us for any questions or clarifications regarding opportunities at UCU. We’re here to assist you! Our working hours are Monday - Friday, 10:00 am - 05:00 pm UCU.");
  const phone1 = kv("phone1", "040 23187777");
  const email1 = kv("email1", "ucu@gmail.com");
  const queryFooter1 = kv("queryFooter1", "Our team is ready to provide you with the information and support you need to take the next step in your career with UCU.");

  const queryLabel2 = kv("queryLabel2", "Need Help with Documentation?");
  const queryHeading2 = kv("queryHeading2", "For Past ISB Staff Members");
  const queryDesc2 = kv("queryDesc2", "We are here to assist with any documentation-related queries or concerns you may have. Our working hours are Monday - Friday, 10:00 am - 05:00 pm UCU.");
  const phone2 = kv("phone2", "040 23187777");
  const email2 = kv("email2", "ucu@gmail.com");
  const queryFooter2 = kv("queryFooter2", "We are committed to providing the best support, and all queries will be addressed promptly. Please feel free to reach out for any documentation assistance you may need.");

  return (
    <div className="captital-campus-content-sec mt-5">
        <div className='d-flex flex-lg-row flex-md-row flex-column gap-3 p-lg-5 p-3 rounded' style={{backgroundColor:"#0c0142",color:"white"}}>
            <div className='col-lg-6 col-md-6 col-12 d-flex flex-column gap-3'>
                <p className='mb-0 fs-5'>{queryLabel1}</p>
                <h1>{queryHeading1}</h1>
                <p className='mb-0'>{queryDesc1}</p>
                <div className='d-flex align-items-center gap-2'>
                    <Phone size={18}/>
                    <p className='mb-0'>{phone1}</p>
                </div>
                <div className='d-flex align-items-center gap-2'>
                    <Mail size={18}/>
                    <p className='mb-0'>{email1}</p>
                </div>
                <p className='col-11'>{queryFooter1}</p>
            </div>

            <div className='col-lg-6 col-md-6 col-12 d-flex flex-column gap-3'>
                <p className='mb-0 fs-5'>{queryLabel2}</p>
                <h1>{queryHeading2}</h1>
                <p className='mb-0'>{queryDesc2}</p>
                <div className='d-flex align-items-center gap-2'>
                    <Phone size={18}/>
                    <p className='mb-0'>{phone2}</p>
                </div>
                <div className='d-flex align-items-center gap-2'>
                    <Mail size={18}/>
                    <p className='mb-0'>{email2}</p>
                </div>
                <p>{queryFooter2}</p>
            </div>
        </div>
    </div>
  )
}

export default CareersQuery