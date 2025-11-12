import React from 'react'
import { ChevronRight } from 'lucide-react'
import Navbar from '../../Components/Navbar/Navbar'
import NewFooter from '../../Components/NewFooter/NewFooter'
import MediaGalleryAbout from './MediaGalleryAbout'
import './MediaGallery.css'
function MediagalleryBanner() {
    return (
        <div>
            <Navbar />
            <div
                data-aos="fade-down"
                className="fac-hero-section position-relative d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start text-white text-center text-md-start text-lg-start p-3 p-lg-5 p-lg-7"
                style={{
                    minHeight: "60vh",
                    overflow: "hidden",
                }}
            >
                {/* Background Video */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                    style={{ zIndex: -1, objectFit: "cover" }}
                >
                    <source src="https://www.spjain.org/hubfs/images/2020/video-gallery/video-banner/sp-jain-website-gallery-page-videos.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Content */}
                <div className="w-100 w-lg-75 w-lg-50 ms-lg-5" data-aos="fade-right">
                    <h1 className="fw-bold fs-1 fs-lg-1">Gallery</h1>
                </div>

                {/* Breadcrumb */}
                <div className="position-absolute bottom-0 left-0 d-flex align-items-center campus-route-bg py-3">
                    <p className="m-0">UCU</p>
                    <ChevronRight />
                    <p className="m-0">Gallery</p>
                </div>
            </div>
            <MediaGalleryAbout />
            <NewFooter />
        </div>
    )
}

export default MediagalleryBanner