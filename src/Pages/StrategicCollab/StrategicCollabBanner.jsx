import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './StrategicCollab.css'
import { ChevronRight } from 'lucide-react'
import Navbar from '../../Components/Navbar/Navbar'
import NewFooter from '../../Components/NewFooter/NewFooter'
import StrategicCollabAbout from './StrategicCollabAbout'
import StrategicPartners from './StrategicPartners'
import IndustrialCollab from './IndustrialCollab'
import AcademicCollab from './AcademicCollab'
import InternationalCollab from './InternationalCollab'
import IndustrySwiperIcons from './IndustrySwiperIcons'
function StrategicCollabBanner() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('/strategic/partners')) {
      const element = document.getElementById('strategic-partners');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (location.pathname.includes('/strategic/collaborations')) {
      const element = document.getElementById('international-collab');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (location.pathname.includes('/strategic/Industry-partners')) {
      const element = document.getElementById('industry-swiper-icons');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div>
      <Navbar />
      <div
        data-aos="fade-down"
        className="fac-hero-section d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start text-white text-center text-md-start text-lg-start p-3 p-lg-5 p-lg-7"
        style={{
          backgroundImage: `url(https://img.freepik.com/premium-photo/communication-feedback-chos-role_1077802-145596.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "60vh",
        }}
      >
        <div
          className="w-100 w-lg-75 w-lg-50 ms-lg-5"
          data-aos="fade-right"
        >
          {/* Dynamic Title */}
          <h1 className="fw-bold fs-1 fs-lg-1">Strategic Collaborations</h1>
        </div>

        <div className='position-absolute bottom-0 left-0 d-flex align-items-center campus-route-bg py-3'>
          <p className='m-0'><a href='/' className='text-decoration-none text-white'>UCU</a></p>
          <ChevronRight />
          <p className='m-0'>Strategic Collaborations</p>
        </div>

      </div>
      <StrategicCollabAbout />
      <div id="strategic-partners">
        <StrategicPartners />
      </div>
      <IndustrialCollab />
      <AcademicCollab />
      <div id="international-collab">
        <InternationalCollab />
      </div>
      <div id="industry-swiper-icons">
        <IndustrySwiperIcons />
      </div>
      <NewFooter />
    </div>
  )
}

export default StrategicCollabBanner