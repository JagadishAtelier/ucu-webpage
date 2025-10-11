import React from 'react'
import './LeaderShipPage.css'
import founderImg from "/founder.jpg";
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import NewFooter from '../../Components/NewFooter/NewFooter';
import LeaderShipPeople from './LeaderShipPeople';
function LeaderShipPage() {
  return (
    <div>
        <Navbar/>
              <section className="founder-section top-leader-banner">
                                <div className="founder-image-wrapper">
                  <img src={founderImg} alt="Founder" className="founder-image" />
                </div>
                <div className="founder-content">
                  <p className="founder-subtitle">FOUNDER & CHAIRMAN</p>
                  <h1 className="founder-name">Dr. M. Balaji (Bala)</h1>
                  <p className="founder-org">Universal Corporate University</p>
                </div>
              </section>
              <LeaderShipPeople/>
        <NewFooter/>
    </div>
  )
}

export default LeaderShipPage