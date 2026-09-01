import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import NewFooter from '../../Components/NewFooter/NewFooter'
import { ChevronRight } from 'lucide-react'
import ProgramsForIndividualsData from './ProgramsForIndividualsData'
import './ProgramsForIndividuals.css'
import useFrontendContent from '../../hooks/useFrontendContent'

function ProgramsForIndividualsBanner() {
    const { getKeyValue, getArray } = useFrontendContent("programs-for-individuals");

    return (
        <div>
            <Navbar />
            <div
                data-aos="fade-down"
                className="fac-hero-section d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start text-white text-center text-md-start text-lg-start p-3 p-lg-5 p-lg-7"
                style={{
                    backgroundImage: `url(https://images.isb.edu/is/image/isbprod/individuals-ALP-thumb?fmt=webp&qlt=100,0&resMode=sharp2&op_usm=1.75,0.3,2,0)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    minHeight: "40vh",
                }}
            >
                <div
                    className="w-100 w-lg-75 w-lg-50 ms-lg-5"
                    data-aos="fade-right"
                >
                    <h1 className="fw-bold fs-1 fs-lg-1">Programs for Individuals</h1>
                </div>
            </div>
            <ProgramsForIndividualsData getKeyValue={getKeyValue} getArray={getArray} />
            <NewFooter />
        </div>
    )
}

export default ProgramsForIndividualsBanner