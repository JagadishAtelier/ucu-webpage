import { ChevronRight } from 'lucide-react';
import React from 'react'
import { Accordion } from "react-bootstrap";
import {Button} from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const boxTwoData = [
    {
        image : "https://www.spjimr.org/wp-content/uploads/2024/05/social-sector-internship.png",
        head : "Social Sector Intership",
        hoverText : "Contributing to the societal issue of grassroots communities"
    },
    {
        image : "https://www.spjimr.org/wp-content/uploads/2024/05/social-sector-internship.png",
        head : "Social Sector Intership",
        hoverText : "Contributing to the societal issue of grassroots communities"
    },
    {
        image : "https://www.spjimr.org/wp-content/uploads/2024/05/social-sector-internship.png",
        head : "Social Sector Intership",
        hoverText : "Contributing to the societal issue of grassroots communities"
    },
    {
        image : "https://www.spjimr.org/wp-content/uploads/2024/05/social-sector-internship.png",
        head : "Social Sector Intership",
        hoverText : "Contributing to the societal issue of grassroots communities"
    },
    {
        image : "https://www.spjimr.org/wp-content/uploads/2024/05/social-sector-internship.png",
        head : "Social Sector Intership",
        hoverText : "Contributing to the societal issue of grassroots communities"
    },
    {
        image : "https://www.spjimr.org/wp-content/uploads/2024/05/social-sector-internship.png",
        head : "Social Sector Intership",
        hoverText : "Contributing to the societal issue of grassroots communities"
    },
]
const boxTwoData2 = [
    {
        image : "https://www.spjimr.org/wp-content/uploads/images/ashish-kothari.jpg",
        name : "Ashish kothari",
        hoverText : "Founder of Kothari"
    },
    {
        image : "https://www.spjimr.org/wp-content/uploads/images/t-m-krishna.jpg",
        name : "Ashish kothari",
        hoverText : "Founder of Kothari"
    },
    {
        image : "https://www.spjimr.org/wp-content/uploads/2024/12/nidhi-jamwal-new.webp",
        name : "Ashish kothari",
        hoverText : "Founder of Kothari"
    },
    {
        image : "https://www.spjimr.org/wp-content/uploads/images/sumana-roy.jpg",
        name : "Ashish kothari",
        hoverText : "Founder of Kothari"
    },
    {
        image : "https://www.spjimr.org/wp-content/uploads/images/ashish-kothari.jpg",
        name : "Ashish kothari",
        hoverText : "Founder of Kothari"
    },
    {
        image : "https://www.spjimr.org/wp-content/uploads/images/ashish-kothari.jpg",
        name : "Ashish kothari",
        hoverText : "Founder of Kothari"
    },
    {
        image : "https://www.spjimr.org/wp-content/uploads/images/ashish-kothari.jpg",
        name : "Ashish kothari",
        hoverText : "Founder of Kothari"
    },
    {
        image : "https://www.spjimr.org/wp-content/uploads/images/ashish-kothari.jpg",
        name : "Ashish kothari",
        hoverText : "Founder of Kothari"
    },
]
function SocietalFocus() {
  return (
    <div className='captital-campus-content-sec my-4'>
        <h1>Our current societal impact initiatives are focused on:</h1>
        <div>
        <Accordion defaultActiveKey="0" className="mt-4">

        {/* Accordion box-1 */}
          <Accordion.Item eventKey="0">
            <Accordion.Header>Empowering the underprivileged segment of our local community</Accordion.Header>
            <Accordion.Body>
        <div className='d-flex flex-lg-row flex-md-row flex-column gap-3 '>
            <p className='col-lg-9 col-md-7  fw-normal fs-6'>The Abhyudaya initiative, started in 2008, works to empower underprivileged communities from lower-income neighbourhoods in Mumbai’s ‘K-Ward’ around the SPJIMR campus. Abhyudaya provides mentoring, enrichment activities, and financial support to underprivileged students (fondly called ‘Sitaras’ or ‘stars’), their families and schools.</p>
            <img src='https://www.spjimr.org/wp-content/uploads/2024/05/positive-impact-rating.png' className='societal-image-1'/>
        </div>
        <div className='my-4'>
            <h1>Impact</h1>
            <img src='https://www.spjimr.org/wp-content/uploads/2025/06/Total-Sitaras-2025.webp'/>
        </div>
        <div>
            <h1>Impact stories</h1>
            <div className='d-flex flex-lg-row flex-column gap-4'>
            <div className='societal-campus-youtube'>
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Sonam Wangchuk Keynote"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
            <div className='societal-campus-youtube'>
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Sonam Wangchuk Keynote"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
            </div>
            <Button className='my-4 p-3' style={{backgroundColor:"#5ac501",border:"none"}}>Know more about Abhyudaya</Button>
        </div>
                <div className='d-flex flex-lg-row flex-md-row flex-column gap-3 '>
            <p className='col-lg-9 col-md-7  fw-normal fs-6'>Sashakt is crafted to support entrepreneurs from low-income backgrounds in growing their businesses and fostering economic resilience. Participants are selected largely from SPJIMR’s Abhyudaya programme or through its networks. Through a structured, hands-on curriculum, Sashakt will provide education and mentorship, equipping participants with essential skills in finance, marketing, business operations, and leadership. Each session will include practical learning in Hindi to ensure accessibility and maximise impact.</p>
            <img src='https://www.spjimr.org/wp-content/uploads/images/sashakt.png' className='societal-image-1'/>
        </div>
         <Button className='my-4 p-3' style={{backgroundColor:"#5ac501",border:"none"}}>Know more about Abhyudaya</Button>
            </Accordion.Body>
          </Accordion.Item>

        {/* Accordion box-2 */}
          <Accordion.Item eventKey="1">
            <Accordion.Header>Engaging the social sector at the grassroots level</Accordion.Header>
            <Accordion.Body>
              <p>
The Development of Corporate Citizenship (DoCC) initiative, started in the 1990s, engages with hundreds of NGOs through mandatory student internships, fairs, and discussion forums that provide market access and learning opportunities to NGOs, and through awards that recognise innovation in the social sector.
              </p>
              <div className='d-grid'>
                <div className='row gap-2 mx-auto'>
                    {boxTwoData.map((item,index)=>(
                        <div className='col-2 box-two-data-card'>
                            <img src={item.image}/>
                            <p className='col-8'>{item.head}</p>
                            <div className='hover-societal-text'>{item.hoverText}</div>
                        </div>
                    ))}
                </div>
              </div>
              <div className='my-3'>
                <h1>Partners</h1>
                <div>
                  <div className='d-flex align-items-center gap-2'>
                    <ChevronRight/>
                    <p className='m-0'>300+ social sector organisations across 26 Indian states</p>
                  </div>
                  <div className='d-flex align-items-center gap-2 mt-2'>
                    <ChevronRight/>
                    <p className='m-0'>300+ social sector organisations across 26 Indian states</p>
                  </div>
                </div>
                <div className='my-4 d-flex gap-3'>
                  <div className='societal-brand'>
                    <img src='https://www.spjimr.org/wp-content/uploads/2024/05/un-prme.png'/>
                  </div>
                  <div className='societal-brand'>
                    <img src='https://www.spjimr.org/wp-content/uploads/2024/05/m3m-foundation.png'/>
                  </div>
                  <div className='societal-brand'>
                    <img src='https://www.spjimr.org/wp-content/uploads/2024/05/edhec-business-school.png'/>
                  </div>
                </div>
              </div>
              <div className='my-4'>
                <h1>PRME India Chapter Meet 2024 Speakers</h1>
                <div className='d-flex gap-3 justify-content-end'>
                  <Button className='my-4 p-3' style={{backgroundColor:"#5ac501",border:"none"}}>Agenda 2024</Button>
                  <Button className='my-4 p-3' style={{backgroundColor:"#5ac501",border:"none"}}>Know more </Button>
                </div>
                      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 250000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="societal-tag-two-swiper"
      >
        {boxTwoData2.map((item,index)=>(
          <SwiperSlide>
          <div className='societal-box-two-card-div'>
            <img src={item.image}/>
            <div className='py-4 px-2'>
            <p className='fw-bold fs-5 m-0'>{item.name}</p>
            <p>{item.hoverText}</p>
            </div>
          </div>
          </SwiperSlide>
        ))}
      </Swiper>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </div>
    </div>
  )
}

export default SocietalFocus