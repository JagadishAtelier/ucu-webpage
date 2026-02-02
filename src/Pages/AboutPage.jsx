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
import axios from "axios";
import { useState, useEffect, useRef } from "react";
// ... imports

function AboutPage() {
  const location = useLocation();
  const [heroData, setHeroData] = useState(null);
  const [storyData, setStoryData] = useState(null);
  const [philData, setPhilData] = useState(null);
  const [timelineData, setTimelineData] = useState(null);
  const [statsData, setStatsData] = useState(null);

  // 🪄 Create refs for scrollable sections
  const refs = {
    "our-story": useRef(null),
    "vision-mission": useRef(null),
  };

  // Fetch dynamic content
  useEffect(() => {
    const fetchMainPage = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/about/page/main-about-ucu`);
        if (res.data.success && res.data.data) {
          const data = res.data.data;

          // Hero
          setHeroData({
            title: data.title,
            bgImage: data.bannerImage
          });

          // Sections
          const sections = data.sections || [];

          // Story (Content type, or fallback to first generic section)
          const storySec = sections.find(s => s.type === 'content') || sections[0];
          setStoryData({
            paragraph: data.description || (storySec ? storySec.content : undefined),
            heading: storySec ? storySec.heading : undefined
          });

          // Vision & Mission
          const visionSec = sections.find(s => s.type === 'vision' || (s.heading && s.heading.toLowerCase().includes('vision')));
          const missionSec = sections.find(s => s.type === 'mission' || (s.heading && s.heading.toLowerCase().includes('mission')));

          setPhilData({
            visionData: visionSec ? { heading: visionSec.heading, content: visionSec.content, image: visionSec.image } : undefined,
            missionData: missionSec ? { heading: missionSec.heading, content: missionSec.content } : undefined
          });

          // Timeline
          const timelines = sections.filter(s => s.type === 'timeline');
          if (timelines.length > 0) setTimelineData(timelines);

          // Stats
          const stats = sections.filter(s => s.type === 'stat');
          if (stats.length > 0) setStatsData(stats);
        }
      } catch (e) {
        console.warn("Could not fetch dynamic About page content, using defaults.");
      }
    };
    fetchMainPage();
  }, []);

  // 🔄 Scroll when coming from Navbar (Keep existing logic)
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
        title={heroData?.title || "About UCU"}
        breadcrumb={["Home", "About Us"]}
        bgImage={heroData?.bgImage || "https://img.freepik.com/free-photo/front-view-people-meeting-cup-coffee_23-2148817096.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80"}
      />
      <div ref={refs["our-story"]}>
        <AboutStory
          heading={storyData?.heading}
          paragraph={storyData?.paragraph}
        />
      </div>
      <div ref={refs["vision-mission"]}>
        <AboutPhil
          visionData={philData?.visionData}
          missionData={philData?.missionData}
        />
      </div>
      {/* <AboutJourney/> */}
      <Timeline timelineData={timelineData} />
      <AboutYears statsData={statsData} />
      {/* <ConnectWithUs /> */}
      {/* <AboutTour/>
        <AboutGraduation/>
        <AboutBrand/> */}
      <NewFooter />
    </div>
  );
}

export default AboutPage;
