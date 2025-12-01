import React from 'react'
import { Calendar1, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import Navbar from '../../Components/Navbar/Navbar'
import NewFooter from '../../Components/NewFooter/NewFooter'
import EEPJourney from './EEPJourney'
import './EEPage.css'
import { Button } from 'react-bootstrap'
import EEPFinder from './EEPFinder'
import EEPUpcomming from './EEPUpcomming'
import EEPAdvantage from './EEPAdvantage'
import EEPImpact from './EEPImpact'
import EEPRanking from './EEPRanking'
import ExecutiveEducationTabs from './ExecutiveEducationTabs'

function EEPHome() {
  const bannerImages = [
    'https://img.freepik.com/premium-photo/corporate-business-people-working-busy-marketing-office-space-planning-strategy-books-reading-email-laptop-work_146105-104477.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80',
    'https://img.freepik.com/premium-photo/young-indian-businesswoman-blue-suit-giving-thumbs-up-with-one-hand-holding-documents-standing-office-other-people-background_872074-31460.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80',
    'https://img.freepik.com/premium-photo/woman-board-room-smile-with-tablet-research-teamwork-collaboration-portrait-diversity-happy-with-people-candidates-assessment-job-interview-with-manager-boss_590464-344010.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80'
  ]

  return (
    <div>
      <Navbar />
      <ExecutiveEducationTabs/>
      {/* <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={1000} // controls smooth slide speed (in ms)
        className="hero-swiper"
      >
        {bannerImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="fac-hero-section d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start text-white text-center text-md-start text-lg-start p-3 p-lg-5 p-lg-7 position-relative"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "60vh",
                transition: "all 1s ease-in-out",
              }}
            >
              <div className="w-100 w-lg-75 w-lg-50 ms-lg-5">
                <h1 className="fw-bold fs-1 fs-lg-1">Executive Programs</h1>
                <div className='d-flex gap-2'>
                    <Calendar1/>
                    <p>Nov 10,2025</p>
                </div>
                <Button className='text-white' style={{backgroundColor:"#5ac501",border:"none"}}>Know more</Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
      {/* <EEPJourney />
          <EEPFinder/>
          <EEPUpcomming/>
          <EEPAdvantage/>
          <EEPImpact/>
          <EEPRanking/> */}
      <NewFooter />
    </div>
  )
}

export default EEPHome
