import React from 'react'
import "./OnlineProgramPage.css";
import Navbar from '../../Components/Navbar/Navbar';
import NewFooter from '../../Components/NewFooter/NewFooter';
import OnlineProgramPageBanner from './OnlineProgramPageBanner';
import OnlineProgramHero from './OnlineProgramHero';
import OnlineProgramStats from './OnlineProgramStats';
import OnlineProgramPro from './OnlineProgramPro';
import OnlineProgramApply from './OnlineProgramApply';
import OnlineProgramValue from './OnlineProgramValue';
import OnlineProgramCollab from './OnlineProgramCollab';
function OnlineProgramPage() {
  return (
    <div>
        <Navbar/>
        <OnlineProgramPageBanner/>
        <OnlineProgramHero/>
        <OnlineProgramStats/>
        <OnlineProgramPro/>
        <OnlineProgramApply/>
        <OnlineProgramValue/>
        <OnlineProgramCollab/>
        <NewFooter/>
    </div>
  )
}

export default OnlineProgramPage