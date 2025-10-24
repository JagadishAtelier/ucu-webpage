import { Mail, Phone } from 'lucide-react'
import React from 'react'

function CareersQuery() {
  return (
    <div className="captital-campus-content-sec mt-5">
        <div className='d-flex flex-lg-row flex-md-row flex-column gap-3 p-lg-5 p-3' style={{backgroundColor:"#0c0142",color:"white"}}>
            <div className='col-lg-6 col-md-6 col-12 d-flex flex-column gap-3'>
                <p className='mb-0 fs-5'>Have a Query?</p>
                <h1>For Prospective Hires</h1>
                <p className='mb-0'>Feel free to reach out to us for any questions or clarifications regarding opportunities at UCU. We’re here to assist you! Our working hours are Monday - Friday, 10:00 am - 05:00 pm UCU.</p>
                <div className='d-flex align-items-center gap-2'>
                    <Phone size={18}/>
                    <p className='mb-0'>040 23187777</p>
                </div>
                <div className='d-flex align-items-center gap-2'>
                    <Mail size={18}/>
                    <p className='mb-0'>ucu@gmail.com</p>
                </div>
                <p className='col-11'>Our team is ready to provide you with the information and support you need to take the next step in your career with UCU.</p>
            </div>



            <div className='col-lg-6 col-md-6 col-12 d-flex flex-column gap-3'>
                <p className='mb-0 fs-5'>Need Help with Documentation?</p>
                <h1>For Past ISB Staff Members</h1>
                <p className='mb-0'>We are here to assist with any documentation-related queries or concerns you may have. Our working hours are Monday - Friday, 10:00 am - 05:00 pm UCU.</p>
                <div className='d-flex align-items-center gap-2'>
                    <Phone size={18}/>
                    <p className='mb-0'>040 23187777</p>
                </div>
                <div className='d-flex align-items-center gap-2'>
                    <Mail size={18}/>
                    <p className='mb-0'>ucu@gmail.com</p>
                </div>
                <p>We are committed to providing the best support, and all queries will be addressed promptly. Please feel free to reach out for any documentation assistance you may need.</p>
            </div>
        </div>
    </div>
  )
}

export default CareersQuery