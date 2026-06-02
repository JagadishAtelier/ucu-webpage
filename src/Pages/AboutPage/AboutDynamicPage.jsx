import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import NewFooter from "../../Components/NewFooter/NewFooter";
import "./AboutStory/AboutStory.css";
import "./AboutDynamicPage.css";


const AboutDynamicPage = () => {
    const { slug } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const renderHtml = (html) => ({ __html: html || "" });

    const renderSection = (section, index) => {
        const isContentBlock = (section.type || "content") === "content" && !section.image;

        if (isContentBlock) {
            return (
                <section
                    key={index}
                    data-aos="fade-up"
                    className="about-story-section dynamic-about-content-block py-5 px-3 px-md-4 px-lg-0 text-center"
                >
                    <div className="dynamic-about-content-inner">
                        {section.heading && (
                            <h2
                                className="story-heading fw-bold mb-3 mb-md-4"
                                dangerouslySetInnerHTML={renderHtml(section.heading)}
                            />
                        )}
                        {section.content && (
                            <div
                                className="story-paragraph dynamic-about-story-content text-center mx-auto px-lg-5"
                                dangerouslySetInnerHTML={renderHtml(section.content)}
                            />
                        )}
                    </div>
                </section>
            );
        }

        return (
            <div key={index} className="container py-4">
                <div className={`row mb-5 align-items-center ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
                    {section.image ? (
                        <>
                            <div className="col-md-6 mb-4 mb-md-0">
                                <img
                                    src={section.image}
                                    alt={section.heading}
                                    className="img-fluid rounded shadow"
                                />
                            </div>
                            <div className="col-md-6">
                                {section.heading && <h3 className="fw-bold mb-3" dangerouslySetInnerHTML={renderHtml(section.heading)} />}
                                <div dangerouslySetInnerHTML={renderHtml(section.content)} />
                            </div>
                        </>
                    ) : (
                        <div className="col-12">
                            {section.heading && <h3 className="fw-bold mb-3" dangerouslySetInnerHTML={renderHtml(section.heading)} />}
                            <div dangerouslySetInnerHTML={renderHtml(section.content)} />
                        </div>
                    )}
                </div>
            </div>
        );
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const baseUrl = import.meta.env.VITE_API_BASE_URL;
                const response = await axios.get(`${baseUrl}/about/page/${slug}`);
                if (response.data.success) {
                    setData(response.data.data);
                } else {
                    setError("Page not found");
                }
            } catch (err) {
                console.error(err);
                setError("Failed to load page content.");
            } finally {
                setLoading(false);
            }
        };

        if (slug) fetchData();
    }, [slug]);

    if (loading) {
        return (
            <>
                <Navbar />
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "60vh" }}>
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                <NewFooter />
            </>
        );
    }

    if (error || !data) {
        return (
            <>
                <Navbar />
                <div className="container py-5 text-center" style={{ minHeight: "60vh" }}>
                    <h2>Page Not Found</h2>
                    <p className="text-muted">{error || "The page you are looking for does not exist."}</p>
                </div>
                <NewFooter />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div>
                {/* Banner Section */}
                {data.bannerImage && (
                    <div className="position-relative w-100" style={{ height: "400px" }}>
                        <img
                            src={data.bannerImage}
                            alt={data.title}
                            className="w-100 h-100 object-fit-cover"
                            style={{ objectPosition: "center" }}
                        />
                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
                        <div className="position-absolute top-50 start-50 translate-middle text-center text-white w-75">
                            <h1 className="display-4 fw-bold" dangerouslySetInnerHTML={renderHtml(data.title)} />
                        </div>
                    </div>
                )}

                {/* Content Container */}
                <div className="container py-5">
                    {/* Main Description */}
                    {data.description && (
                        <div className="row mb-5">
                            <div className="col-lg-10 mx-auto text-center">
                                <div className="lead" dangerouslySetInnerHTML={renderHtml(data.description)} />
                            </div>
                        </div>
                    )}
                </div>

                {/* Dynamic Sections */}
                {data.sections && data.sections.map(renderSection)}
            </div>
            <NewFooter />
        </>
    );
};

export default AboutDynamicPage;
