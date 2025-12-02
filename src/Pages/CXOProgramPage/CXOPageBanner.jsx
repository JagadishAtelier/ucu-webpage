import React from 'react'
import './CXOProgramPage.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import Navbar from '../../Components/Navbar/Navbar'
import NewFooter from '../../Components/NewFooter/NewFooter'
import { FiClock, FiDollarSign, FiDownload, FiFileText } from "react-icons/fi";
import { LuHourglass } from "react-icons/lu";
import { div } from "framer-motion/client";
import { PersonStanding, User } from "lucide-react";
import CXOProgramGrid from './CXOProgramGrid'
import CXOCurriculam from './CXOCurriculam'
import CXOMasterClass from './CXOMasterClass'
import CXOSession from './CXOSession'
import CXOCertificate from './CXOCertificate'
import CXOAttended from './CXOAttended'
import CXOProfessor from './CXOProfessor'
const bannerImages = [
    'https://img.freepik.com/premium-photo/corporate-business-people-working-busy-marketing-office-space-planning-strategy-books-reading-email-laptop-work_146105-104477.jpg?w=740',
    'https://img.freepik.com/premium-photo/young-indian-businesswoman-blue-suit-giving-thumbs-up-with-one-hand-holding-documents-standing-office-other-people-background_872074-31460.jpg?w=740',
    'https://img.freepik.com/premium-photo/woman-board-room-smile-with-tablet-research-teamwork-collaboration-candidates-assessment-job-interview_590464-344010.jpg?w=740'
]

function CXOPageBanner() {
    return (
        <div>
            <Navbar />

            <div className="cxo-banner-wrapper position-relative">

                {/* 🔹 Background Swiper ONLY */}
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    speed={1200}
                    className="cxo-bg-swiper"
                >
                    {bannerImages.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="cxo-bg-slide"
                                style={{
                                    backgroundImage: `url(${image})`,
                                }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* 🔹 FIXED CONTENT (Text + Form) */}
                <div className="cxo-fixed-content">
                    <div>
                        <h1 className="fw-bold fs-1 text-white">CXO</h1>
                        <p>Redefining C-Suite acumen for Current and Aspiring CEOs !</p>
                    </div>
                    <div className="cxo-proModalContent bg-white p-3 d-flex flex-column gap-3">
                        <h4 className='text-black text-center'>Download Brochure</h4>
                        <div className="proInputGroup m-0">
                            <input type="text" placeholder="Name" />
                        </div>

                        <div className="proInputGroup m-0">
                            <input type="email" placeholder="Email" />
                        </div>

                        <div className="proInputGroup m-0">
                            <input type="tel" placeholder="Phone" />
                        </div>
                        <div className='d-flex gap-3 m-0'>
                            <div className="proInputGroup w-100 m-0">
                                <input type="text" placeholder="City" />
                            </div>
                            <div className="proInputGroup w-100 m-0">
                                <select>
                                    <option value="">Experience</option>
                                    <option value="5-10">5 - 10 years</option>
                                    <option value="10+">10+ years</option>
                                </select>
                            </div>

                        </div>
                        <div className='d-flex gap-2 align-items-start'>
                            <div className="">
                                <input type="checkbox" defaultChecked />
                            </div>
                            <label className='text-black disclamier-text-cxo'>Disclaimer: By submitting my contact information here, I override my UCU registration and authorize TimesPro and its institute partners including UCUs to contact me via different modes of communication.</label>
                        </div>

                        <button className="proSubmitBtn m-0">Apply Now</button>
                    </div>
                </div>
                <div className="pg-applications  cxo-banner-tab-box">
                    {/* Applications Open */}
                    <div className="app-box box-1">
                        <div className="icon d-lg-block d-none"><FiDollarSign size={24} /></div>
                        <div className="app-content d-lg-block d-none" style={{ marginTop: '-18px' }}>
                            <p className="text-small d-lg-block d-none">Programme Fees</p>
                            <p className="text-small d-lg-block d-none">₹4,71,000 + GST</p>

                        </div>

                        {/* Mobile content */}
                        <div className="d-flex flex-row flex-wrap gap-1">
                            <div className="d-flex gap-2">
                                <div className="icon d-lg-none d-block"><FiDollarSign size={24} /></div>
                                <div className="app-content d-lg-none d-block" style={{ marginTop: '-18px' }}>
                                    <p className="text-small d-lg-none d-block">Programme Fees</p>
                                    <p className="text-small d-lg-none d-block">₹4,71,000 + GST</p>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Duration */}
                    <div className="app-box box-2">
                        <div className="icon"><LuHourglass size={24} /></div>
                        <div>
                            <p className="text-small">Programme Duration</p>
                            <p className="text-large">2 years</p>
                        </div>
                    </div>

                    {/* Programme Starts */}
                    <div className="app-box box-3">
                        <div className="icon"><FiFileText size={24} /></div>
                        <div>
                            <p className="text-small">Programme Starts</p>
                            <p className="text-large">29th March, 2026</p>
                        </div>
                    </div>
                    {/* One more box */}
                    {/* Download Brochure */}
                    <div className="app-box box-4">
                        <div className="icon"><FiDownload size={24} /></div>
                        <div>
                            <p className="text-small">Download Brochure</p>
                        </div>
                    </div>


                </div>
            </div>
            <CXOProgramGrid/>
            <CXOCurriculam/>
            <CXOMasterClass/>
            <CXOSession/>
            <CXOCertificate/>
            <CXOAttended/>
            <CXOProfessor/>
            <NewFooter />
        </div>
    )
}

export default CXOPageBanner
