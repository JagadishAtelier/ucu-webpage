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
import SummerProgram from "./Pages/SummerProgram/SummerProgram";
import AdmissionPage from "./Pages/AdmissionPage/AdmissionPage";
import CareersPage from "./Pages/CareersPage/CareersPage";
import Consortium from "./Pages/Consortium/Consortium";
import OfferingsPage from "./Pages/OfferingsPage/OfferingsPage";
import EEPHome from "./Pages/ExecutiveeduPage/EEPHome";
import ContactUsPage from "./Pages/ContactUsPage/ContactUsPage";
import CampusPlacementsPage from "./Pages/CampusPlacementsPage/CampusPlacementsPage";
import COEPage from "./Pages/COEPage/COEPage";
import UCUMedia from "./Pages/Media/UCUMedia";
import MediaEventDetails from "./Pages/Media/MediaEventDetails";
import UCUMediaEventsPage from "./Pages/UCUMediaEventsPage/UCUMediaEventsPage";
import UCUMediaEventsPageDetails from "./Pages/UCUMediaEventsPage/UCUMediaEventsPageDetails";
import MediagalleryBanner from "./Pages/MediaGallery/MediagalleryBanner";
import MediablogBanner from "./Pages/MediaBlog/MediablogBanner";
import CorparateBanner from "./Pages/CorparetePage/CorparateBanner";
import StrategicCollabBanner from "./Pages/StrategicCollab/StrategicCollabBanner";

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
        <Route path="/Careers" element={<CareersPage/>} />
        <Route path="/founder-message" element={<FounderMessage/>} />
        <Route path="/pgprogram" element={<PgprogramPage/>} />
        <Route path="/leader-ship" element={<LeaderShipPage/>} />
        <Route path="/campus-ambience" element={<CampusPage/>} />
        <Route path="/csr" element={<SociatalImpact/>} />
        <Route path="/open-programs" element={<OpenPrograms/>} />
        <Route path="/summer-programs" element={<SummerProgram/>} />
        <Route path="/admissions" element={<AdmissionPage/>} />
        <Route path="/consortium" element={<Consortium/>} />
        <Route path="/offerings" element={<OfferingsPage/>} />
        <Route path="/executive-edu/*" element={<EEPHome/>} />
        <Route path="/placements/*" element={<CampusPlacementsPage/>} />
        <Route path="/coe/*" element={<COEPage/>} />
        <Route path="/media/ucu-media" element={<UCUMedia/>} />
        <Route path="/media/ucu-media/*" element={<MediaEventDetails/>} />
        <Route path="/media/ucu-on-at" element={<UCUMediaEventsPage/>} />
        <Route path="/media/ucu-on-at/*" element={<UCUMediaEventsPageDetails/>} />
        <Route path="/media/gallery" element={<MediagalleryBanner/>} />
        <Route path="/media/blog" element={<MediablogBanner/>} />
        <Route path="/engagement/*" element={<CorparateBanner/>} />
        <Route path="/strategic/*" element={<StrategicCollabBanner/>} />
        {/* <Route path="/contact-us" element={<ContactUsPage/>} /> */}
        {/* <Route path="/account" element={<ProfilePage />} /> */}
      </Routes>
      <WhatsAppButton/>
      </ModalProvider>
    </Router>
  );
}

export default App;
