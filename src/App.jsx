import "modern-css-reset/dist/reset.min.css";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Home from "./Pages/Home";
import Footer from "./Components/Footer/Footer";
import Program from "./Pages/Program";
import AboutPage from "./Pages/AboutPage";
import NavbarNew from "./Components/Navbar/NavbarNew";
import FaculityPage from "./Pages/FaculityPage";
import ProgramDetails from "./Pages/ProgramDetails";

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
      {/* <div data-aos="fade-down" data-aos-delay="100"> */}
      <NavbarNew />
      {/* </div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<Program />} />
        <Route path="/about-ucu" element={<AboutPage />} />
        <Route path="/faculty/*" element={<FaculityPage />} />
        <Route path="/program/*" element={<ProgramDetails />} />
      </Routes>
      {/* Footer */}
      <div data-aos="fade-up" data-aos-delay="100">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
