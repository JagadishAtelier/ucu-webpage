import { ChevronRight } from 'lucide-react'
import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import NewFooter from '../../Components/NewFooter/NewFooter'
import './ContactChapters.css'
import ContactChapterGrid from './ContactChapterGrid'
import ContactChapterInternatinalGrid from './ContactChapterInternatinalGrid'
function ContactChapterInternatinal() {
    return (
        <div>
            <Navbar />
            <div
                data-aos="fade-down"
                className="fac-hero-section d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start text-white text-center text-md-start text-lg-start p-3 p-lg-5 p-lg-7"
                style={{
                    backgroundImage: `url(https://www.spjain.org/hs-fs/hubfs/images/2020/contact-us/contact-us-banner.jpg?width=2730&height=665&name=contact-us-banner.jpg)`,
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
                    <h1 className="fw-bold fs-1 fs-lg-1">Chapters</h1>
                    <p>Find chapters, blogs, Podcast and social chapters to level up your professional life.</p>
                </div>

                <div className='position-absolute bottom-0 left-0 d-flex align-items-center campus-route-bg py-3'>
                    <p className='m-0'><a href='/' className='text-decoration-none text-white'>UCU</a></p>
                    <ChevronRight />
                    <p className='m-0'>Chapters </p>
                </div>

            </div>
            <ContactChapterInternatinalGrid/>
            <NewFooter />
        </div>
    )
}

export default ContactChapterInternatinal