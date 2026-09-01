import React, { useEffect, useState } from 'react'
import { ChevronRight, Home } from 'lucide-react'
import Navbar from '../../Components/Navbar/Navbar'
import NewFooter from '../../Components/NewFooter/NewFooter'
import UCUEventPage1 from './UCUEventPage1'
import './MediaPage.css'
import { getBannerByBreadcrumb } from '../../Api/MediaApi'

function UCUMedia() {
    const [banner, setBanner] = useState(null);

    useEffect(() => {
        getBannerByBreadcrumb("News").then(res => {
            if (res?.success) {
                setBanner(res.data);
            }
        });
    }, []);

    const bannerTitle = banner?.bannerTitle || "UCU Chennai in the Media";
    const bannerContent = banner?.bannerContent || "Stay updated with the latest news, press releases, and media mentions highlighting UCU's impact on the global educational landscape.";
    const bannerImg = banner?.bannerImage?.[0] || "https://img.freepik.com/premium-photo/communication-feedback-chos-role_1077802-145596.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80";

    return (
        <div>
            <Navbar/>
            <div
                data-aos="fade-down"
                className="fac-hero-section text-white px-3 px-lg-5"
                style={{
                    backgroundImage: `linear-gradient(rgba(8, 22, 114, 0.7), rgba(8, 22, 114, 0.7)), url(${bannerImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "60vh",
                }}
            >
                <div className="container position-relative py-5">
                    <div className="row">
                        <div className="col-lg-8" data-aos="fade-right">
                            <h1 className="display-3 fw-bold mb-4">
                                {bannerTitle.includes("UCU Chennai") ? (
                                    <>
                                        <span style={{ color: "#5ac501" }}>UCU Chennai</span>{bannerTitle.replace("UCU Chennai", "")}
                                    </>
                                ) : bannerTitle}
                            </h1>
                            <p className="lead opacity-90 mb-0" style={{ maxWidth: '600px' }}>
                                {bannerContent}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Standardized Breadcrumb */}
                <div className='position-absolute bottom-0 start-0 d-flex align-items-center campus-route-bg'>
                    <Home size={16} className="me-2" />
                    <p className='m-0'>UCU</p>
                    <ChevronRight size={16} className="mx-2 opacity-50" />
                    <p className='m-0 fw-bold'>News</p>
                </div>
            </div>
            
            <UCUEventPage1/>
            <NewFooter/>
        </div>
    )
}

export default UCUMedia