import AboutPageHero from "./AboutPage/AboutPageHero/AboutPageHero";
import AboutStory from "./AboutPage/AboutStory/AboutStory";
import AboutPhil from "./AboutPage/AboutPhil/AboutPhil";
import AboutJourney from "./AboutPage/AboutJourney/AboutJourney";
import AboutYears from "./AboutPage/AboutYears/AboutYears";
import AboutTour from "./AboutPage/AboutTour/AboutTour";
import AboutGraduation from "./AboutPage/AboutGraduation/AboutGraduation";
import AboutBrand from "./AboutPage/AboutBrand/AboutBrand";
import Navbar from "../Components/Navbar/Navbar";
import NewFooter from "../Components/NewFooter/NewFooter";
import Timeline from "./AboutPage/Timeline";
import ConnectWithUs from "./AboutPage/ConnectWithUs";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import heroImage from "../Assets/aboutPageImage/ucu-About us.svg";
function AboutPage() {
  const location = useLocation();

  // 🪄 Create refs for scrollable sections
  const refs = {
    "our-story": useRef(null),
    "vision-mission": useRef(null),
  };

  // 🔄 Scroll when coming from Navbar
 useEffect(() => {
  if (location.state?.section) {
    const sectionRef = refs[location.state.section];

    if (sectionRef?.current) {
      setTimeout(() => {
        const navbarHeight = 80; // 🧭 adjust this to your Navbar’s height (e.g. 80, 100px)

        const sectionTop =
          sectionRef.current.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: sectionTop - navbarHeight,
          behavior: "smooth",
        });

        // 🧹 remove the state so scroll won't trigger again
        window.history.replaceState({}, document.title, window.location.pathname);
      }, 400);
    }
  }
}, [location.state]);


  return (
    <div>
      <Navbar />
      <AboutPageHero
        title="About UCU"
        breadcrumb={["Home", "About Us"]}
        bgImage="https://img.freepik.com/free-photo/front-view-people-meeting-cup-coffee_23-2148817096.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80"
      />
      <div ref={refs["our-story"]}>
        <AboutStory />
      </div>
      <div ref={refs["vision-mission"]}>
        <AboutPhil />
      </div>
      {/* <AboutJourney/> */}
      <Timeline />
      <AboutYears />
      {/* <ConnectWithUs /> */}
      {/* <AboutTour/>
        <AboutGraduation/>
        <AboutBrand/> */}
      <NewFooter />
    </div>
  );
}

export default AboutPage;
