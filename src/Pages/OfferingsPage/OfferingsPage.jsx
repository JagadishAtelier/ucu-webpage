import React from 'react'
import './OfferingsPage.css'
import Navbar from '../../Components/Navbar/Navbar'
import NewFooter from '../../Components/NewFooter/NewFooter'
import { ChevronRight } from 'lucide-react'
import OfferingsHelp from './OfferingsHelp'
import OfferingsCard from './OfferingsCard'
import OfferingsGroup from './OfferingsGroup'
import OfferingsPlacement from './OfferingsPlacement'
import OfferingsCorporate from './OfferingsCorporate'
function OfferingsPage() {
    return (
        <div>
            <Navbar/>
            <div
                data-aos="fade-down"
                className="fac-hero-section d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start text-white text-center text-md-start text-lg-start p-3 p-lg-5 p-lg-7"
                style={{
                    backgroundImage: `url(https://assets.kpmg.com/is/image/kpmgcloud/man-and-woman-discussing-something-on-laptop:cq5dam-web-2732-1088?wid=2732&hei=1088)`,
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
                    <h1 className="fw-bold fs-1 fs-lg-1">UCU Consortium Offerings</h1>
                    <p>Focused on value creation
                    </p>
                </div>

                <div className='position-absolute bottom-0 left-0 d-flex align-items-center campus-route-bg py-3'>
                    <p className='m-0'>UCU</p>
                    <ChevronRight />
                    <p className='m-0'>CONSORTIUM </p>
                </div>

            </div>
            <OfferingsHelp/>
            <OfferingsCard/>
            <OfferingsGroup/>
            <OfferingsPlacement/>
            <OfferingsCorporate/>
            <NewFooter/>
        </div>
    )
}

export default OfferingsPage