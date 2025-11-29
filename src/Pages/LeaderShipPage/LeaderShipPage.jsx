import React from 'react'
import './LeaderShipPage.css'
import founderImg from "/founder.jpg";
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import NewFooter from '../../Components/NewFooter/NewFooter';
import LeaderShipPeople from './LeaderShipPeople';
import { RiDoubleQuotesR } from 'react-icons/ri';
function LeaderShipPage() {
  return (
    <div>
        <Navbar/>
             
              <div className='captital-campus-content-sec consortium-founder-container'>
      <div className=''>

        <div className='card-consortium-founder position-relative'>
          <RiDoubleQuotesR className='quotes-consortium d-lg-block d-none' />
          <img src='/founder.jpg' className='consortium-founder-image' />
          <div className='d-flex flex-column mt-2 col-12 d-lg-none d-block'>
            <p className='fw-bold m-0 pt'>Dr. M Balaji (BALA)</p>
            <p className='m-0 pt'> Founder & Chairman, UCU Chennai & CEO, UCU Consortium</p>
          </div>
          <p className='col-lg-7 pt'> At UCU, leadership is not defined by titles but by the ability to shape ecosystems, inspire progress, and create meaningful change. The Leadership Consortium was built on this belief. More than a platform, it is a dynamic space where influential minds—academicians, industry leaders, and aspiring professionals—come together to elevate capability and character. </p>

        </div>
        <div className='justify-content-end my-4 col-11 d-lg-flex d-none'>
          <p className='fw-bold consortium-founder-name'>Dr. M Balaji (BALA)</p>
           <p className='ps-2'> Founder & Chairman, Universal Corporate University</p>
        </div>
      </div>
    </div>
              <LeaderShipPeople/>
        <NewFooter/>
    </div>
  )
}

export default LeaderShipPage