import React, { useEffect, useState } from 'react'
import './AdmissionHero.css'
import Navbar from '../Navbar/Navbar'
import NewFooter from '../NewFooter/NewFooter'
import NewAdminWhy from './NewAdminWhy'
import NewAdminIndustry from './NewAdminIndustry'
import NewAdminAdmission from './NewAdminAdmission'
import NewAdminWho from './NewAdminWho'
import NewAdminLearn from './NewAdminLearn'
import NewAdminFaq from './NewAdminFaq'
import NewAdminReady from './NewAdminReady'
import { getAdmissionPageData } from '../../Api/AdmissionPageApi'

function AdmissionHero() {
    const [pageData, setPageData] = useState(null);

    useEffect(() => {
        const fetchContent = async () => {
            const data = await getAdmissionPageData();
            setPageData(data);
        };
        fetchContent();
    }, []);

    const hero = pageData?.hero || {};
    // Default Fallbacks
    const heroTitle = hero.title || "Transform Your Career with an UCU";
    const heroDesc = hero.description || "Transform your career with an UCU that blends academic excellence, industry relevance, and global exposure.";
    const heroBadge = hero.badge || "Admissions Open for 2026–28 Batch";

    return (
        <>
            <Navbar />
            <div className="NEWADM-hero-section position-relative overflow-hidden pt-5 pb-0 pb-lg-0">

                {/* Background Image */}
                {/* <img
                src={hero.images?.[0] || "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80"}
                alt="MBA students collaborating"
                className="NEWADM-hero-bg img-fluid"
                loading="eager"
            /> */}

                {/* Overlay */}

                <div className="container h-100 position-relative">
                    <div className="d-flex gap-5 h-100 align-items-center">
                        <div className="col-lg-7 col-md-12 text-white">

                            {/* Badge */}
                            <div className="NEWADM-badge mb-4" data-aos="fade-down" data-aos-delay="100">
                                <i className="fas fa-star me-2"></i>
                                {heroBadge}
                            </div>

                            {/* Heading */}
                            <h2 className="NEWADM-title" data-aos="fade-right" data-aos-delay="100">
                                {heroTitle}
                            </h2>

                            {/* Description */}
                            <p className="NEWADM-description" data-aos="fade-right" data-aos-delay="100">
                                {heroDesc}
                            </p>

                            {/* CTA Buttons */}
                            <div className="d-flex flex-column flex-sm-row gap-3 mb-5" data-aos="fade-right" data-aos-delay="100">
                                <a href="#apply" className="NEWADM-btn-primary">
                                    <i className="fas fa-pen-to-square me-2"></i>
                                    Start Your Application
                                </a>
                                <a href="#brochure" className="NEWADM-btn-outline">
                                    <i className="fas fa-download me-2"></i>
                                    Download Brochure
                                </a>
                            </div>

                            {/* Stats */}
                            <div className="d-lg-flex d-none  NEWADM-stats pt-4" data-aos="fade-right" data-aos-delay="100">
                                <div className="col-4">
                                    <h3>{hero.cards?.[0]?.statValue || "8"}</h3>
                                    <span>{hero.cards?.[0]?.statLabel || "Specializations"}</span>
                                </div>
                                <div className="col-4">
                                    <h3>{hero.cards?.[1]?.statValue || "250+"}</h3>
                                    <span>{hero.cards?.[1]?.statLabel || "Corporate Partners"}</span>
                                </div>
                                <div className="col-4">
                                    <h3>{hero.cards?.[2]?.statValue || "2 Yrs"}</h3>
                                    <span>{hero.cards?.[2]?.statLabel || "Full-time Program"}</span>
                                </div>
                            </div>

                        </div>
                        <div className='h-100 pt-5 d-none d-lg-block' data-aos="fade-left" data-aos-delay="100">
                            <img src={hero.images?.[0] || '/adm.png'}
                                className='h-100 w-100' />
                        </div>
                    </div>
                </div>

            </div>
            <NewAdminWhy data={pageData?.whyChoose} />
            <NewAdminIndustry data={pageData?.industry} />
            <NewAdminAdmission data={pageData?.admissionProcess} />
            <NewAdminWho data={pageData?.whoCanApply} />
            <NewAdminLearn data={pageData?.learningExperience} />
            <NewAdminFaq data={pageData?.faqSection} />
            <NewAdminReady data={pageData?.readyToApply} />
            <NewFooter />
        </>
    )
}

export default AdmissionHero