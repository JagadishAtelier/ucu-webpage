import { Calendar1Icon, ArrowRight, Filter } from 'lucide-react'
import React, { useState } from 'react'
import { Button, Container, Row, Col, Pagination, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const data = [
    {
        image: "https://www.spjain.org/hubfs/Dr-Abhijit-Dasgupta-article-in-The-Hindu-SP-Jain-Global-Faculty-INSIDE-IMAGE-1.jpg",
        date: "August 23, 2025",
        head: "International AI Summit at UCU Chennai",
        content: "Join world-class experts for a two-day summit exploring the future of Generative AI and its impact on global business operations.",
        topic: "International Summit",
        link: "/"
    },
    {
        image: "https://www.spjain.org/hubfs/Dr-Abhijit-Dasgupta-article-in-The-Hindu-SP-Jain-Global-Faculty-INSIDE-IMAGE-1.jpg",
        date: "July 10, 2025",
        head: "Leadership Workshop for Executive MBA",
        content: "A deep-dive workshop into strategic leadership and change management for emerging corporate leaders.",
        topic: "Workshops",
        link: "/"
    },
    {
        image: "https://www.spjain.org/hubfs/Dr-Abhijit-Dasgupta-article-in-The-Hindu-SP-Jain-Global-Faculty-INSIDE-IMAGE-1.jpg",
        date: "June 15, 2025",
        head: "Annual Placement Drive 2025",
        content: "Top Fortune 500 companies visit UCU for the annual recruitment cycle for graduating batches.",
        topic: "Placement Events",
        link: "/"
    },
    {
        image: "https://www.spjain.org/hubfs/Dr-Abhijit-Dasgupta-article-in-The-Hindu-SP-Jain-Global-Faculty-INSIDE-IMAGE-1.jpg",
        date: "April 05, 2025",
        head: "Innovation Challenge - Demo Day",
        content: "Students pitch their startup ideas to a panel of venture capitalists and industry stalwarts.",
        topic: "Competitions",
        link: "/"
    },
    {
        image: "https://www.spjain.org/hubfs/Dr-Abhijit-Dasgupta-article-in-The-Hindu-SP-Jain-Global-Faculty-INSIDE-IMAGE-1.jpg",
        date: "March 20, 2025",
        head: "Industry Connect Series: Fintech",
        content: "Exploring the disruption in digital payments and financial services with industry leaders from leading banks.",
        topic: "Industry Connect",
        link: "/"
    }
]

function UCUMepData() {
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

    return (
        <div className='my-5'>
            {/* Filter Section */}
            <div className="container mb-5">
                <div 
                    className="p-4 rounded-4 shadow-sm d-flex flex-column flex-md-row align-items-end gap-3"
                    style={{ backgroundColor: "#081672", color: "white" }}
                >
                    <div className="flex-grow-1 w-100">
                        <label className="mb-2 small fw-bold text-uppercase opacity-75">Topic</label>
                        <Form.Select 
                            className="bg-white border-0 py-2 rounded-3"
                            value={selectedTopic}
                            onChange={(e) => { setSelectedTopic(e.target.value); setCurrentPage(1) }}
                        >
                            <option value="">All Topics</option>
                            {uniqueTopics.map((topic, idx) => (
                                <option key={idx} value={topic}>{topic}</option>
                            ))}
                        </Form.Select>
                    </div>

                    <div className="flex-grow-1 w-100">
                        <label className="mb-2 small fw-bold text-uppercase opacity-75">Month</label>
                        <Form.Select 
                            className="bg-white border-0 py-2 rounded-3"
                            value={selectedMonth}
                            onChange={(e) => { setSelectedMonth(e.target.value); setCurrentPage(1) }}
                        >
                            <option value="">All Months</option>
                            {uniqueMonths.map((month, idx) => (
                                <option key={idx} value={month}>{month}</option>
                            ))}
                        </Form.Select>
                    </div>

                    <Button 
                        className="btn-success px-4 py-2 border-0 rounded-3 d-flex align-items-center justify-content-center"
                        style={{ height: "42px" }}
                        onClick={() => { setSelectedTopic(""); setSelectedMonth(""); setCurrentPage(1) }}
                    >
                        Reset
                    </Button>
                </div>
            </div>

            <Container className="p-0">
                <Row className="g-5">
                    {currentData.length > 0 ? (
                        currentData.map((item, index) => {
                            const isFirst = index === 0 && currentPage === 1;
                            return (
                                <Col key={index} xs={12} lg={isFirst ? 12 : 6}>
                                    <div
                                        className={`ucu-media-page-card overflow-hidden d-flex flex-column flex-md-row ${isFirst ? 'large-card' : ''}`}
                                        onClick={() => navigate(item.link || '#')}
                                    >
                                        <div className="position-relative overflow-hidden" style={{ flex: isFirst ? '0 0 50%' : '0 0 40%' }}>
                                            <img
                                                src={item.image}
                                                alt={item.head}
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
                                                    {item.head}
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
                                                    <span className="category-link">{item.topic}</span>
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
                                <h5>No events found matching your selection.</h5>
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

export default UCUMepData
