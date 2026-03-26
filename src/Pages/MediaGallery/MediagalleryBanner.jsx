import React from 'react'
import { ChevronRight, Home } from 'lucide-react'
import Navbar from '../../Components/Navbar/Navbar'
import NewFooter from '../../Components/NewFooter/NewFooter'
import MediaGalleryAbout from './MediaGalleryAbout'
import './Mediagallery.css'
function MediagalleryBanner() {
    return (
        <div>
            <Navbar />
            <div
                data-aos="fade-down"
                className="fac-hero-section position-relative overflow-hidden text-white px-3 px-lg-5"
                style={{ minHeight: "65vh" }}
            >
                {/* Background Video with Overlay */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                    style={{ zIndex: -1 }}
                >
                    <source src="https://www.spjain.org/hubfs/SP-Jain-Global-Corporate-Video.mp4" type="video/mp4" />
                </video>
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{ background: 'linear-gradient(rgba(8, 22, 114, 0.4), rgba(8, 22, 114, 0.8))', zIndex: -1 }}
                ></div>

                <div className="container position-relative py-5">
                    <div className="row">
                        <div className="col-lg-8" data-aos="fade-right">
                            <h1 className="display-3 fw-bold mb-4">
                                Dynamic <span style={{ color: "#5ac501" }}>Gallery</span>
                            </h1>
                            <p className="lead opacity-90 mb-0" style={{ maxWidth: '600px' }}>
                                A visual journey through life at UCU Chennai. Experience our vibrant
                                campus, innovative student projects, and global industry collaborations.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Standardized Breadcrumb */}
                <div className='position-absolute bottom-0 start-0 d-flex align-items-center campus-route-bg' style={{ zIndex: 10 }}>
                    <Home size={16} className="me-2" />
                    <p className='m-0'>UCU</p>
                    <ChevronRight size={16} className="mx-2 opacity-50" />
                    <p className='m-0 fw-bold'>Gallery</p>
                </div>
            </div>

            <MediaGalleryAbout />
            <NewFooter />
        </div>
    )
}

export default MediagalleryBanner