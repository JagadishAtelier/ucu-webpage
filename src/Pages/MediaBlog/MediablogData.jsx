import { Calendar1Icon, ArrowRight, Loader } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { Button, Container, Row, Col, Pagination, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { getMediaByGridHead } from '../../Api/MediaApi'

const fallbackData = [
    {
        image: "https://www.spjain.org/hubfs/Dr-Abhijit-Dasgupta-article-in-The-Hindu-SP-Jain-Global-Faculty-INSIDE-IMAGE-1.jpg",
        date: "August 23, 2025",
        title: "The Future of Digital Marketing in a Post-AI World",
        content: "Explore how artificial intelligence is reshaping consumer behavior and how marketers can leverage these tools to drive high-impact results in 2025.",
        topic: "Marketing",
        slug: "future-of-digital-marketing"
    },
    {
        image: "https://www.spjain.org/hubfs/Dr-Abhijit-Dasgupta-article-in-The-Hindu-SP-Jain-Global-Faculty-INSIDE-IMAGE-1.jpg",
        date: "July 10, 2025",
        title: "Ethics and Excellence: The Foundation of Modern Leadership",
        content: "Our faculty Discuss why ethical decision-making is no longer optional but a core requirement for commercial success in the global market.",
        topic: "Leadership",
        slug: "ethics-and-excellence-modern-leadership"
    },
    {
        image: "https://www.spjain.org/hubfs/Dr-Abhijit-Dasgupta-article-in-The-Hindu-SP-Jain-Global-Faculty-INSIDE-IMAGE-1.jpg",
        date: "June 15, 2025",
        title: "From Campus to Corporate: A Survival Guide",
        content: "UCU alumni share their top 5 tips for navigating the transition from student life to a high-stakes corporate environment.",
        topic: "Alumni Stories",
        slug: "from-campus-to-corporate-survival-guide"
    },
    {
        image: "https://www.spjain.org/hubfs/Dr-Abhijit-Dasgupta-article-in-The-Hindu-SP-Jain-Global-Faculty-INSIDE-IMAGE-1.jpg",
        date: "April 05, 2025",
        title: "Understanding the Data Science Boom",
        content: "Why data literacy is becoming the most sought-after skill across all industries, not just in technology departments.",
        topic: "Data Science",
        slug: "understanding-the-data-science-boom"
    }
];

function MediablogData() {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;
    const [selectedTopic, setSelectedTopic] = useState("");

    useEffect(() => {
        getMediaByGridHead("Blog").then(res => {
            if (res?.success && res.data?.data) {
                setBlogs(res.data.data);
            } else {
                setBlogs(fallbackData);
            }
            setLoading(false);
        }).catch(err => {
            console.error("Error loading blog posts:", err);
            setBlogs(fallbackData);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return (
            <div className="my-5 py-5 text-center">
                <Loader className="animate-spin text-success mx-auto" size={32} />
                <p className="mt-2 text-muted">Loading Blogs...</p>
            </div>
        );
    }

    const uniqueTopics = [...new Set(blogs.map(item => item.topic || item.category).filter(Boolean))];

    const filteredData = blogs.filter(item => {
        const topicName = item.topic || item.category;
        return selectedTopic ? topicName === selectedTopic : true;
    });

    const totalPage = Math.ceil(filteredData.length / itemsPerPage);
    const currentData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handleCardClick = (item) => {
        if (item.newsLink && (item.newsLink.startsWith("http://") || item.newsLink.startsWith("https://"))) {
            window.open(item.newsLink, "_blank", "noopener,noreferrer");
        } else {
            const pathSlug = item.slug || item.title?.toLowerCase().replace(/[^a-z0-9]/g, "-");
            navigate(`/media/blog/${pathSlug}`);
        }
    };

    return (
        <div className='my-5'>
            <Container className="mb-5 text-center">
                <p className="lead text-muted mx-auto" style={{ maxWidth: '800px' }}>
                    Welcome to UCU Blogs – where the heart of our community comes alive through inspiring stories, 
                    industry insights, and first-hand experiences.
                </p>
            </Container>

            {/* Category Filter */}
            <div className="container mb-5">
                <div 
                    className="p-4 rounded-4 shadow-sm d-flex flex-column flex-md-row align-items-center justify-content-center gap-4 px-lg-5 mx-auto"
                    style={{ backgroundColor: "#081672", color: "white", maxWidth: '900px' }}
                >
                    <h5 className="mb-0 fw-bold text-nowrap">CATEGORIES</h5>
                    <Form.Select 
                        className="bg-white border-0 py-2 rounded-3 w-100"
                        style={{ maxWidth: '400px' }}
                        value={selectedTopic}
                        onChange={(e) => { setSelectedTopic(e.target.value); setCurrentPage(1) }}
                    >
                        <option value="">All Blogs</option>
                        {uniqueTopics.map((topic, idx) => (
                            <option key={idx} value={topic}>{topic}</option>
                        ))}
                    </Form.Select>
                </div>
            </div>

            <Container className="p-0">
                <Row className="g-5">
                    {currentData.length > 0 ? (
                        currentData.map((item, index) => {
                            const isFirst = index === 0 && currentPage === 1;
                            const displayTitle = item.title || item.head;
                            const displayTopic = item.topic || item.category || "";
                            return (
                                <Col key={index} xs={12} lg={isFirst ? 12 : 6}>
                                    <div
                                        className={`ucu-media-page-card overflow-hidden d-flex flex-column flex-md-row ${isFirst ? 'large-card' : ''}`}
                                        onClick={() => handleCardClick(item)}
                                    >
                                        <div className="position-relative overflow-hidden" style={{ flex: isFirst ? '0 0 50%' : '0 0 40%' }}>
                                            <img
                                                src={item.image}
                                                alt={displayTitle}
                                                className="ucu-event-page-image w-100 h-100 object-fit-cover"
                                                style={{ minHeight: isFirst ? '350px' : '220px' }}
                                            />
                                        </div>

                                        <div className="p-4 d-flex flex-column justify-content-between w-100">
                                            <div>
                                                <div className="d-flex align-items-center mb-3 text-muted">
                                                    <Calendar1Icon size={16} className="me-2 text-success" />
                                                    <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>{item.date}</span>
                                                </div>
                                                
                                                <h3 className={`card-title fw-bold mb-3 ${isFirst ? 'fs-2' : 'fs-4'}`}>
                                                    {displayTitle}
                                                </h3>
                                                
                                                <p className="text-secondary mb-4" style={{ 
                                                    fontSize: isFirst ? '1.1rem' : '0.95rem',
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: isFirst ? '4' : '3',
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden'
                                                }}>
                                                    {item.content}
                                                </p>

                                                <div className="mb-3">
                                                    <span className="category-link">{displayTopic}</span>
                                                </div>
                                            </div>

                                            <div className="mt-auto d-flex align-items-center text-success fw-bold">
                                                READ MORE <ArrowRight size={18} className="ms-2" />
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    ) : (
                        <Col xs={12}>
                            <div className="text-center py-5 opacity-50">
                                <h5>No blog posts found in this category.</h5>
                            </div>
                        </Col>
                    )}
                </Row>

                {totalPage > 1 && (
                    <div className="d-flex justify-content-center mt-5 pagination-custom">
                        <Pagination className="gap-2">
                            <Button 
                                className="btn-success"
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                            >
                                PREVIOUS
                            </Button>
                            <Button 
                                className="btn-success"
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPage))}
                                disabled={currentPage === totalPage}
                            >
                                NEXT
                            </Button>
                        </Pagination>
                    </div>
                )}
            </Container>
        </div>
    )
}

export default MediablogData;