import React from "react";
import HeroSection from "../Components/HeroSection/HeroSection";
import CareerSection from "../Components/CareerSection/CareerSection";
import Management from "../Components/Management/Management";
import Banner from "../Components/Banner/Banner";
import Industry from "../Components/Industry/Industry";
import Events from "../Components/Events/Events";
import Organisations from "../Components/Organisations/Organisations";
import Brands from "../Components/Brands/Brands";

const Home = () => {
  return (
    <div>
      <>
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
      </>
    </div>
  );
};

export default Home;
