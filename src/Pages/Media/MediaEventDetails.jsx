import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import NewFooter from '../../Components/NewFooter/NewFooter'
import { Calendar1Icon, ChevronRight, Mail, Loader } from 'lucide-react'
import { BsFacebook, BsLinkedin, BsTwitterX } from 'react-icons/bs'
import { useParams, useNavigate } from 'react-router-dom'
import { getMediaByGridHead } from '../../Api/MediaApi'

function MediaEventDetails() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getMediaByGridHead("News").then(res => {
            if (res?.success && res.data?.data) {
                // Find item matching slug
                const matched = res.data.data.find(n => 
                    n.slug === slug || 
                    n.title?.toLowerCase().replace(/[^a-z0-9]/g, "-") === slug ||
                    n.head?.toLowerCase().replace(/[^a-z0-9]/g, "-") === slug
                );
                setItem(matched || null);
            }
            setLoading(false);
        }).catch(err => {
            console.error("Error loading news detail:", err);
            setLoading(false);
        });
    }, [slug]);

    if (loading) {
        return (
            <div>
                <Navbar />
                <div className="flex h-96 items-center justify-center">
                    <Loader className="animate-spin text-success" size={32} />
                </div>
                <NewFooter />
            </div>
        );
    }

    if (!item) {
        return (
            <div>
                <Navbar />
                <div className="container text-center my-5 py-5">
                    <h2 className="text-danger">Article Not Found</h2>
                    <p className="text-muted">The requested news article could not be loaded.</p>
                    <button className="btn btn-success mt-3" onClick={() => navigate("/media/ucu-media")}>
                        Back to News
                    </button>
                </div>
                <NewFooter />
            </div>
        );
    }

    const displayTitle = item.title || item.head;
    const displayImg = item.image || "https://execed.isb.edu/content/dam/sites/cee/images/Group%201182.png";
    const bodyContent = item.detailsHtml || `<p>${item.content}</p>`;

    return (
        <div>
            <Navbar />
            <div
                data-aos="fade-down"
                className="fac-hero-section d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start text-white text-center text-md-start text-lg-center p-3 p-lg-5"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${displayImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    minHeight: "40vh",
                }}
            >
                <div
                    className="w-100 w-lg-75 w-lg-50 ms-lg-5"
                    data-aos="fade-right"
                >
                    <h1 className="fw-bold fs-1 fs-lg-1 col-10 mx-auto leading-tight">{displayTitle}</h1>
                </div>

                <div className='position-absolute bottom-0 left-0 d-flex align-items-center justify-content-between campus-route-bg med-route-bg py-2'>
                    <div className='d-flex align-items-center gap-2 '>
                        <Calendar1Icon size={16} />
                        <p className='m-0'>{item.date}</p>
                    </div>
                    <div className='d-flex gap-3 align-items-center'>
                        <BsTwitterX style={{ cursor: "pointer" }} />
                        <BsLinkedin style={{ cursor: "pointer" }} />
                        <BsFacebook style={{ cursor: "pointer" }} />
                        <Mail style={{ cursor: "pointer" }} />
                    </div>
                </div>
            </div>

            <div className='captital-campus-content-sec my-5 text-justifys'>
                <div dangerouslySetInnerHTML={{ __html: bodyContent }} />
            </div>

            <NewFooter />
        </div>
    )
}

export default MediaEventDetails;