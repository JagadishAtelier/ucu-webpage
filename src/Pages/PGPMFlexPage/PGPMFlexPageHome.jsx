import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import NewFooter from '../../Components/NewFooter/NewFooter'
import PGPMFlexTabs from './PGPMFlexTabs'

function PGPMFlexPageHome() {
  return (
    <div>
        <Navbar/>
        <PGPMFlexTabs/>
        <NewFooter/>
    </div>
  )
}

export default PGPMFlexPageHome