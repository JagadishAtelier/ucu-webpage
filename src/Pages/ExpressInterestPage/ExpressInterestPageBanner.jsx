import { ChevronRight } from 'lucide-react'
import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import NewFooter from '../../Components/NewFooter/NewFooter'
import ExpressInterestForm from './ExpressInterestForm'
import './EOIPage.css'
function ExpressInterestPageBanner() {
    return (
        <div>
            <Navbar />
            <div
                data-aos="fade-down"
                className="fac-hero-section d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start text-white text-center text-md-start text-lg-start p-3 p-lg-5 p-lg-7"
                style={{
                    backgroundImage: `url(https://img.freepik.com/premium-photo/happy-graduate-giving-thumbs-up_1152821-13729.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    minHeight: "60vh",
                }}
            >
                <div
                    className="w-100 w-lg-75 w-lg-50 ms-lg-5"
                    data-aos="fade-right"
                >
                    {/* Dynamic Title */}
                    <h1 className="fw-bold fs-1 fs-lg-1">Expression of Interest</h1>
                </div>

                <div className='position-absolute bottom-0 left-0 d-flex align-items-center campus-route-bg py-3'>
                    <p className='m-0'>UCU</p>
                    <ChevronRight />
                    <p className='m-0'>Expression of Interest</p>
                </div>

            </div>
            <ExpressInterestForm />
            <NewFooter />
        </div>
    )
}

export default ExpressInterestPageBanner