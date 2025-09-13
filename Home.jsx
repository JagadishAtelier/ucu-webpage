import React from "react";
import HeroSection from "./src/Components/HeroSection/HeroSection";
import CareerSection from "./src/Components/CareerSection/CareerSection";
import Management from "./src/Components/Management/Management";
import Banner from "./src/Components/Banner/Banner";
import Industry from "./src/Components/Industry/Industry";
import Events from "./src/Components/Events/Events";
import Organisations from "./src/Components/Organisations/Organisations";
import Brands from "./src/Components/Brands/Brands";
import Navbar from "./src/Components/Navbar/Navbar";
import NewFooter from "./src/Components/NewFooter/NewFooter";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <>
        <Navbar />
        {/* Hero Section */}
        <div data-aos="fade-up" data-aos-delay="100">
          <HeroSection />
        </div>

        {/* Career Section */}
        <div data-aos="fade-up" data-aos-delay="100">
          <CareerSection />
        </div>

        {/* Management Section */}
        <div data-aos="fade-left" data-aos-delay="100">
          <Management />
        </div>

        {/* Banner */}
        <div data-aos="fade-up" data-aos-delay="100">
          <Banner />
        </div>

        {/* Industry */}
        <div data-aos="fade-up" data-aos-delay="100">
          <Industry />
        </div>

        {/* Events */}
        <div data-aos="fade-right" data-aos-delay="100">
          <Events />
        </div>

        {/* Organisations */}
        <div data-aos="fade-left" data-aos-delay="100">
          <Organisations />
        </div>

        {/* Brands */}
        <div data-aos="zoom-in pt-5" data-aos-delay="100">
          <Brands />
        </div>
        <NewFooter />
      </>
    </div>
  );
};

export default Home;
