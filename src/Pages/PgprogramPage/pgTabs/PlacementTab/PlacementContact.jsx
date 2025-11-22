import React from 'react'
import './PlacementTab.css'
import { Mail, Phone } from 'lucide-react'
function PlacementContact() {
  return (
    <div className='contact-place-con rounded mt-5 mt-lg-0 mb-0 connect-section text-center d-flex flex-column justify-content-center'
    style={{ backgroundImage: `url("https://img.freepik.com/free-photo/hercules-hall-surrounded-by-greenery-sunlight-daytime-munich-germany_181624-17876.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80")` }}
    >
        <h1 className='fs-2 fw-medium mt-5 mb-3 position-relative'>Connect with us</h1>
        <div className='d-flex gap-lg-5 gap-2 flex-lg-row flex-column justify-content-center mx-auto contact-add mt-3'>
            <div className='d-flex flex-column gap-2 position-relative text-start'>
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
            <div  className='place-contact-vertical position-relative'></div>
            <div className='d-flex flex-column gap-2 position-relative text-start mt-4 mt-lg-0'>
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