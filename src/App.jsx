import "modern-css-reset/dist/reset.min.css";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";
import CareerSection from "./Components/CareerSection/CareerSection";
import Sales from "./Components/Sales/Sales";
import Platforms from "./Components/Platforms/Platforms";
import Management from "./Components/Management/Management";
import Banner from "./Components/Banner/Banner";
import Industry from "./Components/Industry/Industry";
import Events from "./Components/Events/Events";
import Brands from "./Components/Brands/Brands";
import Footer from "./Components/Footer/Footer";
import Organisations from "./Components/Organisations/Organisations";

function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div data-aos="fade-up" data-aos-delay="100">
        <HeroSection />
      </div>

      {/* Career Section */}
      <div data-aos="fade-up" data-aos-delay="200">
        <CareerSection />
      </div>

      {/* Management Section */}
      <div data-aos="fade-left" data-aos-delay="100">
        <Management />
      </div>

      {/* Platforms */}


      {/* Banner */}
      <div data-aos="fade-up" data-aos-delay="200">
        <Banner />
      </div>

      {/* Industry */}
      <div data-aos="fade-up" data-aos-delay="300">
        <Industry />
      </div>

      {/* Events */}
      <div data-aos="fade-right" data-aos-delay="100">
        <Events />
      </div>

      {/* Organisations */}
      <div data-aos="fade-left" data-aos-delay="200">
        <Organisations />
      </div>

      {/* Brands */}
      <div data-aos="zoom-in" data-aos-delay="300">
        <Brands />
      </div>

      {/* Footer */}
      <div data-aos="fade-up" data-aos-delay="400">
        <Footer />
      </div>
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration
      once: true, // animate only once
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
