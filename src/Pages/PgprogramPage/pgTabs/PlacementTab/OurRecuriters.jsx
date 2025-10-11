import React from 'react'
import './PlacementTab.css'
import { FileType2 } from 'lucide-react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid"; // ✅ Import grid CSS
import { Autoplay, Grid } from "swiper/modules"; // ✅ Import Grid module

const data = [
  "Godrej", "PG", "Nestle", "Amazon",
  "Tata", "Infosys", "Wipro", "Deloitte",
  "EY", "KPMG", "Tech Mahindra", "Accenture",
  "IBM", "Capgemini", "Cognizant", "HCL"
];

function OurRecuriters() {
  return (
    <div>
      <div className='d-flex flex-lg-row flex-column justify-content-between align-items-start align-items-lg-center mt-5'>
        <h1 className='fs-2 fw-medium'>Our recruiters</h1>
        <div className='d-flex gap-2 press-note-btn'>
          <FileType2 style={{ margin: "0" }} />
          <p className='m-0'>Indicative recruiters list</p>
        </div>
      </div>

      <p className='mt-3'>A representative list of recruiting companies for Autumn 2023.</p>

      <div className="recruiter-swiper mt-4">
        <Swiper
          modules={[Autoplay, Grid]}
          grid={{
            rows: 2, // ✅ two rows
            fill: "row",
          }}
          spaceBetween={20}
        //   slidesPerView={4} 
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
                  breakpoints={{
          0: { slidesPerView: 2 },       // ✅ 1 slide on mobile
          768: { slidesPerView: 4 },     // ✅ 2 slides on tablets
          1024: { slidesPerView: 4 }     // ✅ 3 slides on desktop
        }}
          className='swiper-place-tab'
        >
          {data.map((item, index) => (
            <SwiperSlide key={index} >
              <div className="text-center recruiter-card p-3 border">
                <h5>{item}</h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default OurRecuriters;
