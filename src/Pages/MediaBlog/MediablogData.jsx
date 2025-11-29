import { Calendar1Icon } from 'lucide-react'
import React, { useState } from 'react'
import { Button, Container, Row, Col, Pagination, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const data = [
    {
        image: "https://www.spjain.org/hubfs/Dr-Abhijit-Dasgupta-article-in-The-Hindu-SP-Jain-Global-Faculty-INSIDE-IMAGE-1.jpg",
        date: "August 23, 2025",
        head: "The Hindu features Dr Abhijit Dasgupta on early business & tech lessons for career success",
        content: "In the article published in The Hindu, Dr Abhijit Dasgupta writes about the transformative impact of introducing business and technology to young minds.",
        topic: "Bachelor of Business Administration",
        link: "/"
    },
    {
        image: "https://www.spjain.org/hubfs/Dr-Abhijit-Dasgupta-article-in-The-Hindu-SP-Jain-Global-Faculty-INSIDE-IMAGE-1.jpg",
        date: "July 10, 2025",
        head: "UCU Faculty on Building Future Skills",
        content: "A spotlight on Dr Abhijit Dasgupta’s contribution in bridging business education and data science.",
        topic: "Bachelor of Data Science",
        link: "/"
    },
    {
        image: "https://www.spjain.org/hubfs/Dr-Abhijit-Dasgupta-article-in-The-Hindu-SP-Jain-Global-Faculty-INSIDE-IMAGE-1.jpg",
        date: "June 15, 2025",
        head: "UCU’s Global Recognition Continues",
        content: "Dr Dasgupta shares how early exposure to entrepreneurship and tech leads to creative problem-solving.",
        topic: "Master of Global Business",
        link: "/"
    },
    {
        image: "https://www.spjain.org/hubfs/Dr-Abhijit-Dasgupta-article-in-The-Hindu-SP-Jain-Global-Faculty-INSIDE-IMAGE-1.jpg",
        date: "April 05, 2025",
        head: "Empowering Students with Data Skills",
        content: "UCU continues to emphasize early adoption of data-driven decision-making education.",
        topic: "Master of AI in Business",
        link: "/"
    },
    {
        image: "https://www.spjain.org/hubfs/Dr-Abhijit-Dasgupta-article-in-The-Hindu-SP-Jain-Global-Faculty-INSIDE-IMAGE-1.jpg",
        date: "March 20, 2025",
        head: "UCU Updates - Data Science Growth",
        content: "Students showcase innovative uses of data in new research projects.",
        topic: "Global MBA",
        link: "/"
    },
    {
        image: "https://www.spjain.org/hubfs/Dr-Abhijit-Dasgupta-article-in-The-Hindu-SP-Jain-Global-Faculty-INSIDE-IMAGE-1.jpg",
        date: "March 20, 2025",
        head: "UCU Updates - Data Science Growth",
        content: "Students showcase innovative uses of data in new research projects.",
        topic: "Executive MBA",
        link: "/"
    },
    {
        image: "https://www.spjain.org/hubfs/Dr-Abhijit-Dasgupta-article-in-The-Hindu-SP-Jain-Global-Faculty-INSIDE-IMAGE-1.jpg",
        date: "March 20, 2025",
        head: "UCU Updates - Data Science Growth",
        content: "Students showcase innovative uses of data in new research projects.",
        topic: "MBA",
        link: "/"
    },
    {
        image: "https://www.spjain.org/hubfs/Dr-Abhijit-Dasgupta-article-in-The-Hindu-SP-Jain-Global-Faculty-INSIDE-IMAGE-1.jpg",
        date: "March 20, 2025",
        head: "UCU Updates - Data Science Growth",
        content: "Students showcase innovative uses of data in new research projects.",
        topic: "Doctor of Business Administration",
        link: "/"
    },
    {
        image: "https://www.spjain.org/hubfs/Dr-Abhijit-Dasgupta-article-in-The-Hindu-SP-Jain-Global-Faculty-INSIDE-IMAGE-1.jpg",
        date: "March 20, 2025",
        head: "UCU Updates - Data Science Growth",
        content: "Students showcase innovative uses of data in new research projects.",
        topic: "Master of Applied Finance and Wealth Management",
        link: "/"
    },
    {
        image: "https://www.spjain.org/hubfs/Dr-Abhijit-Dasgupta-article-in-The-Hindu-SP-Jain-Global-Faculty-INSIDE-IMAGE-1.jpg",
        date: "March 20, 2025",
        head: "UCU Updates - Data Science Growth",
        content: "Students showcase innovative uses of data in new research projects.",
        topic: "Faculty Insights",
        link: "/"
    },
]

function MediablogData() {
    const navigate = useNavigate()

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 7

    const [selectedTopic, setSelectedTopic] = useState("")
    const [selectedMonth, setSelectedMonth] = useState("")

    const uniqueTopics = [...new Set(data.map(item => item.topic))]
    const uniqueMonths = [...new Set(data.map(item => item.date.split(" ")[0]))]

    const filteredData = data.filter(item => {
        const month = item.date.split(" ")[0]
        const matchTopic = selectedTopic ? item.topic === selectedTopic : true
        const matchMonth = selectedMonth ? month === selectedMonth : true
        return matchTopic && matchMonth
    })

    const totalPage = Math.ceil(filteredData.length / itemsPerPage)
    const currentData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber)
    return (
        <div className='captital-campus-content-sec my-4'>
            <p>Welcome to UCU Blogs – where the heart of our community comes alive through inspiring stories, industry insights, and first-hand experiences. From expert perspectives to real-life journeys, this is your space to explore, connect, and feel at home in a world of ideas and inspiration.</p>
            <div
                data-aos="fade-down"
                className="rounded d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start  text-center text-md-start text-lg-center p-3 px-lg-3 w-50"
                style={{
                    backgroundColor:"#081672ff",
                    marginLeft:'auto',
                    marginRight:'auto',
                }}
            >
                <div className="w-100 w-lg-100 w-md-100" data-aos="fade-right">
                    <Form className='col-lg-12'>
                        <div className='d-flex flex-row gap-5 align-items-center'>
                            <Form.Label className='text-start fs-5 text-white  '>Categories</Form.Label>
                            <Form.Select
                                value={selectedTopic}
                                onChange={(e) => { setSelectedTopic(e.target.value); setCurrentPage(1) }}
                            >
                                <option value="" disabled>Please Select Category</option>
                                <option value="" >All Blogs</option>
                                {uniqueTopics.map((topic, idx) => (
                                    <option key={idx} value={topic}>{topic}</option>
                                ))}
                            </Form.Select>
                        </div>
                    </Form>
                </div>
            </div>

            <Container className="my-4 p-0">
                <Row className="g-4">
                    {currentData.length > 0 ? (
                        currentData.map((item, index) => (
                            <Col key={index} xs={12} md={12} lg={index === 0 ? 12 : 6} className="mx-auto">
                                <div
                                    className={`card d-flex overflow-hidden ucu-media-page-card  ${index === 0 ? 'flex-row p-3 large-card' : 'flex-row small-card p-3'}`}
                                    style={{ height: index === 0 ? '320px' : '40vh' }}
                                >
                                    <div style={{ flex: index === 0 ? '0 0 45%' : '0 0 35%', overflow: 'hidden' }}>
                                        <img
                                            src={item.image}
                                            alt={item.head}
                                            className="img-fluid w-100 object-fit-cover ucu-event-page-image"
                                            style={{ height: '100%' }}
                                        />
                                    </div>

                                    <div className={`p-lg-3 p-md-3 py-3 d-flex flex-column justify-content-between ${index === 0 ? '' : 'p-lg-3 p-md-3 py-3'}`}>
                                        <div>
                                            <div className="d-flex align-items-center mb-2 ">
                                                <Calendar1Icon size={index === 0 ? 18 : 14} className="me-2" />
                                                <small>{item.date}</small>
                                            </div>
                                            <h5
                                                style={{ cursor: "pointer" }}
                                                onClick={() => navigate(item.head)}
                                                className={`card-title fw-semibold  ${index === 0 ? 'fs-5' : 'fs-6'}`}
                                            >
                                                {item.head}
                                            </h5>
                                            <p
                                                className={`${index === 0 ? 'fs-6' : 'fs-7 '}`}
                                                style={{ lineHeight: index === 0 ? '1.4' : '1.2' }}
                                            >
                                                {item.content}
                                            </p>
                                            <a
                                                href={item.link}
                                                className="d-block mb-2 "
                                                style={{ fontSize: index === 0 ? '0.9rem' : '0.8rem' }}
                                            >
                                                {item.topic}
                                            </a>
                                        </div>
                                        <Button
                                            size={index === 0 ? 'md' : 'sm'}
                                            className="align-self-start border-0 mt-3"
                                            style={{ backgroundColor: "#5ac501" }}
                                            onClick={() => navigate(item.head)}
                                        >
                                            Read More
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                        ))
                    ) : (
                        <p className="text-center ">No results found.</p>
                    )}
                </Row>

                <div className="d-flex justify-content-end mt-4">
                    <Pagination className='gap-3'>
                        <Button
                            style={{ backgroundColor: "#5ac501" }}
                            className='w-100 border-0'
                            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </Button>
                        <Button
                            style={{ backgroundColor: "#5ac501" }}
                            className='w-100 border-0'
                            onClick={() => currentPage < totalPage && setCurrentPage(currentPage + 1)}
                            disabled={currentPage === totalPage}
                        >
                            Next
                        </Button>
                    </Pagination>
                </div>
            </Container>
        </div>
    )
}

export default MediablogData