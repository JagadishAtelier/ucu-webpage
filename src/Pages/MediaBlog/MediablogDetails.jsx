import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import NewFooter from '../../Components/NewFooter/NewFooter'
import { Calendar1Icon, ChevronRight, Mail, Loader } from 'lucide-react'
import { BsFacebook, BsLinkedin, BsShare, BsTwitter } from 'react-icons/bs'
import { useParams, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { getMediaByGridHead } from '../../Api/MediaApi'
import './MediablogBanner.css'

function MediablogDetails() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);
    const [otherBlogs, setOtherBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getMediaByGridHead("Blog").then(res => {
            if (res?.success && res.data?.data) {
                const matched = res.data.data.find(b => 
                    b.slug === slug || 
                    b.title?.toLowerCase().replace(/[^a-z0-9]/g, "-") === slug
                );
                setBlog(matched || null);

                // Populate other blogs for "You may also read" sidebar
                const filtered = res.data.data.filter(b => 
                    b.slug !== slug && 
                    b.title?.toLowerCase().replace(/[^a-z0-9]/g, "-") !== slug
                ).slice(0, 3);
                setOtherBlogs(filtered);
            }
            setLoading(false);
        }).catch(err => {
            console.error("Error loading blog details:", err);
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

    if (!blog) {
        return (
            <div>
                <Navbar />
                <div className="container text-center my-5 py-5">
                    <h2 className="text-danger">Blog Post Not Found</h2>
                    <p className="text-muted">The requested blog post could not be loaded.</p>
                    <button className="btn btn-success mt-3" onClick={() => navigate("/media/blog")}>
                        Back to Blog
                    </button>
                </div>
                <NewFooter />
            </div>
        );
    }

    const displayTitle = blog.title || blog.head;
    const displayImg = blog.image || "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg";
    const bodyContent = blog.detailsHtml || `<p>${blog.content}</p>`;

    return (
        <div>
            <Navbar />
            <div
                data-aos="fade-down"
                className="fac-hero-section d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start text-white text-center text-md-start text-lg-start p-3 p-lg-5 p-lg-7"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${displayImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    minHeight: "50vh",
                }}
            >
                <div className="w-100 w-lg-75 w-lg-50 ms-lg-5" data-aos="fade-right">
                    <h1 className="fw-bold fs-1 fs-lg-1">{displayTitle}</h1>
                </div>

                <div className="position-absolute bottom-0 left-0 d-flex align-items-center campus-route-bg py-3">
                    <p className="m-0">UCU</p>
                    <ChevronRight size={16} className="mx-2 opacity-50" />
                    <p className="m-0">Blog</p>
                    <ChevronRight size={16} className="mx-2 opacity-50" />
                    <p className="m-0 font-bold truncate max-w-[200px]">{displayTitle}</p>
                </div>
            </div>

            <div className='captital-campus-content-sec my-5'>
                <div className='d-flex flex-lg-row flex-column gap-5'>
                    {/* Main Content Column */}
                    <div className='col-lg-8'>
                        <div className="d-flex align-items-center justify-content-between mb-4 border-b pb-3">
                            <div className="d-flex align-items-center text-muted">
                                <Calendar1Icon size={18} className="me-2 text-success" />
                                <span className="fw-semibold">{blog.date}</span>
                                <span className="mx-3 opacity-30">|</span>
                                <span className="category-link m-0 font-semibold text-primary">{blog.topic || blog.category}</span>
                            </div>
                            <div className='d-flex gap-3 text-secondary'>
                                <BsFacebook size={20} style={{ cursor: 'pointer' }} />
                                <BsTwitter size={20} style={{ cursor: 'pointer' }} />
                                <BsLinkedin size={20} style={{ cursor: 'pointer' }} />
                                <BsShare size={20} style={{ cursor: 'pointer' }} />
                            </div>
                        </div>

                        <div className="blog-body-html" dangerouslySetInnerHTML={{ __html: bodyContent }} />
                    </div>

                    {/* Sidebar Column */}
                    <div className="col-lg-4">
                        <div className='vertical-line-blog-page d-none d-lg-block' style={{ left: '-20px' }}></div>
                        <h3 className='blog-page-right-head mb-4 font-bold text-xl'>You may also read:</h3>
                        <div className='d-flex flex-column gap-5'>
                            {otherBlogs.map((item, index) => {
                                const matchedSlug = item.slug || item.title?.toLowerCase().replace(/[^a-z0-9]/g, "-");
                                return (
                                    <div key={item._id || index} className='d-flex gap-3 flex-column border-b pb-4'>
                                        <img src={item.image} className='rounded aspect-[16/10] object-cover border bg-muted' alt="Blog cover" />
                                        <p className='mb-0 font-semibold text-base line-clamp-2'>{item.title}</p>
                                        <Button 
                                            style={{ backgroundColor: "#5ac501", border: "none" }} 
                                            className='col-6 py-2 fw-bold text-xs'
                                            onClick={() => navigate(`/media/blog/${matchedSlug}`)}
                                        >
                                            Read More
                                        </Button>
                                    </div>
                                );
                            })}
                            {otherBlogs.length === 0 && (
                                <p className="text-muted text-sm">No other blog posts available.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <NewFooter />
        </div>
    )
}

export default MediablogDetails;
