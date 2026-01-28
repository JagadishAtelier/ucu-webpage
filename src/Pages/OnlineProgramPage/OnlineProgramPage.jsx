import React, { useEffect } from 'react'
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
import { useLocation } from 'react-router-dom';
function OnlineProgramPage() {
  const location = useLocation();

  useEffect(() => {
    const element = document.getElementById("Digital-Marketing-AI");

    if (element) {
      setTimeout(() => {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [location.pathname]);
  return (
    <div>
        <Navbar/>
        <OnlineProgramPageBanner/>
        <OnlineProgramHero/>
        <OnlineProgramStats/>
        <div id="Digital-Marketing-AI"><OnlineProgramPro/></div>
        <OnlineProgramApply/>
        <OnlineProgramValue/>
        <OnlineProgramCollab/>
        <NewFooter/>
    </div>
  )
}

export default OnlineProgramPage