import React from 'react'
import "./OnlineProgramPage.css";
import Navbar from '../../Components/Navbar/Navbar';
import NewFooter from '../../Components/NewFooter/NewFooter';
import OnlineProgramPageBanner from './OnlineProgramPageBanner';
import OnlineProgramHero from './OnlineProgramHero';
import OnlineProgramStats from './OnlineProgramStats';
function OnlineProgramPage() {
  return (
    <div>
        <Navbar/>
        <OnlineProgramPageBanner/>
        <OnlineProgramHero/>
        <OnlineProgramStats/>
        <NewFooter/>
    </div>
  )
}

export default OnlineProgramPage