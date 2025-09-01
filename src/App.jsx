import 'modern-css-reset/dist/reset.min.css'; 
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import CareerSection from './Components/CareerSection/CareerSection';
import Sales from './Components/Sales/Sales';
import Platforms from './Components/Platforms/Platforms';
import Management from './Components/Management/Management';
import Banner from './Components/Banner/Banner';
import Industry from './Components/Industry/Industry';
import Events from './Components/Events/Events';
import Brands from './Components/Brands/Brands';
import Footer from './Components/Footer/Footer';

function HomePage() {
  return (
    <>

      <Navbar/>
      <HeroSection/>
      <CareerSection/>
      <Sales/>
      <Management/>
      <Platforms/>
      <Banner/>
      <Industry/>
      <Events/>
      <Brands/>
      <Footer/>
    </>
  );
}

function App() {
  // useEffect(()=>{
  //   AOS.init({
  //     duration:2000,
  //     once:true,
  //     easing:'ease-in-out'
  //   })
  // },[])
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
