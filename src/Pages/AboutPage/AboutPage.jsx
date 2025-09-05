import React from 'react'
import './AboutPage.css'
import AboutPageHero from './AboutPageHero/AboutPageHero'
import AboutStory from './AboutStory/AboutStory'
import AboutPhil from './AboutPhil/AboutPhil'
import AboutJourney from './AboutJourney/AboutJourney'
import AboutYears from './AboutYears/AboutYears'
import AboutTour from './AboutTour/AboutTour'
import AboutGraduation from './AboutGraduation/AboutGraduation'
import AboutBrand from './AboutBrand/AboutBrand'
function AboutPage() {
  return (
    <div>
        <AboutPageHero/>
        <AboutStory/>
        <AboutPhil/>
        <AboutJourney/>
        <AboutYears/>
        <AboutTour/>
        <AboutGraduation/>
        <AboutBrand/>
    </div>
  )
}

export default AboutPage
