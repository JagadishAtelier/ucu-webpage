import React from 'react'
import { ChevronRight, Home } from 'lucide-react'
import Navbar from '../../Components/Navbar/Navbar'
import NewFooter from '../../Components/NewFooter/NewFooter'
import MediablogData from './MediablogData'
import './MediablogBanner.css'

function MediablogBanner() {
    return (
        <div>
            <Navbar />
            <div
                data-aos="fade-down"
                className="fac-hero-section text-white px-3 px-lg-5"
                style={{
                    backgroundImage: `linear-gradient(rgba(8, 22, 114, 0.7), rgba(8, 22, 114, 0.7)), url(https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "60vh",
                }}
            >
                <div className="container position-relative py-5">
                    <div className="row">
                        <div className="col-lg-8" data-aos="fade-right">
                            <h1 className="display-3 fw-bold mb-4">
                                UCU Chennai <span style={{ color: "#5ac501" }}>Blog</span>
                            </h1>
                            <p className="lead opacity-90 mb-0" style={{ maxWidth: '600px' }}>
                                A vibrant space for ideas, inspiration, and student stories. Join our 
                                community of global thinkers as we explore the future of business and leadership.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Standardized Breadcrumb */}
                <div className='position-absolute bottom-0 start-0 d-flex align-items-center campus-route-bg'>
                    <Home size={16} className="me-2" />
                    <p className='m-0'>UCU</p>
                    <ChevronRight size={16} className="mx-2 opacity-50" />
                    <p className='m-0 fw-bold'>Blog</p>
                </div>
            </div>

            <MediablogData />
            <NewFooter />
        </div>
    )
}

export default MediablogBanner