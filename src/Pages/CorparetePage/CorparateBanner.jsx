import React from 'react'
import { ChevronRight } from 'lucide-react'
import './CorparatePage.css'
import Navbar from '../../Components/Navbar/Navbar'
import NewFooter from '../../Components/NewFooter/NewFooter'
import CAPSection from './CAPSection'
import CTCASection from './CTCASection'
import CXOSeriesHome from './CXOSeriesHome'
function CorparateBanner() {
    return (
        <div>
            <Navbar />
            <div
                data-aos="fade-down"
                className="fac-hero-section d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start text-white text-center text-md-start text-lg-start p-3 p-lg-5 p-lg-7"
                style={{
                    backgroundImage: `url(https://img.freepik.com/premium-photo/communication-feedback-chos-role_1077802-145596.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80)`,
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
                    <h1 className="fw-bold fs-1 fs-lg-1"><span style={{color:"#5ac501"}}>Corporate </span> Engagement</h1>
                </div>

                <div className='position-absolute bottom-0 left-0 d-flex align-items-center campus-route-bg py-3'>
                    <p className='m-0'><a href='/' className='text-decoration-none text-white'>UCU</a></p>
                    <ChevronRight />
                    <p className='m-0'>Corporate Engagement</p>
                </div>

            </div>
            <CAPSection/>
            <CTCASection/>
            <CXOSeriesHome/>
            <NewFooter />
        </div>
    )
}

export default CorparateBanner