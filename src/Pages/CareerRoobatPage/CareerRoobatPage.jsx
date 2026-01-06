import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import NewFooter from '../../Components/NewFooter/NewFooter'
import CareerRoobatPageTabs from './CareerRoobatPageTabs'

function CareerRoobatPage() {
  return (
    <div>
        <Navbar/>
        <CareerRoobatPageTabs/>
        <NewFooter/>
    </div>
  )
}

export default CareerRoobatPage