import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import NewFooter from '../../Components/NewFooter/NewFooter'
import CareerRoobatPageTabs from './CareerRoobatPageTabs'
import useFrontendContent from '../../hooks/useFrontendContent'

function CareerRoobatPage() {
  const { getKeyValue, getImage, getArray } = useFrontendContent("career-reboot-program-for-women");

  return (
    <div>
        <Navbar/>
        <CareerRoobatPageTabs getKeyValue={getKeyValue} getImage={getImage} getArray={getArray} />
        <NewFooter/>
    </div>
  )
}

export default CareerRoobatPage