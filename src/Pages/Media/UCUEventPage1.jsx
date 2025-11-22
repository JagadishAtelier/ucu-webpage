import { Calendar1Icon } from 'lucide-react'
import React, { useState } from 'react'
import { Button, Container, Row, Col, Pagination } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const data = [
    {
        image: "https://www.spjain.org/hubfs/Dr-Abhijit-Dasgupta-article-in-The-Hindu-SP-Jain-Global-Faculty-INSIDE-IMAGE-1.jpg",
        date: "August 23, 2025",
        head: "The Hindu features Dr Abhijit Dasgupta on early business & tech lessons for career success",
        content: "In the article published in The Hindu, Dr Abhijit Dasgupta (Assistant Professor and Director - Bachelor of Data Science), UCU, writes about the transformative impact of introducing business and technology to young minds at an early age.",
        topic: "Faculty in the News, SP Jain in the News",
        link: "/The Hindu features Dr Abhijit Dasgupta on early business & tech lessons for career success"
    },
    {
        image: "https://www.spjain.org/hubfs/Dr-Abhijit-Dasgupta-article-in-The-Hindu-SP-Jain-Global-Faculty-INSIDE-IMAGE-1.jpg",
        date: "August 23, 2025",
        head: "The Hindu features Dr Abhijit Dasgupta on early business & tech lessons for career success",
        content: "In the article published in The Hindu, Dr Abhijit Dasgupta writes about the transformative impact of introducing business and technology to young minds.",
        topic: "SP Jain in the News",
        link: "/"
    },
    {
        image: "https://www.spjain.org/hubfs/Dr-Abhijit-Dasgupta-article-in-The-Hindu-SP-Jain-Global-Faculty-INSIDE-IMAGE-1.jpg",
        date: "August 23, 2025",
        head: "SP Jain's Faculty on Building Future Skills",
        content: "A spotlight on Dr Abhijit Dasgupta’s contribution in bridging business education and data science.",
        topic: "Faculty in the News",
        link: "/"
    },
    {
        image: "https://www.spjain.org/hubfs/Dr-Abhijit-Dasgupta-article-in-The-Hindu-SP-Jain-Global-Faculty-INSIDE-IMAGE-1.jpg",
        date: "August 23, 2025",
        head: "SP Jain’s Global Recognition Continues",
        content: "Dr Dasgupta shares how early exposure to entrepreneurship and tech leads to creative problem-solving.",
        topic: "SP Jain Updates",
        link: "/"
    },
    {
        image: "https://www.spjain.org/hubfs/Dr-Abhijit-Dasgupta-article-in-The-Hindu-SP-Jain-Global-Faculty-INSIDE-IMAGE-1.jpg",
        date: "August 23, 2025",
        head: "Empowering Students with Data Skills",
        content: "UCU continues to emphasize early adoption of data-driven decision-making education.",
        topic: "Faculty Research",
        link: "/"
    },
    {
        image: "https://www.spjain.org/hubfs/Dr-Abhijit-Dasgupta-article-in-The-Hindu-SP-Jain-Global-Faculty-INSIDE-IMAGE-1.jpg",
        date: "August 23, 2025",
        head: "Empowering Students with Data Skills",
        content: "UCU continues to emphasize early adoption of data-driven decision-making education.",
        topic: "Faculty Research",
        link: "/"
    },
    {
        image: "https://www.spjain.org/hubfs/Dr-Abhijit-Dasgupta-article-in-The-Hindu-SP-Jain-Global-Faculty-INSIDE-IMAGE-1.jpg",
        date: "August 23, 2025",
        head: "Empowering Students with Data Skills",
        content: "UCU continues to emphasize early adoption of data-driven decision-making education.",
        topic: "Faculty Research",
        link: "/"
    },
    {
        image: "https://www.spjain.org/hubfs/Dr-Abhijit-Dasgupta-article-in-The-Hindu-SP-Jain-Global-Faculty-INSIDE-IMAGE-1.jpg",
        date: "August 23, 2025",
        head: "Empowering Students with Data Skills",
        content: "UCU continues to emphasize early adoption of data-driven decision-making education.",
        topic: "Faculty Research",
        link: "/"
    },
    {
        image: "https://www.spjain.org/hubfs/Dr-Abhijit-Dasgupta-article-in-The-Hindu-SP-Jain-Global-Faculty-INSIDE-IMAGE-1.jpg",
        date: "August 23, 2025",
        head: "Empowering Students with Data Skills",
        content: "UCU continues to emphasize early adoption of data-driven decision-making education.",
        topic: "Faculty Research",
        link: "/"
    },
    {
        image: "https://www.spjain.org/hubfs/Dr-Abhijit-Dasgupta-article-in-The-Hindu-SP-Jain-Global-Faculty-INSIDE-IMAGE-1.jpg",
        date: "August 23, 2025",
        head: "Empowering Students with Data Skills",
        content: "UCU continues to emphasize early adoption of data-driven decision-making education.",
        topic: "Faculty Research",
        link: "/"
    },
    {
        image: "https://www.spjain.org/hubfs/Dr-Abhijit-Dasgupta-article-in-The-Hindu-SP-Jain-Global-Faculty-INSIDE-IMAGE-1.jpg",
        date: "August 23, 2025",
        head: "Empowering Students with Data Skills",
        content: "UCU continues to emphasize early adoption of data-driven decision-making education.",
        topic: "Faculty Research",
        link: "/"
    },
    {
        image: "https://www.spjain.org/hubfs/Dr-Abhijit-Dasgupta-article-in-The-Hindu-SP-Jain-Global-Faculty-INSIDE-IMAGE-1.jpg",
        date: "August 23, 2025",
        head: "Empowering Students with Data Skills",
        content: "UCU continues to emphasize early adoption of data-driven decision-making education.",
        topic: "Faculty Research",
        link: "/"
    },
]

function UCUEventPage1() {
    const navigate = useNavigate()
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 7
    const totalPage = Math.ceil(data.length / itemsPerPage)

    // Get items for the current page
    const currentData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <Container className="my-4">
            <Row className="g-4">
                {currentData.map((item, index) => (
                    <Col
                        key={index}
                        xs={12}
                        md={12}
                        lg={index === 0 ? 12 : 6}
                        className="mx-auto"
                    >
                        <div
                            className={`card shadow-sm d-flex overflow-hidden ucu-media-page-card border-0 ${index === 0 ? 'flex-row p-3 large-card' : 'flex-row small-card p-3'
                                }`}
                            style={{
                                height: index === 0 ? '320px' : '40vh',
                            }}
                        >
                            {/* Image section */}
                            <div
                                style={{
                                    flex: index === 0 ? '0 0 45%' : '0 0 35%',
                                    overflow: 'hidden',
                                }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.head}
                                    className="img-fluid w-100 object-fit-cover"
                                    style={{
                                        height: index === 0 ? '100%' : '100%',
                                    }}
                                />
                            </div>

                            {/* Content section */}
                            <div
                                className={`card-body d-flex flex-column justify-content-between ${index === 0 ? '' : 'p-3'
                                    }`}
                            >
                                <div>
                                    <div className="d-flex align-items-center mb-2 text-white">
                                        <Calendar1Icon size={index === 0 ? 18 : 14} className="me-2" />
                                        <small>{item.date}</small>
                                    </div>
                                    <h5 style={{ cursor: "pointer" }} onClick={() => navigate(`${item.head}`)}
                                        className={`card-title fw-semibold text-white lh-sm ${index === 0 ? 'fs-5' : 'fsize-6'
                                            }`}
                                    >
                                        {item.head}
                                    </h5>
                                    <p
                                        className={` ${index === 0 ? 'fs-6' : 'fs-6 text-white'
                                            }`}
                                        style={{ lineHeight: index === 0 ? '1.4' : '1.6' }}
                                    >
                                        {item.content}
                                    </p>
                                    <a
                                        href={item.link}
                                        className="d-block mb-2 text-white"
                                        style={{ fontSize: index === 0 ? '0.9rem' : '0.8rem', }}
                                    >
                                        {item.topic}
                                    </a>
                                </div>
                                <Button
                                    size={index === 0 ? 'md' : 'sm'}
                                    className="align-self-start border-0"
                                    style={{ backgroundColor: "#5ac501" }}
                                    onClick={() => navigate(`${item.head}`)}
                                >
                                    Read More
                                </Button>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>

            <div className="d-flex justify-content-end mt-4">
                <Pagination className='gap-3'>
                    <Button style={{ backgroundColor: "#5ac501" }} className='w-100 border-0' onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                    >Preview</Button>
                    <Button style={{ backgroundColor: "#5ac501" }} className='w-100 border-0' onClick={() => currentPage < totalPage && setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPage}
                    >Next</Button>
                </Pagination>
            </div>
        </Container>
    )
}

export default UCUEventPage1
