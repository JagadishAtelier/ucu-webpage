import { ChevronRight } from 'lucide-react';
import React from 'react'
import { Accordion, Table } from "react-bootstrap";
import {Button} from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaWater } from 'react-icons/fa';
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
const boxThreData = [
  {image : "https://www.spjimr.org/wp-content/uploads/2024/05/12-years.png",
    number : "13+",
    name : "Years"
  },
  {image : "https://www.spjimr.org/wp-content/uploads/2024/05/12-years.png",
    number : "13+",
    name : "Years"
  },
  {image : "https://www.spjimr.org/wp-content/uploads/2024/05/12-years.png",
    number : "13+",
    name : "Years"
  },
  {image : "https://www.spjimr.org/wp-content/uploads/2024/05/12-years.png",
    number : "13+",
    name : "Years"
  },
  {image : "https://www.spjimr.org/wp-content/uploads/2024/05/12-years.png",
    number : "13+",
    name : "Years"
  },
  {image : "https://www.spjimr.org/wp-content/uploads/2024/05/12-years.png",
    number : "13+",
    name : "Years"
  },
]
const boxThreeData2 = [
  { icon : <FaWater/>,text : "Water and Sustainability",},
  { icon : <FaWater/>,text : "Water and Sustainability",},
  { icon : <FaWater/>,text : "Water and Sustainability",},
  { icon : <FaWater/>,text : "Water and Sustainability",},
  { icon : <FaWater/>,text : "Water and Sustainability",},
  { icon : <FaWater/>,text : "Water and Sustainability",},
  { icon : <FaWater/>,text : "Water and Sustainability",},
]
const boxFourData = [
  { image : "https://www.spjimr.org/wp-content/uploads/images/accelerators-1.jpg",
    bottomText : "Accelerators",
            hoverText : "Contributing to the societal issue of grassroots communities"
  },
  {image: "https://www.spjimr.org/wp-content/uploads/2024/05/start-up-resource-hub-new1-jpg.webp",
    bottomText:"Start-Up-Resource-Hub",
            hoverText : "Contributing to the societal issue of grassroots communities"
  },
  {image : "https://www.spjimr.org/wp-content/uploads/images/entrepreneurship-programmes.jpg",
    bottomText:"Entrepreneurship Programmes",
            hoverText : "Contributing to the societal issue of grassroots communities"
  }
]
const data = [
  ["Abhivyakti Foundation", "Narayana Superspeciality Hospital", "Aditya Birla Group", "	Om Creations Trust"],
  ["Alert India", "Piramal Foundation", "	Alkem Laboratories", "Pratham Education Foundation"],
  ["Ambuja Cement Foundation", "Praveenlatha Sansthan Foundation Purnata", "Americares India Foundation", "Purnata"],
];

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
                        <div className='box-two-data-card'>
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
                <div className='my-4 d-flex gap-3 flex-wrap mx-auto m-lg-0'>
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
      <Button className='my-4 p-3' style={{backgroundColor:"#5ac501",border:"none"}}>Know more about DoCC </Button>
            </Accordion.Body>
          </Accordion.Item>

          
        {/* Accordion box-3 */}
          <Accordion.Item eventKey="2">
            <Accordion.Header>Building managerial capacity in the social sector</Accordion.Header>
            <Accordion.Body>
              <p>The Post Graduate Programme in Development Management (PGPDM), introduced in 2011, is a highly subsidised 12-month modular programme for professionals working in or intending to work in the social sector, including social enterprises, NGOs, foundations, CSR functions of corporate for-profit organisations, and social policy or welfare departments of governments.</p>
              <h1>Impact</h1>
                <div className='d-grid'>
                <div className='row gap-2 mx-auto col-12'>
                    {boxThreData.map((item,index)=>(
                        <div className='box-three-data-card'>
                            <img src={item.image}/>
                            <p className='fs-1 fw-bold m-0'>{item.number}</p>
                            <p className='fs-5'>{item.name}</p>
                        </div>
                    ))}
                </div>
              </div>
              <h1 className='mt-4'>Participant projects</h1>
              <p>The projects undertaken by PGPDM participants are aligned with various UNSDGs, impacting a wide range of areas such as water and sustainability, health and well-being, agriculture, disability, mental health, education, rural development, social justice, and the conservation of natural resources, among others.</p>
              <div className='text-end'><Button className='my-4 p-3' style={{backgroundColor:"#5ac501",border:"none"}}>View All </Button></div>              
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
        {boxThreeData2.map((item,index)=>(
          <SwiperSlide>
          <div className='societal-box-two-card-div'>
            <div className='py-4 px-2'>
              <div className='text-center mb-3'>{item.icon}</div>
            <p className='fw-bold fs-5 m-0'>{item.text}</p>
            <p>{item.hoverText}</p>
            </div>
          </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <p className='my-4'>PGPDM alumni serve as founders, heads, trustees, and directors of NGOs, social entrepreneurs, CSR managers, and programme officers and consultants across various social sector organisations. Participating and sponsoring organisations includes:</p>
            <div className='social-impact-table-scroll-container'>
          <Table
            bordered
            responsive
            className="societal-impact-table text-center"
          >
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  {row.map((cell, i) => (
                    <td key={i}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
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
            <Button className='my-4 p-3' style={{backgroundColor:"#5ac501",border:"none"}}>Know more about PGPDM</Button>
        </div>
            </Accordion.Body>
          </Accordion.Item>

                  {/* Accordion box-4 */}
          <Accordion.Item eventKey="3">
            <Accordion.Header>Accelerating the start-up ecosystem</Accordion.Header>
            <Accordion.Body>
              <p>We offer a range of highly subsidised or no-cost services to entrepreneurs to help them conceive, launch, and scale their businesses. In doing so, we are also building a strong ecosystem for responsible entrepreneurship in India.</p>
              <div className='d-grid my-5'>
                <div className='row mx-auto col-12'>
                    {boxFourData.map((item,index)=>(
                        <div className='box-four-data-card col-lg-4'>
                            <img src={item.image}/>
                            <p className='col-12 text-center bg-box-four-text'>{item.bottomText}</p>
                            <div className='hover-societal-text'>{item.hoverText}</div>
                        </div>
                    ))}
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>

                    <Accordion.Item eventKey="4">
            <Accordion.Header>Recognising social impact</Accordion.Header>
            <Accordion.Body>
              <p>Every year, we recognise the social impact created by social enterprises, civil society organisations and our alumni for their exceptional contributions to society.</p>
            <div className='d-flex gap-lg-3 gap-3 flex-lg-row flex-column'>
              <Button className='my-lg-4 p-3' style={{backgroundColor:"#5ac501",border:"none"}}>Social Impact Awards</Button>
              <Button className='my-lg-4 p-3' style={{backgroundColor:"#5ac501",border:"none"}}>Social Impact Grants</Button>
              <Button className='my-lg-4 p-3' style={{backgroundColor:"#5ac501",border:"none"}}>Research Grants</Button>
              <Button className='my-lg-4 p-3' style={{backgroundColor:"#5ac501",border:"none"}}>Alumni Social Excellence Awards</Button>
            </div>
            </Accordion.Body>
          </Accordion.Item>


                    <Accordion.Item eventKey="5">
            <Accordion.Header>Creating socially sensitive managers</Accordion.Header>
            <Accordion.Body>
              <p>Since inception, SPJIMR has redefined business education with initiatives that go beyond traditional classroom learning. The institute focuses on nurturing managers who balance social sensitivity with the 3Ps—people, planet and profits—driving positive societal outcomes. All our programmes’ competency goals and learning objectives include nurturing socially sensitive and responsible business leaders. This is achieved through a combination of holistic experiences, including immersive and experiential learning opportunities. Our aim is to amplify our impact by integrating social sensitivity with wise innovation.</p>
            <div className='d-flex gap-lg-3 gap-3 flex-lg-row flex-column'>
              <Button className='my-lg-4 p-3' style={{backgroundColor:"#5ac501",border:"none"}}>Competency Goals</Button>
              <Button className='my-lg-4 p-3' style={{backgroundColor:"#5ac501",border:"none"}}>Alumni NGO Founders</Button>
              <Button className='my-lg-4 p-3' style={{backgroundColor:"#5ac501",border:"none"}}>Advancing Wise Innovation </Button>
            </div>
            </Accordion.Body>
          </Accordion.Item>


                    <Accordion.Item eventKey="6">
            <Accordion.Header>Focussing on research that contributes towards societal impact</Accordion.Header>
            <Accordion.Body>
                    <p>We strive to create and disseminate knowledge that addresses local and global real-life managerial and social challenges. Our research is pluralistic; in addition to peer-reviewed journal contributions, we respect many forms of thought leadership that influence practice, such as books, case studies, and popular press articles. Nearly 50% of our scholarly contributions are aligned with four themes that collectively contribute to the SPJIMR agenda of ‘advancing wise innovation’—defined as ‘purposeful innovation done for the right reasons in the right way’.</p>
            <div className='d-flex gap-lg-3 gap-3 flex-lg-row flex-column'>
              <Button className='my-lg-4 p-3' style={{backgroundColor:"#5ac501",border:"none"}}>Know more</Button>
            </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </div>
    </div>
  )
}

export default SocietalFocus