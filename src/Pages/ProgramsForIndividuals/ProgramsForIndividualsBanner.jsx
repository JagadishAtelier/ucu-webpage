import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import NewFooter from '../../Components/NewFooter/NewFooter'
import { ChevronRight } from 'lucide-react'
import ProgramsForIndividualsData from './ProgramsForIndividualsData'
import './ProgramsForIndividuals.css'
function ProgramsForIndividualsBanner() {
    return (
        <div>
            {/* <Navbar /> */}
            <ProgramsForIndividualsData />
        </div>
    )
}

export default ProgramsForIndividualsBanner