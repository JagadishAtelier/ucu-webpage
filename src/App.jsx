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
import NewFooter from "./Components/NewFooter/NewFooter";
import Navbar from "./Components/Navbar/Navbar";
import SignUpPage from "./Components/AuthenticationPage/SignUpPage/SignUpPage";
import LoginPage from "./Components/AuthenticationPage/LoginPage/LoginPage";
import AuthPassword from "./Components/AuthenticationPage/AuthPassword/AuthPassword";
import ForgotPassPage from "./Components/AuthenticationPage/ForgotPassPage/ForgotPassPage";
import ResetPassPage from "./Components/AuthenticationPage/ResetPassPage/ResetPassPage";
import { ModalProvider } from "./Components/Context/ApplyModal/ModalContext";
import NewFaculty from "./Components/NewFaculty/NewFaculty";
import PDPhero from "./Components/ProfileDetailsPage/PDPhero";
import Advisory from "./Components/Advisory/Advisory";
import WhatsAppButton from "./Components/WhatsAppButton/WhatsAppButton";
import Careers from "./Components/Careers/Careers";
import FounderMessage from "./Pages/FounderMessage";
import PgprogramPage from "./Pages/pgprogramPage";
import LeaderShipPage from "./Pages/LeaderShipPage/LeaderShipPage";
import CampusPage from "./Pages/CampusPage/CampusPage";
import SociatalImpact from "./Pages/SociatalImpact/SociatalImpact";
import OpenPrograms from "./Pages/OpenPrograms/OpenPrograms";

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
      {/* </div> */}
      <ModalProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<Program />} />
        <Route path="/about-ucu" element={<AboutPage />} />
        <Route path="/faculty/*" element={<NewFaculty/>} />
        <Route path="/profile/details" element={<PDPhero/>} />
        <Route path="/program/*" element={<PgprogramPage/>} />
        <Route path="/auth/register" element={<SignUpPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/password" element={<AuthPassword />} />
        <Route path="/auth/forgot-password" element={<ForgotPassPage />} />
        <Route path="/auth/reset" element={<ResetPassPage />} />
        <Route path="/:type" element={<Advisory/>} />
        <Route path="/Careers" element={<Careers/>} />
        <Route path="/founder-message" element={<FounderMessage/>} />
        <Route path="/pgprogram" element={<PgprogramPage/>} />
        <Route path="/leader-ship" element={<LeaderShipPage/>} />
        <Route path="/campus-ambience" element={<CampusPage/>} />
        <Route path="/csr" element={<SociatalImpact/>} />
        <Route path="/open-programs" element={<OpenPrograms/>} />
        {/* <Route path="/account" element={<ProfilePage />} /> */}
      </Routes>
      <WhatsAppButton/>
      </ModalProvider>
    </Router>
  );
}

export default App;
