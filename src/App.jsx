import "modern-css-reset/dist/reset.min.css";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Program from "./Pages/Program";
import AboutPage from "./Pages/AboutPage/AboutPage";

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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/full-time" element={<Program />} />
        <Route path="/about-ucu" element={<AboutPage/>} />
      </Routes>
      {/* Footer */}
      <div data-aos="fade-up" data-aos-delay="400">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
