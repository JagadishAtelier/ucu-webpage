import React from 'react'
import './PlacementTab.css'
import { Mail, Phone } from 'lucide-react'
function PlacementContact() {
  return (
    <div className='contact-place-con mt-5 mt-lg-0'>
        <h1 className='fs-2 fw-medium mt-5 mb-3'>Connect with us</h1>
        <div className='d-flex gap-5 flex-lg-row flex-column'>
            <div className='d-flex flex-column gap-2'>
                <h5>UCU</h5>
                <p>Director - Career Services</p>
                <div className='d-flex gap-2'>
                    <Mail/>
                    <p>ucu@gmail.com</p>
                </div>
                <div className='d-flex gap-2'>
                    <Phone/>
                    <p>9876543210</p>
                </div>

            </div>
            <div  className='place-contact-vertical'></div>
            <div className='d-flex flex-column gap-2'>
                <h5>Hema Sisodia</h5>
                <p className='col-8'>Deputy Director - External Relations & Career Services</p>
                                <div className='d-flex gap-2'>
                    <Mail/>
                    <p>ucu@gmail.com</p>
                </div>
                <div className='d-flex gap-2'>
                    <Phone/>
                    <p>9876543210</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlacementContact