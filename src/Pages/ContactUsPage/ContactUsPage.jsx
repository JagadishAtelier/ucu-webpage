import React, { useEffect, useState } from 'react'
import './ContactUsPage.css'
import { ChevronRight } from 'lucide-react'
import Navbar from '../../Components/Navbar/Navbar'
import NewFooter from '../../Components/NewFooter/NewFooter'
import ContactPageForm from './ContactPageForm'
import ContactAccordion from './ContactAccordion'
import ContactUsCarousel from './ContactUsCarousel'
import ContactUsCarouselInternational from './ContactUsCarouselInternational'
import { getContactPageData } from '../../Api/ContactPageApi'

const fallbackContactData = {
    hero: {
        bannerTitle: "Contact Us",
        bannerImage: ["https://www.spjain.org/hs-fs/hubfs/images/2020/contact-us/contact-us-banner.jpg?width=2730&height=665&name=contact-us-banner.jpg"],
    },
    introSection: {
        title: "At UCU School of Global Management, we put the student first. We are here to talk to you about our programs, help you choose the right one and discuss your career prospects.",
    },
    visibility: {
        contactBoxes: true,
        contactForm: true,
        contactAccordion: true,
        indiaCenters: true,
        internationalCenters: true,
    },
};

function ContactUsPage() {
    const [contactData, setContactData] = useState(fallbackContactData);

    useEffect(() => {
        let mounted = true;

        getContactPageData().then((data) => {
            if (mounted && data) {
                setContactData({
                    ...fallbackContactData,
                    ...data,
                    hero: { ...fallbackContactData.hero, ...(data.hero || {}) },
                    introSection: { ...fallbackContactData.introSection, ...(data.introSection || {}) },
                    visibility: { ...fallbackContactData.visibility, ...(data.visibility || {}) },
                });
            }
        });

        return () => {
            mounted = false;
        };
    }, []);

    const heroImage = contactData.hero?.bannerImage?.[0] || fallbackContactData.hero.bannerImage[0];
    const indiaCenter = (contactData.indiaCenter || []).find((section) => section.isVisible !== false);
    const internationalCenters = contactData.internationalCenter || contactData.iternationalCenter || [];
    const internationalCenter = internationalCenters.find((section) => section.isVisible !== false);

    return (
        <div>
            <Navbar />
            <div
                data-aos="fade-down"
                className="fac-hero-section d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start text-white text-center text-md-start text-lg-start p-3 p-lg-5 p-lg-7"
                style={{
                    backgroundImage: `url(${heroImage})`,
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
                    <h1 className="fw-bold fs-1 fs-lg-1">{contactData.hero?.bannerTitle || "Contact Us"}</h1>
                </div>

                <div className='position-absolute bottom-0 left-0 d-flex align-items-center campus-route-bg py-3'>
                    <p className='m-0'><a href='/' className='text-decoration-none text-white'>UCU</a></p>
                    <ChevronRight />
                    <p className='m-0'>Contact Us</p>
                </div>

            </div>
            <ContactPageForm data={contactData} />
            {contactData.visibility?.contactAccordion && <ContactAccordion sections={contactData.contactAccordion} />}
            {contactData.visibility?.indiaCenters && <ContactUsCarousel section={indiaCenter} />}
            {contactData.visibility?.internationalCenters && <ContactUsCarouselInternational section={internationalCenter} />}
            <NewFooter />
        </div>
    )
}

export default ContactUsPage
