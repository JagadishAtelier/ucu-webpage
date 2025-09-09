import AboutPageHero from './AboutPage/AboutPageHero/AboutPageHero'
import AboutStory from './AboutPage/AboutStory/AboutStory'
import AboutPhil from './AboutPage/AboutPhil/AboutPhil'
import AboutJourney from './AboutPage/AboutJourney/AboutJourney'
import AboutYears from './AboutPage/AboutYears/AboutYears'
import AboutTour from './AboutPage/AboutTour/AboutTour'
import AboutGraduation from './AboutPage/AboutGraduation/AboutGraduation'
import AboutBrand from './AboutPage/AboutBrand/AboutBrand'
import Navbar from '../Components/Navbar/Navbar'
import NewFooter from '../Components/NewFooter/NewFooter'
function AboutPage() {
  return (
    <div>
      <Navbar/>
        <AboutPageHero/>
        <AboutStory/>
        <AboutPhil/>
        <AboutJourney/>
        <AboutYears/>
        <AboutTour/>
        <AboutGraduation/>
        <AboutBrand/>
        <NewFooter/>
    </div>
  )
}

export default AboutPage
