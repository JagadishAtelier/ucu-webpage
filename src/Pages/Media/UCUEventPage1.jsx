import { Calendar1Icon, ArrowRight, Loader } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { Button, Container, Row, Col, Pagination } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { getMediaByGridHead } from '../../Api/MediaApi'

const fallbackData = [
    {
        image: "https://www.spjain.org/hubfs/Dr-Abhijit-Dasgupta-article-in-The-Hindu-SP-Jain-Global-Faculty-INSIDE-IMAGE-1.jpg",
        date: "August 23, 2025",
        head: "The Hindu features Dr Abhijit Dasgupta on early business & tech lessons for career success",
        content: "In the article published in The Hindu, Dr Abhijit Dasgupta (Assistant Professor and Director - Bachelor of Data Science), UCU, writes about the transformative impact of introducing business and technology to young minds at an early age.",
        topic: "Faculty in the News, UCU in the News",
        slug: "the-hindu-features-dr-abhijit-dasgupta",
        link: "/media/ucu-media/the-hindu-features-dr-abhijit-dasgupta"
    },
    {
        image: "https://www.spjain.org/hubfs/Dr-Abhijit-Dasgupta-article-in-The-Hindu-SP-Jain-Global-Faculty-INSIDE-IMAGE-1.jpg",
        date: "August 23, 2025",
        head: "UCU Recognized for Innovation in Higher Education",
        content: "International education bodies award UCU for its commitment to industry-first pedagogical approaches.",
        topic: "UCU in the News",
        slug: "ucu-recognized-for-innovation",
        link: "/"
    },
    {
        image: "https://www.spjain.org/hubfs/Dr-Abhijit-Dasgupta-article-in-The-Hindu-SP-Jain-Global-Faculty-INSIDE-IMAGE-1.jpg",
        date: "August 23, 2025",
        head: "UCU Faculty on Building Future Skills",
        content: "A spotlight on Dr Abhijit Dasgupta’s contribution in bridging business education and data science.",
        topic: "Faculty in the News",
        slug: "ucu-faculty-on-building-future-skills",
        link: "/"
    },
    {
        image: "https://www.spjain.org/hubfs/Dr-Abhijit-Dasgupta-article-in-The-Hindu-SP-Jain-Global-Faculty-INSIDE-IMAGE-1.jpg",
        date: "August 23, 2025",
        head: "UCU Global Recognition Continues",
        content: "Dr Dasgupta shares how early exposure to entrepreneurship and tech leads to creative problem-solving.",
        topic: "UCU Updates",
        slug: "ucu-global-recognition-continues",
        link: "/"
    },
    {
        image: "https://www.spjain.org/hubfs/Dr-Abhijit-Dasgupta-article-in-The-Hindu-SP-Jain-Global-Faculty-INSIDE-IMAGE-1.jpg",
        date: "August 23, 2025",
        head: "Empowering Students with Data Skills",
        content: "UCU continues to emphasize early adoption of data-driven decision-making education.",
        topic: "Faculty Research",
        slug: "empowering-students-with-data-skills",
        link: "/"
    },
    {
        image: "https://www.spjain.org/hubfs/Dr-Abhijit-Dasgupta-article-in-The-Hindu-SP-Jain-Global-Faculty-INSIDE-IMAGE-1.jpg",
        date: "August 23, 2025",
        head: "New Industry Partnerships Announced",
        content: "UCU signs MoUs with top global tech firms to enhance student placement opportunities.",
        topic: "UCU Updates",
        slug: "new-industry-partnerships-announced",
        link: "/"
    },
    {
        image: "https://www.spjain.org/hubfs/Dr-Abhijit-Dasgupta-article-in-The-Hindu-SP-Jain-Global-Faculty-INSIDE-IMAGE-1.jpg",
        date: "August 23, 2025",
        head: "Sustainability at the Heart of UCU Curriculum",
        content: "How UCU is shaping the next generation of eco-conscious business leaders.",
        topic: "UCU in the News",
        slug: "sustainability-at-the-heart-of-ucu-curriculum",
        link: "/"
    }
];

function UCUEventPage1() {
    const navigate = useNavigate();
    const [newsList, setNewsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;

    useEffect(() => {
        getMediaByGridHead("News").then(res => {
            if (res?.success && res.data?.data) {
                setNewsList(res.data.data);
            } else {
                setNewsList(fallbackData);
            }
            setLoading(false);
        }).catch(err => {
            console.error("Error loading news list:", err);
            setNewsList(fallbackData);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return (
            <div className="my-5 py-5 text-center">
                <Loader className="animate-spin text-success mx-auto" size={32} />
                <p className="mt-2 text-muted">Loading News articles...</p>
            </div>
        );
    }

    const totalPage = Math.ceil(newsList.length / itemsPerPage);
    const currentData = newsList.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handleCardClick = (item) => {
        if (item.newsLink && (item.newsLink.startsWith("http://") || item.newsLink.startsWith("https://"))) {
            window.open(item.newsLink, "_blank", "noopener,noreferrer");
        } else {
            const pathSlug = item.slug || item.head?.toLowerCase().replace(/[^a-z0-9]/g, "-");
            navigate(`/media/ucu-media/${pathSlug}`);
        }
    };

    return (
        <Container className="my-5">
            <Row className="g-5">
                {currentData.map((item, index) => {
                    const isFirst = index === 0 && currentPage === 1;
                    const displayTitle = item.title || item.head;
                    const displayTopic = item.topic || "";
                    return (
                        <Col
                            key={index}
                            xs={12}
                            lg={isFirst ? 12 : 6}
                        >
                            <div
                                className={`ucu-media-page-card overflow-hidden d-flex flex-column flex-md-row ${isFirst ? 'large-card' : ''}`}
                                onClick={() => handleCardClick(item)}
                            >
                                {/* Image Container */}
                                <div className="position-relative overflow-hidden" style={{ flex: isFirst ? '0 0 50%' : '0 0 40%' }}>
                                    <img
                                        src={item.image}
                                        alt={displayTitle}
                                        className="ucu-event-page-image w-100 h-100 object-fit-cover"
                                        style={{ minHeight: isFirst ? '350px' : '200px' }}
                                    />
                                </div>

                                {/* Content Container */}
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
                                            {displayTopic.split(',').map((tag, i) => (
                                                <span key={i} className="category-link">{tag.trim()}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-auto d-flex align-items-center text-success fw-bold" style={{ cursor: 'pointer' }}>
                                        READ MORE <ArrowRight size={18} className="ms-2" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    )
                })}
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
    )
}

export default UCUEventPage1
