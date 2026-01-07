import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import NewFooter from '../../Components/NewFooter/NewFooter'
import SalesDiplamoPageTabs from './SalesDiplamoPageTabs'
import './SalesDiplamoPage.css'

function SalesDiplamoPage() {
  return (
    <div>
        <Navbar/>
        <SalesDiplamoPageTabs/>
        <NewFooter/>
    </div>
  )
}

export default SalesDiplamoPage